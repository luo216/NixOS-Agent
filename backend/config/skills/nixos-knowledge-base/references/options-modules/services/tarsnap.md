---
module: services.tarsnap
option_count: 4
source: options.html
---

# services.tarsnap

## services.tarsnap.enable

Whether to enable periodic tarsnap backups. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.package

The tarsnap package to use. Type: package Default: pkgs.tarsnap Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.archives

Tarsnap archive configurations. Each attribute names an archive to be created at a given time interval, according to the options associated with it. When uploading to the tarsnap server, archive names are suffixed by a 1 second resolution timestamp, with the format %Y%m%d%H%M%S. For each member of the set is created a timer which triggers the instanced tarsnap-archive-name service unit. You may use systemctl start tarsnap-archive-name to manually trigger creation of archive-name at any time. Type: attribute set of (submodule) Default: { } Example: { nixos = { directories = [ "/home" "/root/ssl" ]; }; gamedata = { directories = [ "/var/lib/minecraft" ]; period = "*:30"; }; } Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>

## services.tarsnap.keyfile

The keyfile which associates this machine with your tarsnap account. Create the keyfile with tarsnap-keygen. Note that each individual archive (specified below) may also have its own individual keyfile specified. Tarsnap does not allow multiple concurrent backups with the same cache directory and key (starting a new backup will cause another one to fail). If you have multiple archives specified, you should either spread out your backups to be far apart, or specify a separate key for each archive. By default every archive defaults to using "/root/tarsnap.key". It’s recommended for backups that you generate a key for every archive using tarsnap-keygen(1), and then generate a write-only tarsnap key using tarsnap-keymgmt(1), and keep your master key(s) for a particular machine off-site. The keyfile name should be given as a string and not a path, to avoid the key being copied into the Nix store. Type: string Default: "/root/tarsnap.key" Declared by: <nixpkgs/nixos/modules/services/backup/tarsnap.nix>
