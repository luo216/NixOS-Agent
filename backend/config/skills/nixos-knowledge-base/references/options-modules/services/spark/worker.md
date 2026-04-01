---
module: services.spark.worker
option_count: 5
source: options.html
---

# services.spark.worker

## services.spark.worker.enable

Whether to enable Spark worker service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/spark/default.nix>

## services.spark.worker.extraEnvironment

Extra environment variables to pass to spark worker. Type: attribute set of string Default: { } Example: { SPARK_WORKER_CORES = 5; SPARK_WORKER_MEMORY = "2g"; } Declared by: <nixpkgs/nixos/modules/services/cluster/spark/default.nix>

## services.spark.worker.master

Address of the spark master. Type: string Default: "127.0.0.1:7077" Declared by: <nixpkgs/nixos/modules/services/cluster/spark/default.nix>

## services.spark.worker.restartIfChanged

Automatically restart worker service on config change. This can be set to false to defer restarts on clusters running critical applications. Please consider the security implications of inadvertently running an older version, and the possibility of unexpected behavior caused by inconsistent versions across a cluster when disabling this option. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/cluster/spark/default.nix>

## services.spark.worker.workDir

Spark worker work dir. Type: absolute path Default: "/var/lib/spark" Declared by: <nixpkgs/nixos/modules/services/cluster/spark/default.nix>
