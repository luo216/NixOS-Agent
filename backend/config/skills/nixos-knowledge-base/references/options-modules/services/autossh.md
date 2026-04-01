---
module: services.autossh
option_count: 1
source: options.html
---

# services.autossh

## services.autossh.sessions

List of AutoSSH sessions to start as systemd services. Each service is named ‘autossh-{session.name}’. Type: list of (submodule) Default: [ ] Example: [ { extraArguments = "-N -D4343 billremote@socks.host.net"; monitoringPort = 20000; name = "socks-peer"; user = "bill"; } ] Declared by: <nixpkgs/nixos/modules/services/networking/autossh.nix>
