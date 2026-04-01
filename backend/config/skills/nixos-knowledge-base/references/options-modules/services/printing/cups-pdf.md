---
module: services.printing.cups-pdf
option_count: 2
source: options.html
---

# services.printing.cups-pdf

## services.printing.cups-pdf.enable

Whether to enable the cups-pdf virtual pdf printer backend. By default, this will install a single printer pdf. but this can be changed/extended with services.printing.cups-pdf.instances . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/printing/cups-pdf.nix>

## services.printing.cups-pdf.instances

Permits to raise one or more cups-pdf instances. Each instance is named by an attribute name, and the attribute’s values control the instance’ configuration. Type: attribute set of (submodule) Default: { pdf = { }; } Example: { pdf = { settings = { Out = "\${HOME}/cups-pdf"; UserUMask = "0033"; }; }; } Declared by: <nixpkgs/nixos/modules/services/printing/cups-pdf.nix>
