---
module: nix.channel
option_count: 1
source: options.html
---

# nix.channel

## nix.channel.enable

Whether the nix-channel command and state files are made available on the machine. The following files are initialized when enabled: /nix/var/nix/profiles/per-user/root/channels /root/.nix-channels $HOME/.nix-defexpr/channels (on login) Disabling this option will not remove the state files from the system. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/config/nix-channel.nix>
