---
module: services.dashy
option_count: 4
source: options.html
---

# services.dashy

## services.dashy.enable

Whether to enable Dashy, a highly customizable, easy to use, privacy-respecting dashboard app. Note that this builds a static web app as opposed to running a full node server, unlike the default docker image. Writing config changes to disk through the UI, triggering a rebuild through the UI and application status checks are unavailable without the node server; Everything else will work fine. See the deployment docs for building from source, hosting with a CDN and CDN cloud deploy for more information. . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/dashy.nix>

## services.dashy.package

The dashy-ui package to use. Type: package Default: pkgs.dashy-ui Declared by: <nixpkgs/nixos/modules/services/web-apps/dashy.nix>

## services.dashy.finalDrv

Final derivation containing the fully built static files Type: package (read only) Default: '' if cfg.settings != {} then cfg.package.override {inherit (cfg) settings;} else cfg.package; '' Declared by: <nixpkgs/nixos/modules/services/web-apps/dashy.nix>

## services.dashy.settings

Settings serialized into user-data/conf.yml before build. If left empty, the default configuration shipped with the package will be used instead. Note that the full configuration will be written to the nix store as world readable, which may include secrets such as password hashes. To add files such as icons or backgrounds, you can reference them in line such as icon = "$\{./icon.png}"; This will add the file to the nix store upon build, referencing it by file path as expected by Dashy. Type: JSON value Default: { } Example: '' { appConfig = { cssThemes = [ "example-theme-1" "example-theme-2" ]; enableFontAwesome = true; fontAwesomeKey = "e9076c7025"; theme = "thebe"; }; pageInfo = { description = "My Awesome Dashboard"; navLinks = [ { path = "/"; title = "Home"; } { path = "https://example.com"; title = "Example 1"; } { path = "https://example.com"; title = "Example 2"; } ]; title = "Dashy"; }; sections = [ { displayData = { collapsed = true; cols = 2; customStyles = "border: 2px dashed red;"; itemSize = "large"; }; items = [ { backgroundColor = "#0079ff"; color = "#00ffc9"; description = "Source code and documentation on GitHub"; icon = "fab fa-github"; target = "sametab"; title = "Source"; url = "https://github.com/Lissy93/dashy"; } { description = "View currently open issues, or raise a new one"; icon = "fas fa-bug"; title = "Issues"; url = "https://github.com/Lissy93/dashy/issues"; } { description = "Live Demo #1"; icon = "fas fa-rocket"; target = "iframe"; title = "Demo 1"; url = "https://dashy-demo-1.as93.net"; } { description = "Live Demo #2"; icon = "favicon"; target = "newtab"; title = "Demo 2"; url = "https://dashy-demo-2.as93.net"; } ]; name = "Getting Started"; } ]; } '' Declared by: <nixpkgs/nixos/modules/services/web-apps/dashy.nix>
