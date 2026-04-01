---
module: services.boinc
option_count: 5
source: options.html
---

# services.boinc

## services.boinc.enable

Whether to enable the BOINC distributed computing client. If this option is set to true, the boinc_client daemon will be run as a background service. The boinccmd command can be used to control the daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/computing/boinc/client.nix>

## services.boinc.package

The boinc package to use. Type: package Default: pkgs.boinc Example: boinc-headless Declared by: <nixpkgs/nixos/modules/services/computing/boinc/client.nix>

## services.boinc.allowRemoteGuiRpc

If set to true, any remote host can connect to and control this BOINC client (subject to password authentication). If instead set to false, only the hosts listed in dataDir/remote_hosts.cfg will be allowed to connect. See also: https://boinc.berkeley.edu/wiki/Controlling_BOINC_remotely#Remote_access Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/computing/boinc/client.nix>

## services.boinc.dataDir

The directory in which to store BOINC’s configuration and data files. Type: absolute path Default: "/var/lib/boinc" Declared by: <nixpkgs/nixos/modules/services/computing/boinc/client.nix>

## services.boinc.extraEnvPackages

Additional packages to make available in the environment in which BOINC will run. Common choices are: pkgs.virtualbox: The VirtualBox virtual machine framework. Required by some BOINC projects, such as ATLAS@home. pkgs.ocl-icd: OpenCL infrastructure library. Required by BOINC projects that use OpenCL, in addition to a device-specific OpenCL driver. pkgs.linuxPackages.nvidia_x11: Provides CUDA libraries. Required by BOINC projects that use CUDA. Note that this requires an NVIDIA graphics device to be present on the system. Also provides OpenCL drivers for NVIDIA GPUs; pkgs.ocl-icd is also needed in this case. Type: list of package Default: [ ] Example: [ pkgs.virtualbox ] Declared by: <nixpkgs/nixos/modules/services/computing/boinc/client.nix>
