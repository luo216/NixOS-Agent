---
module: services.llama-cpp
option_count: 7
source: options.html
---

# services.llama-cpp

## services.llama-cpp.enable

Whether to enable LLaMA C++ server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/llama-cpp.nix>

## services.llama-cpp.package

The llama-cpp package to use. Type: package Default: pkgs.llama-cpp Declared by: <nixpkgs/nixos/modules/services/misc/llama-cpp.nix>

## services.llama-cpp.extraFlags

Extra flags passed to llama-cpp-server. Type: list of string Default: [ ] Example: [ "-c" "4096" "-ngl" "32" "--numa" "numactl" ] Declared by: <nixpkgs/nixos/modules/services/misc/llama-cpp.nix>

## services.llama-cpp.host

IP address the LLaMA C++ server listens on. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/misc/llama-cpp.nix>

## services.llama-cpp.model

Model path. Type: absolute path Example: "/models/mistral-instruct-7b/ggml-model-q4_0.gguf" Declared by: <nixpkgs/nixos/modules/services/misc/llama-cpp.nix>

## services.llama-cpp.openFirewall

Open ports in the firewall for LLaMA C++ server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/llama-cpp.nix>

## services.llama-cpp.port

Listen port for LLaMA C++ server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/misc/llama-cpp.nix>
