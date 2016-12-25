export default (key, value) => {
  process.env[key] = value;

  return (input) => {
    return function env(log) {
      log(`${key} = ${value}`);

      return Promise.resolve(input);
    };
  };
};
