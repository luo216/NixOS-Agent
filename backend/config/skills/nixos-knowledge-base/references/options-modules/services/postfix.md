---
module: services.postfix
option_count: 28
source: options.html
---

# services.postfix

## services.postfix.enable

Whether to run the Postfix mail server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.enableHeaderChecks

Whether to enable postfix header checks Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.enableSmtp

Whether to enable the smtp service configured in the master.cf. This service listens for plain text SMTP connections on port 25 and supports explicit TLS via StartTLS. It is the primary port used by SMTP servers to exchange mail. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.enableSubmission

Whether to enable the `submission` service configured in master.cf. This service listens for plain text SMTP connections on port 587 and supports explicit TLS via StartTLS. It is a way for clients to login and submit mails after an inband connection upgrade using StartTLS. ::: {.warning} [RFC 8314](https://www.rfc-editor.org/rfc/rfc8314) discourages the use of explicit TLS for mail submissionn. ::: Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.enableSubmissions

Whether to enable the submissions service configured in master.cf. This service listen for implicit TLS connections on port 465. ::: {.info} Per RFC 8314 implicit TLS is recommended for mail submission. ::: Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.package

The postfix package to use. Type: package Default: pkgs.postfix Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.aliasFiles

Aliases’ tables to be compiled and placed into /var/lib/postfix/conf. Type: attribute set of absolute path Default: { } Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.aliasMapType

The format the alias map should have. Use regexp if you want to use regular expressions. Type: one of “hash”, “regexp”, “pcre” Default: "hash" Example: "regexp" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.canonical

Entries for the canonical(5) table. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.dnsBlacklistOverrides

contents of check_client_access for overriding dnsBlacklists Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.dnsBlacklists

dns blacklist servers to use with smtpd_client_restrictions Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.extraAliases

Additional entries to put verbatim into aliases file, cf. man-page aliases(8). Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.extraHeaderChecks

Extra lines to /etc/postfix/header_checks file. Type: strings concatenated with “\n” Default: "" Example: "/^X-Spam-Flag:/ REDIRECT spam@example.com" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.extraMasterConf

Extra lines to append to the generated master.cf file. Type: strings concatenated with “\n” Default: "" Example: "submission inet n - n - - smtpd" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.group

What to call the Postfix group (must be used only for postfix). Type: string Default: "postfix" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.headerChecks

Postfix header checks. Type: list of (submodule) Default: [ ] Example: [ { action = "REDIRECT spam@example.com"; pattern = "/^X-Spam-Flag:/"; } ] Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.localRecipients

List of accepted local users. Specify a bare username, an "@domain.tld" wild-card, or a complete "user@domain.tld" address. If set, these names end up in the local recipient map – see the local(8) man-page – and effectively replace the system user database lookup that’s otherwise used by default. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.mapFiles

Maps to be compiled and placed into /var/lib/postfix/conf. Type: attribute set of absolute path Default: { } Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.postmasterAlias

Who should receive postmaster e-mail. Multiple values can be added by separating values with comma. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.rootAlias

Who should receive root e-mail. Blank for no redirection. Multiple values can be added by separating values with comma. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.setSendmail

Whether to set the system sendmail to postfix’s. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.setgidGroup

How to call postfix setgid group (for postdrop). Should be uniquely used group. Type: string Default: "postdrop" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.submissionOptions

Options for the submission config in master.cf Type: attribute set of string Default: { milter_macro_daemon_name = "ORIGINATING"; smtpd_client_restrictions = "permit_sasl_authenticated,reject"; smtpd_sasl_auth_enable = "yes"; smtpd_tls_security_level = "encrypt"; } Example: { milter_macro_daemon_name = "ORIGINATING"; smtpd_client_restrictions = "permit_sasl_authenticated,reject"; smtpd_sasl_auth_enable = "yes"; smtpd_sasl_type = "dovecot"; smtpd_tls_security_level = "encrypt"; } Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.submissionsOptions

Options for the submission config via smtps in master.cf. smtpd_tls_security_level will be set to encrypt, if it is missing or has one of the values “may” or “none”. smtpd_tls_wrappermode with value “yes” will be added automatically. Type: attribute set of string Default: { milter_macro_daemon_name = "ORIGINATING"; smtpd_client_restrictions = "permit_sasl_authenticated,reject"; smtpd_sasl_auth_enable = "yes"; } Example: { milter_macro_daemon_name = "ORIGINATING"; smtpd_client_restrictions = "permit_sasl_authenticated,reject"; smtpd_sasl_auth_enable = "yes"; smtpd_sasl_type = "dovecot"; } Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.transport

Entries for the transport map, cf. man-page transport(5). Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.user

What to call the Postfix user (must be used only for postfix). Type: string Default: "postfix" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.virtual

Entries for the virtual alias map, cf. man-page virtual(5). Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.virtualMapType

What type of virtual alias map file to use. Use "regexp" for regular expressions. Type: one of “hash”, “regexp”, “pcre” Default: "hash" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>
