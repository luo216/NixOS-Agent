---
module: services.printing.cups-pdf.instances.<name>.settings
option_count: 5
source: options.html
---

# services.printing.cups-pdf.instances.<name>.settings

## services.printing.cups-pdf.instances.<name>.settings.AnonDirName

path for anonymously created PDF files Type: null or (optionally newline-terminated) single-line string Default: "/var/spool/cups-pdf-{instance-name}/anonymous" Example: "/var/lib/cups-pdf" Declared by: <nixpkgs/nixos/modules/services/printing/cups-pdf.nix>

## services.printing.cups-pdf.instances.<name>.settings.Anonuser

User for anonymous PDF creation. An empty string disables this feature. Type: (optionally newline-terminated) single-line string Default: "root" Declared by: <nixpkgs/nixos/modules/services/printing/cups-pdf.nix>

## services.printing.cups-pdf.instances.<name>.settings.GhostScript

location of GhostScript binary Type: null or absolute path Default: lib.getExe pkgs.ghostscript Example: ${pkgs.ghostscript}/bin/ps2pdf Declared by: <nixpkgs/nixos/modules/services/printing/cups-pdf.nix>

## services.printing.cups-pdf.instances.<name>.settings.Out

output directory; ${HOME} will be expanded to the user’s home directory, ${USER} will be expanded to the user name. Type: null or (optionally newline-terminated) single-line string Default: "/var/spool/cups-pdf-{instance-name}/users/\${USER}" Example: "\${HOME}/cups-pdf" Declared by: <nixpkgs/nixos/modules/services/printing/cups-pdf.nix>

## services.printing.cups-pdf.instances.<name>.settings.Spool

spool directory Type: null or (optionally newline-terminated) single-line string Default: "/var/spool/cups-pdf-{instance-name}/spool" Example: "/var/lib/cups-pdf" Declared by: <nixpkgs/nixos/modules/services/printing/cups-pdf.nix>
