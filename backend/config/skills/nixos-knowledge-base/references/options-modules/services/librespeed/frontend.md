---
module: services.librespeed.frontend
option_count: 6
source: options.html
---

# services.librespeed.frontend

## services.librespeed.frontend.enable

Enables the LibreSpeed frontend and adds a nginx virtual host if not explicitly disabled and services.librespeed.domain is not null. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/librespeed.nix>

## services.librespeed.frontend.contactEmail

Email address listed in the privacy policy. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/librespeed.nix>

## services.librespeed.frontend.pageTitle

Title of the webpage. Type: string Default: "LibreSpeed" Declared by: <nixpkgs/nixos/modules/services/web-apps/librespeed.nix>

## services.librespeed.frontend.servers

LibreSpeed servers that should appear in the server list. Type: list of (submodule) Declared by: <nixpkgs/nixos/modules/services/web-apps/librespeed.nix>

## services.librespeed.frontend.settings

Override default settings of the speedtest web client. See speedtest_worker.js for a list of possible values. Type: null or (open submodule of attribute set of (boolean or signed integer or string or floating point number)) Default: { telemetry_level = "basic"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/librespeed.nix>

## services.librespeed.frontend.useNginx

Configure nginx for the LibreSpeed frontend. This will only create a virtual host for the frontend and won’t proxy all requests because the reported upload and download speeds are inaccurate if proxied. Type: boolean Default: config.services.librespeed.domain != null Declared by: <nixpkgs/nixos/modules/services/web-apps/librespeed.nix>
