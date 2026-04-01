---
module: networking.getaddrinfo
option_count: 5
source: options.html
---

# networking.getaddrinfo

## networking.getaddrinfo.enable

Enables custom address sorting configuration for getaddrinfo(3) according to RFC 3484. This option generates a /etc/gai.conf file to override the default address sorting tables, as described in gai.conf(5). This setting is only applicable when using the GNU C Library (glibc). It has no effect with other libc implementations. Type: boolean Default: pkgs.stdenv.hostPlatform.libc == "glibc" Declared by: <nixpkgs/nixos/modules/config/getaddrinfo.nix>

## networking.getaddrinfo.label

Adds entries to the label table, as described in section 2.1 of RFC 3484. If any label entries are provided, the glibc’s default label table is ignored. Type: null or (attribute set of signed integer) Default: null Example: { "2001:0::/32" = 7; "2002::/16" = 2; "::/0" = 1; "::/96" = 3; "::ffff:0:0/96" = 4; "fc00::/7" = 6; "fec0::/10" = 5; } Declared by: <nixpkgs/nixos/modules/config/getaddrinfo.nix>

## networking.getaddrinfo.precedence

Similar to networking.getaddrinfo.label, but this option defines entries for the precedence table instead. See sections 2.1 and 10.3 of RFC 3484 for details. Providing any value will disable the glibc’s default precedence table. Type: null or (attribute set of signed integer) Default: null Example: { "2002::/16" = 30; "::/0" = 40; "::/96" = 20; "::1/128" = 50; "::ffff:0:0/96" = 10; } Declared by: <nixpkgs/nixos/modules/config/getaddrinfo.nix>

## networking.getaddrinfo.reload

Determines whether a process should detect changes to the configuration file since it was last read. If enabled, the file is re-read automatically. This may cause issues in multithreaded applications and is generally discouraged. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/getaddrinfo.nix>

## networking.getaddrinfo.scopev4

Adds custom rules to the IPv4 scope table. By default, the scope IDs described in section 3.2 of RFC 6724 are used. Modifying these values is rarely necessary. Type: null or (attribute set of signed integer) Default: null Example: { "::ffff:0.0.0.0/96" = 14; "::ffff:127.0.0.0/104" = 2; "::ffff:169.254.0.0/112" = 2; } Declared by: <nixpkgs/nixos/modules/config/getaddrinfo.nix>
