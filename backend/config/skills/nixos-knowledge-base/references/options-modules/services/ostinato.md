---
module: services.ostinato
option_count: 3
source: options.html
---

# services.ostinato

## services.ostinato.enable

Whether to enable Ostinato agent-controller (Drone). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ostinato.nix>

## services.ostinato.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 7878 Declared by: <nixpkgs/nixos/modules/services/networking/ostinato.nix>

## services.ostinato.rateAccuracy

To ensure that the actual transmit rate is as close as possible to the configured transmit rate, Drone runs a busy-wait loop. While this provides the maximum accuracy possible, the CPU utilization is 100% while the transmit is on. You can however, sacrifice the accuracy to reduce the CPU load. Type: one of “High”, “Low” Default: "High" Declared by: <nixpkgs/nixos/modules/services/networking/ostinato.nix>
