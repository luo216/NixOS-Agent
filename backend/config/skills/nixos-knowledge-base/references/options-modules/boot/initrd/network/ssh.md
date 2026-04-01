---
module: boot.initrd.network.ssh
option_count: 8
source: options.html
---

# boot.initrd.network.ssh

## boot.initrd.network.ssh.enable

Start SSH service during initrd boot. It can be used to debug failing boot on a remote server, enter pasphrase for an encrypted partition etc. Service is killed when stage-1 boot is finished. The sshd configuration is largely inherited from services.openssh. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/initrd-ssh.nix>

## boot.initrd.network.ssh.authorizedKeyFiles

Authorized keys taken from files for the root user on initrd. You can combine the authorizedKeyFiles and authorizedKeys options. Type: list of absolute path Default: config.users.users.root.openssh.authorizedKeys.keyFiles Declared by: <nixpkgs/nixos/modules/system/boot/initrd-ssh.nix>

## boot.initrd.network.ssh.authorizedKeys

Authorized keys for the root user on initrd. You can combine the authorizedKeys and authorizedKeyFiles options. Type: list of string Default: config.users.users.root.openssh.authorizedKeys.keys Example: [ "ssh-rsa AAAAB3NzaC1yc2etc/etc/etcjwrsh8e596z6J0l7 example@host" "ssh-ed25519 AAAAC3NzaCetcetera/etceteraJZMfk3QPfQ foo@bar" ] Declared by: <nixpkgs/nixos/modules/system/boot/initrd-ssh.nix>

## boot.initrd.network.ssh.extraConfig

Verbatim contents of sshd_config. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/system/boot/initrd-ssh.nix>

## boot.initrd.network.ssh.hostKeys

Specify SSH host keys to import into the initrd. To generate keys, use ssh-keygen(1) as root: ssh-keygen -t rsa -N "" -f /etc/secrets/initrd/ssh_host_rsa_key ssh-keygen -t ed25519 -N "" -f /etc/secrets/initrd/ssh_host_ed25519_key Warning Unless your bootloader supports initrd secrets, these keys are stored insecurely in the global Nix store. Do NOT use your regular SSH host private keys for this purpose or you’ll expose them to regular users! Additionally, even if your initrd supports secrets, if you’re using initrd SSH to unlock an encrypted disk then using your regular host keys exposes the private keys on your unencrypted boot partition. Type: list of (string or absolute path) Default: [ ] Example: [ "/etc/secrets/initrd/ssh_host_rsa_key" "/etc/secrets/initrd/ssh_host_ed25519_key" ] Declared by: <nixpkgs/nixos/modules/system/boot/initrd-ssh.nix>

## boot.initrd.network.ssh.ignoreEmptyHostKeys

Allow leaving config.boot.initrd.network.ssh.hostKeys empty, to deploy ssh host keys out of band. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/initrd-ssh.nix>

## boot.initrd.network.ssh.port

Port on which SSH initrd service should listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 22 Declared by: <nixpkgs/nixos/modules/system/boot/initrd-ssh.nix>

## boot.initrd.network.ssh.shell

Login shell of the remote user. Can be used to limit actions user can do. Type: null or string Default: "\"/bin/ash\"" Declared by: <nixpkgs/nixos/modules/system/boot/initrd-ssh.nix>
