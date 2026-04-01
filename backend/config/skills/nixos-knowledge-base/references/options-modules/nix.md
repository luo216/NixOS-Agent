---
module: nix
option_count: 16
source: options.html
---

# nix

## nix.enable

Whether to enable Nix. Disabling Nix makes the system hard to modify and the Nix programs and configuration will not be made available by NixOS itself. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/system/nix-daemon.nix>

## nix.package

This option specifies the Nix package instance to use throughout the system. Type: package Default: pkgs.nix Declared by: <nixpkgs/nixos/modules/services/system/nix-daemon.nix>

## nix.buildMachines

This option lists the machines to be used if distributed builds are enabled (see nix.distributedBuilds). Nix will perform derivations on those machines via SSH by copying the inputs to the Nix store on the remote machine, starting the build, then copying the output back to the local Nix store. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/config/nix-remote-build.nix>

## nix.checkAllErrors

If enabled, checks the nix.conf parsing for any kind of error. When disabled, checks only for unknown settings. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/config/nix.nix>

## nix.checkConfig

If enabled, checks that Nix can parse the generated nix.conf. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/config/nix.nix>

## nix.daemonCPUSchedPolicy

Nix daemon process CPU scheduling policy. This policy propagates to build processes. other is the default scheduling policy for regular tasks. The batch policy is similar to other, but optimised for non-interactive tasks. idle is for extremely low-priority tasks that should only be run when no other task requires CPU time. Please note that while using the idle policy may greatly improve responsiveness of a system performing expensive builds, it may also slow down and potentially starve crucial configuration updates during load. idle may therefore be a sensible policy for systems that experience only intermittent phases of high CPU load, such as desktop or portable computers used interactively. Other systems should use the other or batch policy instead. For more fine-grained resource control, please refer to systemd.resource-control(5) and adjust systemd.services.nix-daemon directly. Type: one of “other”, “batch”, “idle” Default: "other" Example: "batch" Declared by: <nixpkgs/nixos/modules/services/system/nix-daemon.nix>

## nix.daemonGroup

Group to use to run the Nix daemon. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/system/nix-daemon.nix>

## nix.daemonIOSchedClass

Nix daemon process I/O scheduling class. This class propagates to build processes. best-effort is the default class for regular tasks. The idle class is for extremely low-priority tasks that should only perform I/O when no other task does. Please note that while using the idle scheduling class can improve responsiveness of a system performing expensive builds, it might also slow down or starve crucial configuration updates during load. idle may therefore be a sensible class for systems that experience only intermittent phases of high I/O load, such as desktop or portable computers used interactively. Other systems should use the best-effort class. Type: one of “best-effort”, “idle” Default: "best-effort" Example: "idle" Declared by: <nixpkgs/nixos/modules/services/system/nix-daemon.nix>

## nix.daemonIOSchedPriority

Nix daemon process I/O scheduling priority. This priority propagates to build processes. The supported priorities depend on the scheduling policy: With idle, priorities are not used in scheduling decisions. best-effort supports values in the range 0 (high) to 7 (low). Type: signed integer Default: 4 Example: 1 Declared by: <nixpkgs/nixos/modules/services/system/nix-daemon.nix>

## nix.daemonUser

User to use to run the Nix daemon. If this is not “root” then the Nix daemon will set several settings to preserve functionality. When setting this option, you must also set nix.daemonGroup. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/system/nix-daemon.nix>

## nix.distributedBuilds

Whether to distribute builds to the machines listed in nix.buildMachines. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/nix-remote-build.nix>

## nix.extraOptions

Additional text appended to nix.conf. Type: strings concatenated with “\n” Default: "" Example: '' keep-outputs = true keep-derivations = true '' Declared by: <nixpkgs/nixos/modules/config/nix.nix>

## nix.nixPath

The default Nix expression search path, used by the Nix evaluator to look up paths enclosed in angle brackets (e.g. <nixpkgs>). Type: list of string Default: '' if nix.channel.enable then [ "nixpkgs=/nix/var/nix/profiles/per-user/root/channels/nixos" "nixos-config=/etc/nixos/configuration.nix" "/nix/var/nix/profiles/per-user/root/channels" ] else []; '' Declared by: <nixpkgs/nixos/modules/config/nix-channel.nix>

## nix.nrBuildUsers

Number of nixbld user accounts created to perform secure concurrent builds. If you receive an error message saying that “all build users are currently in use”, you should increase this value. Type: signed integer Declared by: <nixpkgs/nixos/modules/services/system/nix-daemon.nix>

## nix.registry

A system-wide flake registry. See nix3-registry(1) for more information. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/config/nix-flakes.nix>

## nix.settings

Configuration for Nix, see https://nixos.org/manual/nix/stable/command-ref/conf-file.html or nix.conf(5) for available options. The value declared here will be translated directly to the key-value pairs Nix expects. You can use nix-instantiate --eval --strict '<nixpkgs/nixos>' -A config.nix.settings to view the current value. By default it is empty. Nix configurations defined under nix.* will be translated and applied to this option. In addition, configuration specified in nix.extraOptions will be appended verbatim to the resulting config file. Type: open submodule of attribute set of (Nix config atom (null, bool, int, float, str, path or package) or list of (Nix config atom (null, bool, int, float, str, path or package))) Default: { } Example: { use-sandbox = true; show-trace = true; sandbox-paths = [ "/bin/sh=${pkgs.busybox-sandbox-shell.out}/bin/busybox" ]; } Declared by: <nixpkgs/nixos/modules/config/nix.nix>
