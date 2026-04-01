---
module: services.gitea.captcha
option_count: 7
source: options.html
---

# services.gitea.captcha

## services.gitea.captcha.enable

Enables Gitea to display a CAPTCHA challenge on registration. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.captcha.requireForExternalRegistration

Displays a CAPTCHA challenge for users that register externally. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.captcha.requireForLogin

Displays a CAPTCHA challenge whenever a user logs in. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.captcha.secretFile

Path to a file containing the CAPTCHA secret key. Type: null or string Default: null Example: "/var/lib/secrets/gitea/captcha_secret" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.captcha.siteKey

CAPTCHA site key to use for Gitea. Type: null or string Default: null Example: "my_site_key" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.captcha.type

The type of CAPTCHA to use for Gitea. Type: one of “image”, “recaptcha”, “hcaptcha”, “mcaptcha”, “cfturnstile” Default: "image" Example: "recaptcha" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.captcha.url

CAPTCHA url to use for Gitea. Only relevant for recaptcha and mcaptcha. Type: null or string Default: null Example: "https://google.com/recaptcha" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>
