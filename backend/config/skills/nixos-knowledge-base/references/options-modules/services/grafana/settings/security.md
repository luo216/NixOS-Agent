---
module: services.grafana.settings.security
option_count: 21
source: options.html
---

# services.grafana.settings.security

## services.grafana.settings.security.admin_email

The email of the default Grafana Admin, created on startup. Type: string Default: "admin@localhost" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.admin_password

Default admin password. Please note that the contents of this option will end up in a world-readable Nix store. Use the file provider pointing at a reasonably secured file in the local filesystem to work around that. Look at the documentation for details: https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#file-provider Type: string Default: "admin" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.admin_user

Default admin username. Type: string Default: "admin" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.allow_embedding

When false, the HTTP header X-Frame-Options: deny will be set in Grafana HTTP responses which will instruct browsers to not allow rendering Grafana in a <frame>, <iframe>, <embed> or <object>. The main goal is to mitigate the risk of Clickjacking. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.content_security_policy

Set to true to add the Content-Security-Policy header to your requests. CSP allows to control resources that the user agent can load and helps prevent XSS attacks. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.content_security_policy_report_only

Set to true to add the Content-Security-Policy-Report-Only header to your requests. CSP in Report Only mode enables you to experiment with policies by monitoring their effects without enforcing them. You can enable both policies simultaneously. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.cookie_samesite

Sets the SameSite cookie attribute and prevents the browser from sending this cookie along with cross-site requests. The main goal is to mitigate the risk of cross-origin information leakage. This setting also provides some protection against cross-site request forgery attacks (CSRF), read more about SameSite here. Using value disabled does not add any SameSite attribute to cookies. Type: one of “lax”, “strict”, “none”, “disabled” Default: "lax" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.cookie_secure

Set to true if you host Grafana behind HTTPS. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.csrf_additional_headers

List of allowed headers to be set by the user. Suggested to use for if authentication lives behind reverse proxies. Type: string or list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.csrf_trusted_origins

List of additional allowed URLs to pass by the CSRF check. Suggested when authentication comes from an IdP. Type: string or list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.data_source_proxy_whitelist

Define a whitelist of allowed IP addresses or domains, with ports, to be used in data source URLs with the Grafana data source proxy. Format: ip_or_domain:port separated by spaces. PostgreSQL, MySQL, and MSSQL data sources do not use the proxy and are therefore unaffected by this setting. Type: string or list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.disable_brute_force_login_protection

Set to true to disable brute force login protection. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.disable_gravatar

Set to true to disable the use of Gravatar for user profile images. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.disable_initial_admin_creation

Disable creation of admin user on first start of Grafana. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.secret_key

Secret key used for signing. Please note that the contents of this option will end up in a world-readable Nix store. Use the file provider pointing at a reasonably secured file in the local filesystem to work around that. Look at the documentation for details: https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#file-provider Type: string Default: "SW2YcwTIb9zpOOhoPsMm" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.strict_transport_security

Set to true if you want to enable HTTP Strict-Transport-Security (HSTS) response header. Only use this when HTTPS is enabled in your configuration, or when there is another upstream system that ensures your application does HTTPS (like a frontend load balancer). HSTS tells browsers that the site should only be accessed using HTTPS. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.strict_transport_security_max_age_seconds

Sets how long a browser should cache HSTS in seconds. Only applied if strict_transport_security is enabled. Type: signed integer Default: 86400 Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.strict_transport_security_preload

Set to true to enable HSTS preloading option. Only applied if strict_transport_security is enabled. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.strict_transport_security_subdomains

Set to true to enable HSTS includeSubDomains option. Only applied if strict_transport_security is enabled. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.x_content_type_options

Set to false to disable the X-Content-Type-Options response header. The X-Content-Type-Options response HTTP header is a marker used by the server to indicate that the MIME types advertised in the Content-Type headers should not be changed and be followed. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.security.x_xss_protection

Set to true to enable the X-XSS-Protection header, which tells browsers to stop pages from loading when they detect reflected cross-site scripting (XSS) attacks. Note: this is the default in Grafana, it’s turned off here since it’s recommended to not use this header anymore. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
