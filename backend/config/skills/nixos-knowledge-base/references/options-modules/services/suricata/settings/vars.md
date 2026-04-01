---
module: services.suricata.settings.vars
option_count: 2
source: options.html
---

# services.suricata.settings.vars

## services.suricata.settings.vars.address-groups

The address group variables for suricata, if not defined the default value of suricata (see example) will be used. Your settings will extend the predefined values in example. Type: submodule Default: { } Example: { AIM_SERVERS = "$EXTERNAL_NET"; DC_SERVERS = "$HOME_NET"; DNP3_CLIENT = "$HOME_NET"; DNP3_SERVER = "$HOME_NET"; DNS_SERVERS = "$HOME_NET"; ENIP_CLIENT = "$HOME_NET"; ENIP_SERVER = "$HOME_NET"; EXTERNAL_NET = "!$HOME_NET"; HOME_NET = "[192.168.0.0/16,10.0.0.0/8,172.16.0.0/12]"; HTTP_SERVERS = "$HOME_NET"; MODBUS_CLIENT = "$HOME_NET"; MODBUS_SERVER = "$HOME_NET"; SMTP_SERVERS = "$HOME_NET"; SQL_SERVERS = "$HOME_NET"; TELNET_SERVERS = "$HOME_NET"; } Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.vars.port-groups

The port group variables for suricata. Type: null or (attribute set of string) Default: { DNP3_PORTS = "20000"; FILE_DATA_PORTS = "[$HTTP_PORTS,110,143]"; FTP_PORTS = "21"; GENEVE_PORTS = "6081"; HTTP_PORTS = "80"; MODBUS_PORTS = "502"; ORACLE_PORTS = "1521"; SHELLCODE_PORTS = "!80"; SSH_PORTS = "22"; TEREDO_PORTS = "3544"; VXLAN_PORTS = "4789"; } Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>
