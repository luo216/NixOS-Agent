---
module: services.solanum
option_count: 4
source: options.html
---

# services.solanum

## services.solanum.enable

Whether to enable Solanum IRC daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/solanum.nix>

## services.solanum.config

Solanum IRC daemon configuration file. check https://github.com/solanum-ircd/solanum/blob/main/doc/reference.conf for all options. Type: string Default: '' serverinfo { name = "irc.example.com"; sid = "1ix"; description = "irc!"; vhost = "0.0.0.0"; vhost6 = "::"; }; listen { host = "0.0.0.0"; port = 6667; }; auth { user = "*@*"; class = "users"; flags = exceed_limit; }; channel { default_split_user_count = 0; }; '' Declared by: <nixpkgs/nixos/modules/services/networking/solanum.nix>

## services.solanum.motd

Solanum MOTD text. Solanum will read its MOTD from /etc/solanum/ircd.motd. If set, the value of this option will be written to this path. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/solanum.nix>

## services.solanum.openFilesLimit

Maximum number of open files. Limits the clients and server connections. Type: signed integer Default: 1024 Declared by: <nixpkgs/nixos/modules/services/networking/solanum.nix>
