---
module: services.bacula-sd.autochanger.<name>
option_count: 4
source: options.html
---

# services.bacula-sd.autochanger.<name>

## services.bacula-sd.autochanger.<name>.changerCommand

The name-string specifies an external program to be called that will automatically change volumes as required by Bacula. Normally, this directive will be specified only in the AutoChanger resource, which is then used for all devices. However, you may also specify the different Changer Command in each Device resource. Most frequently, you will specify the Bacula supplied mtx-changer script as follows: "/path/mtx-changer %c %o %S %a %d" and you will install the mtx on your system (found in the depkgs release). An example of this command is in the default bacula-sd.conf file. For more details on the substitution characters that may be specified to configure your autochanger please see the AutochangersAutochangersChapter chapter of this manual. For FreeBSD users, you might want to see one of the several chio scripts in examples/autochangers. Type: string Default: "/etc/bacula/mtx-changer %c %o %S %a %d" Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-sd.autochanger.<name>.changerDevice

The specified name-string must be the generic SCSI device name of the autochanger that corresponds to the normal read/write Archive Device specified in the Device resource. This generic SCSI device name should be specified if you have an autochanger or if you have a standard tape drive and want to use the Alert Command (see below). For example, on Linux systems, for an Archive Device name of /dev/nst0, you would specify /dev/sg0 for the Changer Device name. Depending on your exact configuration, and the number of autochangers or the type of autochanger, what you specify here can vary. This directive is optional. See the Using AutochangersAutochangersChapter chapter of this manual for more details of using this and the following autochanger directives. Type: string Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-sd.autochanger.<name>.devices

Type: list of string Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-sd.autochanger.<name>.extraAutochangerConfig

Extra configuration to be passed in Autochanger directive. Type: strings concatenated with “\n” Default: "" Example: '' '' Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>
