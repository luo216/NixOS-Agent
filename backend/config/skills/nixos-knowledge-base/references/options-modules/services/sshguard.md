---
module: services.sshguard
option_count: 8
source: options.html
---

# services.sshguard

## services.sshguard.enable

Whether to enable the sshguard service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/sshguard.nix>

## services.sshguard.attack_threshold

Block attackers when their cumulative attack score exceeds threshold. Most attacks have a score of 10. Type: signed integer Default: 30 Declared by: <nixpkgs/nixos/modules/services/security/sshguard.nix>

## services.sshguard.blacklist_file

Blacklist an attacker when its score exceeds threshold. Blacklisted addresses are loaded from and added to blacklist-file. Type: absolute path Default: "/var/lib/sshguard/blacklist.db" Declared by: <nixpkgs/nixos/modules/services/security/sshguard.nix>

## services.sshguard.blacklist_threshold

Blacklist an attacker when its score exceeds threshold. Blacklisted addresses are loaded from and added to blacklist-file. Type: null or signed integer Default: null Example: 120 Declared by: <nixpkgs/nixos/modules/services/security/sshguard.nix>

## services.sshguard.blocktime

Block attackers for initially blocktime seconds after exceeding threshold. Subsequent blocks increase by a factor of 1.5. sshguard unblocks attacks at random intervals, so actual block times will be longer. Type: signed integer Default: 120 Declared by: <nixpkgs/nixos/modules/services/security/sshguard.nix>

## services.sshguard.detection_time

Remember potential attackers for up to detection_time seconds before resetting their score. Type: signed integer Default: 1800 Declared by: <nixpkgs/nixos/modules/services/security/sshguard.nix>

## services.sshguard.services

Systemd services sshguard should receive logs of. Type: list of string Default: [ "sshd" ] Example: [ "sshd" "exim" ] Declared by: <nixpkgs/nixos/modules/services/security/sshguard.nix>

## services.sshguard.whitelist

Whitelist a list of addresses, hostnames, or address blocks. Type: list of string Default: [ ] Example: [ "198.51.100.56" "198.51.100.2" ] Declared by: <nixpkgs/nixos/modules/services/security/sshguard.nix>
