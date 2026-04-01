---
module: services.bacula-sd.device.<name>
option_count: 3
source: options.html
---

# services.bacula-sd.device.<name>

## services.bacula-sd.device.<name>.archiveDevice

The specified name-string gives the system file name of the storage device managed by this storage daemon. This will usually be the device file name of a removable storage device (tape drive), for example /dev/nst0 or /dev/rmt/0mbn. For a DVD-writer, it will be for example /dev/hdc. It may also be a directory name if you are archiving to disk storage. In this case, you must supply the full absolute path to the directory. When specifying a tape device, it is preferable that the “non-rewind” variant of the device file name be given. Type: string Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-sd.device.<name>.extraDeviceConfig

Extra configuration to be passed in Device directive. Type: strings concatenated with “\n” Default: "" Example: '' LabelMedia = yes Random Access = no AutomaticMount = no RemovableMedia = no MaximumOpenWait = 60 AlwaysOpen = no '' Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-sd.device.<name>.mediaType

The specified name-string names the type of media supported by this device, for example, DLT7000. Media type names are arbitrary in that you set them to anything you want, but they must be known to the volume database to keep track of which storage daemons can read which volumes. In general, each different storage type should have a unique Media Type associated with it. The same name-string must appear in the appropriate Storage resource definition in the Director’s configuration file. Even though the names you assign are arbitrary (i.e. you choose the name you want), you should take care in specifying them because the Media Type is used to determine which storage device Bacula will select during restore. Thus you should probably use the same Media Type specification for all drives where the Media can be freely interchanged. This is not generally an issue if you have a single Storage daemon, but it is with multiple Storage daemons, especially if they have incompatible media. For example, if you specify a Media Type of DDS-4 then during the restore, Bacula will be able to choose any Storage Daemon that handles DDS-4. If you have an autochanger, you might want to name the Media Type in a way that is unique to the autochanger, unless you wish to possibly use the Volumes in other drives. You should also ensure to have unique Media Type names if the Media is not compatible between drives. This specification is required for all devices. In addition, if you are using disk storage, each Device resource will generally have a different mount point or directory. In order for Bacula to select the correct Device resource, each one must have a unique Media Type. Type: string Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>
