---
module: services.opengfw.settings.workers
option_count: 6
source: options.html
---

# services.opengfw.settings.workers

## services.opengfw.settings.workers.count

Number of workers. Recommended to be no more than the number of CPU cores Type: signed integer Default: 4 Example: 8 Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.settings.workers.queueSize

Worker queue size. Type: signed integer Default: 16 Example: 32 Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.settings.workers.tcpMaxBufferedPagesPerConn

TCP max total bufferd pages per connection. Type: signed integer Default: 64 Example: 128 Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.settings.workers.tcpMaxBufferedPagesTotal

TCP max total buffered pages. Type: signed integer Default: 4096 Example: 8192 Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.settings.workers.tcpTimeout

How long a connection is considered dead when no data is being transferred. Dead connections are purged from TCP reassembly pools once per minute. Type: string Default: "10m" Example: "5m" Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.settings.workers.udpMaxStreams

UDP max streams. Type: signed integer Default: 4096 Example: 8192 Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>
