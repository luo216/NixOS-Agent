---
module: services.sympa.domains.<name>
option_count: 3
source: options.html
---

# services.sympa.domains.<name>

## services.sympa.domains.<name>.settings

The robot.conf configuration file as key value set. See https://sympa-community.github.io/gpldoc/man/sympa.conf.5.html for list of configuration parameters. Type: attribute set of (string or signed integer or boolean) Default: { } Example: { default_max_list_members = 3; } Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>

## services.sympa.domains.<name>.webHost

Domain part of the web interface URL (no web interface for this domain if null). DNS record of type A (or AAAA or CNAME) has to exist with this value. Type: null or string Default: null Example: "archive.example.org" Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>

## services.sympa.domains.<name>.webLocation

URL path part of the web interface. Type: string Default: "/" Example: "/sympa" Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>
