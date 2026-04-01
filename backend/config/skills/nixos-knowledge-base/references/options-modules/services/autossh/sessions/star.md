---
module: services.autossh.sessions.*
option_count: 4
source: options.html
---

# services.autossh.sessions.*

## services.autossh.sessions.*.extraArguments

Arguments to be passed to AutoSSH and retransmitted to SSH process. Some meaningful options include -N (don’t run remote command), -D (open SOCKS proxy on local port), -R (forward remote port), -L (forward local port), -v (Enable debug). Check ssh manual for the complete list. Type: strings concatenated with " " Example: "-N -D4343 bill@socks.example.net" Declared by: <nixpkgs/nixos/modules/services/networking/autossh.nix>

## services.autossh.sessions.*.monitoringPort

Port to be used by AutoSSH for peer monitoring. Note, that AutoSSH also uses mport+1. Value of 0 disables the keep-alive style monitoring Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 0 Example: 20000 Declared by: <nixpkgs/nixos/modules/services/networking/autossh.nix>

## services.autossh.sessions.*.name

Name of the local AutoSSH session Type: string Example: "socks-peer" Declared by: <nixpkgs/nixos/modules/services/networking/autossh.nix>

## services.autossh.sessions.*.user

Name of the user the AutoSSH session should run as Type: string Example: "bill" Declared by: <nixpkgs/nixos/modules/services/networking/autossh.nix>
