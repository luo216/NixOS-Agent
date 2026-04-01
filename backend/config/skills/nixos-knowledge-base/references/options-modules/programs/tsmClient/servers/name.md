---
module: programs.tsmClient.servers.<name>
option_count: 7
source: options.html
---

# programs.tsmClient.servers.<name>

## programs.tsmClient.servers.<name>.genPasswd

Whether to enable automatic client password generation. This option does not cause a line in dsm.sys by itself, but generates a corresponding passwordaccess directive. The password will be stored in the directory given by the option passworddir. Caution: If this option is enabled and the server forces to renew the password (e.g. on first connection), a random password will be generated and stored . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/tsm-client.nix>

## programs.tsmClient.servers.<name>.inclexcl

Text lines with include.* and exclude.* directives to be used when sending files to the IBM TSM server, or an absolute path pointing to a file with such lines. Type: (null or absolute path) or strings concatenated with “\n” convertible to it Default: null Example: '' exclude.dir /nix/store include.encrypt /home/.../* '' Declared by: <nixpkgs/nixos/modules/programs/tsm-client.nix>

## programs.tsmClient.servers.<name>.nodename

Target node name on the IBM TSM server. Type: non-empty string Example: "MY-TSM-NODE" Declared by: <nixpkgs/nixos/modules/programs/tsm-client.nix>

## programs.tsmClient.servers.<name>.passworddir

Directory that holds the TSM node’s password information. Type: null or absolute path Default: null Example: "/home/alice/tsm-password" Declared by: <nixpkgs/nixos/modules/programs/tsm-client.nix>

## programs.tsmClient.servers.<name>.servername

Local name of the IBM TSM server, must not contain space or more than 64 chars. Type: string matching the pattern [^[:space:]]{1,64} Default: "‹name›" Example: "mainTsmServer" Declared by: <nixpkgs/nixos/modules/programs/tsm-client.nix>

## programs.tsmClient.servers.<name>.tcpport

TCP port of the IBM TSM server. TSM does not support ports above 32767. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1500 Declared by: <nixpkgs/nixos/modules/programs/tsm-client.nix>

## programs.tsmClient.servers.<name>.tcpserveraddress

Host/domain name or IP address of the IBM TSM server. Type: non-empty string Example: "tsmserver.company.com" Declared by: <nixpkgs/nixos/modules/programs/tsm-client.nix>
