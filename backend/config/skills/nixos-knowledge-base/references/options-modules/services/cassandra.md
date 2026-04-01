---
module: services.cassandra
option_count: 27
source: options.html
---

# services.cassandra

## services.cassandra.enable

Whether to enable Apache Cassandra – Scalable and highly available database . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.package

The cassandra package to use. Type: package Default: pkgs.cassandra Example: cassandra_4 Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.allowClients

Enables or disables the native transport server (CQL binary protocol). This server uses the same address as the rpcAddress, but the port it uses is not rpc_port but native_transport_port. See the official Cassandra docs for more information on these variables and set them using extraConfig. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.clusterName

The name of the cluster. This setting prevents nodes in one logical cluster from joining another. All nodes in a cluster must have the same value. Type: string Default: "Test Cluster" Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.extraConfig

Extra options to be merged into cassandra.yaml as nix attribute set. Type: attribute set Default: { } Example: { commitlog_sync_batch_window_in_ms = 3; } Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.extraEnvSh

Extra shell lines to be appended onto cassandra-env.sh. Type: strings concatenated with “\n” Default: "" Example: "CLASSPATH=$CLASSPATH:${extraJar}" Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.fullRepairInterval

Set the interval how often full repairs are run, i.e. nodetool repair --full is executed. See https://cassandra.apache.org/doc/latest/operating/repair.html for more information. Set to null to disable full repairs. Type: null or string Default: "3w" Example: null Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.fullRepairOptions

Options passed through to the full repair command. Type: list of string Default: [ ] Example: [ "--partitioner-range" ] Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.group

Run Apache Cassandra under this group. Type: string Default: "cassandra" Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.heapNewSize

Must be left blank or set together with heapNewSize. If left blank a sensible value for the available amount of RAM and CPU cores is calculated. Override to set the amount of memory to allocate to the JVM at start-up. For production use you may wish to adjust this for your environment. HEAP_NEWSIZE refers to the size of the young generation. The main trade-off for the young generation is that the larger it is, the longer GC pause times will be. The shorter it is, the more expensive GC will be (usually). The example HEAP_NEWSIZE assumes a modern 8-core+ machine for decent pause times. If in doubt, and if you do not particularly want to tweak, go with 100 MB per physical CPU core. Type: null or string Default: null Example: "800M" Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.homeDir

Home directory for Apache Cassandra. Type: absolute path Default: "/var/lib/cassandra" Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.incrementalRepairInterval

Set the interval how often incremental repairs are run, i.e. nodetool repair is executed. See https://cassandra.apache.org/doc/latest/operating/repair.html for more information. Set to null to disable incremental repairs. Type: null or string Default: "3d" Example: null Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.incrementalRepairOptions

Options passed through to the incremental repair command. Type: list of string Default: [ ] Example: [ "--partitioner-range" ] Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.jmxPort

Specifies the default port over which Cassandra will be available for JMX connections. For security reasons, you should not expose this port to the internet. Firewall it if needed. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 7199 Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.jmxRoles

Roles that are allowed to access the JMX (e.g. nodetool) BEWARE: The passwords will be stored world readable in the nix store. It’s recommended to use your own protected file using jmxRolesFile Doesn’t work in versions older than 3.11 because they don’t like that it’s world readable. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.jmxRolesFile

Specify your own jmx roles file. Type: null or absolute path Default: "generated configuration file" Example: "/var/lib/cassandra/jmx.password" Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.jvmOpts

Populate the JVM_OPT environment variable. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.listenAddress

Address or interface to bind to and tell other Cassandra nodes to connect to. You must change this if you want multiple nodes to be able to communicate! Set listenAddress OR listenInterface, not both. Leaving it blank leaves it up to InetAddress.getLocalHost(). This will always do the “Right Thing” if the node is properly configured (hostname, name resolution, etc), and the Right Thing is to use the address associated with the hostname (it might not be). Setting listenAddress to 0.0.0.0 is always wrong. Type: null or string Default: "127.0.0.1" Example: null Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.listenInterface

Set listenAddress OR listenInterface, not both. Interfaces must correspond to a single address, IP aliasing is not supported. Type: null or string Default: null Example: "eth1" Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.logbackConfig

XML logback configuration for cassandra Type: strings concatenated with “\n” Default: '' <configuration scan="false"> <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender"> <encoder> <pattern>%-5level %date{HH:mm:ss,SSS} %msg%n</pattern> </encoder> </appender> <root level="INFO"> <appender-ref ref="STDOUT" /> </root> <logger name="com.thinkaurelius.thrift" level="ERROR"/> </configuration> '' Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.mallocArenaMax

Set this to control the amount of arenas per-thread in glibc. Type: null or signed integer Default: null Example: 4 Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.maxHeapSize

Must be left blank or set together with heapNewSize. If left blank a sensible value for the available amount of RAM and CPU cores is calculated. Override to set the amount of memory to allocate to the JVM at start-up. For production use you may wish to adjust this for your environment. MAX_HEAP_SIZE is the total amount of memory dedicated to the Java heap. HEAP_NEWSIZE refers to the size of the young generation. The main trade-off for the young generation is that the larger it is, the longer GC pause times will be. The shorter it is, the more expensive GC will be (usually). Type: null or string Default: null Example: "4G" Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.remoteJmx

Cassandra ships with JMX accessible only from localhost. To enable remote JMX connections set to true. Be sure to also enable authentication and/or TLS. See: https://wiki.apache.org/cassandra/JmxSecurity Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.rpcAddress

The address or interface to bind the native transport server to. Set rpcAddress OR rpcInterface, not both. Leaving rpcAddress blank has the same effect as on listenAddress (i.e. it will be based on the configured hostname of the node). Note that unlike listenAddress, you can specify "0.0.0.0", but you must also set extraConfig.broadcast_rpc_address to a value other than "0.0.0.0". For security reasons, you should not expose this port to the internet. Firewall it if needed. Type: null or string Default: "127.0.0.1" Example: null Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.rpcInterface

Set rpcAddress OR rpcInterface, not both. Interfaces must correspond to a single address, IP aliasing is not supported. Type: null or string Default: null Example: "eth1" Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.seedAddresses

The addresses of hosts designated as contact points in the cluster. A joining node contacts one of the nodes in the seeds list to learn the topology of the ring. Set to [ "127.0.0.1" ] for a single node cluster. Type: list of string Default: [ "127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>

## services.cassandra.user

Run Apache Cassandra under this user. Type: string Default: "cassandra" Declared by: <nixpkgs/nixos/modules/services/databases/cassandra.nix>
