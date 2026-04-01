---
module: services.pinchflat
option_count: 11
source: options.html
---

# services.pinchflat

## services.pinchflat.enable

Whether to enable pinchflat. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/pinchflat.nix>

## services.pinchflat.package

The pinchflat package to use. Type: package Default: pkgs.pinchflat Declared by: <nixpkgs/nixos/modules/services/misc/pinchflat.nix>

## services.pinchflat.extraConfig

The configuration of Pinchflat is handled through environment variables. The available configuration options can be found in the Pinchflat README. Type: attribute set of (null or boolean or signed integer or string) Default: { } Example: { YT_DLP_WORKER_CONCURRENCY = 1; } Declared by: <nixpkgs/nixos/modules/services/misc/pinchflat.nix>

## services.pinchflat.group

Group under which Pinchflat runs. Type: string Default: "pinchflat" Declared by: <nixpkgs/nixos/modules/services/misc/pinchflat.nix>

## services.pinchflat.logLevel

Log level for Pinchflat. Type: one of “debug”, “info”, “warning”, “error” Default: "info" Declared by: <nixpkgs/nixos/modules/services/misc/pinchflat.nix>

## services.pinchflat.mediaDir

The directory into which Pinchflat downloads videos. Type: absolute path Default: "/var/lib/pinchflat/media" Declared by: <nixpkgs/nixos/modules/services/misc/pinchflat.nix>

## services.pinchflat.openFirewall

Open ports in the firewall for the Pinchflat web interface Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/pinchflat.nix>

## services.pinchflat.port

Port on which the Pinchflat web interface is available. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8945 Declared by: <nixpkgs/nixos/modules/services/misc/pinchflat.nix>

## services.pinchflat.secretsFile

Secrets like SECRET_KEY_BASE and BASIC_AUTH_PASSWORD should be passed to the service without adding them to the world-readable Nix store. Note that either this file needs to be available on the host on which pinchflat is running, or the option selfhosted must be true. Further, SECRET_KEY_BASE has a minimum length requirement of 64 bytes. One way to generate such a secret is to use openssl rand -hex 64. As an example, the contents of the file might look like this: SECRET_KEY_BASE=...copy-paste a secret token here... BASIC_AUTH_USERNAME=...basic auth username... BASIC_AUTH_PASSWORD=...basic auth password... Type: null or absolute path Default: null Example: "/run/secrets/pinchflat" Declared by: <nixpkgs/nixos/modules/services/misc/pinchflat.nix>

## services.pinchflat.selfhosted

Use a weak secret. If true, you are not required to provide a SECRET_KEY_BASE through the secretsFile option. Do not use this option in production! Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/pinchflat.nix>

## services.pinchflat.user

User account under which Pinchflat runs. Type: string Default: "pinchflat" Declared by: <nixpkgs/nixos/modules/services/misc/pinchflat.nix>
