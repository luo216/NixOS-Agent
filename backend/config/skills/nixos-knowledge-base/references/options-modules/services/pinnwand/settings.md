---
module: services.pinnwand.settings
option_count: 4
source: options.html
---

# services.pinnwand.settings

## services.pinnwand.settings.database_uri

Database URI compatible with SQLAlchemy. Additional packages may need to be introduced into the environment for certain databases. Type: string Default: "sqlite:////var/lib/pinnwand/pinnwand.db" Example: "sqlite:///:memory" Declared by: <nixpkgs/nixos/modules/services/misc/pinnwand.nix>

## services.pinnwand.settings.footer

The footer in raw HTML. Type: string Default: '' View <a href="//github.com/supakeen/pinnwand" target="_BLANK">source code</a>, the <a href="/removal">removal</a> or <a href="/expiry">expiry</a> stories, or read the <a href="/about">about</a> page. '' Declared by: <nixpkgs/nixos/modules/services/misc/pinnwand.nix>

## services.pinnwand.settings.paste_help

Raw HTML help text shown in the header area. Type: string Default: '' <p>Welcome to pinnwand, this site is a pastebin. It allows you to share code with others. If you write code in the text area below and press the paste button you will be given a link you can share with others so they can view your code as well.</p><p>People with the link can view your pasted code, only you can remove your paste and it expires automatically. Note that anyone could guess the URI to your paste so don't rely on it being private.</p> '' Declared by: <nixpkgs/nixos/modules/services/misc/pinnwand.nix>

## services.pinnwand.settings.paste_size

Maximum size of a paste in bytes. Type: positive integer, meaning >0 Default: 262144 Example: 524288 Declared by: <nixpkgs/nixos/modules/services/misc/pinnwand.nix>
