---
module: services.kapacitor
option_count: 9
source: options.html
---

# services.kapacitor

## services.kapacitor.enable

Whether to enable kapacitor. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/kapacitor.nix>

## services.kapacitor.bind

Address to bind to. The default is to bind to all addresses Type: string Default: "" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/kapacitor.nix>

## services.kapacitor.dataDir

Location where Kapacitor stores its state Type: absolute path Default: "/var/lib/kapacitor" Declared by: <nixpkgs/nixos/modules/services/monitoring/kapacitor.nix>

## services.kapacitor.extraConfig

These lines go into kapacitord.conf verbatim. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/kapacitor.nix>

## services.kapacitor.group

Group under which Kapacitor runs Type: string Default: "kapacitor" Declared by: <nixpkgs/nixos/modules/services/monitoring/kapacitor.nix>

## services.kapacitor.loadDirectory

Directory where to load services from, such as tasks, templates and handlers (or null to disable service loading on startup) Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/kapacitor.nix>

## services.kapacitor.port

Port of Kapacitor Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9092 Declared by: <nixpkgs/nixos/modules/services/monitoring/kapacitor.nix>

## services.kapacitor.taskSnapshotInterval

Specifies how often to snapshot the task state (in InfluxDB time units) Type: string Default: "1m0s" Declared by: <nixpkgs/nixos/modules/services/monitoring/kapacitor.nix>

## services.kapacitor.user

User account under which Kapacitor runs Type: string Default: "kapacitor" Declared by: <nixpkgs/nixos/modules/services/monitoring/kapacitor.nix>
