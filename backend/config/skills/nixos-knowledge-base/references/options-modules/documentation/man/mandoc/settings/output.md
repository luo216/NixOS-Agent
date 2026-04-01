---
module: documentation.man.mandoc.settings.output
option_count: 8
source: options.html
---

# documentation.man.mandoc.settings.output

## documentation.man.mandoc.settings.output.fragment

Whether to omit the <!DOCTYPE> declaration and the <html>, <head>, and <body> elements and only emit the subtree below the <body> element in HTML output of mandoc(1). The style argument will be ignored. This is useful when embedding manual content within existing documents. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/misc/mandoc.nix>

## documentation.man.mandoc.settings.output.includes

A string of relative path used as a template for the output path of linked header files (usually via the In macro) in HTML output. Instances of %I are replaced with the include filename. The default is not to present a hyperlink. Type: null or string Default: null Example: ../src/%I.html Declared by: <nixpkgs/nixos/modules/misc/mandoc.nix>

## documentation.man.mandoc.settings.output.indent

Number of blank characters at the left margin for normal text, default of 5 for mdoc(7) and 7 for man(7). Increasing this is not recommended; it may result in degraded formatting, for example overfull lines or ugly line breaks. When output is to a pager on a terminal that is less than 66 columns wide, the default is reduced to three columns. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/misc/mandoc.nix>

## documentation.man.mandoc.settings.output.man

A template for linked manuals (usually via the Xr macro) in HTML output. Instances of ‘%N’ and ‘%S’ are replaced with the linked manual’s name and section, respectively. If no section is included, section 1 is assumed. The default is not to present a hyperlink. If two formats are given and a file %N.%S exists in the current directory, the first format is used; otherwise, the second format is used. Type: null or string Default: null Example: ../html%S/%N.%S.html Declared by: <nixpkgs/nixos/modules/misc/mandoc.nix>

## documentation.man.mandoc.settings.output.paper

This option is for generating PostScript and PDF output. The paper size name may be one of a3, a4, a5, legal, or letter. You may also manually specify dimensions as NNxNN, width by height in millimetres. If an unknown value is encountered, letter is used. Output pages default to letter sized and are rendered in the Times font family, 11-point. Margins are calculated as 1/9 the page length and width. Line-height is 1.4m. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/misc/mandoc.nix>

## documentation.man.mandoc.settings.output.style

Path to the file used for an external style-sheet. This must be a valid absolute or relative URI. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/misc/mandoc.nix>

## documentation.man.mandoc.settings.output.toc

Whether to enable printing a table of contents near the beginning of the HTML output of mandoc(1) if an input file contains at least two non-standard sections . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/misc/mandoc.nix>

## documentation.man.mandoc.settings.output.width

The ASCII and UTF-8 output width, default is 78. When output is a pager on a terminal that is less than 79 columns wide, the default is reduced to one less than the terminal width. In any case, lines that are output in literal mode are never wrapped and may exceed the output width. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/misc/mandoc.nix>
