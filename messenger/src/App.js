import "./App.css";
import {useState, useEffect} from "react"
import MessengerScreenContainer from "./containers/messenger/messenger_screen";
import mqtt from 'mqtt';

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ResetPassword from "./containers/auth/resetpassword";
import SignUpForm from "./containers/auth/signupform";
import SignInForm from "./containers/auth/signinform";
import { useDispatch, useSelector } from "react-redux";

import { GetConversations, GetMessagesInConversation } from "./redux/messenger/action_creator";

function App() {

    const [client, setClient] = useState(null);
    const [isSubed, setIsSub] = useState(false);
    const [payload, setPayload] = useState({});
    const [connectStatus, setConnectStatus] = useState('Connect');

    const dispatch = useDispatch();
    const messagesStore = useSelector(state => state.messenger)

    useEffect(()=>{
        console.log(payload)
        if (payload.actionId === "MessageUpdate") {
            dispatch(GetConversations())
            console.log(payload.conversationId === messagesStore.openedConversation?.id)
            if (payload.conversationId === messagesStore.openedConversation?.id) {
                dispatch(GetMessagesInConversation(messagesStore.openedConversation?.id))
            }
        }
    }, [payload])
    
    
    const mqttConnect = (host) => {
        const mqttOption = {
            keepalive: 30,
            protocolId: 'MQTT',
            protocolVersion: 4,
            clean: true,
            reconnectPeriod: 1000,
            connectTimeout: 30 * 1000,
            will: {
                topic: 'WillMsg',
                payload: 'Connection Closed abnormally..!',
                qos: 0,
                retain: false
            },
            rejectUnauthorized: false
        };
        mqttOption.clientId = `mqttjs_ + ${Math.random().toString(16).substr(2, 8)}`;
        mqttOption.username = "admin";
        mqttOption.password = "Manish828";
        setConnectStatus('Connecting');
        console.log(host)
        setClient(mqtt.connect(host, mqttOption));
    };

    useEffect(() => {
        if (client) {
            client.on('connect', () => {
                setConnectStatus('Connected');
                console.log("success")
            });
            client.on('error', (err) => {
                console.error('Connection error: ', err);
                client.end();
            });
            client.on('reconnect', () => {
                setConnectStatus('Reconnecting');
            });
            client.on('message', (topic, message) => {
                try {
                    setPayload(JSON.parse(message.toString()));
                } catch {
                    //pass
                }
                
            });
        }
    }, [client]);

    // const mqttDisconnect = () => {
    //     if (client) {
    //         client.end(() => {
    //             setConnectStatus('Connect');
    //         });
    //     }
    // }

    // const mqttPublish = (context) => {
    //     if (client) {
    //         const { topic, qos, payload } = context;
    //         client.publish(topic, payload, { qos }, error => {
    //             if (error) {
    //                 console.log('Publish error: ', error);
    //             }
    //         });
    //     }
    // }

    const mqttSub = (subscription) => {
        if (client) {
            const qos = 0;
            client.subscribe(subscription, { qos }, (error) => {
                if (error) {
                    console.log('Subscribe to topics error', error)
                    return
                }
                setIsSub(true)
            });
        }
    };

    // const mqttUnSub = (subscription) => {
    //     if (client) {
    //         const { topic } = subscription;
    //         client.unsubscribe(topic, error => {
    //             if (error) {
    //                 console.log('Unsubscribe error', error)
    //                 return
    //             }
    //             setIsSub(false);
    //         });
    //     }
    // };

    const router = createBrowserRouter([
        {
            path: "/messenger",
            element: <MessengerScreenContainer mqttConnect={mqttConnect} mqttStatus={connectStatus} mqttSubscribe={mqttSub}/>,
        },
        {
            path: "",
            element: <SignInForm />,
        },
        {
            path: "/signup",
            element: <SignUpForm />,
        },
        {
            path: "/resetPassword",
            element: <ResetPassword />,
        }
    ]);
    
    return (
       
            <RouterProvider router={router} />)
       
}

export default App;
