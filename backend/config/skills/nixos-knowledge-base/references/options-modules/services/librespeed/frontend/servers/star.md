---
module: services.librespeed.frontend.servers.*
option_count: 6
source: options.html
---

# services.librespeed.frontend.servers.*

## services.librespeed.frontend.servers.*.dlURL

URL path to download test on this server. Append .php to the default value if the server uses the php implementation. Type: non-empty string Default: "backend/garbage" Declared by: <nixpkgs/nixos/modules/services/web-apps/librespeed.nix>

## services.librespeed.frontend.servers.*.getIpURL

URL path to IP lookup on this server. Append .php to the default value if the server uses the php implementation. Type: non-empty string Default: "backend/getIP" Declared by: <nixpkgs/nixos/modules/services/web-apps/librespeed.nix>

## services.librespeed.frontend.servers.*.name

Name shown in the server list. Type: non-empty string Declared by: <nixpkgs/nixos/modules/services/web-apps/librespeed.nix>

## services.librespeed.frontend.servers.*.pingURL

URL path to latency/jitter test on this server. Append .php to the default value if the server uses the php implementation. Type: non-empty string Default: "backend/empty" Declared by: <nixpkgs/nixos/modules/services/web-apps/librespeed.nix>

## services.librespeed.frontend.servers.*.server

URL to the server. You may use // instead of http:// or https://. Type: non-empty string Declared by: <nixpkgs/nixos/modules/services/web-apps/librespeed.nix>

## services.librespeed.frontend.servers.*.ulURL

URL path to upload test on this server. Append .php to the default value if the server uses the php implementation. Type: non-empty string Default: "backend/empty" Declared by: <nixpkgs/nixos/modules/services/web-apps/librespeed.nix>
