const initialUser = "user101";

const changeTheUser = (state = initialUser, action) => {
  switch (action.type) {
    case "CHANGEUSER":
      return action.payload;
    default:
      return state;
  }
};

export default changeTheUser;
