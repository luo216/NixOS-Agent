---
module: services.amazon-cloudwatch-agent
option_count: 8
source: options.html
---

# services.amazon-cloudwatch-agent

## services.amazon-cloudwatch-agent.enable

Whether to enable Amazon CloudWatch Agent. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/amazon-cloudwatch-agent.nix>

## services.amazon-cloudwatch-agent.package

The amazon-cloudwatch-agent package to use. Type: package Default: pkgs.amazon-cloudwatch-agent Declared by: <nixpkgs/nixos/modules/services/monitoring/amazon-cloudwatch-agent.nix>

## services.amazon-cloudwatch-agent.commonConfiguration

See commonConfigurationFile. commonConfigurationFile takes precedence over commonConfiguration. Type: TOML value Default: { } Example: { credentials = { shared_credential_file = "/path/to/credentials"; shared_credential_profile = "profile_name"; }; proxy = { http_proxy = "http_url"; https_proxy = "https_url"; no_proxy = "domain"; }; } Declared by: <nixpkgs/nixos/modules/services/monitoring/amazon-cloudwatch-agent.nix>

## services.amazon-cloudwatch-agent.commonConfigurationFile

Amazon CloudWatch Agent common configuration. See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-commandline-fleet.html#CloudWatch-Agent-profile-instance-first for supported values. commonConfigurationFile takes precedence over commonConfiguration. Note: Restricted evaluation blocks access to paths outside the Nix store. This means detecting content changes for mutable paths (i.e. not input or content-addressed) can’t be done. As a result, nixos-rebuild won’t reload/restart the systemd unit when mutable path contents change. systemctl restart amazon-cloudwatch-agent.service must be used instead. Type: absolute path Default: tomlFormat.generate "common-config.toml" cfg.commonConfiguration Example: "/etc/amazon-cloudwatch-agent/amazon-cloudwatch-agent.json" Declared by: <nixpkgs/nixos/modules/services/monitoring/amazon-cloudwatch-agent.nix>

## services.amazon-cloudwatch-agent.configuration

See configurationFile. configurationFile takes precedence over configuration. Type: JSON value Default: { } Example: { agent = { logfile = "/var/log/amazon-cloudwatch-agent/amazon-cloudwatch-agent.log"; metrics_collection_interval = 10; }; logs = { force_flush_interval = 15; log_stream_name = "log_stream_name"; logs_collected = { files = { collect_list = [ { file_path = "/var/log/amazon-cloudwatch-agent/amazon-cloudwatch-agent.log"; log_group_name = "amazon-cloudwatch-agent.log"; log_stream_name = "{instance_id}"; timezone = "UTC"; } ]; }; }; }; metrics = { metrics_collected = { cpu = { append_dimensions = { customized_dimension_key_1 = "customized_dimension_value_1"; customized_dimension_key_2 = "customized_dimension_value_2"; }; measurement = [ { name = "cpu_usage_idle"; rename = "CPU_USAGE_IDLE"; unit = "Percent"; } { name = "cpu_usage_nice"; unit = "Percent"; } "cpu_usage_guest" ]; metrics_collection_interval = 10; resource = [ "*" ]; totalcpu = false; }; }; namespace = "MyCustomNamespace"; }; traces = { traces_collected = { oltp = { }; xray = { }; }; }; } Declared by: <nixpkgs/nixos/modules/services/monitoring/amazon-cloudwatch-agent.nix>

## services.amazon-cloudwatch-agent.configurationFile

Amazon CloudWatch Agent configuration file. See https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-Configuration-File-Details.html for supported values. The following options aren’t supported: agent.run_as_user Use user instead. configurationFile takes precedence over configuration. Note: Restricted evaluation blocks access to paths outside the Nix store. This means detecting content changes for mutable paths (i.e. not input or content-addressed) can’t be done. As a result, nixos-rebuild won’t reload/restart the systemd unit when mutable path contents change. systemctl restart amazon-cloudwatch-agent.service must be used instead. Type: absolute path Default: jsonFormat.generate "amazon-cloudwatch-agent.json" cfg.configuration Example: "/etc/amazon-cloudwatch-agent/amazon-cloudwatch-agent.json" Declared by: <nixpkgs/nixos/modules/services/monitoring/amazon-cloudwatch-agent.nix>

## services.amazon-cloudwatch-agent.mode

Amazon CloudWatch Agent mode. Indicates whether the agent is running in EC2 (“ec2”), on-premises (“onPremise”), or if it should guess based on metadata endpoints like IMDS or the ECS task metadata endpoint (“auto”). Type: string Default: "auto" Example: "onPremise" Declared by: <nixpkgs/nixos/modules/services/monitoring/amazon-cloudwatch-agent.nix>

## services.amazon-cloudwatch-agent.user

The user that runs the Amazon CloudWatch Agent. Type: string Default: "root" Example: "amazon-cloudwatch-agent" Declared by: <nixpkgs/nixos/modules/services/monitoring/amazon-cloudwatch-agent.nix>
