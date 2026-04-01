---
module: security.auditd
option_count: 3
source: options.html
---

# security.auditd

## security.auditd.enable

Whether to enable the Linux Audit daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/auditd.nix>

## security.auditd.plugins

Plugin definitions to register with auditd Type: attribute set of (submodule) Default: { af_unix = { path = lib.getExe' pkgs.audit "audisp-af_unix"; args = [ "0640" "/var/run/audispd_events" "string" ]; format = "binary"; }; remote = { path = lib.getExe' pkgs.audit "audisp-remote"; settings = { }; }; filter = { path = lib.getExe' pkgs.audit "audisp-filter"; args = [ "allowlist" "/etc/audit/audisp-filter.conf" (lib.getExe' pkgs.audit "audisp-syslog") "LOG_USER" "LOG_INFO" "interpret" ]; settings = { }; }; syslog = { path = lib.getExe' pkgs.audit "audisp-syslog"; args = [ "LOG_INFO" ]; }; } Declared by: <nixpkgs/nixos/modules/security/auditd.nix>

## security.auditd.settings

auditd configuration file contents. See {auditd.conf} for supported values. Type: open submodule of attribute set of (null or boolean or non-empty string or absolute path or signed integer) Default: { } Declared by: <nixpkgs/nixos/modules/security/auditd.nix>
