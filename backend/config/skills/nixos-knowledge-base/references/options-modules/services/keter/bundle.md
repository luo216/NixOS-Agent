---
module: services.keter.bundle
option_count: 5
source: options.html
---

# services.keter.bundle

## services.keter.bundle.appName

The name keter assigns to this bundle Type: string Default: "myapp" Declared by: <nixpkgs/nixos/modules/services/web-servers/keter>

## services.keter.bundle.domain

The domain keter will bind to Type: string Default: "example.com" Declared by: <nixpkgs/nixos/modules/services/web-servers/keter>

## services.keter.bundle.executable

The executable to be run Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-servers/keter>

## services.keter.bundle.publicScript

Allows loading of public environment variables, these are emitted to the log so it shouldn’t contain secrets. Type: string Default: "" Example: "ADMIN_EMAIL=hi@example.com" Declared by: <nixpkgs/nixos/modules/services/web-servers/keter>

## services.keter.bundle.secretScript

Allows loading of private environment variables Type: string Default: "" Example: "MY_AWS_KEY=$(cat /run/keys/AWS_ACCESS_KEY_ID)" Declared by: <nixpkgs/nixos/modules/services/web-servers/keter>
