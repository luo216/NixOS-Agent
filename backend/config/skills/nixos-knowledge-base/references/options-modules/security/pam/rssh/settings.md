---
module: security.pam.rssh.settings
option_count: 1
source: options.html
---

# security.pam.rssh.settings

## security.pam.rssh.settings.auth_key_file

Path to file with trusted public keys in OpenSSH’s authorized_keys format. The following variables are expanded to the respective PAM items: service: PAM_SERVICE, the service name, user: PAM_USER, the username of the entity under whose identity service will be given, tty: PAM_TTY, the terminal name, rhost: PAM_RHOST, the requesting hostname, and ruser: PAM_RUSER, the requesting entity. These PAM items are explained in pam_get_item(3). Variables may be specified as $var, ${var} or ${var:defaultValue}. Note Specifying user-writeable files here results in an insecure configuration: a malicious process can then edit such an authorized_keys file and bypass the ssh-agent-based authentication. This option is ignored if security.pam.rssh.settings.authorized_keys_command is set. If both this option and security.pam.rssh.settings.authorized_keys_command are unset, the keys will be read from ${HOME}/.ssh/authorized_keys, which should be considered insecure. Type: null or non-empty string Default: "/etc/ssh/authorized_keys.d/$ruser" Declared by: <nixpkgs/nixos/modules/security/pam.nix>
