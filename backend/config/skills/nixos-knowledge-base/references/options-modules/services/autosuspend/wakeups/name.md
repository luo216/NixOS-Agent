---
module: services.autosuspend.wakeups.<name>
option_count: 2
source: options.html
---

# services.autosuspend.wakeups.<name>

## services.autosuspend.wakeups.<name>.enabled

Whether to enable this wake-up check. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/misc/autosuspend.nix>

## services.autosuspend.wakeups.<name>.class

Name of the class implementing the check. If this option is not specified, the check’s name must represent a valid internal check class. Type: null or one of “Calendar”, “Command”, “File”, “Periodic”, “SystemdTimer”, “XPath”, “XPathDelta” Default: null Declared by: <nixpkgs/nixos/modules/services/misc/autosuspend.nix>
