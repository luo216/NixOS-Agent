---
module: programs.firefox
option_count: 9
source: options.html
---

# programs.firefox

## programs.firefox.enable

Whether to enable the Firefox web browser. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/firefox.nix>

## programs.firefox.package

Firefox package to use. Type: package Default: pkgs.firefox Related packages: pkgs.firefox pkgs.firefox-bin pkgs.firefox-esr Declared by: <nixpkgs/nixos/modules/programs/firefox.nix>

## programs.firefox.autoConfig

AutoConfig files can be used to set and lock preferences that are not covered by the policies.json for Mac and Linux. This method can be used to automatically change user preferences or prevent the end user from modifying specific preferences by locking them. More info can be found in https://support.mozilla.org/en-US/kb/customizing-firefox-using-autoconfig. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/programs/firefox.nix>

## programs.firefox.autoConfigFiles

AutoConfig files can be used to set and lock preferences that are not covered by the policies.json for Mac and Linux. This method can be used to automatically change user preferences or prevent the end user from modifying specific preferences by locking them. More info can be found in https://support.mozilla.org/en-US/kb/customizing-firefox-using-autoconfig. Files are concatenated and autoConfig is appended. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/programs/firefox.nix>

## programs.firefox.languagePacks

The language packs to install. Type: list of (one of “ach”, “af”, “an”, “ar”, “ast”, “az”, “be”, “bg”, “bn”, “br”, “bs”, “ca-valencia”, “ca”, “cak”, “cs”, “cy”, “da”, “de”, “dsb”, “el”, “en-CA”, “en-GB”, “en-US”, “eo”, “es-AR”, “es-CL”, “es-ES”, “es-MX”, “et”, “eu”, “fa”, “ff”, “fi”, “fr”, “fur”, “fy-NL”, “ga-IE”, “gd”, “gl”, “gn”, “gu-IN”, “he”, “hi-IN”, “hr”, “hsb”, “hu”, “hy-AM”, “ia”, “id”, “is”, “it”, “ja”, “ka”, “kab”, “kk”, “km”, “kn”, “ko”, “lij”, “lt”, “lv”, “mk”, “mr”, “ms”, “my”, “nb-NO”, “ne-NP”, “nl”, “nn-NO”, “oc”, “pa-IN”, “pl”, “pt-BR”, “pt-PT”, “rm”, “ro”, “ru”, “sat”, “sc”, “sco”, “si”, “sk”, “skr”, “sl”, “son”, “sq”, “sr”, “sv-SE”, “szl”, “ta”, “te”, “tg”, “th”, “tl”, “tr”, “trs”, “uk”, “ur”, “uz”, “vi”, “xh”, “zh-CN”, “zh-TW”) Default: [ ] Declared by: <nixpkgs/nixos/modules/programs/firefox.nix>

## programs.firefox.policies

Group policies to install. See Mozilla’s documentation for a list of available options. This can be used to install extensions declaratively! Check out the documentation of the ExtensionSettings policy for details. When this option is in use, Firefox will inform you that “your browser is managed by your organisation”. That message appears because NixOS installs what you have declared here such that it cannot be overridden through the user interface. It does not mean that someone else has been given control of your browser, unless of course they also control your NixOS configuration. Type: JSON value Default: { } Declared by: <nixpkgs/nixos/modules/programs/firefox.nix>

## programs.firefox.preferences

Preferences to set from about:config. Some of these might be able to be configured more ergonomically using policies. See here for allowed preferences. When this option is in use, Firefox will inform you that “your browser is managed by your organisation”. That message appears because NixOS installs what you have declared here such that it cannot be overridden through the user interface. It does not mean that someone else has been given control of your browser, unless of course they also control your NixOS configuration. Type: attribute set of (boolean or signed integer or string) Default: { } Example: { "browser.tabs.tabmanager.enabled" = false; } Declared by: <nixpkgs/nixos/modules/programs/firefox.nix>

## programs.firefox.preferencesStatus

The status of firefox.preferences. status can assume the following values: "default": Preferences appear as default. "locked": Preferences appear as default and can’t be changed. "user": Preferences appear as changed. "clear": Value has no effect. Resets to factory defaults on each startup. Type: one of “default”, “locked”, “user”, “clear” Default: "locked" Declared by: <nixpkgs/nixos/modules/programs/firefox.nix>

## programs.firefox.wrapperConfig

Arguments to pass to Firefox wrapper Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/programs/firefox.nix>
