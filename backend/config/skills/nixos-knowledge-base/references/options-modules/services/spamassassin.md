---
module: services.spamassassin
option_count: 4
source: options.html
---

# services.spamassassin

## services.spamassassin.enable

Whether to enable the SpamAssassin daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/spamassassin.nix>

## services.spamassassin.config

The SpamAssassin local.cf config If you are using this configuration: add_header all Status _YESNO_, score=_SCORE_ required=_REQD_ tests=_TESTS_ autolearn=_AUTOLEARN_ version=_VERSION_ Then you can Use this sieve filter: require ["fileinto", "reject", "envelope"]; if header :contains "X-Spam-Flag" "YES" { fileinto "spam"; } Or this procmail filter: :0: * ^X-Spam-Flag: YES /var/vpopmail/domains/lastlog.de/js/.maildir/.spam/new To filter your messages based on the additional mail headers added by spamassassin. Type: strings concatenated with “\n” Default: "" Example: '' #rewrite_header Subject [***** SPAM _SCORE_ *****] required_score 5.0 use_bayes 1 bayes_auto_learn 1 add_header all Status _YESNO_, score=_SCORE_ required=_REQD_ tests=_TESTS_ autolearn=_AUTOLEARN_ version=_VERSION_ '' Declared by: <nixpkgs/nixos/modules/services/mail/spamassassin.nix>

## services.spamassassin.debug

Whether to run the SpamAssassin daemon in debug mode Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/spamassassin.nix>

## services.spamassassin.initPreConf

The SpamAssassin init.pre config. Type: string or absolute path Default: '' # # to update this list, run this command in the rules directory: # grep 'loadplugin.*Mail::SpamAssassin::Plugin::.*' -o -h * | sort | uniq # #loadplugin Mail::SpamAssassin::Plugin::AccessDB #loadplugin Mail::SpamAssassin::Plugin::AntiVirus loadplugin Mail::SpamAssassin::Plugin::AskDNS # loadplugin Mail::SpamAssassin::Plugin::ASN loadplugin Mail::SpamAssassin::Plugin::AutoLearnThreshold #loadplugin Mail::SpamAssassin::Plugin::AWL loadplugin Mail::SpamAssassin::Plugin::Bayes loadplugin Mail::SpamAssassin::Plugin::BodyEval loadplugin Mail::SpamAssassin::Plugin::Check #loadplugin Mail::SpamAssassin::Plugin::DCC loadplugin Mail::SpamAssassin::Plugin::DKIM loadplugin Mail::SpamAssassin::Plugin::DMARC loadplugin Mail::SpamAssassin::Plugin::DNSEval loadplugin Mail::SpamAssassin::Plugin::FreeMail loadplugin Mail::SpamAssassin::Plugin::HeaderEval loadplugin Mail::SpamAssassin::Plugin::HTMLEval loadplugin Mail::SpamAssassin::Plugin::HTTPSMismatch loadplugin Mail::SpamAssassin::Plugin::ImageInfo loadplugin Mail::SpamAssassin::Plugin::MIMEEval loadplugin Mail::SpamAssassin::Plugin::MIMEHeader # loadplugin Mail::SpamAssassin::Plugin::PDFInfo #loadplugin Mail::SpamAssassin::Plugin::PhishTag loadplugin Mail::SpamAssassin::Plugin::Pyzor loadplugin Mail::SpamAssassin::Plugin::Razor2 # loadplugin Mail::SpamAssassin::Plugin::RelayCountry loadplugin Mail::SpamAssassin::Plugin::RelayEval loadplugin Mail::SpamAssassin::Plugin::ReplaceTags # loadplugin Mail::SpamAssassin::Plugin::Rule2XSBody # loadplugin Mail::SpamAssassin::Plugin::Shortcircuit loadplugin Mail::SpamAssassin::Plugin::SpamCop loadplugin Mail::SpamAssassin::Plugin::SPF loadplugin Mail::SpamAssassin::Plugin::TextCat # loadplugin Mail::SpamAssassin::Plugin::TxRep loadplugin Mail::SpamAssassin::Plugin::URIDetail loadplugin Mail::SpamAssassin::Plugin::URIDNSBL loadplugin Mail::SpamAssassin::Plugin::URIEval # loadplugin Mail::SpamAssassin::Plugin::URILocalBL loadplugin Mail::SpamAssassin::Plugin::VBounce loadplugin Mail::SpamAssassin::Plugin::WhiteListSubject loadplugin Mail::SpamAssassin::Plugin::WLBLEval '' Declared by: <nixpkgs/nixos/modules/services/mail/spamassassin.nix>
