---
module: services.znc.confOptions
option_count: 10
source: options.html
---

# services.znc.confOptions

## services.znc.confOptions.extraZncConf

Extra config to znc.conf file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/znc/options.nix>

## services.znc.confOptions.modules

A list of modules to include in the znc.conf file. Type: list of string Default: [ "webadmin" "adminlog" ] Example: [ "partyline" "webadmin" "adminlog" "log" ] Declared by: <nixpkgs/nixos/modules/services/networking/znc/options.nix>

## services.znc.confOptions.networks

IRC networks to connect the user to. Type: attribute set of (submodule) Default: { } Example: { "libera" = { server = "irc.libera.chat"; port = 6697; useSSL = true; modules = [ "simple_away" ]; }; }; Declared by: <nixpkgs/nixos/modules/services/networking/znc/options.nix>

## services.znc.confOptions.nick

The IRC nick. Type: string Default: "znc-user" Example: "john" Declared by: <nixpkgs/nixos/modules/services/networking/znc/options.nix>

## services.znc.confOptions.passBlock

Generate with nix-shell -p znc --command "znc --makepass". This is the password used to log in to the ZNC web admin interface. You can also set this through services.znc.config.User.<username>.Pass.Method and co. Type: string Example: '' <Pass password> Method = sha256 Hash = e2ce303c7ea75c571d80d8540a8699b46535be6a085be3414947d638e48d9e93 Salt = l5Xryew4g*!oa(ECfX2o </Pass> '' Declared by: <nixpkgs/nixos/modules/services/networking/znc/options.nix>

## services.znc.confOptions.port

Specifies the port on which to listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5000 Declared by: <nixpkgs/nixos/modules/services/networking/znc/options.nix>

## services.znc.confOptions.uriPrefix

An optional URI prefix for the ZNC web interface. Can be used to make ZNC available behind a reverse proxy. Type: null or string Default: null Example: "/znc/" Declared by: <nixpkgs/nixos/modules/services/networking/znc/options.nix>

## services.znc.confOptions.useSSL

Indicates whether the ZNC server should use SSL when listening on the specified port. A self-signed certificate will be generated. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/znc/options.nix>

## services.znc.confOptions.userModules

A list of user modules to include in the znc.conf file. Type: list of string Default: [ "chansaver" "controlpanel" ] Example: [ "chansaver" "controlpanel" "fish" "push" ] Declared by: <nixpkgs/nixos/modules/services/networking/znc/options.nix>

## services.znc.confOptions.userName

The user name used to log in to the ZNC web admin interface. Type: string Default: "znc" Example: "johntron" Declared by: <nixpkgs/nixos/modules/services/networking/znc/options.nix>
