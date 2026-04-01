---
module: security.chromiumSuidSandbox
option_count: 1
source: options.html
---

# security.chromiumSuidSandbox

## security.chromiumSuidSandbox.enable

Whether to install the Chromium SUID sandbox which is an executable that Chromium may use in order to achieve sandboxing. If you get the error “The SUID sandbox helper binary was found, but is not configured correctly.”, turning this on might help. Also, if the URL chrome://sandbox tells you that “You are not adequately sandboxed!”, turning this on might resolve the issue. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/chromium-suid-sandbox.nix>
