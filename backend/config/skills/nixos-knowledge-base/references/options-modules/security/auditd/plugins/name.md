---
module: security.auditd.plugins.<name>
option_count: 7
source: options.html
---

# security.auditd.plugins.<name>

## security.auditd.plugins.<name>.active

Whether to enable Whether to enable this plugin. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/auditd.nix>

## security.auditd.plugins.<name>.args

This allows you to pass arguments to the child program. Generally plugins do not take arguments and have their own config file that instructs them how they should be configured. Type: null or (list of non-empty string) Default: null Declared by: <nixpkgs/nixos/modules/security/auditd.nix>

## security.auditd.plugins.<name>.direction

The option is dictated by the plugin. In or out are the only choices. You cannot make a plugin operate in a way it wasn’t designed just by changing this option. This option is to give a clue to the event dispatcher about which direction events flow. Note Inbound events are not supported yet. Type: one of “in”, “out” Default: "out" Declared by: <nixpkgs/nixos/modules/security/auditd.nix>

## security.auditd.plugins.<name>.format

Binary passes the data exactly as the audit event dispatcher gets it from the audit daemon. The string option tells the dispatcher to completely change the event into a string suitable for parsing with the audit parsing library. Type: one of “binary”, “string” Default: "string" Declared by: <nixpkgs/nixos/modules/security/auditd.nix>

## security.auditd.plugins.<name>.path

This is the absolute path to the plugin executable. Type: absolute path Declared by: <nixpkgs/nixos/modules/security/auditd.nix>

## security.auditd.plugins.<name>.settings

Plugin-specific config file to link to /etc/audit/<plugin>.conf Type: null or (open submodule of attribute set of (null or boolean or non-empty string or absolute path or signed integer)) Default: null Declared by: <nixpkgs/nixos/modules/security/auditd.nix>

## security.auditd.plugins.<name>.type

This tells the dispatcher how the plugin wants to be run. There is only one valid option, always, which means the plugin is external and should always be run. The default is always since there are no more builtin plugins. Type: value “always” (singular enum) (read only) Default: "always" Declared by: <nixpkgs/nixos/modules/security/auditd.nix>
