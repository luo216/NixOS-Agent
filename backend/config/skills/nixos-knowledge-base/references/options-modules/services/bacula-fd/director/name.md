---
module: services.bacula-fd.director.<name>
option_count: 3
source: options.html
---

# services.bacula-fd.director.<name>

## services.bacula-fd.director.<name>.monitor

If Monitor is set to no, this director will have full access to this Storage daemon. If Monitor is set to yes, this director will only be able to fetch the current status of this Storage daemon. Please note that if this director is being used by a Monitor, we highly recommend to set this directive to yes to avoid serious security problems. Type: one of “no”, “yes” Default: "no" Example: "yes" Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-fd.director.<name>.password

Specifies the password that must be supplied for the default Bacula Console to be authorized. The same password must appear in the Director resource of the Console configuration file. For added security, the password is never passed across the network but instead a challenge response hash code created with the password. This directive is required. If you have either /dev/random or bc on your machine, Bacula will generate a random password during the configuration process, otherwise it will be left blank and you must manually supply it. The password is plain text. It is not generated through any special process but as noted above, it is better to use random text for security reasons. Type: string Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-fd.director.<name>.tls

TLS Options for the Director in this Configuration. Type: submodule Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>
