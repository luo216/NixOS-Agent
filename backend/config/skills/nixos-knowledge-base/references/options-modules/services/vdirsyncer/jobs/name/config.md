---
module: services.vdirsyncer.jobs.<name>.config
option_count: 4
source: options.html
---

# services.vdirsyncer.jobs.<name>.config

## services.vdirsyncer.jobs.<name>.config.general

general configuration Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/vdirsyncer.nix>

## services.vdirsyncer.jobs.<name>.config.pairs

vdirsyncer pair configurations Type: attribute set of (attribute set) Default: { } Example: { my_contacts = { a = "my_cloud_contacts"; b = "my_local_contacts"; collections = [ "from a" ]; conflict_resolution = "a wins"; metadata = [ "color" "displayname" ]; }; }; Declared by: <nixpkgs/nixos/modules/services/networking/vdirsyncer.nix>

## services.vdirsyncer.jobs.<name>.config.statusPath

vdirsyncer’s status path Type: null or string Default: /var/lib/vdirsyncer/${attrName} Declared by: <nixpkgs/nixos/modules/services/networking/vdirsyncer.nix>

## services.vdirsyncer.jobs.<name>.config.storages

vdirsyncer storage configurations Type: attribute set of (attribute set) Default: { } Example: { my_cloud_contacts = { type = "carddav"; url = "https://dav.example.com/"; read_only = true; username = "user"; "password.fetch" = [ "command" "cat" "/etc/vdirsyncer/cloud.passwd" ]; }; my_local_contacts = { type = "carddav"; url = "https://localhost/"; username = "user"; "password.fetch" = [ "command" "cat" "/etc/vdirsyncer/local.passwd" ]; }; } Declared by: <nixpkgs/nixos/modules/services/networking/vdirsyncer.nix>
