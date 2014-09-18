node-speedtest-cli
=========

Node wrapper around the python package [speedtest-cli](https://github.com/sivel/speedtest-cli)

## Installing

```bash
$ npm install -g node-speedtest-cli
```

*Note: For a global install of `-g ionic`, OSX/Linux users may need to prefix the command with `sudo`.*


## Run speedtest

```bash
$ speedtest-cli
```

## Repeat every hour

```bash
$ speedtest-cli -r
```

## Custom interval (in seconds)

Note: the interval should be at least 60 seconds.

```bash
$ speedtest-cli -r -i 1000
```
