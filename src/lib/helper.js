import dateFns from 'date-fns'
import frLocale from 'date-fns/locale/fr';

const helper = {};

helper.displayTweetDate = date => dateFns.format(
  date,
  'MMMM YYYY',
  { locale: frLocale },
);

export default helper;
