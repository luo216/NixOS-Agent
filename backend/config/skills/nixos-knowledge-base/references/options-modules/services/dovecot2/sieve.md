---
module: services.dovecot2.sieve
option_count: 5
source: options.html
---

# services.dovecot2.sieve

## services.dovecot2.sieve.extensions

Sieve extensions for use in user scripts Type: list of string Default: [ ] Example: [ "notify" "imapflags" "vnd.dovecot.filter" ] Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.sieve.globalExtensions

Sieve extensions for use in global scripts Type: list of string Default: [ ] Example: [ "vnd.dovecot.environment" ] Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.sieve.pipeBins

Programs available for use by the vnd.dovecot.pipe extension Type: list of absolute path Default: [ ] Example: map lib.getExe [ (pkgs.writeShellScriptBin "learn-ham.sh" "exec ${pkgs.rspamd}/bin/rspamc learn_ham") (pkgs.writeShellScriptBin "learn-spam.sh" "exec ${pkgs.rspamd}/bin/rspamc learn_spam") ] Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.sieve.plugins

Sieve plugins to load Type: list of string Default: [ ] Example: [ "sieve_extprograms" ] Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.sieve.scripts

Sieve scripts to be executed. Key is a sequence, e.g. ‘before2’, ‘after’ etc. Type: attribute set of absolute path Default: { } Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>
