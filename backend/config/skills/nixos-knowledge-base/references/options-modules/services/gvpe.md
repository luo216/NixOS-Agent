---
module: services.gvpe
option_count: 7
source: options.html
---

# services.gvpe

## services.gvpe.enable

Whether to enable gvpe. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/gvpe.nix>

## services.gvpe.configFile

GVPE config file, if already present Type: null or absolute path Default: null Example: "/root/my-gvpe-conf" Declared by: <nixpkgs/nixos/modules/services/networking/gvpe.nix>

## services.gvpe.configText

GVPE config contents Type: null or strings concatenated with “\n” Default: null Example: '' tcp-port = 655 udp-port = 655 mtu = 1480 ifname = vpn0 node = alpha hostname = alpha.example.org connect = always enable-udp = true enable-tcp = true on alpha if-up = if-up-0 on alpha pid-file = /var/gvpe/gvpe.pid '' Declared by: <nixpkgs/nixos/modules/services/networking/gvpe.nix>

## services.gvpe.customIFSetup

Additional commands to apply in ifup script Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/gvpe.nix>

## services.gvpe.ipAddress

IP address to assign to GVPE interface Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/gvpe.nix>

## services.gvpe.nodename

GVPE node name Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/gvpe.nix>

## services.gvpe.subnet

IP subnet assigned to GVPE network Type: null or string Default: null Example: "10.0.0.0/8" Declared by: <nixpkgs/nixos/modules/services/networking/gvpe.nix>
