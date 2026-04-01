---
module: services.mail.sendmailSetuidWrapper
option_count: 9
source: options.html
---

# services.mail.sendmailSetuidWrapper

## services.mail.sendmailSetuidWrapper.enable

Whether to enable the wrapper. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/security/wrappers/default.nix>

## services.mail.sendmailSetuidWrapper.capabilities

A comma-separated list of capability clauses to be given to the wrapper program. The format for capability clauses is described in the “TEXTUAL REPRESENTATION” section of the cap_from_text(3) manual page. For a list of capabilities supported by the system, check the capabilities(7) manual page. Note cap_setpcap, which is required for the wrapper program to be able to raise caps into the Ambient set is NOT raised to the Ambient set so that the real program cannot modify its own capabilities!! This may be too restrictive for cases in which the real program needs cap_setpcap but it at least leans on the side security paranoid vs. too relaxed. Type: strings concatenated with “,” Default: "" Declared by: <nixpkgs/nixos/modules/security/wrappers/default.nix>

## services.mail.sendmailSetuidWrapper.group

The group of the wrapper program. Type: string Declared by: <nixpkgs/nixos/modules/security/wrappers/default.nix>

## services.mail.sendmailSetuidWrapper.owner

The owner of the wrapper program. Type: string Declared by: <nixpkgs/nixos/modules/security/wrappers/default.nix>

## services.mail.sendmailSetuidWrapper.permissions

The permissions of the wrapper program. The format is that of a symbolic or numeric file mode understood by chmod. Type: file mode string Default: "u+rx,g+x,o+x" Example: "a+rx" Declared by: <nixpkgs/nixos/modules/security/wrappers/default.nix>

## services.mail.sendmailSetuidWrapper.program

The name of the wrapper program. Defaults to the attribute name. Type: null or string Default: "‹name›" Declared by: <nixpkgs/nixos/modules/security/wrappers/default.nix>

## services.mail.sendmailSetuidWrapper.setgid

Whether to add the setgid bit the wrapper program. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/wrappers/default.nix>

## services.mail.sendmailSetuidWrapper.setuid

Whether to add the setuid bit the wrapper program. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/wrappers/default.nix>

## services.mail.sendmailSetuidWrapper.source

The absolute path to the program to be wrapped. Type: absolute path Declared by: <nixpkgs/nixos/modules/security/wrappers/default.nix>
