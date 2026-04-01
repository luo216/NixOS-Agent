---
module: virtualisation.xen.domains
option_count: 1
source: options.html
---

# virtualisation.xen.domains

## virtualisation.xen.domains.extraConfig

Options defined here will override the defaults for xendomains. The default options can be seen in the file included from /etc/default/xendomains. Type: strings concatenated with “\n” Default: "" Example: '' XENDOMAINS_SAVE=/persist/xen/save XENDOMAINS_RESTORE=false XENDOMAINS_CREATE_USLEEP=10000000 '' Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>
