---
module: services.spark.master
option_count: 4
source: options.html
---

# services.spark.master

## services.spark.master.enable

Whether to enable Spark master service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/spark/default.nix>

## services.spark.master.bind

Address the spark master binds to. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/cluster/spark/default.nix>

## services.spark.master.extraEnvironment

Extra environment variables to pass to spark master. See spark-standalone documentation. Type: attribute set of string Default: { } Example: { SPARK_MASTER_OPTS = "-Dspark.deploy.defaultCores=5"; SPARK_MASTER_WEBUI_PORT = 8181; } Declared by: <nixpkgs/nixos/modules/services/cluster/spark/default.nix>

## services.spark.master.restartIfChanged

Automatically restart master service on config change. This can be set to false to defer restarts on clusters running critical applications. Please consider the security implications of inadvertently running an older version, and the possibility of unexpected behavior caused by inconsistent versions across a cluster when disabling this option. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/cluster/spark/default.nix>
