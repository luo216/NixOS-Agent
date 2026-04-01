---
module: services.lighttpd.cgit
option_count: 3
source: options.html
---

# services.lighttpd.cgit

## services.lighttpd.cgit.enable

If true, enable cgit (fast web interface for git repositories) as a sub-service in lighttpd. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/lighttpd/cgit.nix>

## services.lighttpd.cgit.configText

Verbatim contents of the cgit runtime configuration file. Documentation (with cgitrc example file) is available in “man cgitrc”. Or online: http://git.zx2c4.com/cgit/tree/cgitrc.5.txt Type: strings concatenated with “\n” Default: "" Example: '' source-filter=${pkgs.cgit}/lib/cgit/filters/syntax-highlighting.py about-filter=${pkgs.cgit}/lib/cgit/filters/about-formatting.sh cache-size=1000 scan-path=/srv/git '' Declared by: <nixpkgs/nixos/modules/services/web-servers/lighttpd/cgit.nix>

## services.lighttpd.cgit.subdir

The subdirectory in which to serve cgit. The web application will be accessible at http://yourserver/${subdir} Type: string Default: "cgit" Example: "" Declared by: <nixpkgs/nixos/modules/services/web-servers/lighttpd/cgit.nix>
