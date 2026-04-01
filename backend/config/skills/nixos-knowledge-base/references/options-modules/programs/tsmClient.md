---
module: programs.tsmClient
option_count: 6
source: options.html
---

# programs.tsmClient

## programs.tsmClient.enable

Whether to enable IBM Storage Protect (Tivoli Storage Manager, TSM) client command line applications with a client system-options file “dsm.sys” . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/tsm-client.nix>

## programs.tsmClient.package

The tsm-client package to use. It will be used with .override to add paths to the client system-options file. Type: package Default: pkgs.tsm-client Example: tsm-client-withGui Declared by: <nixpkgs/nixos/modules/programs/tsm-client.nix>

## programs.tsmClient.defaultServername

If multiple server stanzas are declared with programs.tsmClient.servers, this option may be used to name a default server stanza that IBM TSM uses in the absence of a user-defined dsm.opt file. This option translates to a defaultserver configuration line. Type: null or string matching the pattern [^[:space:]]{1,64} Default: null Example: "mainTsmServer" Declared by: <nixpkgs/nixos/modules/programs/tsm-client.nix>

## programs.tsmClient.dsmSysText

This configuration key contains the effective text of the client system-options file “dsm.sys”. It should not be changed, but may be used to feed the configuration into other TSM-depending packages used on the system. Type: strings concatenated with “\n” (read only) Declared by: <nixpkgs/nixos/modules/programs/tsm-client.nix>

## programs.tsmClient.servers

Server definitions (“stanzas”) for the client system-options file. The name of each entry will be used for the internal servername by default. Each attribute will be transformed into a line with a key-value pair within the server’s stanza. Integers as values will be canonically turned into strings. The boolean value true will be turned into a line with just the attribute’s name. The value null will not generate a line. A list as values generates an entry for each value, according to the rules above. Type: attribute set of (open submodule of attribute set of (one of true, <null> or signed integer or absolute path or (optionally newline-terminated) single-line string or list of (one of true, <null> or signed integer or absolute path or (optionally newline-terminated) single-line string))) Default: { } Example: { mainTsmServer = { compression = "yes"; nodename = "MY-TSM-NODE"; tcpserveraddress = "tsmserver.company.com"; }; } Declared by: <nixpkgs/nixos/modules/programs/tsm-client.nix>

## programs.tsmClient.wrappedPackage

The tsm-client package to use. This option is to provide the effective derivation, wrapped with the path to the client system-options file “dsm.sys”. It should not be changed, but exists for other modules that want to call TSM executables. Type: package (read only) Declared by: <nixpkgs/nixos/modules/programs/tsm-client.nix>
