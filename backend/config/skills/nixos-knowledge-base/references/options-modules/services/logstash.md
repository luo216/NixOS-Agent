---
module: services.logstash
option_count: 13
source: options.html
---

# services.logstash

## services.logstash.enable

Enable logstash. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/logging/logstash.nix>

## services.logstash.package

The logstash package to use. Type: package Default: pkgs.logstash Declared by: <nixpkgs/nixos/modules/services/logging/logstash.nix>

## services.logstash.dataDir

A path to directory writable by logstash that it uses to store data. Plugins will also have access to this path. Type: string Default: "/var/lib/logstash" Declared by: <nixpkgs/nixos/modules/services/logging/logstash.nix>

## services.logstash.extraJvmOptions

Extra JVM options, one per line (jvm.options format). Type: strings concatenated with “\n” Default: "" Example: '' -Xms2g -Xmx2g '' Declared by: <nixpkgs/nixos/modules/services/logging/logstash.nix>

## services.logstash.extraSettings

Extra Logstash settings in YAML format. Type: strings concatenated with “\n” Default: "" Example: '' pipeline: batch: size: 125 delay: 5 '' Declared by: <nixpkgs/nixos/modules/services/logging/logstash.nix>

## services.logstash.filterConfig

logstash filter configuration. Type: strings concatenated with “\n” Default: "" Example: '' if [type] == "syslog" { # Keep only relevant systemd fields # https://www.freedesktop.org/software/systemd/man/systemd.journal-fields.html prune { whitelist_names => [ "type", "@timestamp", "@version", "MESSAGE", "PRIORITY", "SYSLOG_FACILITY" ] } } '' Declared by: <nixpkgs/nixos/modules/services/logging/logstash.nix>

## services.logstash.filterWorkers

The quantity of filter workers to run. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/logging/logstash.nix>

## services.logstash.inputConfig

Logstash input configuration. Type: strings concatenated with “\n” Default: "generator { }" Example: '' # Read from journal pipe { command => "${config.systemd.package}/bin/journalctl -f -o json" type => "syslog" codec => json {} } '' Declared by: <nixpkgs/nixos/modules/services/logging/logstash.nix>

## services.logstash.listenAddress

Address on which to start webserver. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/logging/logstash.nix>

## services.logstash.logLevel

Logging verbosity level. Type: one of “debug”, “info”, “warn”, “error”, “fatal” Default: "warn" Declared by: <nixpkgs/nixos/modules/services/logging/logstash.nix>

## services.logstash.outputConfig

Logstash output configuration. Type: strings concatenated with “\n” Default: "stdout { codec => rubydebug }" Example: '' redis { host => ["localhost"] data_type => "list" key => "logstash" codec => json } elasticsearch { } '' Declared by: <nixpkgs/nixos/modules/services/logging/logstash.nix>

## services.logstash.plugins

The paths to find other logstash plugins in. Type: list of absolute path Default: [ ] Example: [ pkgs.logstash-contrib ] Declared by: <nixpkgs/nixos/modules/services/logging/logstash.nix>

## services.logstash.port

Port on which to start webserver. Type: string Default: "9292" Declared by: <nixpkgs/nixos/modules/services/logging/logstash.nix>
