---
module: services.xtreemfs.dir.replication
option_count: 2
source: options.html
---

# services.xtreemfs.dir.replication

## services.xtreemfs.dir.replication.enable

Whether to enable XtreemFS DIR replication plugin. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/xtreemfs.nix>

## services.xtreemfs.dir.replication.extraConfig

Configuration of XtreemFS DIR replication plugin. WARNING: configuration is saved as plaintext inside nix store. For more options: https://www.xtreemfs.org/xtfs-guide-1.5.1/index.html Type: strings concatenated with “\n” Example: '' # participants of the replication including this replica babudb.repl.participant.0 = 192.168.0.10 babudb.repl.participant.0.port = 35676 babudb.repl.participant.1 = 192.168.0.11 babudb.repl.participant.1.port = 35676 babudb.repl.participant.2 = 192.168.0.12 babudb.repl.participant.2.port = 35676 # number of servers that at least have to be up to date # To have a fault-tolerant system, this value has to be set to the # majority of nodes i.e., if you have three replicas, set this to 2 # Please note that a setup with two nodes provides no fault-tolerance. babudb.repl.sync.n = 2 # specify whether SSL is required babudb.ssl.enabled = true babudb.ssl.protocol = tlsv12 # server credentials for SSL handshakes babudb.ssl.service_creds = /etc/xos/xtreemfs/truststore/certs/osd.p12 babudb.ssl.service_creds.pw = passphrase babudb.ssl.service_creds.container = pkcs12 # trusted certificates for SSL handshakes babudb.ssl.trusted_certs = /etc/xos/xtreemfs/truststore/certs/trusted.jks babudb.ssl.trusted_certs.pw = jks_passphrase babudb.ssl.trusted_certs.container = jks babudb.ssl.authenticationWithoutEncryption = false '' Declared by: <nixpkgs/nixos/modules/services/network-filesystems/xtreemfs.nix>
