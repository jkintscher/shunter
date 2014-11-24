# Shunter

An app server to serve thick-client (only) applications.
Supports user-defined feature flags for conditional distribution.

1. Server has some way of create Feature Flag tuples, *i.e.* `{ name, accounts, branch }`

  1. Any UID scheme should work
  2. Store in `flags.json`

2. App server serves FC app, queries FFs, serves the right bundle of HTML/CSS/JS for req
3. those bundles are indexed, obviously, by SHA (of a feature branch)

Sync flags between client-server and the API-server
