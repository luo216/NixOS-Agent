---
module: boot.loader.initScript
option_count: 1
source: options.html
---

# boot.loader.initScript

## boot.loader.initScript.enable

Some systems require a /sbin/init script which is started. Or having it makes starting NixOS easier. This applies to some kind of hosting services and user mode linux. Additionally this script will create /boot/init-other-configurations-contents.txt containing contents of remaining configurations. You can copy paste them into /sbin/init manually running a rescue system or such. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/loader/init-script/init-script.nix>
