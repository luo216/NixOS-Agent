---
module: services.netbird.server.management
option_count: 16
source: options.html
---

# services.netbird.server.management

## services.netbird.server.management.enable

Whether to enable Netbird Management Service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/netbird/management.nix>

## services.netbird.server.management.enableNginx

Whether to enable Nginx reverse-proxy for the netbird management service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/netbird/management.nix>

## services.netbird.server.management.package

The netbird-management package to use. Type: package Default: pkgs.netbird-management Declared by: <nixpkgs/nixos/modules/services/networking/netbird/management.nix>

## services.netbird.server.management.disableAnonymousMetrics

Disables push of anonymous usage metrics to NetBird. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/netbird/management.nix>

## services.netbird.server.management.disableSingleAccountMode

If set to true, disables single account mode. The singleAccountModeDomain property will be ignored and every new user will have a separate NetBird account. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/netbird/management.nix>

## services.netbird.server.management.dnsDomain

Domain used for peer resolution. Type: string Default: "netbird.selfhosted" Declared by: <nixpkgs/nixos/modules/services/networking/netbird/management.nix>

## services.netbird.server.management.domain

The domain under which the management API runs. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/netbird/management.nix>

## services.netbird.server.management.extraOptions

Additional options given to netbird-mgmt as commandline arguments. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/netbird/management.nix>

## services.netbird.server.management.logLevel

Log level of the netbird services. Type: one of “ERROR”, “WARN”, “INFO”, “DEBUG” Default: "INFO" Declared by: <nixpkgs/nixos/modules/services/networking/netbird/management.nix>

## services.netbird.server.management.metricsPort

Internal port of the metrics server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9090 Declared by: <nixpkgs/nixos/modules/services/networking/netbird/management.nix>

## services.netbird.server.management.oidcConfigEndpoint

The oidc discovery endpoint. Type: string Example: "https://example.eu.auth0.com/.well-known/openid-configuration" Declared by: <nixpkgs/nixos/modules/services/networking/netbird/management.nix>

## services.netbird.server.management.port

Internal port of the management server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8011 Declared by: <nixpkgs/nixos/modules/services/networking/netbird/management.nix>

## services.netbird.server.management.settings

Configuration of the netbird management server. Options containing secret data should be set to an attribute set containing the attribute _secret a string pointing to a file containing the value the option should be set to. See the example to get a better picture of this: in the resulting management.json file, the DataStoreEncryptionKey key will be set to the contents of the /run/agenix/netbird_mgmt-data_store_encryption_key file. Type: JSON value Default: defaultSettings = { Stuns = [ { Proto = "udp"; URI = "stun:${cfg.turnDomain}:3478"; Username = ""; Password = null; } ]; TURNConfig = { Turns = [ { Proto = "udp"; URI = "turn:${cfg.turnDomain}:3478"; Username = "netbird"; Password = "netbird"; } ]; CredentialsTTL = "12h"; Secret = "not-secure-secret"; TimeBasedCredentials = false; }; Signal = { Proto = "https"; URI = "${cfg.domain}:443"; Username = ""; Password = null; }; ReverseProxy = { TrustedHTTPProxies = [ ]; TrustedHTTPProxiesCount = 0; TrustedPeers = [ "0.0.0.0/0" ]; }; Datadir = "${stateDir}/data"; DataStoreEncryptionKey = "genEVP6j/Yp2EeVujm0zgqXrRos29dQkpvX0hHdEUlQ="; StoreConfig = { Engine = "sqlite"; }; HttpConfig = { Address = "127.0.0.1:${toString cfg.port}"; IdpSignKeyRefreshEnabled = true; OIDCConfigEndpoint = cfg.oidcConfigEndpoint; }; IdpManagerConfig = { ManagerType = "none"; ClientConfig = { Issuer = ""; TokenEndpoint = ""; ClientID = "netbird"; ClientSecret = ""; GrantType = "client_credentials"; }; ExtraConfig = { }; Auth0ClientCredentials = null; AzureClientCredentials = null; KeycloakClientCredentials = null; ZitadelClientCredentials = null; }; DeviceAuthorizationFlow = { Provider = "none"; ProviderConfig = { Audience = "netbird"; Domain = null; ClientID = "netbird"; TokenEndpoint = null; DeviceAuthEndpoint = ""; Scope = "openid profile email offline_access api"; UseIDToken = false; }; }; PKCEAuthorizationFlow = { ProviderConfig = { Audience = "netbird"; ClientID = "netbird"; ClientSecret = ""; AuthorizationEndpoint = ""; TokenEndpoint = ""; Scope = "openid profile email offline_access api"; RedirectURLs = "http://localhost:53000"; UseIDToken = false; }; }; }; Example: { DataStoreEncryptionKey = { _secret = "/run/agenix/netbird_mgmt-data_store_encryption_key"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/netbird/management.nix>

## services.netbird.server.management.singleAccountModeDomain

Enables single account mode. This means that all the users will be under the same account grouped by the specified domain. If the installation has more than one account, the property is ineffective. Type: string Default: "netbird.selfhosted" Declared by: <nixpkgs/nixos/modules/services/networking/netbird/management.nix>

## services.netbird.server.management.turnDomain

The domain of the TURN server to use. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/netbird/management.nix>

## services.netbird.server.management.turnPort

The port of the TURN server to use. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3478 Declared by: <nixpkgs/nixos/modules/services/networking/netbird/management.nix>
