---
module: services.taskserver.pki.auto
option_count: 1
source: options.html
---

# services.taskserver.pki.auto

## services.taskserver.pki.auto.bits

The bit size for generated keys. Note This option is for the automatically handled CA and will be ignored if any of the services.taskserver.pki.manual.* options are set. Type: signed integer Default: 4096 Example: 2048 Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>
