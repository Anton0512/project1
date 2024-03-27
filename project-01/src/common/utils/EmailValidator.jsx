export const EmailValidator = ({ email }) => {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isValid = regex.test(email);

  return isValid;
};
