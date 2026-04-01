---
module: boot.binfmt.registrations.<name>
option_count: 10
source: options.html
---

# boot.binfmt.registrations.<name>

## boot.binfmt.registrations.<name>.fixBinary

Whether to open the interpreter file as soon as the registration is loaded, rather than waiting for a relevant file to be invoked. See the description of the ‘F’ flag in the kernel docs for more details. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/binfmt.nix>

## boot.binfmt.registrations.<name>.interpreter

The interpreter to invoke to run the program. Note that the actual registration will point to /run/binfmt/${name}, so the kernel interpreter length limit doesn’t apply. Type: absolute path Declared by: <nixpkgs/nixos/modules/system/boot/binfmt.nix>

## boot.binfmt.registrations.<name>.magicOrExtension

The magic number or extension to match on. Type: string Declared by: <nixpkgs/nixos/modules/system/boot/binfmt.nix>

## boot.binfmt.registrations.<name>.mask

A mask to be ANDed with the byte sequence of the file before matching Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/system/boot/binfmt.nix>

## boot.binfmt.registrations.<name>.matchCredentials

Whether to launch with the credentials and security token of the binary, not the interpreter (e.g. setuid bit). See the description of the ‘C’ flag in the kernel docs for more details. Implies/requires openBinary = true. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/binfmt.nix>

## boot.binfmt.registrations.<name>.offset

The byte offset of the magic number used for recognition. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/system/boot/binfmt.nix>

## boot.binfmt.registrations.<name>.openBinary

Whether to pass the binary to the interpreter as an open file descriptor, instead of a path. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/binfmt.nix>

## boot.binfmt.registrations.<name>.preserveArgvZero

Whether to pass the original argv[0] to the interpreter. See the description of the ‘P’ flag in the kernel docs for more details; Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/binfmt.nix>

## boot.binfmt.registrations.<name>.recognitionType

Whether to recognize executables by magic number or extension. Type: one of “magic”, “extension” Default: "magic" Declared by: <nixpkgs/nixos/modules/system/boot/binfmt.nix>

## boot.binfmt.registrations.<name>.wrapInterpreterInShell

Whether to wrap the interpreter in a shell script. This allows a shell command to be set as the interpreter. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/boot/binfmt.nix>
