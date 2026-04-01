---
module: services.radicle.ci.adapters.native.instances.<name>.settings
option_count: 3
source: options.html
---

# services.radicle.ci.adapters.native.instances.<name>.settings

## services.radicle.ci.adapters.native.instances.<name>.settings.base_url

Base URL for build logs (mandatory for access from CI broker page). Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/continuous-integration/radicle/adapters/native.nix>

## services.radicle.ci.adapters.native.instances.<name>.settings.log

File where radicle-native-ci should write the run log. Type: absolute path Default: "${config.services.radicle.ci.broker.logDir}/adapters/native/‹name›.log" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/radicle/adapters/native.nix>

## services.radicle.ci.adapters.native.instances.<name>.settings.state

Directory where per-run directories are stored. Type: absolute path Default: "${config.services.radicle.ci.broker.stateDir}/adapters/native/‹name›" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/radicle/adapters/native.nix>
