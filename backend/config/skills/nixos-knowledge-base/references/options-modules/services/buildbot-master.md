---
module: services.buildbot-master
option_count: 26
source: options.html
---

# services.buildbot-master

## services.buildbot-master.enable

Whether to enable the Buildbot continuous integration server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.package

The buildbot-full package to use. Type: package Default: pkgs.buildbot-full Example: buildbot Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.packages

Packages to add to PATH for the buildbot process. Type: list of package Default: [ pkgs.git ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.buildbotDir

Specifies the Buildbot directory. Type: absolute path Default: "${config.services.buildbot-master.home}/master" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.buildbotUrl

Specifies the Buildbot URL. Type: string Default: "http://localhost:8010/" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.builders

List of Builders. Type: list of string Default: [ "util.BuilderConfig(name='runtests',workernames=['example-worker'],factory=factory)" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.changeSource

List of Change Sources. Type: list of string Default: [ ] Example: [ "changes.GitPoller('https://github.com/buildbot/pyflakes.git', workdir='gitpoller-workdir', branch='master', pollinterval=300)" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.configurators

Configurator Steps, see https://docs.buildbot.net/latest/manual/configuration/configurators.html Type: list of string Default: [ ] Example: [ "util.JanitorConfigurator(logHorizon=timedelta(weeks=4), hour=12, dayOfWeek=6)" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.dbUrl

Specifies the database connection string. Type: string Default: "sqlite:///state.sqlite" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.extraConfig

Extra configuration to append to master.cfg Type: strings concatenated with “\n” Default: "c['buildbotNetUsageData'] = None" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.extraGroups

List of extra groups that the buildbot user should be a part of. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.extraImports

Extra python imports to prepend to master.cfg Type: strings concatenated with “\n” Default: "" Example: "from buildbot.process.project import Project" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.factorySteps

Factory Steps Type: list of string Default: [ ] Example: [ "steps.Git(repourl='https://github.com/buildbot/pyflakes.git', mode='incremental')" "steps.ShellCommand(command=['trial', 'pyflakes'])" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.group

Primary group of buildbot user. Type: string Default: "buildbot" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.home

Buildbot home directory. Type: absolute path Default: "/home/buildbot" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.listenAddress

Specifies the bind address on which the buildbot HTTP interface listens. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.masterCfg

Optionally pass master.cfg path. Other options in this configuration will be ignored. Type: absolute path Default: generated configuration file Example: "/etc/nixos/buildbot/master.cfg" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.pbPort

The buildmaster will listen on a TCP port of your choosing for connections from workers. It can also use this port for connections from remote Change Sources, status clients, and debug tools. This port should be visible to the outside world, and you’ll need to tell your worker admins about your choice. If put in (single) quotes, this can also be used as a connection string, as defined in the ConnectionStrings guide. Type: string or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9989 Example: "'tcp:9990:interface=127.0.0.1'" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.port

Specifies port number on which the buildbot HTTP interface listens. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8010 Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.pythonPackages

Packages to add the to the PYTHONPATH of the buildbot process. Type: function that evaluates to a(n) list of package Default: pythonPackages: with pythonPackages; [ ] Example: pythonPackages: with pythonPackages; [ requests ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.reporters

List of reporter objects used to present build status to various users. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.schedulers

List of Schedulers. Type: list of string Default: [ "schedulers.SingleBranchScheduler(name='all', change_filter=util.ChangeFilter(branch='master'), treeStableTimer=None, builderNames=['runtests'])" "schedulers.ForceScheduler(name='force',builderNames=['runtests'])" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.title

Specifies the Buildbot Title. Type: string Default: "Buildbot" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.titleUrl

Specifies the Buildbot TitleURL. Type: string Default: "Buildbot" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.user

User the buildbot server should execute under. Type: string Default: "buildbot" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>

## services.buildbot-master.workers

List of Workers. Type: list of string Default: [ "worker.Worker('example-worker', 'pass')" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/master.nix>
