## `lib.mkOrder`, `lib.mkBefore` 与 `lib.mkAfter`

`lib.mkBefore` 跟 `lib.mkAfter` 用于设置**列表类型**的合并顺序，它们跟 `lib.mkDefault` 和
`lib.mkForce` 一样，也被用于模块化配置。

> 列表类型的定义我没找到官方文档，但我简单理解，应该就是合并结果与合并先后顺序有关的类型。按这个理解，list 跟 string 类型都是列表类型，实际测试这几个函数也确实能用在这两个类型上。

前面说了如果你定义了多个优先级相同的值，Nix 会报错说存在参数冲突，需要你手动解决。

但是如果你定义的是**列表类型**的值，Nix 就不会报错了，因为 Nix 会把你定义的多个值合并成一个列表，而
`lib.mkBefore` 跟 `lib.mkAfter` 就是用于设置这个列表的合并顺序的。

还是先来看看源码，开个终端键入 `nix repl -f '<nixpkgs>'` 进入 REPL 解释器，然后输入
`:e lib.mkBefore`，就可以看到 `lib.mkBefore` 的源码了（不太懂 `:e` 是干啥的？请直接输入
`:?` 查看帮助信息学习下）。

```nix
  # ......

  mkOrder = priority: content:
    { _type = "order";
      inherit priority content;
    };

  mkBefore = mkOrder 500;
  defaultOrderPriority = 1000;
  mkAfter = mkOrder 1500;

  # ......
```

能看到 `lib.mkBefore` 只是个 `lib.mkOrder 500` 的别名，而 `lib.mkAfter` 则是个
`lib.mkOrder 1500` 的别名。

为了更直观地理解这两个函数，现在来创建一个 flake 测试下：

```nix{8-36}
# flake.nix
{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";
  outputs = {nixpkgs, ...}: {
    nixosConfigurations = {
      "my-nixos" = nixpkgs.lib.nixosSystem {
        modules = [
          ({lib, ...}: {
            programs.bash.shellInit = lib.mkBefore ''
              echo 'insert before default'
            '';
            programs.zsh.shellInit = lib.mkBefore "echo 'insert before default';";
            nix.settings.substituters = lib.mkBefore [
              "https://nix-community.cachix.org"
            ];
          })

          ({lib, ...}: {
            programs.bash.shellInit = lib.mkAfter ''
              echo 'insert after default'
            '';
            programs.zsh.shellInit = lib.mkAfter "echo 'insert after default';";
            nix.settings.substituters = lib.mkAfter [
              "https://ryan4yin.cachix.org"
            ];
          })

          ({lib, ...}: {
            programs.bash.shellInit = ''
              echo 'this is default'
            '';
            programs.zsh.shellInit = "echo 'this is default';";
            nix.settings.substituters = [
              "https://nix-community.cachix.org"
            ];
          })
        ];
      };
    };
  };
}
```

上面的例子包含了在多行字符串、单行字符串，以及列表三种类型上应用 `lib.mkBefore` 和
`lib.mkAfter`，下面测试下结果：

```bash
# 示例一：多行字符串合并
› echo $(nix eval .#nixosConfigurations.my-nixos.config.programs.bash.shellInit)
trace: warning: system.stateVersion is not set, defaulting to 25.11. Read why this matters on https://nixos.org/manual/nixos/stable/options.html#opt-system.stateVersio
n.
"echo 'insert before default'

echo 'this is default'

if [ -z \"$__NIXOS_SET_ENVIRONMENT_DONE\" ]; then
 . /nix/store/60882lm9znqdmbssxqsd5bgnb7gybaf2-set-environment
fi



echo 'insert after default'
"

# 示例二：单行字符串合并
› echo $(nix eval .#nixosConfigurations.my-nixos.config.programs.zsh.shellInit)
"echo 'insert before default';
echo 'this is default';
echo 'insert after default';"

# 示例三：列表合并
› nix eval .#nixosConfigurations.my-nixos.config.nix.settings.substituters
[ "https://nix-community.cachix.org" "https://nix-community.cachix.org" "https://cache.nixos.org/" "https://ryan4yin.cachix.org" ]

```

可以看到，`lib.mkBefore` 会将后面的值插入到前面，而 `lib.mkAfter` 会将后面的值插入到后面。

> 对模块系统更深入的介绍，参见
> [模块系统与自定义 options](../other-usage-of-flakes/module-system.md).

## References

- [Nix modules: Improving Nix's discoverability and usability ](https://cfp.nixcon.org/nixcon2020/talk/K89WJY/)
- [Module System - Nixpkgs](https://github.com/NixOS/nixpkgs/blob/nixos-25.11/doc/module-system/module-system.chapter.md)
- [Misterio77/nix-starter-configs](https://github.com/Misterio77/nix-starter-configs)
