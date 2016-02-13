import test from 'tape';
import { spy } from 'sinon';

import task from '../../lib/';

test('basic', t => {
    t.equal(
        typeof task,
        'function',
        '1st function'
    );

    t.equal(
        typeof task(),
        'function',
        '2nd function'
    );

    t.equal(
        typeof task()(),
        'function',
        '3rd function'
    );

    t.end();
});

test('string value', t => {
    const log = spy();

    task('test')()(log).then(() => {
        t.equal(
            process.env.NODE_ENV,
            'test',
            'process.env.NODE_ENV === "test"'
        );

        t.true(
            log.calledOnce,
            'log must been called called once'
        );

        t.true(
            log.calledWith('NODE_ENV = test'),
            'log must been called called with "NODE_ENV = test"'
        );

        delete process.env.NODE_ENV;

        t.end();
    });
});

test('object value', t => {
    const log = spy();

    task({ KEY1: 'value1', KEY2: 'value2' })()(log).then(() => {
        t.equal(
            process.env.KEY1,
            'value1',
            'process.env.KEY1 === "value1"'
        );

        t.equal(
            process.env.KEY2,
            'value2',
            'process.env.KEY2 === "value2"'
        );

        t.true(
            log.calledTwice,
            'log must been called called 2 times'
        );

        t.true(
            log.getCall(0).calledWith('KEY1 = value1'),
            '1st log must been called called with "KEY1 = value1"'
        );

        t.true(
            log.getCall(1).calledWith('KEY2 = value2'),
            '2nd log must been called called with "KEY2 = value2"'
        );

        delete process.env.KEY1;
        delete process.env.KEY2;

        t.end();
    });
});

test('already defined env', t => {
    const log = spy();

    process.env.NODE_ENV = 'test';

    task('test')()(log).then(() => {
        t.equal(
            process.env.NODE_ENV,
            'test',
            'process.env.NODE_ENV === "test"'
        );

        t.false(
            log.called,
            'log must not been called'
        );

        delete process.env.NODE_ENV;

        t.end();
    });
});

test('resolve', t => {
    task('test')('input')(function() {}).then(result => {
        t.equal(
            result,
            'input',
            'input must been passed through'
        );

        t.end();
    });
});
