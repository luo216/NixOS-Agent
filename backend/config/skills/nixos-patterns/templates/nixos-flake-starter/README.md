# Official NixOS Flake Starter

This template keeps a minimal flake-based NixOS shape close to official examples.

## File Tree

```text
.
|-- flake.nix
|-- configuration.nix
`-- hardware-configuration.nix
```

Files:

- `flake.nix`
- `configuration.nix`
- `hardware-configuration.nix`

Usage:

- Replace `hardware-configuration.nix` with the generated file from your machine
- Change `hostname`, username, and `system` as needed
- Build with `sudo nixos-rebuild switch --flake .#nixos`
