---
module: services.radicle.ci.broker.settings
option_count: 4
source: options.html
---

# services.radicle.ci.broker.settings

## services.radicle.ci.broker.settings.adapters

CI adapters. See also the options under services.radicle.ci.adapters. Type: attribute set of (open submodule of (JSON value)) Default: { } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/radicle/ci-broker.nix>

## services.radicle.ci.broker.settings.db

Database file path. Type: absolute path Default: "${config.services.radicle.ci.broker.stateDir}/ci-broker.db" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/radicle/ci-broker.nix>

## services.radicle.ci.broker.settings.report_dir

Directory where HTML and JSON report pages are written. Type: null or absolute path Default: "${config.services.radicle.ci.broker.stateDir}/reports" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/radicle/ci-broker.nix>

## services.radicle.ci.broker.settings.triggers

CI triggers. Type: list of (open submodule of (JSON value)) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/radicle/ci-broker.nix>
