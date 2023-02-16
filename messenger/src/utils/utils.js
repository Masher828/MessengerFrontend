export const IsEmailValid = (email) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

export const ConversationTypeOne2One       = "individual"
export const ConversationTypeGroup         = "group"