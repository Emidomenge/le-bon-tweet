const userLib = {};

userLib.firstCharUpperCase = string => string.charAt(0).toUpperCase() + string.slice(1);

userLib.getFullName = user => `${userLib.firstCharUpperCase(user.name.first)} ${userLib.firstCharUpperCase(user.name.last)}`;

userLib.getAge = (user) => {
  const ageDifMs = Date.now() - user.dob.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export default userLib;
