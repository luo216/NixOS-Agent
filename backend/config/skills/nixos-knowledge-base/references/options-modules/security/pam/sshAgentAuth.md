---
module: security.pam.sshAgentAuth
option_count: 2
source: options.html
---

# security.pam.sshAgentAuth

## security.pam.sshAgentAuth.enable

Whether to enable authenticating using a signature performed by the ssh-agent. This allows using SSH keys exclusively, instead of passwords, for instance on remote machines . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.sshAgentAuth.authorizedKeysFiles

A list of paths to files in OpenSSH’s authorized_keys format, containing the keys that will be trusted by the pam_ssh_agent_auth module. The following patterns are expanded when interpreting the path: %f and %H respectively expand to the fully-qualified and short hostname ; %u expands to the username ; ~ or %h expands to the user’s home directory. Note Specifying user-writeable files here result in an insecure configuration: a malicious process can then edit such an authorized_keys file and bypass the ssh-agent-based authentication. See issue #31611 Type: list of string Default: [ "/etc/ssh/authorized_keys.d/%u" ] Declared by: <nixpkgs/nixos/modules/security/pam.nix>
