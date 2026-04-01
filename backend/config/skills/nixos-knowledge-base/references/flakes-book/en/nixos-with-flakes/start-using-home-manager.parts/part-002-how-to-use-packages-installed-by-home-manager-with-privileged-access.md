## How to use packages installed by Home Manager with privileged access?

The first thing that comes to mind is to switch to `root`, but then any packages installed
by the current user through `home.nix` will be unavailable. let's take `kubectl` as an
example(it's pre-installed via `home.nix`):

```sh
# 1. kubectl is available
› kubectl | head
kubectl controls the Kubernetes cluster manager.

 Find more information at: https://kubernetes.io/docs/reference/kubectl/
......

# 2. switch user to `root`
› sudo su

# 3. kubectl is no longer available
> kubectl
Error: nu::shell::external_command

  × External command failed
   ╭─[entry #1:1:1]
 1 │ kubectl
   · ───┬───
   ·    ╰── executable was not found
   ╰────
  help: No such file or directory (os error 2)


/home/ryan/nix-config> exit
```

The solution is to use `sudo` to run the command, which temporarily grants the current
user the ability to run the command as a privileged user (`root`):

```sh
› sudo kubectl
kubectl controls the Kubernetes cluster manager.
...
```
