---
module: users.users.<name>.openssh.authorizedKeys
option_count: 2
source: options.html
---

# users.users.<name>.openssh.authorizedKeys

## users.users.<name>.openssh.authorizedKeys.keyFiles

A list of files each containing one OpenSSH public key that should be added to the user’s authorized keys. The contents of the files are read at build time and added to a file that the SSH daemon reads in addition to the the user’s authorized_keys file. You can combine the keyFiles and keys options. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## users.users.<name>.openssh.authorizedKeys.keys

A list of verbatim OpenSSH public keys that should be added to the user’s authorized keys. The keys are added to a file that the SSH daemon reads in addition to the the user’s authorized_keys file. You can combine the keys and keyFiles options. Warning: If you are using NixOps then don’t use this option since it will replace the key required for deployment via ssh. Type: list of (optionally newline-terminated) single-line string Default: [ ] Example: [ "ssh-rsa AAAAB3NzaC1yc2etc/etc/etcjwrsh8e596z6J0l7 example@host" "ssh-ed25519 AAAAC3NzaCetcetera/etceteraJZMfk3QPfQ foo@bar" ] Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>
