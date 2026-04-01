## 如何以特权身份使用 Home Manager 安装的软件包?

对这个问题，首先想到的一般都是直接切换到 `root` 用户, 可切换用户后，当前用户通过
`home.nix` 安装的软件包都将不可用。让我们以 `kubectl` 为例（已通过 `home.nix`
预先安装好），来演示一下:

```sh
# 1. kubectl 当前可用
› kubectl | head
kubectl controls the Kubernetes cluster manager.

 Find more information at: https://kubernetes.io/docs/reference/kubectl/
......

# 2. 切换到 `root` 用户
› sudo su

# 3. kubectl 不再可用，报错找不到它
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

解决方法是，使用 `sudo`
来运行命令，该命令临时授予当前用户以特权身份（`root`）运行命令的权限：

```sh
› sudo kubectl
kubectl controls the Kubernetes cluster manager.
...
```
