---
module: services.gitweb
option_count: 3
source: options.html
---

# services.gitweb

## services.gitweb.extraConfig

Verbatim configuration text appended to the generated gitweb.conf file. Type: strings concatenated with “\n” Default: "" Example: '' $feature{'highlight'}{'default'} = [1]; $feature{'ctags'}{'default'} = [1]; $feature{'avatar'}{'default'} = ['gravatar']; '' Declared by: <nixpkgs/nixos/modules/services/misc/gitweb.nix>

## services.gitweb.gitwebTheme

Use an alternative theme for gitweb, strongly inspired by GitHub. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gitweb.nix>

## services.gitweb.projectroot

Path to git projects (bare repositories) that should be served by gitweb. Must not end with a slash. Type: absolute path Default: "/srv/git" Declared by: <nixpkgs/nixos/modules/services/misc/gitweb.nix>
