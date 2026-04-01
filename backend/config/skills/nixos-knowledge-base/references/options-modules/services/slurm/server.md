---
module: services.slurm.server
option_count: 1
source: options.html
---

# services.slurm.server

## services.slurm.server.enable

Whether to enable the slurm control daemon. Note that the standard authentication method is “munge”. The “munge” service needs to be provided with a password file in order for slurm to work properly (see services.munge.password). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>
