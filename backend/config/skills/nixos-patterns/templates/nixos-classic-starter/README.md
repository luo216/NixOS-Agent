# Official NixOS Classic Starter

This template mirrors the traditional non-flake `/etc/nixos` shape used by the official installer.

## File Tree

```text
.
|-- configuration.nix
`-- hardware-configuration.nix
```

Files:

- `configuration.nix`
- `hardware-configuration.nix`

Usage:

- Copy into `/etc/nixos/`
- Replace the placeholder hardware file with the generated one from your machine
- Adjust hostname, users, packages, and services as needed
