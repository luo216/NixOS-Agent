---
module: virtualisation.vmware.host
option_count: 4
source: options.html
---

# virtualisation.vmware.host

## virtualisation.vmware.host.enable

This enables VMware host virtualisation for running VMs. Important vmware-vmx will cause kcompactd0 due to Transparent Hugepages feature in kernel. Apply [ "transparent_hugepage=never" ] in option boot.kernelParams to disable them. Note If that didn’t work disable TRANSPARENT_HUGEPAGE, COMPACTION configs and recompile kernel. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/vmware-host.nix>

## virtualisation.vmware.host.package

The vmware-workstation package to use. Type: package Default: pkgs.vmware-workstation Declared by: <nixpkgs/nixos/modules/virtualisation/vmware-host.nix>

## virtualisation.vmware.host.extraConfig

Add extra config to /etc/vmware/config Type: strings concatenated with “\n” Default: "" Example: '' # Allow unsupported device's OpenGL and Vulkan acceleration for guest vGPU mks.gl.allowUnsupportedDrivers = "TRUE" mks.vk.allowUnsupportedDevices = "TRUE" '' Declared by: <nixpkgs/nixos/modules/virtualisation/vmware-host.nix>

## virtualisation.vmware.host.extraPackages

Extra packages to be used with VMware host. Type: list of package Default: [ ] Example: "with pkgs; [ ntfs3g ]" Declared by: <nixpkgs/nixos/modules/virtualisation/vmware-host.nix>
