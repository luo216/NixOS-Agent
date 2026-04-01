---
module: services.cryptpad.settings
option_count: 11
source: options.html
---

# services.cryptpad.settings

## services.cryptpad.settings.adminKeys

List of public signing keys of users that can access the admin panel Type: list of string Default: [ ] Example: [ "[cryptpad-user1@my.awesome.website/YZgXQxKR0Rcb6r6CmxHPdAGLVludrAF2lEnkbx1vVOo=]" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/cryptpad.nix>

## services.cryptpad.settings.blockDailyCheck

Disable telemetry. This setting is only effective if the ‘Disable server telemetry’ setting in the admin menu has been untouched, and will be ignored by cryptpad once that option is set either way. Note that due to the service confinement, just enabling the option in the admin menu will not be able to resolve DNS and fail; this setting must be set as well. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/cryptpad.nix>

## services.cryptpad.settings.httpAddress

Address on which the Node.js server should listen Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/cryptpad.nix>

## services.cryptpad.settings.httpPort

Port on which the Node.js server should listen Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/web-apps/cryptpad.nix>

## services.cryptpad.settings.httpSafeOrigin

Cryptpad sandbox URL Type: null or string Example: "https://cryptpad-ui.example.com. Apparently optional but recommended." Declared by: <nixpkgs/nixos/modules/services/web-apps/cryptpad.nix>

## services.cryptpad.settings.httpUnsafeOrigin

This is the URL that users will enter to load your instance Type: string Default: "" Example: "https://cryptpad.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/cryptpad.nix>

## services.cryptpad.settings.installMethod

Install method is listed in telemetry if you agree to it through the consentToContact setting in the admin panel. Type: string Default: "nixos" Declared by: <nixpkgs/nixos/modules/services/web-apps/cryptpad.nix>

## services.cryptpad.settings.logLevel

Controls log level Type: string Default: "info" Declared by: <nixpkgs/nixos/modules/services/web-apps/cryptpad.nix>

## services.cryptpad.settings.logToStdout

Controls whether log output should go to stdout of the systemd service Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/cryptpad.nix>

## services.cryptpad.settings.maxWorkers

Number of child processes, defaults to number of cores available Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/cryptpad.nix>

## services.cryptpad.settings.websocketPort

Port for the websocket that needs to be separate Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3003 Declared by: <nixpkgs/nixos/modules/services/web-apps/cryptpad.nix>
