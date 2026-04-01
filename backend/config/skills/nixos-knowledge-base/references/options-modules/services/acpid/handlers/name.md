---
module: services.acpid.handlers.<name>
option_count: 2
source: options.html
---

# services.acpid.handlers.<name>

## services.acpid.handlers.<name>.action

Shell commands to execute when the event is triggered. Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/hardware/acpid.nix>

## services.acpid.handlers.<name>.event

Event type. Type: string Example: "button/power.*" "button/lid.*" "ac_adapter.*" "button/mute.*" "button/volumedown.*" "cd/play.*" "cd/next.*" Declared by: <nixpkgs/nixos/modules/services/hardware/acpid.nix>
