---
module: security.shadow
option_count: 1
source: options.html
---

# security.shadow

## security.shadow.enable

Enable the shadow authentication suite, which provides critical programs such as su, login, passwd. Note: This is currently experimental. Only disable this if you’re confident that you can recover your system if it breaks. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/programs/shadow.nix>
