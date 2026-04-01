---
module: services.cgit.<name>.gitHttpBackend
option_count: 2
source: options.html
---

# services.cgit.<name>.gitHttpBackend

## services.cgit.<name>.gitHttpBackend.enable

Whether to bypass cgit and use git-http-backend for HTTP clones. While this enables HTTP clones to use the more efficient smart protocol, it does not support access control via cgit’s settings (e.g. the ignore repository setting). If you want to disallow access to some repositories with this backend, enable checkExportOkFiles and set strict-export = "git-daemon-export-ok" in settings. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/cgit.nix>

## services.cgit.<name>.gitHttpBackend.checkExportOkFiles

Whether git-http-backend should only export repositories that contain a git-daemon-export-ok file. When the backend is enabled and the check is disabled all repositories can be cloned irrespective of cgit’s settings (e.g. the ignore repository setting). When enabled you must also configure strict-export = "git-daemon-export-ok" in settings to make cgit check for the same files. Type: boolean Declared by: <nixpkgs/nixos/modules/services/networking/cgit.nix>
