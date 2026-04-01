---
module: services.spacecookie.settings
option_count: 2
source: options.html
---

# services.spacecookie.settings

## services.spacecookie.settings.hostname

The hostname the service is reachable via. Clients will use this hostname for further requests after loading the initial gopher menu. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/networking/spacecookie.nix>

## services.spacecookie.settings.root

The directory spacecookie should serve via gopher. Files in there need to be world-readable since the spacecookie service file sets DynamicUser=true. Type: absolute path Default: "/srv/gopher" Declared by: <nixpkgs/nixos/modules/services/networking/spacecookie.nix>
