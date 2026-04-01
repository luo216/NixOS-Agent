---
module: systemd.sleep
option_count: 1
source: options.html
---

# systemd.sleep

## systemd.sleep.extraConfig

Extra config options for systemd sleep state logic. See sleep.conf.d(5) man page for available options. Type: strings concatenated with “\n” Default: "" Example: "HibernateDelaySec=1h" Declared by: <nixpkgs/nixos/modules/system/boot/systemd.nix>
