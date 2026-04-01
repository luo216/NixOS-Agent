---
module: services.changedetection-io
option_count: 13
source: options.html
---

# services.changedetection-io

## services.changedetection-io.enable

Whether to enable changedetection-io. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/changedetection-io.nix>

## services.changedetection-io.package

The changedetection-io package to use. Type: package Default: pkgs.changedetection-io Declared by: <nixpkgs/nixos/modules/services/web-apps/changedetection-io.nix>

## services.changedetection-io.baseURL

The base url used in notifications and {base_url} token. Type: null or string Default: null Example: "https://changedetection-io.example" Declared by: <nixpkgs/nixos/modules/services/web-apps/changedetection-io.nix>

## services.changedetection-io.behindProxy

Enable this option when changedetection-io runs behind a reverse proxy, so that it trusts X-* headers. It is recommend to run changedetection-io behind a TLS reverse proxy. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/changedetection-io.nix>

## services.changedetection-io.chromePort

A free port on which webDriverSupport or playwrightSupport listen on localhost. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4444 Declared by: <nixpkgs/nixos/modules/services/web-apps/changedetection-io.nix>

## services.changedetection-io.datastorePath

The directory used to store all data for changedetection-io. Type: string Default: "/var/lib/changedetection-io" Declared by: <nixpkgs/nixos/modules/services/web-apps/changedetection-io.nix>

## services.changedetection-io.environmentFile

Securely pass environment variables to changedetection-io. This can be used to set for example a frontend password reproducible via SALTED_PASS which convinetly also deactivates nags about the hosted version. SALTED_PASS should be 64 characters long while the first 32 are the salt and the second the frontend password. It can easily be retrieved from the settings file when first set via the frontend with the following command: jq -r .settings.application.password /var/lib/changedetection-io/url-watches.json Type: null or absolute path Default: null Example: "/run/secrets/changedetection-io.env" Declared by: <nixpkgs/nixos/modules/services/web-apps/changedetection-io.nix>

## services.changedetection-io.group

Group account under which changedetection-io runs. Type: string Default: "changedetection-io" Declared by: <nixpkgs/nixos/modules/services/web-apps/changedetection-io.nix>

## services.changedetection-io.listenAddress

Address the server will listen on. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/changedetection-io.nix>

## services.changedetection-io.playwrightSupport

Enable support for fetching web pages using playwright and Chromium. This starts a headless Chromium controlled by puppeteer in an oci container. Note Playwright can currently leak memory. See https://github.com/dgtlmoon/changedetection.io/wiki/Playwright-content-fetcher#playwright-memory-leak Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/changedetection-io.nix>

## services.changedetection-io.port

Port the server will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5000 Declared by: <nixpkgs/nixos/modules/services/web-apps/changedetection-io.nix>

## services.changedetection-io.user

User account under which changedetection-io runs. Type: string Default: "changedetection-io" Declared by: <nixpkgs/nixos/modules/services/web-apps/changedetection-io.nix>

## services.changedetection-io.webDriverSupport

Enable support for fetching web pages using WebDriver and Chromium. This starts a headless chromium controlled by puppeteer in an oci container. Note Playwright can currently leak memory. See https://github.com/dgtlmoon/changedetection.io/wiki/Playwright-content-fetcher#playwright-memory-leak Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/changedetection-io.nix>
