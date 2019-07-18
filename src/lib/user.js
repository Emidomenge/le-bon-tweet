const userLib = {};

userLib.getFullName = (user) => {
  const firstName = user.name.first.charAt(0).toUpperCase() + user.name.first.slice(1);
  const lastName = user.name.last.charAt(0).toUpperCase() + user.name.last.slice(1);
  return `${firstName} ${lastName}`;
};

userLib.getAge = (user) => {
  const ageDifMs = Date.now() - user.dob.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export default userLib;
