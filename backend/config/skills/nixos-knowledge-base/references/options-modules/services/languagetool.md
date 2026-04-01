---
module: services.languagetool
option_count: 8
source: options.html
---

# services.languagetool

## services.languagetool.enable

Whether to enable the LanguageTool server, a multilingual spelling, style, and grammar checker that helps correct or paraphrase texts. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/languagetool.nix>

## services.languagetool.package

The languagetool package to use. Type: package Default: pkgs.languagetool Declared by: <nixpkgs/nixos/modules/services/misc/languagetool.nix>

## services.languagetool.allowOrigin

Set the Access-Control-Allow-Origin header in the HTTP response, used for direct (non-proxy) JavaScript-based access from browsers. "*" to allow access from all sites. Type: null or string Default: null Example: "https://my-website.org" Declared by: <nixpkgs/nixos/modules/services/misc/languagetool.nix>

## services.languagetool.jrePackage

The jre package to use. Type: package Default: pkgs.jre Declared by: <nixpkgs/nixos/modules/services/misc/languagetool.nix>

## services.languagetool.jvmOptions

Extra command line options for the JVM running languagetool. More information can be found here: https://docs.oracle.com/en/java/javase/19/docs/specs/man/java.html#standard-options-for-java Type: list of string Default: [ ] Example: [ "-Xmx512m" ] Declared by: <nixpkgs/nixos/modules/services/misc/languagetool.nix>

## services.languagetool.port

Port on which LanguageTool listens. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8081 Example: 8081 Declared by: <nixpkgs/nixos/modules/services/misc/languagetool.nix>

## services.languagetool.public

Whether to enable access from anywhere (rather than just localhost). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/languagetool.nix>

## services.languagetool.settings

Configuration file options for LanguageTool, see ‘languagetool-http-server --help’ for supported settings. Type: open submodule of attribute set of (string, package, bool, int or float) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/languagetool.nix>
