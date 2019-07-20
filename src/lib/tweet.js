import dateFns from 'date-fns';
import frLocale from 'date-fns/locale/fr';

const tweet = {};

tweet.displayTweetDate = date => dateFns.format(
  date,
  'MMMM YYYY',
  { locale: frLocale },
);

tweet.isPublic = restrictionArray => restrictionArray.length === 1 && restrictionArray[0] === '*';

export default tweet;
