---
module: virtualisation.oci-containers.containers.<name>
option_count: 26
source: options.html
---

# virtualisation.oci-containers.containers.<name>

## virtualisation.oci-containers.containers.<name>.autoRemoveOnStop

Automatically remove the container when it is stopped or killed Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.autoStart

When enabled, the container is automatically started on boot. If this option is set to false, the container has to be started on-demand via its service. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.capabilities

Capabilities to configure for the container. When set to true, capability is added to the container. When set to false, capability is dropped from the container. When null, default runtime settings apply. Type: lazy attribute set of (null or boolean) Default: { } Example: { SYS_ADMIN = true; SYS_WRITE = false; } Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.cmd

Commandline arguments to pass to the image’s entrypoint. Type: list of string Default: [ ] Example: [ "--port=9000" ] Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.dependsOn

Define which other containers this one depends on. They will be added to both After and Requires for the unit. Use the same name as the attribute under virtualisation.oci-containers.containers. Type: list of string Default: [ ] Example: virtualisation.oci-containers.containers = { node1 = {}; node2.dependsOn = [ "node1" ]; }; Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.devices

List of devices to attach to this container. Type: list of string Default: [ ] Example: [ "/dev/dri:/dev/dri" ] Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.entrypoint

Override the default entrypoint of the image. Type: null or string Default: null Example: "/bin/my-app" Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.environment

Environment variables to set for this container. Type: attribute set of string Default: { } Example: { DATABASE_HOST = "db.example.com"; DATABASE_PORT = "3306"; } Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.environmentFiles

Environment files for this container. Type: list of absolute path Default: [ ] Example: [ /path/to/.env /path/to/.env.secret ] Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.extraOptions

Extra options for podman run. Type: list of string Default: [ ] Example: [ "--network=host" ] Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.hostname

The hostname of the container. Type: null or string Default: null Example: "hello-world" Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.image

OCI image to run. Type: string Example: "library/hello-world" Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.imageFile

Path to an image file to load before running the image. This can be used to bypass pulling the image from the registry. The image attribute must match the name and tag of the image contained in this file, as they will be used to run the container with that image. If they do not match, the image will be pulled from the registry as usual. Type: null or package Default: null Example: pkgs.dockerTools.buildImage {...}; Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.imageStream

Path to a script that streams the desired image on standard output. This option is mainly intended for use with pkgs.dockerTools.streamLayeredImage so that the intermediate image archive does not need to be stored in the Nix store. For larger images this optimization can significantly reduce Nix store churn compared to using the imageFile option, because you don’t have to store a new copy of the image archive in the Nix store every time you change the image. Instead, if you stream the image then you only need to build and store the layers that differ from the previous image. Type: null or package Default: null Example: pkgs.dockerTools.streamLayeredImage {...}; Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.labels

Labels to attach to the container at runtime. Type: attribute set of string Default: { } Example: { "traefik.https.routers.example.rule" = "Host(`example.container`)"; } Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.log-driver

Logging driver for the container. The default of "journald" means that the container’s logs will be handled as part of the systemd unit. For more details and a full list of logging drivers, refer to respective backends documentation. For Docker: Docker engine documentation For Podman: Refer to the docker-run(1) man page. Type: string Default: "journald" Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.networks

Networks to attach the container to Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.podman

Podman-specific settings in OCI containers. These must be null when using the docker backend. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.ports

Network ports to publish from the container to the outer host. Valid formats: <ip>:<hostPort>:<containerPort> <ip>::<containerPort> <hostPort>:<containerPort> <containerPort> Both hostPort and containerPort can be specified as a range of ports. When specifying ranges for both, the number of container ports in the range must match the number of host ports in the range. Example: 1234-1236:1234-1236/tcp When specifying a range for hostPort only, the containerPort must not be a range. In this case, the container port is published somewhere within the specified hostPort range. Example: 1234-1236:1234/tcp Publishing a port bypasses the NixOS firewall. If the port is not supposed to be shared on the network, make sure to publish the port to localhost. Example: 127.0.0.1:1234:1234 Refer to the Docker engine documentation for full details. Type: list of string Default: [ ] Example: [ "127.0.0.1:8080:9000" ] Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.preRunExtraOptions

Extra options for podman that go before the run argument. Type: list of string Default: [ ] Example: [ "--runtime" "runsc" ] Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.privileged

Give extended privileges to the container Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.pull

Image pull policy for the container. Must be one of: always, missing, never, newer Type: one of “always”, “missing”, “never”, “newer” Default: "missing" Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.serviceName

Systemd service name that manages the container Type: string Default: "<backend>-<name>" Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.user

Override the username or UID (and optionally groupname or GID) used in the container. Type: null or string Default: null Example: "nobody:nogroup" Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.volumes

List of volumes to attach to this container. Note that this is a list of "src:dst" strings to allow for src to refer to /nix/store paths, which would be difficult with an attribute set. There are also a variety of mount options available as a third field; please refer to the docker engine documentation for details. Type: list of string Default: [ ] Example: [ "volume_name:/path/inside/container" "/path/on/host:/path/inside/container" ] Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.workdir

Override the default working directory for the container. Type: null or string Default: null Example: "/var/lib/hello_world" Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>
