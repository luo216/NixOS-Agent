---
module: services.parsedmarc
option_count: 2
source: options.html
---

# services.parsedmarc

## services.parsedmarc.enable

Whether to enable parsedmarc, a DMARC report monitoring service . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.settings

Configuration parameters to set in parsedmarc.ini. For a full list of available parameters, see https://domainaware.github.io/parsedmarc/#configuration-file. Settings containing secret data should be set to an attribute set containing the attribute _secret - a string pointing to a file containing the value the option should be set to. See the example to get a better picture of this: in the resulting parsedmarc.ini file, the splunk_hec.token key will be set to the contents of the /run/keys/splunk_token file. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Example: { imap = { host = "imap.example.com"; user = "alice@example.com"; password = { _secret = "/run/keys/imap_password" }; }; mailbox = { watch = true; batch_size = 30; }; splunk_hec = { url = "https://splunkhec.example.com"; token = { _secret = "/run/keys/splunk_token" }; index = "email"; }; } Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>
