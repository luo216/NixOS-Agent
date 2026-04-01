---
module: services.hqplayerd
option_count: 4
source: options.html
---

# services.hqplayerd

## services.hqplayerd.enable

Whether to enable HQPlayer Embedded. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/hqplayerd.nix>

## services.hqplayerd.config

HQplayer daemon configuration, written to /etc/hqplayer/hqplayerd.xml. Refer to share/doc/hqplayerd/readme.txt in the hqplayerd derivation for possible values. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/audio/hqplayerd.nix>

## services.hqplayerd.licenseFile

Path to the HQPlayer license key file. Without this, the service will run in trial mode and restart every 30 minutes. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/audio/hqplayerd.nix>

## services.hqplayerd.openFirewall

Opens ports needed for the WebUI and controller API. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/audio/hqplayerd.nix>
