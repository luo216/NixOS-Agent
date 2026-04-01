---
module: services.influxdb2.provision
option_count: 3
source: options.html
---

# services.influxdb2.provision

## services.influxdb2.provision.enable

Whether to enable initial database setup and provisioning. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.organizations

Organizations to provision. Type: attribute set of (submodule) Default: { } Example: { myorg = { description = "My organization"; buckets.mybucket = { description = "My bucket"; retention = 31536000; # 1 year }; auths.mytoken = { readBuckets = ["mybucket"]; tokenFile = "/run/secrets/mytoken"; }; }; } Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.users

Users to provision. Type: attribute set of (submodule) Default: { } Example: { # admin = {}; /* The initialSetup.username will automatically be added. */ myuser.passwordFile = "/run/secrets/myuser_password"; } Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>
