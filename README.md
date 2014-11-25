# Shunter

## Requirements

An app server to serve thick-client (only) applications.
Supports user-defined feature flags for conditional distribution.

1. Server has some way of create Feature Flag tuples, *i.e.* `{ name, accounts, branch }`

  1. Any UID scheme should work
  2. Store in `flags.json`

2. App server serves FC app, queries FFs, serves the right bundle of HTML/CSS/JS for req
3. those bundles are indexed, obviously, by SHA (of a feature branch)

Sync flags between client-server and the API-server

## Install it

```
$ npm install
```


## Configure it

### Server

You can transparently specify the location of the manifest file, the feature
releases directory, as well as the port for the Connect server in `index.js`.

### Feature Flags

Define your feature flags in the manifest file at `config/flags.json` following
the format of

```
{
  "branch-name": [  ],
}
```

where you list all accepted values of the `account-id` request cookie header
in the array.

If a request is made with an `account-id` value that is not contained in any
of the defined feature flags (or if it’s not set at all), Shunter will always
default to serve the current release from `features/master/`.


## Use it

Start the Connect server from the `shunter/` directory with

```
$ npm index.js
```
