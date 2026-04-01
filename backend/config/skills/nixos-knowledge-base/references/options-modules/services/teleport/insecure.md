---
module: services.teleport.insecure
option_count: 1
source: options.html
---

# services.teleport.insecure

## services.teleport.insecure.enable

Whether to enable starting teleport in insecure mode. This is dangerous! Sensitive information will be logged to console and certificates will not be verified. Proceed with caution! Teleport starts with disabled certificate validation on Proxy Service, validation still occurs on Auth Service . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/teleport.nix>
