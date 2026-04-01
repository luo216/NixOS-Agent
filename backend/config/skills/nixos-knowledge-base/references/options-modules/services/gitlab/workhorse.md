---
module: services.gitlab.workhorse
option_count: 1
source: options.html
---

# services.gitlab.workhorse

## services.gitlab.workhorse.config

Configuration options to add to Workhorse’s configuration file. See https://gitlab.com/gitlab-org/gitlab/-/blob/master/workhorse/config.toml.example and https://docs.gitlab.com/ee/development/workhorse/configuration.html for examples and option documentation. Options containing secret data should be set to an attribute set containing the attribute _secret - a string pointing to a file containing the value the option should be set to. See the example to get a better picture of this: in the resulting configuration file, the object_storage.s3.aws_secret_access_key key will be set to the contents of the /var/keys/aws_secret_access_key file. Type: TOML value Default: { } Example: { object_storage.provider = "AWS"; object_storage.s3 = { aws_access_key_id = "AKIAXXXXXXXXXXXXXXXX"; aws_secret_access_key = { _secret = "/var/keys/aws_secret_access_key"; }; }; }; Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>
