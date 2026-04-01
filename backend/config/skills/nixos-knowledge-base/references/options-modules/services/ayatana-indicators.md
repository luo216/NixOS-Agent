---
module: services.ayatana-indicators
option_count: 2
source: options.html
---

# services.ayatana-indicators

## services.ayatana-indicators.enable

Whether to enable Ayatana Indicators, a continuation of Canonical’s Application Indicators . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/desktops/ayatana-indicators.nix>

## services.ayatana-indicators.packages

List of packages containing Ayatana Indicator services that should be brought up by a SystemD “ayatana-indicators” user target. Packages specified here must have passthru.ayatana-indicators set correctly. If, how, and where these indicators are displayed will depend on your DE. Which target they will be brought up by depends on the packages’ passthru.ayatana-indicators. Type: list of package Default: [ ] Example: with pkgs; [ ayatana-indicator-messages ] Declared by: <nixpkgs/nixos/modules/services/desktops/ayatana-indicators.nix>
