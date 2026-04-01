---
module: services.scx
option_count: 4
source: options.html
---

# services.scx

## services.scx.enable

Whether to enable SCX service, a daemon to run schedulers from userspace. Note This service requires a kernel with the Sched-ext feature. Generally, kernel version 6.12 and later are supported. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/scheduling/scx.nix>

## services.scx.package

scx package to use. scx.full, which includes all schedulers, is the default. You may choose a minimal package, such as pkgs.scx.rustscheds. Note Overriding this does not change the default scheduler; you should set services.scx.scheduler for it. Type: package Default: pkgs.scx.full Example: pkgs.scx.rustscheds Declared by: <nixpkgs/nixos/modules/services/scheduling/scx.nix>

## services.scx.extraArgs

Parameters passed to the chosen scheduler at runtime. Note Run chosen-scx-scheduler --help to see the available options. Generally, each scheduler has its own set of options, and they are incompatible with each other. Type: list of (optionally newline-terminated) single-line string Default: [ ] Example: [ "--slice-us 5000" "--verbose" ] Declared by: <nixpkgs/nixos/modules/services/scheduling/scx.nix>

## services.scx.scheduler

Which scheduler to use. See SCX documentation for details on each scheduler and guidance on selecting the most suitable one. Type: one of “scx_beerland”, “scx_bpfland”, “scx_chaos”, “scx_cosmos”, “scx_central”, “scx_flash”, “scx_flatcg”, “scx_lavd”, “scx_layered”, “scx_mitosis”, “scx_nest”, “scx_p2dq”, “scx_pair”, “scx_prev”, “scx_qmap”, “scx_rlfifo”, “scx_rustland”, “scx_rusty”, “scx_sdt”, “scx_simple”, “scx_tickless”, “scx_userland”, “scx_wd40” Default: "scx_rustland" Example: "scx_bpfland" Declared by: <nixpkgs/nixos/modules/services/scheduling/scx.nix>
