---
module: services.odoo
option_count: 7
source: options.html
---

# services.odoo

## services.odoo.enable

Whether to enable odoo, an open source ERP and CRM system. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/finance/odoo.nix>

## services.odoo.package

The odoo package to use. Type: package Default: pkgs.odoo Declared by: <nixpkgs/nixos/modules/services/finance/odoo.nix>

## services.odoo.addons

Odoo addons. Type: list of package Default: [ ] Example: [ pkgs.odoo_enterprise ] Declared by: <nixpkgs/nixos/modules/services/finance/odoo.nix>

## services.odoo.autoInit

Whether to enable automatically initialize the DB. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/finance/odoo.nix>

## services.odoo.autoInitExtraFlags

Extra flags passed to odoo when run for the first time by autoInit Type: list of string Default: [ ] Example: [ "--without-demo=all" ] Declared by: <nixpkgs/nixos/modules/services/finance/odoo.nix>

## services.odoo.domain

Domain to host Odoo with nginx Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/finance/odoo.nix>

## services.odoo.settings

Odoo configuration settings. For more details see https://www.odoo.com/documentation/15.0/administration/install/deploy.html Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: options = { db_user = "odoo"; db_password="odoo"; }; Declared by: <nixpkgs/nixos/modules/services/finance/odoo.nix>
