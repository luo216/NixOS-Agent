---
module: services.syncthing.settings.folders.<name>
option_count: 9
source: options.html
---

# services.syncthing.settings.folders.<name>

## services.syncthing.settings.folders.<name>.enable

Whether to share this folder. This option is useful when you want to define all folders in one place, but not every machine should share all folders. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.settings.folders.<name>.copyOwnershipFromParent

On Unix systems, tries to copy file/folder ownership from the parent directory (the directory it’s located in). Requires running Syncthing as a privileged user, or granting it additional capabilities (e.g. CAP_CHOWN on Linux). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.settings.folders.<name>.devices

The devices this folder should be shared with. Each device must be defined in the devices option. A list of either strings or attribute sets, where values are device names or device configurations. Type: list of (string or (open submodule of (JSON value))) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.settings.folders.<name>.id

The ID of the folder. Must be the same on all devices. Type: string Default: "‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.settings.folders.<name>.ignorePatterns

Syncthing can be configured to ignore certain files in a folder using ignore patterns. Enter them as a list of strings, one string per line. See the Syncthing documentation for syntax: https://docs.syncthing.net/users/ignoring.html Patterns set using the WebUI will be overridden if you define this option. If you want to override the ignore patterns to be empty, use ignorePatterns = []. Deleting the ignorePatterns option will not remove the patterns from Syncthing automatically because patterns are only handled by the module if this option is defined. Either use ignorePatterns = [] before deleting the option or remove the patterns afterwards using the WebUI. Type: null or (list of string) Default: null Example: [ "// This is a comment" "*.part // Firefox downloads and other things" "*.crdownload // Chrom(ium|e) downloads" ] Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.settings.folders.<name>.label

The label of the folder. Type: string Default: "‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.settings.folders.<name>.path

The path to the folder which should be shared. Only absolute paths (starting with /) and paths relative to the user’s home directory (starting with ~/) are allowed. Type: string starting with / or ~/ Default: "‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.settings.folders.<name>.type

Controls how the folder is handled by Syncthing. See https://docs.syncthing.net/users/config.html#config-option-folder.type. Type: one of “sendreceive”, “sendonly”, “receiveonly”, “receiveencrypted” Default: "sendreceive" Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.settings.folders.<name>.versioning

How to keep changed/deleted files with Syncthing. There are 4 different types of versioning with different parameters. See https://docs.syncthing.net/users/versioning.html. Type: null or (open submodule of (JSON value)) Default: null Example: [ { versioning = { type = "simple"; params.keep = "10"; }; } { versioning = { type = "trashcan"; params.cleanoutDays = "1000"; }; } { versioning = { type = "staggered"; fsPath = "/syncthing/backup"; params = { cleanInterval = "3600"; maxAge = "31536000"; }; }; } { versioning = { type = "external"; params.versionsPath = pkgs.writers.writeBash "backup" '' folderpath="$1" filepath="$2" rm -rf "$folderpath/$filepath" ''; }; } ] Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>
