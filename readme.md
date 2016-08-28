# start-env

[![npm](https://img.shields.io/npm/v/start-env.svg?style=flat-square)](https://www.npmjs.com/package/start-env)
[![linux build](https://img.shields.io/travis/start-runner/env.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/env)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/start.env?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/env)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/env.svg?style=flat-square)](https://codecov.io/github/start-runner/env)
[![deps](https://img.shields.io/gemnasium/start-runner/env.svg?style=flat-square)](https://gemnasium.com/start-runner/env)

[`process.env`](https://nodejs.org/api/process.html#process_process_env) task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -S start-env
```

## Usage

```js
import start from 'start';
import reporter from 'start-pretty-reporter';
import env from 'start-env';
import files from 'start-files';
import read from 'start-read';
import babel from 'start-babel';
import write from 'start-write';

export function build() {
    return start(reporter())(
        env('production', () => start(
            files('lib/**/*.js'),
            read(),
            babel(),
            write('build/')
        ))
    );
}
```

Why it's async? Because you might want to lazy-require something which depends on `process.env`, for example webpack config.

## Arguments

`env(value, callback)`

* `value` – string (shorthand for `NODE_ENV`) or an object of key-value pairs to set with `process.env`
* `callback` – callback function which will be called after changing `process.env`
