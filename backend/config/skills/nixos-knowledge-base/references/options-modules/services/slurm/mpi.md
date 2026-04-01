---
module: services.slurm.mpi
option_count: 2
source: options.html
---

# services.slurm.mpi

## services.slurm.mpi.PmixCliTmpDirBase

Base path for PMIx temporary files. Type: string Default: "/tmp/pmix" Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>

## services.slurm.mpi.extraMpiConfig

Extra configuration for that will be added to mpi.conf. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>
