---
module: services.wordpress.sites.<name>.virtualHost
option_count: 24
source: options.html
---

# services.wordpress.sites.<name>.virtualHost

## services.wordpress.sites.<name>.virtualHost.enableACME

Whether to ask Let’s Encrypt to sign a certificate for this vhost. Alternately, you can use an existing certificate through useACMEHost. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.enableUserDir

Whether to enable serving ~/public_html as /~«username». Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.acmeRoot

Directory for the acme challenge which is PUBLIC, don’t put certs or keys in here. Set to null to inherit from config.security.acme. Type: null or string Default: "/var/lib/acme/acme-challenge" Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.addSSL

Whether to enable HTTPS in addition to plain HTTP. This will set defaults for listen to listen on all interfaces on the respective default ports (80, 443). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.adminAddr

E-mail address of the server administrator. Type: null or string Default: null Example: "admin@example.org" Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.documentRoot

The path of Apache’s document root directory. If left undefined, an empty directory in the Nix store will be used as root. Type: null or absolute path Default: null Example: "/data/webserver/docs" Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.extraConfig

These lines go to httpd.conf verbatim. They will go after directories and directory aliases defined by default. Type: strings concatenated with “\n” Default: "" Example: '' <Directory /home> Options FollowSymlinks AllowOverride All </Directory> '' Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.forceSSL

Whether to add a separate nginx server block that permanently redirects (301) all plain HTTP traffic to HTTPS. This will set defaults for listen to listen on all interfaces on the respective default ports (80, 443), where the non-SSL listens are used for the redirect vhosts. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.globalRedirect

If set, all requests for this host are redirected permanently to the given URL. Type: null or string Default: null Example: "http://newserver.example.org/" Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.hostName

Canonical hostname for the server. Type: string Default: "‹name›" Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.http2

Whether to enable HTTP 2. HTTP/2 is supported in all multi-processing modules that come with httpd. However, if you use the prefork mpm, there will be severe restrictions. Refer to https://httpd.apache.org/docs/2.4/howto/http2.html#mpm-config for details. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.listen

Listen addresses and ports for this virtual host. Note This option overrides addSSL, forceSSL and onlySSL. If you only want to set the addresses manually and not the ports, take a look at listenAddresses. Type: list of (submodule) Default: [ ] Example: [ { ip = "195.154.1.1"; port = 443; ssl = true; } { ip = "192.154.1.1"; port = 80; } { ip = "*"; port = 8080; } ] Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.listenAddresses

Listen addresses for this virtual host. Compared to listen this only sets the addresses and the ports are chosen automatically. Type: non-empty (list of string) Default: [ "*" ] Example: [ "127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.locations

Declarative location config. See https://httpd.apache.org/docs/2.4/mod/core.html#location for details. Type: attribute set of (submodule) Default: { } Example: { "/" = { proxyPass = "http://localhost:3000"; }; "/foo/bar.png" = { alias = "/home/eelco/some-file.png"; }; }; Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.logFormat

Log format for Apache’s log files. Possible values are: combined, common, referer, agent. Type: string Default: "common" Example: "combined" Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.onlySSL

Whether to enable HTTPS and reject plain HTTP connections. This will set defaults for listen to listen on all interfaces on port 443. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.robotsEntries

Specification of pages to be ignored by web crawlers. See http://www.robotstxt.org/ for details. Type: strings concatenated with “\n” Default: "" Example: "Disallow: /foo/" Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.servedDirs

This option provides a simple way to serve static directories. Type: list of (attribute set) Default: [ ] Example: [ { dir = "/home/eelco/Dev/nix-homepage"; urlPath = "/nix"; } ] Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.servedFiles

This option provides a simple way to serve individual, static files. Note This option has been deprecated and will be removed in a future version of NixOS. You can achieve the same result by making use of the locations.<name>.alias option. Type: list of (attribute set) Default: [ ] Example: [ { file = "/home/eelco/some-file.png"; urlPath = "/foo/bar.png"; } ] Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.serverAliases

Additional names of virtual hosts served by this virtual host configuration. Type: list of string Default: [ ] Example: [ "www.example.org" "www.example.org:8080" "example.org" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.sslServerCert

Path to server SSL certificate. Type: absolute path Example: "/var/host.cert" Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.sslServerChain

Path to server SSL chain file. Type: null or absolute path Default: null Example: "/var/ca.pem" Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.sslServerKey

Path to server SSL certificate key. Type: absolute path Example: "/var/host.key" Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost.useACMEHost

A host of an existing Let’s Encrypt certificate to use. This is useful if you have many subdomains and want to avoid hitting the rate limit. Alternately, you can generate a certificate through enableACME. Note that this option does not create any certificates, nor it does add subdomains to existing ones – you will need to create them manually using security.acme.certs. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>
