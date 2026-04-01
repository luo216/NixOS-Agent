---
module: services.parsedmarc.provision.localMail
option_count: 3
source: options.html
---

# services.parsedmarc.provision.localMail

## services.parsedmarc.provision.localMail.enable

Whether Postfix and Dovecot should be set up to receive mail locally. parsedmarc will be configured to watch the local inbox as the automatically created user specified in services.parsedmarc.provision.localMail.recipientName Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.provision.localMail.hostname

The hostname to use when configuring Postfix. Should correspond to the host’s fully qualified domain name and the domain part of the email address which receives DMARC reports. You also have to set up an MX record pointing to this domain name. Type: string Default: config.networking.fqdn Example: "monitoring.example.com" Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.provision.localMail.recipientName

The DMARC mail recipient name, i.e. the name part of the email address which receives DMARC reports. A local user with this name will be set up and assigned a randomized password on service start. Type: string Default: "dmarc" Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>
