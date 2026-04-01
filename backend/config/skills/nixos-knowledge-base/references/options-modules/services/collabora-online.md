---
module: services.collabora-online
option_count: 6
source: options.html
---

# services.collabora-online

## services.collabora-online.enable

Whether to enable collabora-online. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/collabora-online.nix>

## services.collabora-online.package

The Collabora Online package to use. Type: package Default: pkgs.collabora-online Declared by: <nixpkgs/nixos/modules/services/web-apps/collabora-online.nix>

## services.collabora-online.aliasGroups

Alias groups to use. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/collabora-online.nix>

## services.collabora-online.extraArgs

Extra arguments to pass to the service. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/collabora-online.nix>

## services.collabora-online.port

Listening port Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9980 Declared by: <nixpkgs/nixos/modules/services/web-apps/collabora-online.nix>

## services.collabora-online.settings

Configuration for Collabora Online WebSocket Daemon, see https://sdk.collaboraonline.com/docs/installation/Configuration.html, or https://github.com/CollaboraOnline/online/blob/master/coolwsd.xml.in for the default configuration. Type: `coolwsd.xml` configuration type, used to override values in the default configuration. Attribute names correspond to XML tags unless prefixed with `@`. Nested attribute sets correspond to nested XML tags. Attribute prefixed with `@` correspond to XML attributes. E.g., `{ storage.wopi.“@allow” = true; }` in Nix corresponds to `<storage><wopi allow=“true”/></storage>` in `coolwsd.xml`, or `–o:storage.wopi[@allow]=true` in the command line. Arrays correspond to multiple elements with the same tag name. E.g. `{ host = [ ‘‘127\.0\.0\.1’’ “::1” ]; }` in Nix corresponds to ```xml <net><post_allow> <host>127\.0\.0\.1</host> <host>::1</host> </post_allow></net> ``` in `coolwsd.xml`, or `–o:net.post_allow.host[0]='127\.0\.0\.1 --o:net.post_allow.host[1]=::1` in the command line. Null values could be used to remove an element from the default configuration. Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/collabora-online.nix>
