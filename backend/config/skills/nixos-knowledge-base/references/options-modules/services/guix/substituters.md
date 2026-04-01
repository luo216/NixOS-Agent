---
module: services.guix.substituters
option_count: 2
source: options.html
---

# services.guix.substituters

## services.guix.substituters.authorizedKeys

A list of signing keys for each substitute server to be authorized as a source of substitutes. Without this, the listed substitute servers from services.guix.substituters.urls would be ignored with some exceptions. Type: list of absolute path Default: '' The packaged signing keys from {option}`services.guix.package`. '' Example: options.services.guix.substituters.authorizedKeys.default ++ [ (builtins.fetchurl { url = "https://guix.example.com/signing-key.pub"; }) (builtins.fetchurl { url = "https://guix.example.org/static/signing-key.pub"; }) ] Declared by: <nixpkgs/nixos/modules/services/misc/guix>

## services.guix.substituters.urls

A list of substitute servers’ URLs for the Guix daemon to download substitutes from. Type: list of string Default: [ "https://ci.guix.gnu.org" "https://bordeaux.guix.gnu.org" "https://berlin.guix.gnu.org" ] Example: options.services.guix.substituters.urls.default ++ [ "https://guix.example.com" "https://guix.example.org" ] Declared by: <nixpkgs/nixos/modules/services/misc/guix>
