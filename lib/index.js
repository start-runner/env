export default (value) => (input) => {
    return function env(log) {
        return new Promise(resolve => {
            let envs = value;

            if (typeof value === 'string') {
                envs = {
                    NODE_ENV: value
                };
            }

            Object.keys(envs).forEach(key => {
                if (process.env[key] !== envs[key]) {
                    process.env[key] = envs[key];

                    log(`${key} = ${envs[key]}`);
                }
            });

            resolve(input);
        });
    };
};
