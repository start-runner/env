export default (value, callback) => (input) => {
    return function env(log) {
        let envs = value;

        if (typeof value === 'string') {
            envs = {
                NODE_ENV: value
            };
        }

        Object.keys(envs).forEach(key => log(`${key} = ${envs[key]}`));

        return callback(input);
    };
};
