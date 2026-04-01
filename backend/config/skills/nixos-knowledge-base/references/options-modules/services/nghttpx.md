---
module: services.nghttpx
option_count: 11
source: options.html
---

# services.nghttpx

## services.nghttpx.enable

Whether to enable nghttpx. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>

## services.nghttpx.backend-address-family

Specify address family of backend connections. If “auto” is given, both IPv4 and IPv6 are considered. If “IPv4” is given, only IPv4 address is considered. If “IPv6” is given, only IPv6 address is considered. Please see https://nghttp2.org/documentation/nghttpx.1.html#cmdoption-nghttpx--backend-address-family Type: one of “auto”, “IPv4”, “IPv6” Default: "auto" Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>

## services.nghttpx.backends

A list of backend specifications. Type: list of (submodule) Example: [ { params = { proto = "http/1.1"; redirect-if-not-tls = true; }; patterns = [ "/" ]; server = { host = "172.16.0.22"; port = 8443; }; } ] Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>

## services.nghttpx.backlog

Listen backlog size. Please see https://nghttp2.org/documentation/nghttpx.1.html#cmdoption-nghttpx--backlog Type: signed integer Default: 65536 Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>

## services.nghttpx.extraConfig

Extra configuration options to be appended to the generated configuration file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>

## services.nghttpx.frontends

A list of frontend listener specifications. Type: list of (submodule) Example: [ { params = { tls = "no-tls"; }; server = { host = "*"; port = 80; }; } ] Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>

## services.nghttpx.rlimit-nofile

Set maximum number of open files (RLIMIT_NOFILE) to <N>. If 0 is given, nghttpx does not set the limit. Please see https://nghttp2.org/documentation/nghttpx.1.html#cmdoption-nghttpx--rlimit-nofile Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>

## services.nghttpx.single-process

Run this program in a single process mode for debugging purpose. Without this option, nghttpx creates at least 2 processes: master and worker processes. If this option is used, master and worker are unified into a single process. nghttpx still spawns additional process if neverbleed is used. In the single process mode, the signal handling feature is disabled. Please see https://nghttp2.org/documentation/nghttpx.1.html#cmdoption-nghttpx--single-process Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>

## services.nghttpx.single-thread

Run everything in one thread inside the worker process. This feature is provided for better debugging experience, or for the platforms which lack thread support. If threading is disabled, this option is always enabled. Please see https://nghttp2.org/documentation/nghttpx.1.html#cmdoption-nghttpx--single-thread Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>

## services.nghttpx.tls

TLS certificate and key paths. Note that this does not enable TLS for a frontend listener, to do so, a frontend specification must set params.tls to true. Type: null or (submodule) Default: null Example: { crt = "/etc/ssl/certs/server.crt"; key = "/etc/ssl/keys/server.key"; } Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>

## services.nghttpx.workers

Set the number of worker threads. Please see https://nghttp2.org/documentation/nghttpx.1.html#cmdoption-nghttpx-n Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/networking/nghttpx/nghttpx-options.nix>
