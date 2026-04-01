---
module: services.autofs
option_count: 4
source: options.html
---

# services.autofs

## services.autofs.enable

Mount filesystems on demand. Unmount them automatically. You may also be interested in afuse. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/autofs.nix>

## services.autofs.autoMaster

Contents of /etc/auto.master file. See auto.master(5) and autofs(5). Type: string Example: let mapConf = pkgs.writeText "auto" '' kernel -ro,soft,intr ftp.kernel.org:/pub/linux boot -fstype=ext2 :/dev/hda1 windoze -fstype=smbfs ://windoze/c removable -fstype=ext2 :/dev/hdd cd -fstype=iso9660,ro :/dev/hdc floppy -fstype=auto :/dev/fd0 server -rw,hard,intr / -ro myserver.me.org:/ \ /usr myserver.me.org:/usr \ /home myserver.me.org:/home ''; in '' /auto file:${mapConf} '' Declared by: <nixpkgs/nixos/modules/services/misc/autofs.nix>

## services.autofs.debug

Pass -d and -7 to automount and write log to the system journal. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/autofs.nix>

## services.autofs.timeout

Set the global minimum timeout, in seconds, until directories are unmounted Type: signed integer Default: 600 Declared by: <nixpkgs/nixos/modules/services/misc/autofs.nix>
