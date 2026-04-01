---
module: services.nextcloud.nginx
option_count: 2
source: options.html
---

# services.nextcloud.nginx

## services.nextcloud.nginx.enableFastcgiRequestBuffering

Whether to buffer requests against fastcgi requests. This is a workaround for PUT requests with the Transfer-Encoding: chunked header set and an unspecified Content-Length. Without request buffering for these requests, Nextcloud will create files with zero bytes length as described in nextcloud/server#7995. Note Please keep in mind that upstream suggests to not enable this as it might lead to timeouts on large files being uploaded as described in the administrator manual. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.nginx.hstsMaxAge

Value for the max-age directive of the HTTP Strict-Transport-Security header. See section 6.1.1 of IETF RFC 6797 for detailed information on this directive and header. Type: positive integer, meaning >0 Default: 15552000 Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>
