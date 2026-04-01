---
module: services.nextcloud.settings
option_count: 22
source: options.html
---

# services.nextcloud.settings

## services.nextcloud.settings.enabledPreviewProviders

The preview providers that should be explicitly enabled. Type: list of string Default: [ "OC\\Preview\\PNG" "OC\\Preview\\JPEG" "OC\\Preview\\GIF" "OC\\Preview\\BMP" "OC\\Preview\\XBitmap" "OC\\Preview\\Krita" "OC\\Preview\\WebP" "OC\\Preview\\MarkDown" "OC\\Preview\\TXT" "OC\\Preview\\OpenDocument" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.default_phone_region

An ISO 3166-1 country code which replaces automatic phone-number detection without a country code. As an example, with DE set as the default phone region, the +49 prefix can be omitted for phone numbers. Type: string Default: "" Example: "DE" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.log_type

Logging backend to use. systemd automatically adds the php-systemd extensions to services.nextcloud.phpExtraExtensions. See the nextcloud documentation for details. Type: one of “errorlog”, “file”, “syslog”, “systemd” Default: "syslog" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.loglevel

Log level value between 0 (DEBUG) and 4 (FATAL). 0 (debug): Log all activity. 1 (info): Log activity such as user logins and file activities, plus warnings, errors, and fatal errors. 2 (warn): Log successful operations, as well as warnings of potential problems, errors and fatal errors. 3 (error): Log failed operations and fatal errors. 4 (fatal): Log only fatal errors that cause the server to stop. Type: integer between 0 and 4 (both inclusive) Default: 2 Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.mail_domain

The return address that you want to appear on emails sent by the Nextcloud server, for example nc-admin@example.com, substituting your own domain, of course. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.mail_from_address

FROM address that overrides the built-in sharing-noreply and lostpassword-noreply FROM addresses. Defaults to different FROM addresses depending on the feature. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.mail_send_plaintext_only

Email will be sent by default with an HTML and a plain text body. This option allows sending only plain text emails. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.mail_sendmailmode

For smtp, the sendmail binary is started with the parameter -bs: Use the SMTP protocol on standard input and output. For pipe, the binary is started with the parameters -t: Read message from STDIN and extract recipients. Type: one of “smtp”, “pipe” Default: "smtp" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.mail_smtpauth

This depends on mail_smtpmode. Change this to true if your mail server requires authentication. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.mail_smtpdebug

Enable SMTP class debugging. loglevel will likely need to be adjusted too. See docs. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.mail_smtphost

This depends on mail_smtpmode. Specify the IP address of your mail server host. This may contain multiple hosts separated by a semicolon. If you need to specify the port number, append it to the IP address separated by a colon, like this: 127.0.0.1:24. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.mail_smtpmode

Which mode to use for sending mail. If you are using local or remote SMTP, set this to smtp. For the sendmail option, you need an installed and working email system on the server, with your local sendmail installation. For qmail, the binary is /var/qmail/bin/sendmail, and it must be installed on your Unix system. Use the string null to send no mails (disable mail delivery). This can be useful if mails should be sent via APIs and rendering messages is not necessary. Type: one of “sendmail”, “smtp”, “qmail”, “null” Default: "smtp" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.mail_smtpname

This depends on mail_smtpauth. Specify the username for authenticating to the SMTP server. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.mail_smtpport

This depends on mail_smtpmode. Specify the port for sending mail. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 25 Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.mail_smtpsecure

This depends on mail_smtpmode. Specify ssl when you are using SSL/TLS. Any other value will be ignored. If the server advertises STARTTLS capabilities, they might be used, but they cannot be enforced by this config option. Type: one of “”, “ssl” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.mail_smtpstreamoptions

This depends on mail_smtpmode. Array of additional streams options that will be passed to underlying Swift mailer implementation. Type: attribute set of attribute set of anything Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.mail_smtptimeout

This depends on mail_smtpmode. This sets the SMTP server timeout, in seconds. You may need to increase this if you are running an anti-malware or spam scanner. Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.mail_template_class

Replaces the default mail template layout. This can be utilized if the options to modify the mail texts with the theming app are not enough. The class must extend \OC\Mail\EMailTemplate Type: string Default: "\\OC\\Mail\\EMailTemplate" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.overwriteprotocol

Force Nextcloud to always use HTTP or HTTPS i.e. for link generation. Nextcloud uses the currently used protocol by default, but when behind a reverse-proxy, it may use http for everything although Nextcloud may be served via HTTPS. Type: one of “”, “http”, “https” Default: "" Example: "https" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.skeletondirectory

The directory where the skeleton files are located. These files will be copied to the data directory of new users. Leave empty to not copy any skeleton files. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.trusted_domains

Trusted domains, from which the nextcloud installation will be accessible. You don’t need to add services.nextcloud.hostname here. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.settings.trusted_proxies

Trusted proxies, to provide if the nextcloud installation is being proxied to secure against e.g. spoofing. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>
