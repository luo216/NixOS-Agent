---
module: services.prometheus.scrapeConfigs.*.openstack_sd_configs.*
option_count: 18
source: options.html
---

# services.prometheus.scrapeConfigs.*.openstack_sd_configs.*

## services.prometheus.scrapeConfigs.*.openstack_sd_configs.*.all_tenants

Whether the service discovery should list all instances for all projects. It is only relevant for the ‘instance’ role and usually requires admin permissions. Defaults to false in prometheus when set to null. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.openstack_sd_configs.*.application_credential_id

The application_credential_id or application_credential_name fields are required if using an application credential to authenticate. Some providers allow you to create an application credential to authenticate rather than a password. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.openstack_sd_configs.*.application_credential_name

The application_credential_id or application_credential_name fields are required if using an application credential to authenticate. Some providers allow you to create an application credential to authenticate rather than a password. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.openstack_sd_configs.*.application_credential_secret

The application_credential_secret field is required if using an application credential to authenticate. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.openstack_sd_configs.*.availability

The availability of the endpoint to connect to. Must be one of public, admin or internal. Defaults to public in prometheus when set to null. Type: null or one of “public”, “admin”, “internal” Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.openstack_sd_configs.*.domain_id

At most one of domain_id and domain_name must be provided if using username with Identity V3. Otherwise, either are optional. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.openstack_sd_configs.*.domain_name

At most one of domain_id and domain_name must be provided if using username with Identity V3. Otherwise, either are optional. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.openstack_sd_configs.*.identity_endpoint

identity_endpoint specifies the HTTP endpoint that is required to work with the Identity API of the appropriate version. While it’s ultimately needed by all of the identity services, it will often be populated by a provider-level function. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.openstack_sd_configs.*.password

password for the Identity V2 and V3 APIs. Consult with your provider’s control panel to discover your account’s preferred method of authentication. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.openstack_sd_configs.*.port

The port to scrape metrics from. If using the public IP address, this must instead be specified in the relabeling rule. Defaults to 80 in prometheus when set to null. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.openstack_sd_configs.*.project_id

The project_id and project_name fields are optional for the Identity V2 API. Some providers allow you to specify a project_name instead of the project_id. Some require both. Your provider’s authentication policies will determine how these fields influence authentication. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.openstack_sd_configs.*.project_name

The project_id and project_name fields are optional for the Identity V2 API. Some providers allow you to specify a project_name instead of the project_id. Some require both. Your provider’s authentication policies will determine how these fields influence authentication. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.openstack_sd_configs.*.refresh_interval

Refresh interval to re-read the instance list. Defaults to 60s in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.openstack_sd_configs.*.region

The OpenStack Region. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.openstack_sd_configs.*.role

The OpenStack role of entities that should be discovered. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.openstack_sd_configs.*.tls_config

TLS configuration. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.openstack_sd_configs.*.userid

username is required if using Identity V2 API. Consult with your provider’s control panel to discover your account’s username. In Identity V3, either userid or a combination of username and domain_id or domain_name are needed. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.openstack_sd_configs.*.username

username is required if using Identity V2 API. Consult with your provider’s control panel to discover your account’s username. In Identity V3, either userid or a combination of username and domain_id or domain_name are needed. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
