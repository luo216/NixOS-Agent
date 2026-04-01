---
module: services.spark
option_count: 3
source: options.html
---

# services.spark

## services.spark.package

The spark package to use. Type: package Default: pkgs.spark Example: spark.overrideAttrs (super: rec { pname = "spark"; version = "2.4.4"; src = pkgs.fetchzip { url = "mirror://apache/spark/"${pname}-${version}/${pname}-${version}-bin-without-hadoop.tgz"; sha256 = "1a9w5k0207fysgpxx6db3a00fs5hdc2ncx99x4ccy2s0v5ndc66g"; }; }) Declared by: <nixpkgs/nixos/modules/services/cluster/spark/default.nix>

## services.spark.confDir

Spark configuration directory. Spark will use the configuration files (spark-defaults.conf, spark-env.sh, log4j.properties, etc) from this directory. Type: absolute path Default: "${package}/conf" Declared by: <nixpkgs/nixos/modules/services/cluster/spark/default.nix>

## services.spark.logDir

Spark log directory. Type: absolute path Default: "/var/log/spark" Declared by: <nixpkgs/nixos/modules/services/cluster/spark/default.nix>
