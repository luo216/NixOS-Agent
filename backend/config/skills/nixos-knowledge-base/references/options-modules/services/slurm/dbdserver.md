---
module: services.slurm.dbdserver
option_count: 5
source: options.html
---

# services.slurm.dbdserver

## services.slurm.dbdserver.enable

Whether to enable SlurmDBD service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>

## services.slurm.dbdserver.dbdHost

Hostname of the machine where slurmdbd is running (i.e. name returned by hostname -s). Type: string Default: config.networking.hostName Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>

## services.slurm.dbdserver.extraConfig

Extra configuration for slurmdbd.conf See also: slurmdbd.conf(8). Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>

## services.slurm.dbdserver.storagePassFile

Path to file with database password. The content of this will be used to create the password for the StoragePass option. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>

## services.slurm.dbdserver.storageUser

Database user name. Type: string Default: config.services.slurm.user Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>
