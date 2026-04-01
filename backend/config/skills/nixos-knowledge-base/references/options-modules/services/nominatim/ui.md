---
module: services.nominatim.ui
option_count: 2
source: options.html
---

# services.nominatim.ui

## services.nominatim.ui.package

The nominatim-ui package to use. Type: package Default: pkgs.nominatim-ui Declared by: <nixpkgs/nixos/modules/services/search/nominatim.nix>

## services.nominatim.ui.config

Nominatim UI configuration placed to theme/config.theme.js file. For the list of available configuration options see https://github.com/osm-search/nominatim-ui/blob/master/dist/config.defaults.js. Type: null or string Default: null Example: '' Nominatim_Config.Page_Title='My Nominatim instance'; Nominatim_Config.Nominatim_API_Endpoint='https://localhost/'; '' Declared by: <nixpkgs/nixos/modules/services/search/nominatim.nix>
