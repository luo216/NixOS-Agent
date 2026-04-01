---
module: security.duosec
option_count: 12
source: options.html
---

# security.duosec

## security.duosec.acceptEnvFactor

Look for factor selection or passcode in the $DUO_PASSCODE environment variable before prompting the user for input. When $DUO_PASSCODE is non-empty, it will override autopush. The SSH client will need SendEnv DUO_PASSCODE in its configuration, and the SSH server will similarly need AcceptEnv DUO_PASSCODE. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/duosec.nix>

## security.duosec.allowTcpForwarding

By default, when SSH forwarding, enabling Duo Security will disable TCP forwarding. By enabling this, you potentially undermine some of the SSH based login security. Note this is not needed if you use PAM. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/duosec.nix>

## security.duosec.autopush

If true, Duo Unix will automatically send a push login request to the user’s phone, falling back on a phone call if push is unavailable. If false, the user will be prompted to choose an authentication method. When configured with autopush = yes, we recommend setting prompts = 1. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/duosec.nix>

## security.duosec.failmode

On service or configuration errors that prevent Duo authentication, fail “safe” (allow access) or “secure” (deny access). The default is “safe”. Type: one of “safe”, “secure” Default: "safe" Declared by: <nixpkgs/nixos/modules/security/duosec.nix>

## security.duosec.fallbackLocalIP

Duo Unix reports the IP address of the authorizing user, for the purposes of authorization and whitelisting. If Duo Unix cannot detect the IP address of the client, setting fallbackLocalIP = yes will cause Duo Unix to send the IP address of the server it is running on. If you are using IP whitelisting, enabling this option could cause unauthorized logins if the local IP is listed in the whitelist. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/duosec.nix>

## security.duosec.groups

If specified, Duo authentication is required only for users whose primary group or supplementary group list matches one of the space-separated pattern lists. Refer to https://duo.com/docs/duounix for details. Type: string Default: "" Example: "users,!wheel,!*admin guests" Declared by: <nixpkgs/nixos/modules/security/duosec.nix>

## security.duosec.host

Duo API hostname. Type: string Declared by: <nixpkgs/nixos/modules/security/duosec.nix>

## security.duosec.integrationKey

Integration key. Type: string Declared by: <nixpkgs/nixos/modules/security/duosec.nix>

## security.duosec.motd

Print the contents of /etc/motd to screen after a successful login. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/duosec.nix>

## security.duosec.prompts

If a user fails to authenticate with a second factor, Duo Unix will prompt the user to authenticate again. This option sets the maximum number of prompts that Duo Unix will display before denying access. Must be 1, 2, or 3. Default is 3. For example, when prompts = 1, the user will have to successfully authenticate on the first prompt, whereas if prompts = 2, if the user enters incorrect information at the initial prompt, he/she will be prompted to authenticate again. When configured with autopush = true, we recommend setting prompts = 1. Type: one of 1, 2, 3 Default: 3 Declared by: <nixpkgs/nixos/modules/security/duosec.nix>

## security.duosec.pushinfo

Include information such as the command to be executed in the Duo Push message. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/duosec.nix>

## security.duosec.secretKeyFile

A file containing your secret key. The security of your Duo application is tied to the security of your secret key. Type: null or absolute path Default: null Example: "/run/keys/duo-skey" Declared by: <nixpkgs/nixos/modules/security/duosec.nix>
