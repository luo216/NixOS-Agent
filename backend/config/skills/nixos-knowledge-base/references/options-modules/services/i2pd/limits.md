---
module: services.i2pd.limits
option_count: 6
source: options.html
---

# services.i2pd.limits

## services.i2pd.limits.coreSize

Maximum size of corefile in Kb (0 - use system limit). Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.limits.ntcpHard

Maximum number of active transit sessions. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.limits.ntcpSoft

Threshold to start probabalistic backoff with ntcp sessions (default: use system limit). Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.limits.ntcpThreads

Maximum number of threads used by NTCP DH worker. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.limits.openFiles

Maximum number of open files (0 - use system default). Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.limits.transittunnels

Maximum number of active transit sessions. Type: signed integer Default: 2500 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>
