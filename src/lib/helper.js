const helper = {};

helper.getRelativeUrl = () => {
  const url = window.location.href;
  return url.replace(/^(?:\/\/|[^\/]+)*\//, '');
};

export default helper;
