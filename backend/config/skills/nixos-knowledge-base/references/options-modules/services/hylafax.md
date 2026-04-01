---
module: services.hylafax
option_count: 15
source: options.html
---

# services.hylafax

## services.hylafax.enable

Whether to enable HylaFAX server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.package

The HylaFAX package to use. Type: package Default: pkgs.hylafaxplus Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.areaCode

Area code for server and all modems. Type: null or non-empty string Default: null Example: "30" Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.autostart

Autostart the HylaFAX queue manager at system start. If this is false, the queue manager will still be started if there are pending jobs or if a user tries to connect to it. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.commonModemConfig

Attribute set of default values for modem config files etc/config.*. Values can be either strings or integers (which will be added to the config file verbatimly) or lists thereof (which will be translated to multiple lines with the same configuration key). Boolean values are translated to “Yes” or “No”. The default contains some reasonable configuration to yield an operational system. Think twice before changing paths of fax-processing scripts. Type: attribute set of ((list of ((string or signed integer convertible to it) or boolean convertible to it)) or ((string or signed integer convertible to it) or boolean convertible to it) convertible to it) Example: { InternationalPrefix = "00"; LongDistancePrefix = "0"; } Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.countryCode

Country code for server and all modems. Type: null or non-empty string Default: null Example: "49" Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.faxqConfig

Attribute set of lines for the global faxq config file etc/config. Values can be either strings or integers (which will be added to the config file verbatimly) or lists thereof (which will be translated to multiple lines with the same configuration key). Boolean values are translated to “Yes” or “No”. The default contains some reasonable configuration to yield an operational system. Type: attribute set of ((list of ((string or signed integer convertible to it) or boolean convertible to it)) or ((string or signed integer convertible to it) or boolean convertible to it) convertible to it) Example: { InternationalPrefix = "00"; LongDistancePrefix = "0"; } Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.hfaxdConfig

Attribute set of lines for the global hfaxd config file etc/hfaxd.conf. Values can be either strings or integers (which will be added to the config file verbatimly) or lists thereof (which will be translated to multiple lines with the same configuration key). Boolean values are translated to “Yes” or “No”. The default contains some reasonable configuration to yield an operational system. Type: attribute set of ((list of ((string or signed integer convertible to it) or boolean convertible to it)) or ((string or signed integer convertible to it) or boolean convertible to it) convertible to it) Example: { RecvqProtection = "0400"; } Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.internationalPrefix

International prefix for server and all modems. Type: null or string Default: null Example: "00" Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.longDistancePrefix

Long distance prefix for server and all modems. Type: null or string Default: null Example: "0" Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.modems

Description of installed modems. At least on modem must be defined to enable the HylaFAX server. Type: attribute set of (submodule) Default: { } Example: { ttyS1 = { config = { FAXNumber = "123456"; LocalIdentifier = "Smith"; }; type = "cirrus"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.sendmailPath

Path to sendmail program. The default uses the local sendmail wrapper (see config.services.mail.sendmailSetuidWrapper), otherwise the false binary to cause an error if used. Type: absolute path Example: lib.getExe' config.services.postfix.package "sendmail" Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.spoolAreaPath

The spooling area will be created/maintained at the location given here. Type: absolute path Default: "/var/spool/fax" Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.spoolExtraInit

Additional shell code that is executed within the spooling area directory right after its setup. Type: strings concatenated with “\n” Default: "" Example: "chmod 0755 . # everyone may read my faxes" Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.userAccessFile

The hosts.hfaxd file entry in the spooling area will be symlinked to the location given here. This file must exist and be readable only by the uucp user. See hosts.hfaxd(5) for details. This configuration permits access for all users: environment.etc."hosts.hfaxd" = { mode = "0600"; user = "uucp"; text = ".*"; }; Note that host-based access can be controlled with config.systemd.sockets.hylafax-hfaxd.listenStreams; by default, only 127.0.0.1 is permitted to connect. Type: absolute path Default: "/etc/hosts.hfaxd" Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>
