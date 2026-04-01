---
module: services.xrdp
option_count: 8
source: options.html
---

# services.xrdp

## services.xrdp.enable

Whether to enable xrdp, the Remote Desktop Protocol server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/xrdp.nix>

## services.xrdp.package

The xrdp package to use. Type: package Default: pkgs.xrdp Declared by: <nixpkgs/nixos/modules/services/networking/xrdp.nix>

## services.xrdp.defaultWindowManager

The script to run when user log in, usually a window manager, e.g. “icewm”, “xfce4-session” This is per-user overridable, if file ~/startwm.sh exists it will be used instead. Type: string Default: "xterm" Example: "xfce4-session" Declared by: <nixpkgs/nixos/modules/services/networking/xrdp.nix>

## services.xrdp.extraConfDirCommands

Extra commands to run on the default confDir derivation. Type: string Default: "" Example: '' substituteInPlace $out/sesman.ini \ --replace-fail LogLevel=INFO LogLevel=DEBUG \ --replace-fail LogFile=/dev/null LogFile=/var/log/xrdp.log '' Declared by: <nixpkgs/nixos/modules/services/networking/xrdp.nix>

## services.xrdp.openFirewall

Whether to open the firewall for the specified RDP port. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/xrdp.nix>

## services.xrdp.port

Specifies on which port the xrdp daemon listens. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3389 Declared by: <nixpkgs/nixos/modules/services/networking/xrdp.nix>

## services.xrdp.sslCert

ssl certificate path A self-signed certificate will be generated if file not exists. Type: string Default: "/etc/xrdp/cert.pem" Example: "/path/to/your/cert.pem" Declared by: <nixpkgs/nixos/modules/services/networking/xrdp.nix>

## services.xrdp.sslKey

ssl private key path A self-signed certificate will be generated if file not exists. Type: string Default: "/etc/xrdp/key.pem" Example: "/path/to/your/key.pem" Declared by: <nixpkgs/nixos/modules/services/networking/xrdp.nix>
