---
module: services.logind.settings.Login
option_count: 1
source: options.html
---

# services.logind.settings.Login

## services.logind.settings.Login.KillUserProcesses

Specifies whether the processes of a user should be killed when the user logs out. If true, the scope unit corresponding to the session and all processes inside that scope will be terminated. If false, the scope is “abandoned” (see systemd.scope(5)), and processes are not killed. See logind.conf(5) for more details. Defaulted to false in nixpkgs because many tools that rely on persistent user processes—like tmux, screen, mosh, VNC, nohup, and more — would break by the systemd-default behavior. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/systemd/logind.nix>
