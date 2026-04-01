---
module: users.users.<name>.openssh
option_count: 1
source: options.html
---

# users.users.<name>.openssh

## users.users.<name>.openssh.authorizedPrincipals

A list of verbatim principal names that should be added to the user’s authorized principals. Type: list of (optionally newline-terminated) single-line string Default: [ ] Example: [ "example@host" "foo@bar" ] Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>
