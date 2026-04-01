---
module: services.cgit.<name>.nginx
option_count: 2
source: options.html
---

# services.cgit.<name>.nginx

## services.cgit.<name>.nginx.location

Location to serve cgit under. Type: string Default: "/" Example: "/git/" Declared by: <nixpkgs/nixos/modules/services/networking/cgit.nix>

## services.cgit.<name>.nginx.virtualHost

VirtualHost to serve cgit on, defaults to the attribute name. Type: string Default: "‹name›" Example: "git.example.com" Declared by: <nixpkgs/nixos/modules/services/networking/cgit.nix>
