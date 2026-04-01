---
module: services.newt
option_count: 4
source: options.html
---

# services.newt

## services.newt.enable

Whether to enable Newt, user space tunnel client for Pangolin. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/newt.nix>

## services.newt.package

The fosrl-newt package to use. Type: package Default: pkgs.fosrl-newt Declared by: <nixpkgs/nixos/modules/services/networking/newt.nix>

## services.newt.environmentFile

Path to a file containing sensitive environment variables for Newt. See https://docs.fossorial.io/Newt/overview#cli-args These will overwrite anything defined in the config. The file should contain environment-variable assignments like: NEWT_ID=2ix2t8xk22ubpfy NEWT_SECRET=nnisrfsdfc7prqsp9ewo1dvtvci50j5uiqotez00dgap0ii2 Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/newt.nix>

## services.newt.settings

Settings for Newt module, see Newt CLI docs for more information. Type: value coercible to CLI argument Default: { } Example: { endpoint = "pangolin.example.com"; id = "8yfsghj438a20ol"; } Declared by: <nixpkgs/nixos/modules/services/networking/newt.nix>
