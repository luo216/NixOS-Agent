---
module: services.paperless
option_count: 17
source: options.html
---

# services.paperless

## services.paperless.enable

Whether to enable Paperless-ngx. When started, the Paperless database is automatically created if it doesn’t exist and updated if the Paperless package has changed. Both tasks are achieved by running a Django migration. A script to manage the Paperless-ngx instance (by wrapping Django’s manage.py) is available as paperless-manage. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>

## services.paperless.package

The paperless-ngx package to use. Type: package Default: pkgs.paperless-ngx Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>

## services.paperless.address

Web interface address. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>

## services.paperless.configureNginx

Whether to configure nginx as a reverse proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>

## services.paperless.configureTika

Whether to configure Tika and Gotenberg to process Office and e-mail files with OCR. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>

## services.paperless.consumptionDir

Directory from which new documents are imported. Type: string Default: "${dataDir}/consume" Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>

## services.paperless.consumptionDirIsPublic

Whether all users can write to the consumption dir. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>

## services.paperless.dataDir

Directory to store the Paperless data. Type: string Default: "/var/lib/paperless" Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>

## services.paperless.domain

Domain under which paperless will be available. Type: null or string Default: null Example: "paperless.example.com" Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>

## services.paperless.environmentFile

Path to a file containing extra paperless config options in the systemd EnvironmentFile format. Refer to the documentation for config options. This can be used to pass secrets to paperless without putting them in the Nix store. To set a database password, point environmentFile at a file containing: PAPERLESS_DBPASS=<pass> Type: null or absolute path Default: null Example: "/run/secrets/paperless" Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>

## services.paperless.manage

The package derivation for the paperless-manage wrapper script. Useful for other modules that need to add this specific script to a service’s PATH. Type: package (read only) Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>

## services.paperless.mediaDir

Directory to store the Paperless documents. Type: string Default: "${dataDir}/media" Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>

## services.paperless.openMPThreadingWorkaround

Whether to enable a workaround for document classifier timeouts. Paperless uses OpenBLAS via scikit-learn for document classification. The default is to use threading for OpenMP but this would cause the document classifier to spin on one core seemingly indefinitely if there are large amounts of classes per classification; causing it to effectively never complete due to running into timeouts. This sets OMP_NUM_THREADS to 1 in order to mitigate the issue. See https://github.com/NixOS/nixpkgs/issues/240591 for more information . Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>

## services.paperless.passwordFile

A file containing the superuser password. A superuser is required to access the web interface. If unset, you can create a superuser manually by running paperless-manage createsuperuser. The default superuser name is admin. To change it, set option settings.PAPERLESS_ADMIN_USER. WARNING: When changing the superuser name after the initial setup, the old superuser will continue to exist. To disable login for the web interface, set the following: settings.PAPERLESS_AUTO_LOGIN_USERNAME = "admin";. WARNING: Only use this on a trusted system without internet access to Paperless. Type: null or absolute path Default: null Example: "/run/keys/paperless-password" Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>

## services.paperless.port

Web interface port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 28981 Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>

## services.paperless.settings

Extra paperless config options. See the documentation for available options. Note that some settings such as PAPERLESS_CONSUMER_IGNORE_PATTERN expect JSON values. Settings declared as lists or attrsets will automatically be serialised into JSON strings for your convenience. Type: open submodule of attribute set of (boolean or floating point number or signed integer or string or absolute path or package or list of (boolean or floating point number or signed integer or string or absolute path or package) or attribute set of (boolean or floating point number or signed integer or string or absolute path or package)) Default: { } Example: { PAPERLESS_CONSUMER_IGNORE_PATTERN = [ ".DS_STORE/*" "desktop.ini" ]; PAPERLESS_OCR_LANGUAGE = "deu+eng"; PAPERLESS_OCR_USER_ARGS = { optimize = 1; pdfa_image_compression = "lossless"; }; } Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>

## services.paperless.user

User under which Paperless runs. Type: string Default: "paperless" Declared by: <nixpkgs/nixos/modules/services/misc/paperless.nix>
