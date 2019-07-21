/* eslint-disable no-param-reassign */
const helper = {};

helper.getRelativeUrl = () => {
  const url = window.location.href;
  return url.replace(/^(?:\/\/|[^\/]+)*\//, '');
};

helper.mockFetchCall = ({
  url = 'https://httpstat.us/', api: { codeAnswer, sleepTime } = { codeAnswer: 200, sleepTime: 500 }, header, requestParams,
}, mockedServerAnswer, onSuccess, onError) => {
  const apiUrl = new URL(`${url}${codeAnswer}`);
  // WARNING: fake fetch API below
  requestParams.sleep = sleepTime;
  apiUrl.search = new URLSearchParams(requestParams);
  fetch(apiUrl, header)
    .then((response) => {
      if (response && response.ok) {
        return new Promise(((resolve) => {
          resolve(mockedServerAnswer); // MOCK ANSWER
        }));
      }
      throw new Error('Network response was not ok.');
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onError(error);
    });
};

export default helper;
