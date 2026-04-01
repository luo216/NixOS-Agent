---
module: services.printing
option_count: 18
source: options.html
---

# services.printing

## services.printing.enable

Whether to enable printing support through the CUPS daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>

## services.printing.package

The cups package to use. Type: package Default: pkgs.cups Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>

## services.printing.allowFrom

From which hosts to allow unconditional access. Type: list of string Default: [ "localhost" ] Example: [ "all" ] Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>

## services.printing.browsedConf

The contents of the configuration. file of the CUPS Browsed daemon (cups-browsed.conf) Type: strings concatenated with “\n” Default: "" Example: '' BrowsePoll cups.example.com '' Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>

## services.printing.browsing

Specifies whether shared printers are advertised. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>

## services.printing.clientConf

The contents of the client configuration. (client.conf) Type: strings concatenated with “\n” Default: "" Example: '' ServerName server.example.com Encryption Never '' Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>

## services.printing.defaultShared

Specifies whether local printers are shared by default. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>

## services.printing.drivers

CUPS drivers to use. Drivers provided by CUPS, cups-filters, Ghostscript and Samba are added unconditionally. If this list contains Gutenprint (i.e. a derivation with meta.isGutenprint = true) the PPD files in /var/lib/cups/ppd will be updated automatically to avoid errors due to incompatible versions. Type: list of absolute path Default: [ ] Example: with pkgs; [ gutenprint hplip splix ] Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>

## services.printing.extraConf

Extra contents of the configuration file of the CUPS daemon (cupsd.conf). Type: strings concatenated with “\n” Default: "" Example: '' BrowsePoll cups.example.com MaxCopies 42 '' Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>

## services.printing.extraFilesConf

Extra contents of the configuration file of the CUPS daemon (cups-files.conf). Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>

## services.printing.listenAddresses

A list of addresses and ports on which to listen. Type: list of string Default: [ "localhost:631" ] Example: [ "*:631" ] Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>

## services.printing.logLevel

Specifies the cupsd logging verbosity. Type: string Default: "info" Example: "debug" Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>

## services.printing.openFirewall

Whether to open the firewall for TCP ports specified in listenAddresses option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>

## services.printing.snmpConf

The contents of /etc/cups/snmp.conf. See “man cups-snmp.conf” for a complete description. Type: strings concatenated with “\n” Default: '' Address @LOCAL '' Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>

## services.printing.startWhenNeeded

If set, CUPS is socket-activated; that is, instead of having it permanently running as a daemon, systemd will start it on the first incoming connection. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>

## services.printing.stateless

If set, all state directories relating to CUPS will be removed on startup of the service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>

## services.printing.tempDir

CUPSd temporary directory. Type: absolute path Default: "/tmp" Example: "/tmp/cups" Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>

## services.printing.webInterface

Specifies whether the web interface is enabled. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/printing/cupsd.nix>
