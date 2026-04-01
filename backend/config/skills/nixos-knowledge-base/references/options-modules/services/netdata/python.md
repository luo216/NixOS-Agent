---
module: services.netdata.python
option_count: 3
source: options.html
---

# services.netdata.python

## services.netdata.python.enable

Whether to enable python-based plugins Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/netdata.nix>

## services.netdata.python.extraPackages

Extra python packages available at runtime to enable additional python plugins. Type: function that evaluates to a(n) list of package Default: ps: [] Example: ps: [ ps.psycopg2 ps.docker ps.dnspython ] Declared by: <nixpkgs/nixos/modules/services/monitoring/netdata.nix>

## services.netdata.python.recommendedPythonPackages

Whether to enable a set of recommended Python plugins by installing extra Python packages. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/netdata.nix>
