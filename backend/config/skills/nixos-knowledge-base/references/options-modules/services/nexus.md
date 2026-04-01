---
module: services.nexus
option_count: 9
source: options.html
---

# services.nexus

## services.nexus.enable

Whether to enable Sonatype Nexus3 OSS service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/nexus.nix>

## services.nexus.package

The nexus package to use. Type: package Default: pkgs.nexus Declared by: <nixpkgs/nixos/modules/services/web-apps/nexus.nix>

## services.nexus.group

Group which runs Nexus3. Type: string Default: "nexus" Declared by: <nixpkgs/nixos/modules/services/web-apps/nexus.nix>

## services.nexus.home

Home directory of the Nexus3 instance. Type: string Default: "/var/lib/sonatype-work" Declared by: <nixpkgs/nixos/modules/services/web-apps/nexus.nix>

## services.nexus.jdkPackage

The openjdk8 package to use. Type: package Default: pkgs.openjdk8 Declared by: <nixpkgs/nixos/modules/services/web-apps/nexus.nix>

## services.nexus.jvmOpts

Options for the JVM written to nexus.jvmopts. Please refer to the docs (https://help.sonatype.com/repomanager3/installation/configuring-the-runtime-environment) for further information. Type: strings concatenated with “\n” Default: '' -Xms1200M -Xmx1200M -XX:MaxDirectMemorySize=2G -XX:+UnlockDiagnosticVMOptions -XX:+UnsyncloadClass -XX:+LogVMOutput -XX:LogFile=${home}/nexus3/log/jvm.log -XX:-OmitStackTraceInFastThrow -Djava.net.preferIPv4Stack=true -Dkaraf.home=${package} -Dkaraf.base=${package} -Dkaraf.etc=${package}/etc/karaf -Djava.util.logging.config.file=${package}/etc/karaf/java.util.logging.properties -Dkaraf.data=${home}/nexus3 -Djava.io.tmpdir=${home}/nexus3/tmp -Dkaraf.startLocalConsole=false -Djava.endorsed.dirs=${package}/lib/endorsed '' Declared by: <nixpkgs/nixos/modules/services/web-apps/nexus.nix>

## services.nexus.listenAddress

Address to listen on. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/nexus.nix>

## services.nexus.listenPort

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8081 Declared by: <nixpkgs/nixos/modules/services/web-apps/nexus.nix>

## services.nexus.user

User which runs Nexus3. Type: string Default: "nexus" Declared by: <nixpkgs/nixos/modules/services/web-apps/nexus.nix>
