---
module: services.prosody.httpFileShare
option_count: 6
source: options.html
---

# services.prosody.httpFileShare

## services.prosody.httpFileShare.daily_quota

Maximum size of daily uploaded files per user, in bytes. Type: null or signed integer Default: 10 * services.prosody.httpFileShare.size_limit Example: "100*1024*1024" Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.httpFileShare.domain

Domain name for a http_file_share service. Type: null or string Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.httpFileShare.expires_after

Max age of a file before it gets deleted. Type: string Default: "1 week" Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.httpFileShare.http_external_url

External URL in case Prosody sits behind a reverse proxy. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.httpFileShare.http_host

To avoid an additional DNS record and certificate, you may set this option to your primary domain (e.g. “example.com”) or use a reverse proxy to handle the HTTP for that domain. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.httpFileShare.size_limit

Maximum file size, in bytes. Type: signed integer Default: "10 * 1024 * 1024" Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>
