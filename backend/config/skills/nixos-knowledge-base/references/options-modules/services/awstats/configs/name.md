---
module: services.awstats.configs.<name>
option_count: 6
source: options.html
---

# services.awstats.configs.<name>

## services.awstats.configs.<name>.domain

The domain name to collect stats for. Type: string Default: "‹name›" Example: "example.com" Declared by: <nixpkgs/nixos/modules/services/logging/awstats.nix>

## services.awstats.configs.<name>.extraConfig

Extra configuration to be appended to awstats.${name}.conf. Type: attribute set of string Default: { } Example: { "ValidHTTPCodes" = "404"; } Declared by: <nixpkgs/nixos/modules/services/logging/awstats.nix>

## services.awstats.configs.<name>.hostAliases

List of aliases the site has. Type: list of string Default: [ ] Example: [ "www.example.org" ] Declared by: <nixpkgs/nixos/modules/services/logging/awstats.nix>

## services.awstats.configs.<name>.logFile

The log file to be scanned. For mail, set this to journalctl $OLD_CURSOR -u postfix.service | ${pkgs.perl}/bin/perl ${pkgs.awstats.out}/share/awstats/tools/maillogconvert.pl standard | Type: string Example: "/var/log/nginx/access.log" Declared by: <nixpkgs/nixos/modules/services/logging/awstats.nix>

## services.awstats.configs.<name>.logFormat

The log format being used. For mail, set this to %time2 %email %email_r %host %host_r %method %url %code %bytesd Type: string Default: "1" Declared by: <nixpkgs/nixos/modules/services/logging/awstats.nix>

## services.awstats.configs.<name>.type

The type of log being collected. Type: one of “mail”, “web” Default: "web" Example: "mail" Declared by: <nixpkgs/nixos/modules/services/logging/awstats.nix>
