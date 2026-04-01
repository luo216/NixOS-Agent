---
module: services.mtr-exporter.jobs.*
option_count: 4
source: options.html
---

# services.mtr-exporter.jobs.*

## services.mtr-exporter.jobs.*.address

Target address for MTR client. Type: string Example: "host.example.org:1234" Declared by: <nixpkgs/nixos/modules/services/networking/mtr-exporter.nix>

## services.mtr-exporter.jobs.*.flags

Additional flags to pass to MTR. Type: list of string Default: [ ] Example: [ "-G1" ] Declared by: <nixpkgs/nixos/modules/services/networking/mtr-exporter.nix>

## services.mtr-exporter.jobs.*.name

Name of ICMP pinging job. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/mtr-exporter.nix>

## services.mtr-exporter.jobs.*.schedule

Schedule of MTR checks. Also accepts Cron format. Type: string Default: "@every 60s" Example: "@hourly" Declared by: <nixpkgs/nixos/modules/services/networking/mtr-exporter.nix>
