---
module: services.sssd
option_count: 6
source: options.html
---

# services.sssd

## services.sssd.enable

Whether to enable the System Security Services Daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/sssd.nix>

## services.sssd.config

Contents of sssd.conf. Type: strings concatenated with “\n” Default: "" Example: '' [sssd] services = nss, pam domains = shadowutils [nss] [pam] [domain/shadowutils] id_provider = proxy proxy_lib_name = files auth_provider = proxy proxy_pam_target = sssd-shadowutils proxy_fast_alias = True '' Declared by: <nixpkgs/nixos/modules/services/misc/sssd.nix>

## services.sssd.environmentFile

Environment file as defined in systemd.exec(5). Secrets may be passed to the service without adding them to the world-readable Nix store, by specifying placeholder variables as the option value in Nix and setting these variables accordingly in the environment file. # snippet of sssd-related config [domain/LDAP] ldap_default_authtok = $SSSD_LDAP_DEFAULT_AUTHTOK # contents of the environment file SSSD_LDAP_DEFAULT_AUTHTOK=verysecretpassword Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/sssd.nix>

## services.sssd.kcm

Whether to use SSS as a Kerberos Cache Manager (KCM). Kerberos will be configured to cache credentials in SSS. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/sssd.nix>

## services.sssd.settings

Contents of sssd.conf. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { "domain/shadowutils" = { auth_provider = "proxy"; id_provider = "proxy"; proxy_fast_alias = true; proxy_lib_name = "files"; proxy_pam_target = "sssd-shadowutils"; }; nss = { }; pam = { }; sssd = { domains = "shadowutils"; services = "nss, pam"; }; } Declared by: <nixpkgs/nixos/modules/services/misc/sssd.nix>

## services.sssd.sshAuthorizedKeysIntegration

Whether to make sshd look up authorized keys from SSS. For this to work, the ssh SSS service must be enabled in the sssd configuration. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/sssd.nix>
