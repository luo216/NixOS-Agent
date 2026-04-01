---
module: security.audit
option_count: 5
source: options.html
---

# security.audit

## security.audit.enable

Whether to enable the Linux audit system. The special lock value can be used to enable auditing and prevent disabling it until a restart. Be careful about locking this, as it will prevent you from changing your audit configuration until you restart. If possible, test your configuration using build-vm beforehand. Type: one of false, true, “lock” Default: false Declared by: <nixpkgs/nixos/modules/security/audit.nix>

## security.audit.backlogLimit

The maximum number of outstanding audit buffers allowed; exceeding this is considered a failure and handled in a manner specified by failureMode. Type: signed integer Default: 1024 Declared by: <nixpkgs/nixos/modules/security/audit.nix>

## security.audit.failureMode

How to handle critical errors in the auditing system Type: one of “silent”, “printk”, “panic” Default: "printk" Declared by: <nixpkgs/nixos/modules/security/audit.nix>

## security.audit.rateLimit

The maximum messages per second permitted before triggering a failure as specified by failureMode. Setting it to zero disables the limit. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/security/audit.nix>

## security.audit.rules

The ordered audit rules, with each string appearing as one line of the audit.rules file. Type: list of string Default: [ ] Example: [ "-a exit,always -F arch=b64 -S execve" ] Declared by: <nixpkgs/nixos/modules/security/audit.nix>
