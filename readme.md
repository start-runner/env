# start-env

[![npm](https://img.shields.io/npm/v/start-env.svg?style=flat-square)](https://www.npmjs.com/package/start-env)
[![linux build](https://img.shields.io/travis/start-runner/env.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/env)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/start.env?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/env)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/env.svg?style=flat-square)](https://codecov.io/github/start-runner/env)
[![deps](https://img.shields.io/gemnasium/start-runner/env.svg?style=flat-square)](https://gemnasium.com/start-runner/env)
[![gitter](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-00d06f.svg?style=flat-square)](https://gitter.im/start-runner/start)

[`process.env`](https://nodejs.org/api/process.html#process_process_env) task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -S start-env
```

## Usage

```js
import Start from 'start';
import reporter from 'start-pretty-reporter';
import env from 'start-env';

const start = Start(reporter());

export function build() {
    return start(
        env('production'),
        // …
    );
}

export function test() {
    return start(
        env({ MY_KEY: 'value' }),
        // …
    );
}
```

## Arguments

`env(value)`

* `value` – string (shorthand for `NODE_ENV`) or an object of key-value pairs to set with `process.env`
