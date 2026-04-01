---
module: services.reposilite.settings
option_count: 18
source: options.html
---

# services.reposilite.settings

## services.reposilite.settings.basePath

Custom base path for this Reposilite instance. It is not recommended changing this, you should instead prioritize using a different subdomain. Type: string Default: "/" Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.settings.bypassExternalCache

Add cache bypass headers to responses from /api/* to avoid issues with proxies such as Cloudflare. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.settings.cachedLogSize

Amount of messages stored in the cache logger. Type: unsigned integer, meaning >=0 Default: 50 Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.settings.compressionStrategy

Compression algorithm used by this instance of Reposilite. none reduces usage of CPU & memory, but requires transfering more data. Type: one of “none”, “gzip” Default: "none" Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.settings.database

Database connection string. Please use services.reposilite.database instead. See https://reposilite.com/guide/general#local-configuration for valid values. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.settings.databaseThreadPool

Maximum amount of concurrent connections to the database. (one per thread) Embedded databases (sqlite, h2) do not support truly concurrent connections, so the value will always be 1 if they are used. Type: positive integer, meaning >0 Default: 1 Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.settings.debugEnabled

Whether to enable debug mode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.settings.defaultFrontend

Whether to enable the default included frontend with a dashboard. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.settings.enforceSsl

Whether to redirect all traffic to SSL. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.settings.hostname

The hostname to bind to. Set to 0.0.0.0 to accept connections from everywhere, or 127.0.0.1 to restrict to localhost." Type: string Default: "0.0.0.0" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.settings.idleTimeout

Default idle timeout used by Jetty. Type: unsigned integer, meaning >=0 Default: 30000 Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.settings.ioThreadPool

The IO thread pool handles all tasks that may benefit from non-blocking IO. (min: 2) Because most tasks are redirected to IO thread pool, it might be a good idea to keep it at least equal to web thread pool. Type: integer between 2 and 65535 (both inclusive) Default: 8 Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.settings.keyPassword

Plaintext password used to unlock the Java KeyStore set in services.reposilite.settings.keyPath. WARNING: this option is insecure and should not be used to store the password. Consider using services.reposilite.keyPasswordFile instead. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.settings.keyPath

Path to the .jsk KeyStore or paths to the PKCS#8 certificate and private key, separated by a space (see example). You can use ${WORKING_DIRECTORY} to refer to paths relative to Reposilite’s working directory. If you are using a Java KeyStore, don’t forget to specify the password via the REPOSILITE_LOCAL_KEYPASSWORD environment variable. See https://reposilite.com/guide/ssl for more information on how to set SSL up. Type: null or string Default: null Example: "\${WORKING_DIRECTORY}/cert.pem \${WORKING_DIRECTORY}/key.pem" Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.settings.port

The TCP port to bind to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.settings.sslEnabled

Whether to listen for encrypted connections on settings.sslPort. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.settings.sslPort

SSL port to bind to. SSL needs to be enabled explicitly via settings.enableSsl. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 443 Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.settings.webThreadPool

Maximum amount of threads used by the core thread pool. (min: 5) The web thread pool handles the first few steps of incoming HTTP connections, tasks are redirected as soon as possible to the IO thread pool. Type: integer between 5 and 65535 (both inclusive) Default: 16 Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>
