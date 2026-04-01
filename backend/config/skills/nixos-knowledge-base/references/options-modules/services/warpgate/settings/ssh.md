---
module: services.warpgate.settings.ssh
option_count: 7
source: options.html
---

# services.warpgate.settings.ssh

## services.warpgate.settings.ssh.enable

Whether to enable SSH listener. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.ssh.external_port

The SSH listener is reachable via this port externally. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.ssh.host_key_verification

Specify host key verification action when connecting to a SSH target with unknown/differing host key. Type: one of “prompt”, “auto_accept”, “auto_reject” Default: "prompt" Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.ssh.inactivity_timeout

How long can user be inactive until Warpgate terminates the connection. Type: string Default: "5m" Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.ssh.keepalive_interval

If nothing is received from the client for this amount of time, server will send a keepalive message. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.ssh.keys

Path to store SSH host & client keys. Type: string Default: "/var/lib/warpgate/ssh-keys" Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.ssh.listen

Listen endpoint of SSH listener. Type: string Default: "[::]:2222" Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>
