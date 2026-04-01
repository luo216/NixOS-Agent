---
module: services.hercules-ci-agent.settings
option_count: 9
source: options.html
---

# services.hercules-ci-agent.settings

## services.hercules-ci-agent.settings.apiBaseUrl

API base URL that the agent will connect to. When using Hercules CI Enterprise, set this to the URL where your Hercules CI server is reachable. Type: string Default: "https://hercules-ci.com" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hercules-ci-agent/common.nix>

## services.hercules-ci-agent.settings.baseDirectory

State directory (secrets, work directory, etc) for agent Type: absolute path Default: "/var/lib/hercules-ci-agent" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hercules-ci-agent/common.nix>

## services.hercules-ci-agent.settings.binaryCachesPath

Path to a JSON file containing binary cache secret keys. As these values are confidential, they should not be in the store, but copied over using other means, such as agenix, NixOps deployment.keys, or manual installation. The format is described on https://docs.hercules-ci.com/hercules-ci-agent/binary-caches-json/. Type: absolute path Default: staticSecretsDirectory + "/binary-caches.json" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hercules-ci-agent/common.nix>

## services.hercules-ci-agent.settings.clusterJoinTokenPath

Location of the cluster-join-token.key file. You can retrieve the contents of the file when creating a new agent via https://hercules-ci.com/dashboard. As this value is confidential, it should not be in the store, but installed using other means, such as agenix, NixOps deployment.keys, or manual installation. The contents of the file are used for authentication between the agent and the API. Type: absolute path Default: staticSecretsDirectory + "/cluster-join-token.key" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hercules-ci-agent/common.nix>

## services.hercules-ci-agent.settings.concurrentTasks

Number of tasks to perform simultaneously. A task is a single derivation build, an evaluation or an effect run. At minimum, you need 2 concurrent tasks for x86_64-linux in your cluster, to allow for import from derivation. concurrentTasks can be around the CPU core count or lower if memory is the bottleneck. The optimal value depends on the resource consumption characteristics of your workload, including memory usage and in-task parallelism. This is typically determined empirically. When scaling, it is generally better to have a double-size machine than two machines, because each split of resources causes inefficiencies; particularly with regards to build latency because of extra downloads. Type: positive integer, meaning >0, or value “auto” (singular enum) Default: "auto", meaning equal to the number of CPU cores. Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hercules-ci-agent/common.nix>

## services.hercules-ci-agent.settings.labels

A key-value map of user data. This data will be available to organization members in the dashboard and API. The values can be of any TOML type that corresponds to a JSON type, but arrays can not contain tables/objects due to limitations of the TOML library. Values involving arrays of non-primitive types may not be representable currently. Type: TOML value Default: { agent.source = "..."; # One of "nixpkgs", "flake", "override" lib.version = "..."; pkgs.version = "..."; } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hercules-ci-agent/common.nix>

## services.hercules-ci-agent.settings.secretsJsonPath

Path to a JSON file containing secrets for effects. As these values are confidential, they should not be in the store, but copied over using other means, such as agenix, NixOps deployment.keys, or manual installation. The format is described on https://docs.hercules-ci.com/hercules-ci-agent/secrets-json/. Type: absolute path Default: staticSecretsDirectory + "/secrets.json" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hercules-ci-agent/common.nix>

## services.hercules-ci-agent.settings.staticSecretsDirectory

This is the default directory to look for statically configured secrets like cluster-join-token.key. See also clusterJoinTokenPath and binaryCachesPath for fine-grained configuration. Type: absolute path Default: baseDirectory + "/secrets" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hercules-ci-agent/common.nix>

## services.hercules-ci-agent.settings.workDirectory

The directory in which temporary subdirectories are created for task state. This includes sources for Nix evaluation. Type: absolute path Default: baseDirectory + "/work" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/hercules-ci-agent/common.nix>
