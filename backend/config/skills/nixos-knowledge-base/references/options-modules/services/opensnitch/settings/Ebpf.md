---
module: services.opensnitch.settings.Ebpf
option_count: 1
source: options.html
---

# services.opensnitch.settings.Ebpf

## services.opensnitch.settings.Ebpf.ModulesPath

Configure eBPF modules path. Used when settings.ProcMonitorMethod is set to ebpf. Type: null or absolute path Default: if cfg.settings.ProcMonitorMethod == "ebpf" then "\\$\\{config.boot.kernelPackages.opensnitch-ebpf\\}/etc/opensnitchd" else null; Declared by: <nixpkgs/nixos/modules/services/security/opensnitch.nix>
