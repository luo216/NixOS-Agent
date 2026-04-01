---
module: services.kanidm.provision
option_count: 9
source: options.html
---

# services.kanidm.provision

## services.kanidm.provision.enable

Whether to enable provisioning of groups, users and oauth2 resource servers. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.provision.acceptInvalidCerts

Whether to allow invalid certificates when provisioning the target instance. By default this is only allowed when the instanceUrl is localhost. This is dangerous when used with an external URL. Type: boolean Default: "hasPrefix \"https://localhost:\" cfg.provision.instanceUrl" Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.provision.adminPasswordFile

Path to a file containing the admin password for kanidm. Do NOT use a file from the nix store here! Type: null or absolute path Default: null Example: "/run/secrets/kanidm-admin-password" Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.provision.autoRemove

Determines whether deleting an entity in this provisioning config should automatically cause them to be removed from kanidm, too. This works because the provisioning tool tracks all entities it has ever created. If this is set to false, you need to explicitly specify present = false to delete an entity. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.provision.extraJsonFile

A JSON file for provisioning persons, groups & systems. Options set in this file take precedence over values set using the other options. The files get deeply merged, and deduplicated. The accepted JSON schema can be found at https://github.com/oddlama/kanidm-provision#json-schema. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.provision.groups

Provisioning of kanidm groups Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.provision.idmAdminPasswordFile

Path to a file containing the idm admin password for kanidm. Do NOT use a file from the nix store here! If this is not given but provisioning is enabled, the idm_admin password will be reset on each restart. Type: null or absolute path Default: null Example: "/run/secrets/kanidm-idm-admin-password" Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.provision.instanceUrl

The instance url to which the provisioning tool should connect. Type: string Default: "\"https://localhost:<port from serverSettings.bindaddress>\"" Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.provision.persons

Provisioning of kanidm persons Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>
