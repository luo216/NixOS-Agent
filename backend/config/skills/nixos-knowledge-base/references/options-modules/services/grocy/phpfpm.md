---
module: services.grocy.phpfpm
option_count: 1
source: options.html
---

# services.grocy.phpfpm

## services.grocy.phpfpm.settings

Options for grocy’s PHPFPM pool. Type: attribute set of (signed integer or string or boolean) Default: { catch_workers_output = true; "listen.owner" = "nginx"; "php_admin_flag[log_errors]" = true; "php_admin_value[error_log]" = "stderr"; pm = "dynamic"; "pm.max_children" = "32"; "pm.max_requests" = "500"; "pm.max_spare_servers" = "4"; "pm.min_spare_servers" = "2"; "pm.start_servers" = "2"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/grocy.nix>
