---
module: services.oauth2-proxy
option_count: 28
source: options.html
---

# services.oauth2-proxy

## services.oauth2-proxy.enable

Whether to enable oauth2-proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.package

The oauth2-proxy package to use. Type: package Default: pkgs.oauth2-proxy Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.approvalPrompt

OAuth approval_prompt. Type: one of “force”, “auto” Default: "force" Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.basicAuthPassword

The password to set when passing the HTTP Basic Auth header. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.clientID

The OAuth Client ID. Type: null or string Example: "123456.apps.googleusercontent.com" Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.clientSecret

The OAuth Client Secret. Type: null or string Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.customTemplatesDir

Path to custom HTML templates. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.extraConfig

Extra config to pass to oauth2-proxy. Type: attribute set of anything Default: { } Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.httpAddress

HTTPS listening address. This module does not expose the port by default. If you want this URL to be accessible to other machines, please add the port to networking.firewall.allowedTCPPorts. Type: string Default: "http://127.0.0.1:4180" Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.keyFile

oauth2-proxy allows passing sensitive configuration via environment variables. Make a file that contains lines like OAUTH2_PROXY_CLIENT_SECRET=asdfasdfasdf.apps.googleuserscontent.com and specify the path here. Type: null or absolute path Default: null Example: "/run/keys/oauth2-proxy" Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.loginURL

Authentication endpoint. You only need to set this if you are using a self-hosted provider (e.g. Github Enterprise). If you’re using a publicly hosted provider (e.g github.com), then the default works. Type: null or string Default: null Example: "https://provider.example.com/oauth/authorize" Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.oidcIssuerUrl

The OAuth issuer URL. Type: null or string Default: null Example: "https://login.microsoftonline.com/{TENANT_ID}/v2.0" Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.passAccessToken

Pass OAuth access_token to upstream via X-Forwarded-Access-Token header. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.passBasicAuth

Pass HTTP Basic Auth, X-Forwarded-User and X-Forwarded-Email information to upstream. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.passHostHeader

Pass the request Host Header to upstream. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.profileURL

Profile access endpoint. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.provider

OAuth provider. Type: one of “adfs”, “azure”, “bitbucket”, “digitalocean”, “facebook”, “github”, “gitlab”, “google”, “keycloak”, “keycloak-oidc”, “linkedin”, “login.gov”, “nextcloud”, “oidc” Default: "google" Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.proxyPrefix

The url root path that this proxy should be nested under. Type: string Default: "/oauth2" Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.redeemURL

Token redemption endpoint. You only need to set this if you are using a self-hosted provider (e.g. Github Enterprise). If you’re using a publicly hosted provider (e.g github.com), then the default works. Type: null or string Default: null Example: "https://provider.example.com/oauth/token" Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.redirectURL

The OAuth2 redirect URL. Type: null or string Default: null Example: "https://internalapp.yourcompany.com/oauth2/callback" Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.requestLogging

Log requests to stdout. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.reverseProxy

In case when running behind a reverse proxy, controls whether headers like X-Real-Ip are accepted. Usage behind a reverse proxy will require this flag to be set to avoid logging the reverse proxy IP address. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.scope

OAuth scope specification. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.setXauthrequest

Set X-Auth-Request-User and X-Auth-Request-Email response headers (useful in Nginx auth_request mode). Setting this to ‘null’ means using the upstream default (false). Type: null or boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.signatureKey

GAP-Signature request signature key. Type: null or string Default: null Example: "sha1:secret0" Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.skipAuthRegexes

Skip authentication for requests matching any of these regular expressions. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.upstream

The http url(s) of the upstream endpoint or file:// paths for static files. Routing is based on the path. Type: (list of string) or string convertible to it Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.validateURL

Access token validation endpoint. You only need to set this if you are using a self-hosted provider (e.g. Github Enterprise). If you’re using a publicly hosted provider (e.g github.com), then the default works. Type: null or string Default: null Example: "https://provider.example.com/user/emails" Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>
