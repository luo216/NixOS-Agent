---
module: services.influxdb2.provision.organizations.<name>.auths.<name>
option_count: 10
source: options.html
---

# services.influxdb2.provision.organizations.<name>.auths.<name>

## services.influxdb2.provision.organizations.<name>.auths.<name>.allAccess

Grants all permissions in the associated organization. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.organizations.<name>.auths.<name>.description

Optional description for the API token. Note that the actual token will always be created with a descriptionregardless of whether this is given or not. The name is always added plus a unique suffix to later identify the token to track whether it has already been created. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.organizations.<name>.auths.<name>.id

A unique identifier for this authentication token. Since influx doesn’t store names for tokens, this will be hashed and appended to the description to identify the token. Type: string (read only) Default: "<a hash derived from org and name>" Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.organizations.<name>.auths.<name>.operator

Grants all permissions in all organizations. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.organizations.<name>.auths.<name>.present

Whether to ensure that this user is present or absent. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.organizations.<name>.auths.<name>.readBuckets

The organization’s buckets which should be allowed to be read Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.organizations.<name>.auths.<name>.readPermissions

The read permissions to include for this token. Access is usually granted only for resources in the associated organization. Available permissions are authorizations, buckets, dashboards, orgs, tasks, telegrafs, users, variables, secrets, labels, views, documents, notificationRules, notificationEndpoints, checks, dbrp, annotations, sources, scrapers, notebooks, remotes, replications. Refer to influx auth create --help for a full list with descriptions. buckets grants read access to all associated buckets. Use readBuckets to define more granular access permissions. Type: list of (one of “authorizations”, “buckets”, “dashboards”, “orgs”, “tasks”, “telegrafs”, “users”, “variables”, “secrets”, “labels”, “views”, “documents”, “notificationRules”, “notificationEndpoints”, “checks”, “dbrp”, “annotations”, “sources”, “scrapers”, “notebooks”, “remotes”, “replications”) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.organizations.<name>.auths.<name>.tokenFile

The token value. If not given, influx will automatically generate one. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.organizations.<name>.auths.<name>.writeBuckets

The organization’s buckets which should be allowed to be written Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.organizations.<name>.auths.<name>.writePermissions

The read permissions to include for this token. Access is usually granted only for resources in the associated organization. Available permissions are authorizations, buckets, dashboards, orgs, tasks, telegrafs, users, variables, secrets, labels, views, documents, notificationRules, notificationEndpoints, checks, dbrp, annotations, sources, scrapers, notebooks, remotes, replications. Refer to influx auth create --help for a full list with descriptions. buckets grants write access to all associated buckets. Use writeBuckets to define more granular access permissions. Type: list of (one of “authorizations”, “buckets”, “dashboards”, “orgs”, “tasks”, “telegrafs”, “users”, “variables”, “secrets”, “labels”, “views”, “documents”, “notificationRules”, “notificationEndpoints”, “checks”, “dbrp”, “annotations”, “sources”, “scrapers”, “notebooks”, “remotes”, “replications”) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>
