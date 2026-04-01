---
module: services.magnetico.web
option_count: 5
source: options.html
---

# services.magnetico.web

## services.magnetico.web.address

Address the web interface will listen to. Type: string Default: "localhost" Example: "1.2.3.4" Declared by: <nixpkgs/nixos/modules/services/torrent/magnetico.nix>

## services.magnetico.web.credentials

The credentials to access the web interface, in case authentication is enabled, in the format username:hash. If unset no authentication will be required. Usernames must start with a lowercase ([a-z]) ASCII character, might contain non-consecutive underscores except at the end, and consists of small-case a-z characters and digits 0-9. The htpasswd tool from the apacheHttpd package may be used to generate the hash: htpasswd -bnBC 12 username password Warning The hashes will be stored world-readable in the nix store. Consider using the credentialsFile option if you don’t want this. Type: attribute set of string Default: { } Example: { myuser = "$2y$12$YE01LZ8jrbQbx6c0s2hdZO71dSjn2p/O9XsYJpz.5968yCysUgiaG"; } Declared by: <nixpkgs/nixos/modules/services/torrent/magnetico.nix>

## services.magnetico.web.credentialsFile

The path to the file holding the credentials to access the web interface. If unset no authentication will be required. The file must contain user names and password hashes in the format username:hash, one for each line. Usernames must start with a lowecase ([a-z]) ASCII character, might contain non-consecutive underscores except at the end, and consists of small-case a-z characters and digits 0-9. The htpasswd tool from the apacheHttpd package may be used to generate the hash: htpasswd -bnBC 12 username password Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/torrent/magnetico.nix>

## services.magnetico.web.extraOptions

Extra command line arguments to pass to magneticow. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/torrent/magnetico.nix>

## services.magnetico.web.port

Port the web interface will listen to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/torrent/magnetico.nix>
