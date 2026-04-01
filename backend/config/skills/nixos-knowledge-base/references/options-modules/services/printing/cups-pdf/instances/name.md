---
module: services.printing.cups-pdf.instances.<name>
option_count: 4
source: options.html
---

# services.printing.cups-pdf.instances.<name>

## services.printing.cups-pdf.instances.<name>.enable

Whether to enable this cups-pdf instance. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/printing/cups-pdf.nix>

## services.printing.cups-pdf.instances.<name>.confFileText

This will contain the contents of cups-pdf.conf for this instance, derived from settings. You can use this option to append text to the file. Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/printing/cups-pdf.nix>

## services.printing.cups-pdf.instances.<name>.installPrinter

Whether to enable a CUPS printer queue for this instance. The queue will be named after the instance and will use the CUPS-PDF_opt.ppd ppd file. If this is disabled, you need to add the queue yourself to use the instance . Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/printing/cups-pdf.nix>

## services.printing.cups-pdf.instances.<name>.settings

Settings for a cups-pdf instance, see the descriptions in the template config file in the cups-pdf package. The key value pairs declared here will be translated into proper key value pairs for cups-pdf.conf. Setting a value to null disables the option and removes it from the file. Type: open submodule of attribute set of (null or signed integer or string or absolute path or package) Default: { } Example: { Out = "\${HOME}/cups-pdf"; UserUMask = "0033"; } Declared by: <nixpkgs/nixos/modules/services/printing/cups-pdf.nix>
