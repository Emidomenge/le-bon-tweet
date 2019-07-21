import mockedUsers from './users';

const mainMockedUser = mockedUsers[0]; // scarlett carr
const serverAnswer = {};

serverAnswer.authenticatedUserInfo = {
  storeId: 2033347,
  userId: mainMockedUser.id,
  accountType: 1,
  optin: false,
  personalData: {
    email: mainMockedUser.email,
    gender: 2,
    lastname: mainMockedUser.name.last,
    firstname: mainMockedUser.name.first,
    picture: mainMockedUser.picture,
    addresses: {
      billing: {
        label: 'billing',
        regionCode: 12,
        dptCode: 93,
        ...mainMockedUser.location,
      },
    },
    phones: {
      main: {
        label: 'main',
        number: mainMockedUser.phone,
      },
    },
    pseudo: mainMockedUser.username,
    birthDate: mainMockedUser.dob,
    occupationalCategory: 7,
    focus: null,
  },
  password: null,
};

export default serverAnswer;
