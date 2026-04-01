---
module: services.tika
option_count: 7
source: options.html
---

# services.tika

## services.tika.enable

Whether to enable Apache Tika server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/search/tika.nix>

## services.tika.enableOcr

Whether to enable OCR support by adding the tesseract package as a dependency. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/search/tika.nix>

## services.tika.package

The tika package to use. Type: package Default: pkgs.tika Declared by: <nixpkgs/nixos/modules/services/search/tika.nix>

## services.tika.configFile

The Apache Tika configuration (XML) file to use. Type: null or absolute path Default: null Example: ./tika/tika-config.xml Declared by: <nixpkgs/nixos/modules/services/search/tika.nix>

## services.tika.listenAddress

The Apache Tika bind address. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/search/tika.nix>

## services.tika.openFirewall

Whether to open the firewall for Apache Tika. This adds services.tika.port to networking.firewall.allowedTCPPorts. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/search/tika.nix>

## services.tika.port

The Apache Tike port to listen on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9998 Declared by: <nixpkgs/nixos/modules/services/search/tika.nix>
