---
module: services.slurm
option_count: 15
source: options.html
---

# services.slurm

## services.slurm.enableSrunX11

If enabled srun will accept the option “–x11” to allow for X11 forwarding from within an interactive session or a batch job. This activates the slurm-spank-x11 module. Note that this option also enables services.openssh.forwardX11 on the client. This option requires slurm to be compiled without native X11 support. The default behavior is to re-compile the slurm package with native X11 support disabled if this option is set to true. To use the native X11 support add PrologFlags=X11 in extraConfig. Note that this method will only work RSA SSH host keys. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>

## services.slurm.enableStools

Whether to provide a slurm.conf file. Enable this option if you do not run a slurm daemon on this host (i.e. server.enable and client.enable are false) but you still want to run slurm commands from this host. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>

## services.slurm.package

The slurm package to use. Type: package Default: pkgs.slurm Example: slurm-full Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>

## services.slurm.clusterName

Necessary to distinguish accounting records in a multi-cluster environment. Type: string Default: "default" Example: "myCluster" Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>

## services.slurm.controlAddr

Name that ControlMachine should be referred to in establishing a communications path. Type: null or string Default: config.services.slurm.controlMachine Example: null Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>

## services.slurm.controlMachine

The short hostname of the machine where SLURM control functions are executed (i.e. the name returned by the command “hostname -s”, use “tux001” rather than “tux001.my.com”). Type: null or string Default: null Example: null Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>

## services.slurm.extraCgroupConfig

Extra configuration for cgroup.conf. This file is used when procTrackType=proctrack/cgroup. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>

## services.slurm.extraConfig

Extra configuration options that will be added verbatim at the end of the slurm configuration file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>

## services.slurm.extraConfigPaths

Slurm expects config files for plugins in the same path as slurm.conf. Add extra nix store paths that should be merged into same directory as slurm.conf. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>

## services.slurm.extraPlugstackConfig

Extra configuration that will be added to the end of plugstack.conf. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>

## services.slurm.nodeName

Name that SLURM uses to refer to a node (or base partition for BlueGene systems). Typically this would be the string that “/bin/hostname -s” returns. Note that now you have to write node’s parameters after the name. Type: list of string Default: [ ] Example: [ "linux[1-32] CPUs=1 State=UNKNOWN" ]; Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>

## services.slurm.partitionName

Name by which the partition may be referenced. Note that now you have to write the partition’s parameters after the name. Type: list of string Default: [ ] Example: [ "debug Nodes=linux[1-32] Default=YES MaxTime=INFINITE State=UP" ]; Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>

## services.slurm.procTrackType

Plugin to be used for process tracking on a job step basis. The slurmd daemon uses this mechanism to identify all processes which are children of processes it spawns for a user job step. Type: string Default: "proctrack/linuxproc" Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>

## services.slurm.stateSaveLocation

Directory into which the Slurm controller, slurmctld, saves its state. Type: string Default: "/var/spool/slurmctld" Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>

## services.slurm.user

Set this option when you want to run the slurmctld daemon as something else than the default slurm user “slurm”. Note that the UID of this user needs to be the same on all nodes. Type: string Default: "slurm" Declared by: <nixpkgs/nixos/modules/services/computing/slurm/slurm.nix>
