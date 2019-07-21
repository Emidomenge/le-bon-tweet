import dateFns from 'date-fns';
import frLocale from 'date-fns/locale/fr';
import mockedUsers from './../mockData/users'
import userLib from "./user";

const tweet = {};
const mainUser = mockedUsers[0]

tweet.createFakeTweet = (text, restrictedTo) => ({
  id: '5d32d437feddb271d3ffe3e6', // static id
  createdAt: new Date(),
  text,
  createdByUser: {
    id: mainUser.id,
    fullName: userLib.getFullName(mainUser),
    picture: mainUser.picture,
  },
  restrictedTo,
});

tweet.displayTweetDate = date => dateFns.format(
  date,
  'MMMM YYYY',
  { locale: frLocale },
);

tweet.isPublic = restrictionArray => restrictionArray.length === 1 && restrictionArray[0] === '*';

export default tweet;
