---
module: services.svnserve
option_count: 2
source: options.html
---

# services.svnserve

## services.svnserve.enable

Whether to enable svnserve to serve Subversion repositories through the SVN protocol. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/svnserve.nix>

## services.svnserve.svnBaseDir

Base directory from which Subversion repositories are accessed. Type: string Default: "/repos" Declared by: <nixpkgs/nixos/modules/services/misc/svnserve.nix>
