---
module: services.hylafax.faxqclean
option_count: 3
source: options.html
---

# services.hylafax.faxqclean

## services.hylafax.faxqclean.archiving

Enable or suppress job archiving: never disables job archiving, as-flagged archives jobs that have been flagged for archiving by sendfax, always forces archiving of all jobs. See also sendfax(1) and faxqclean(8). Type: one of “never”, “as-flagged”, “always” Default: "as-flagged" Example: "always" Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.faxqclean.docqMinutes

Set the document age threshold (in minutes) that controls how long unreferenced files may reside in the docq directory. Type: positive integer, meaning >0 Default: 60 Example: 24*60 Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.faxqclean.doneqMinutes

Set the job age threshold (in minutes) that controls how long jobs may reside in the doneq directory. Type: positive integer, meaning >0 Default: 15 Example: 24*60 Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>
