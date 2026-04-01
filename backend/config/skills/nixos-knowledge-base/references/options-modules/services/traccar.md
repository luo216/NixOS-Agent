---
module: services.traccar
option_count: 4
source: options.html
---

# services.traccar

## services.traccar.enable

Whether to enable Traccar, an open source GPS tracking system. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/traccar.nix>

## services.traccar.environmentFile

File containing environment variables to substitute in the configuration before starting Traccar. Can be used for storing the secrets without making them available in the world-readable Nix store. For example, you can set services.traccar.settings.database.password = "$TRACCAR_DB_PASSWORD" and then specify TRACCAR_DB_PASSWORD="<secret>" in the environment file. This value will get substituted in the configuration file. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/traccar.nix>

## services.traccar.settings

config.xml configuration as a Nix attribute set. This option is ignored if settingsFile is set. Nested attributes get translated to a properties entry in the traccar configuration. For instance: mail.smtp.port = "25" results in the following entry: <entry key='mail.smtp.port'>25</entry> Secrets should be specified using environmentFile instead of this world-readable attribute set. Traccar - Configuration File. Type: unspecified value Default: { database = { driver = "org.h2.Driver"; password = ""; url = "jdbc:h2:/var/lib/traccar/traccar"; user = "sa"; }; logger = { console = "true"; }; web = { override = "/var/lib/traccar/override"; }; } Declared by: <nixpkgs/nixos/modules/services/monitoring/traccar.nix>

## services.traccar.settingsFile

File used as configuration for traccar. When specified, settings is ignored. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/traccar.nix>
