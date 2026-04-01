---
module: networking.rxe
option_count: 2
source: options.html
---

# networking.rxe

## networking.rxe.enable

Whether to enable RDMA over converged ethernet. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/rxe.nix>

## networking.rxe.interfaces

Enable RDMA on the listed interfaces. The corresponding virtual RDMA interfaces will be named rxe_<interface>. UDP port 4791 must be open on the respective ethernet interfaces. Type: list of string Default: [ ] Example: [ "eth0" ] Declared by: <nixpkgs/nixos/modules/services/networking/rxe.nix>
