---
module: services.mighttpd2
option_count: 4
source: options.html
---

# services.mighttpd2

## services.mighttpd2.enable

Whether to enable Mighttpd2 web server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/mighttpd2.nix>

## services.mighttpd2.config

Verbatim config file to use (see https://kazu-yamamoto.github.io/mighttpd2/config.html) Type: strings concatenated with “\n” Default: "" Example: '' # Example configuration for Mighttpd 2 Port: 80 # IP address or "*" Host: * Debug_Mode: Yes # Yes or No # If available, "nobody" is much more secure for User:. User: root # If available, "nobody" is much more secure for Group:. Group: root Pid_File: /run/mighty.pid Logging: Yes # Yes or No Log_File: /var/log/mighty # The directory must be writable by User: Log_File_Size: 16777216 # bytes Log_Backup_Number: 10 Index_File: index.html Index_Cgi: index.cgi Status_File_Dir: /usr/local/share/mighty/status Connection_Timeout: 30 # seconds Fd_Cache_Duration: 10 # seconds # Server_Name: Mighttpd/3.x.y Tls_Port: 443 Tls_Cert_File: cert.pem # should change this with an absolute path # should change this with comma-separated absolute paths Tls_Chain_Files: chain.pem # Currently, Tls_Key_File must not be encrypted. Tls_Key_File: privkey.pem # should change this with an absolute path Service: 0 # 0 is HTTP only, 1 is HTTPS only, 2 is both '' Declared by: <nixpkgs/nixos/modules/services/web-servers/mighttpd2.nix>

## services.mighttpd2.cores

How many cores to use. If null it will be determined automatically Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/mighttpd2.nix>

## services.mighttpd2.routing

Verbatim routing file to use (see https://kazu-yamamoto.github.io/mighttpd2/config.html) Type: strings concatenated with “\n” Default: "" Example: '' # Example routing for Mighttpd 2 # Domain lists [localhost www.example.com] # Entries are looked up in the specified order # All paths must end with "/" # A path to CGI scripts should be specified with "=>" /~alice/cgi-bin/ => /home/alice/public_html/cgi-bin/ # A path to static files should be specified with "->" /~alice/ -> /home/alice/public_html/ /cgi-bin/ => /export/cgi-bin/ # Reverse proxy rules should be specified with ">>" # /path >> host:port/path2 # Either "host" or ":port" can be committed, but not both. /app/cal/ >> example.net/calendar/ # Yesod app in the same server /app/wiki/ >> 127.0.0.1:3000/ / -> /export/www/ '' Declared by: <nixpkgs/nixos/modules/services/web-servers/mighttpd2.nix>
