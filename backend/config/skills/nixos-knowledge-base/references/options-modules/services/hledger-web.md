---
module: services.hledger-web
option_count: 9
source: options.html
---

# services.hledger-web

## services.hledger-web.enable

Whether to enable hledger-web service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/hledger-web.nix>

## services.hledger-web.allow

User’s access level for changing data. view: view only permission. add: view and add permissions. edit: view, add, and edit permissions. sandstorm: permissions from the X-Sandstorm-Permissions request header. Type: one of “view”, “add”, “edit”, “sandstorm” Default: "view" Declared by: <nixpkgs/nixos/modules/services/web-apps/hledger-web.nix>

## services.hledger-web.baseUrl

Base URL, when sharing over a network. Type: null or string Default: null Example: "https://example.org" Declared by: <nixpkgs/nixos/modules/services/web-apps/hledger-web.nix>

## services.hledger-web.extraOptions

Extra command line arguments to pass to hledger-web. Type: list of string Default: [ ] Example: [ "--forecast" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/hledger-web.nix>

## services.hledger-web.host

Address to listen on. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/hledger-web.nix>

## services.hledger-web.journalFiles

Paths to journal files relative to services.hledger-web.stateDir. Type: list of string Default: [ ".hledger.journal" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/hledger-web.nix>

## services.hledger-web.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5000 Example: 80 Declared by: <nixpkgs/nixos/modules/services/web-apps/hledger-web.nix>

## services.hledger-web.serveApi

Whether to enable serving only the JSON web API, without the web UI. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/hledger-web.nix>

## services.hledger-web.stateDir

Path the service has access to. If left as the default value this directory will automatically be created before the hledger-web server starts, otherwise the sysadmin is responsible for ensuring the directory exists with appropriate ownership and permissions. Type: absolute path Default: "/var/lib/hledger-web" Declared by: <nixpkgs/nixos/modules/services/web-apps/hledger-web.nix>
