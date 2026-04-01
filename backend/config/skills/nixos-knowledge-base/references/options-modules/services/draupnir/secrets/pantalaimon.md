---
module: services.draupnir.secrets.pantalaimon
option_count: 1
source: options.html
---

# services.draupnir.secrets.pantalaimon

## services.draupnir.secrets.pantalaimon.password

File containing the password for Draupnir’s Matrix account when used in conjunction with Pantalaimon to be used in place of services.draupnir.settings.pantalaimon.password. Warning Take note that upstream has limited Pantalaimon and E2EE support: https://the-draupnir-project.github.io/draupnir-documentation/bot/encryption and https://the-draupnir-project.github.io/draupnir-documentation/shared/dogfood#e2ee-support. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/matrix/draupnir.nix>
