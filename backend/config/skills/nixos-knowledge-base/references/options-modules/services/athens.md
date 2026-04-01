---
module: services.athens
option_count: 41
source: options.html
---

# services.athens

## services.athens.enable

Whether to enable Go module datastore and proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.enablePprof

Enable pprof endpoints. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.package

Which athens derivation to use Type: package Default: pkgs.athens Example: "pkgs.athens" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.basicAuthPass

Password for basic auth. Warning: this is stored in plain text in the config file. Type: null or string Default: null Example: "swordfish" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.basicAuthUser

Username for basic auth. Type: null or string Default: null Example: "user" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.cloudRuntime

Specifies the Cloud Provider on which the Proxy/registry is running. Type: one of “GCP”, “none” Default: "none" Example: "GCP" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.downloadMode

Defines how Athens behaves when a module@version is not found in storage. There are 7 options: “sync”: download the module synchronously and return the results to the client. “async”: return 404, but asynchronously store the module in the storage backend. “redirect”: return a 301 redirect status to the client with the base URL as the DownloadRedirectURL from below. “async_redirect”: same as option number 3 but it will asynchronously store the module to the backend. “none”: return 404 if a module is not found and do nothing. “file:<path>”: will point to an HCL file that specifies any of the 5 options above based on different import paths. “custom:<base64-encoded-hcl>” is the same as option 6 but the file is fully encoded in the option. This is useful for using an environment variable in serverless deployments. Type: one of “sync”, “async”, “redirect”, “async_redirect”, “none” or string matching the pattern ^file:.*$|^custom:.*$ Default: "async_redirect" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.downloadURL

URL used if DownloadMode is set to redirect. Type: string Default: "https://proxy.golang.org" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.extraConfig

Extra configuration options for the athens config file. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.filterFile

Filename for the include exclude filter. Type: null or absolute path Default: null Example: pkgs.writeText "filterFile" '' - github.com/azure + github.com/azure/azure-sdk-for-go D golang.org/x/tools '' Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.forceSSL

Force SSL redirects for incoming requests. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.githubToken

Creates .netrc file with the given token to be used for GitHub. Warning: this is stored in plain text in the config file. Type: null or string Default: null Example: "ghp_1234567890" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.globalEndpoint

Endpoint for a package registry in case of a proxy cache miss. Type: string Default: "" Example: "http://upstream-athens.example.com:3000" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.goBinary

The Go package used by Athens at runtime. Athens primarily runs two Go commands: go mod download -json <module>@<version> go list -m -json <module>@latest Type: package Default: pkgs.go Example: "pkgs.go_1_23" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.goBinaryEnvVars

Environment variables to pass to the Go binary. Type: attribute set Default: { } Example: '' { "GOPROXY" = "direct", "GODEBUG" = "true" } '' Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.goEnv

Specifies the type of environment to run. One of ‘development’ or ‘production’. Type: one of “development”, “production” Default: "development" Example: "production" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.goGetDir

Temporary directory that Athens will use to fetch modules from VCS prior to persisting them to a storage backend. If the value is empty, Athens will use the default OS temp directory. Type: null or absolute path Default: null Example: "/tmp/athens" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.goGetWorkers

Number of workers concurrently downloading modules. Type: signed integer Default: 10 Example: 32 Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.hgrcPath

Path to the .hgrc file. Type: null or absolute path Default: null Example: "/home/user/.hgrc" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.indexType

Type of index backend Athens will use. Type: one of “none”, “memory”, “mysql”, “postgres” Default: "none" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.logLevel

Log level for Athens. Supports all logrus log levels (https://github.com/Sirupsen/logrus#level-logging)". Type: null or one of “panic”, “fatal”, “error”, “warning”, “info”, “debug”, “trace” Default: "warning" Example: "debug" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.netrcPath

Path to the .netrc file. Type: null or absolute path Default: null Example: "/home/user/.netrc" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.networkMode

Configures how Athens will return the results of the /list endpoint as it can be assembled from both its own storage and the upstream VCS. Note, that for better error messaging, this would also affect how other endpoints behave. Modes: strict: merge VCS versions with storage versions, but fail if either of them fails. offline: only get storage versions, never reach out to VCS. fallback: only return storage versions, if VCS fails. Note this means that you may see inconsistent results since fallback mode does a best effort of giving you what’s available at the time of requesting versions. Type: one of “strict”, “offline”, “fallback” Default: "strict" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.noSumPatterns

List of patterns that Athens sum db proxy will return a 403 for. Type: list of string Default: [ ] Example: [ "github.com/mycompany/*" ] Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.pathPrefix

Sets basepath for all routes. Type: null or string Default: null Example: "/athens" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.port

Port number Athens listens on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Example: 443 Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.pprofPort

Port number for pprof endpoints. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3301 Example: 443 Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.protocolWorkers

Number of workers concurrently serving protocol paths. Type: signed integer Default: 30 Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.robotsFile

Provides /robots.txt for net crawlers. Type: null or absolute path Default: null Example: pkgs.writeText "robots.txt" "# my custom robots.txt ..." Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.shutdownTimeout

Number of seconds to wait for the server to shutdown gracefully. Type: signed integer Default: 60 Example: 1 Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.singleFlightType

Determines what mechanism Athens uses to manage concurrency flowing into the Athens backend. Type: one of “memory”, “etcd”, “redis”, “redis-sentinel”, “gcp”, “azureblob” Default: "memory" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.statsExporter

Stats exporter to use. Type: null or value “prometheus” (singular enum) Default: null Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.storageType

Specifies the type of storage backend to use. Type: one of “memory”, “disk”, “mongo”, “gcp”, “minio”, “s3”, “azureblob”, “external” Default: "disk" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.sumDBs

List of fully qualified URLs that Athens will proxy that the go command can use a checksum verifier. Type: list of string Default: [ "https://sum.golang.org" ] Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.timeout

Timeout for external network calls in seconds. Type: signed integer Default: 300 Example: 3 Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.tlsCertFile

Path to the TLS certificate file. Type: null or absolute path Default: null Example: "/etc/ssl/certs/athens.crt" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.tlsKeyFile

Path to the TLS key file. Type: null or absolute path Default: null Example: "/etc/ssl/certs/athens.key" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.traceExporter

Trace exporter to use. Type: null or one of “jaeger”, “datadog” Default: null Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.traceExporterURL

URL endpoint that traces will be sent to. Type: null or string Default: null Example: "http://localhost:14268" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.unixSocket

Path to the unix socket file. If set, Athens will listen on the unix socket instead of TCP socket. Type: null or absolute path Default: null Example: "/run/athens.sock" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.validatorHook

Endpoint to validate modules against. Not used if empty. Type: null or string Default: null Example: "https://validation.example.com" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>
