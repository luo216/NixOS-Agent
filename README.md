# NixOS-Agent

一个围绕 NixOS 配置规划、实施和监督执行的多角色协作系统。

当前版本已经完成从 legacy runtime 到 Codex App Server 的迁移，形成了一个以 Codex 为核心 runtime、以 planning artifacts 为核心状态源、以前后端分离时间线展示为核心交互的本地协作系统。

当前系统由两部分组成：

- `backend/`
  Express API + WebSocket runtime 推送，负责维护 workspace、client 会话状态，并把 Codex App Server thread 转成前端可消费的 runtime 结构。
- `frontend/`
  React 单页应用，负责展示三角色会话、功能清单、git 状态和 Codex runtime 时间线。

除了运行系统本身，仓库根目录也维护了一组面向实验、提示词评测和回答质量对比的案例文档，用来沉淀“用户怎么提问”和“理想回答至少应该覆盖什么”的标准样例。根目录的 `README.md`、`api.md`、`AGENTS.md` 和案例文档仍应保持同一口径，但详细系统 wiki 已迁入 `docs/`。

## 文档分层

- `README.md`
  根目录入口手册，面向使用者与开发者，优先说明系统定位、运行方式、主工作流和文档导航。
- `api.md`
  根目录 API 快速索引，保留主链路摘要。
- `docs/`
  项目系统 wiki，围绕系统核心概念组织内容。
- `AGENTS.md`
  Codex 自动加载的稳定上下文与最小执行约束。

当前 wiki 入口见 [docs/README.md](./docs/README.md)。

当前已整理的 wiki 主文档：

- `docs/01-system-overview.md`
  系统定位、核心概念与整体结构。
- `docs/02-multi-agent-collaboration.md`
  多角色划分、职责边界、交接机制与知识支撑。
- `docs/03-long-running-agents.md`
  长时运行任务的状态支撑、持续推进与恢复思路。
- `docs/04-intelligent-debugging.md`
  基于 `tmux-session-runner` 的长命令监督、交互式 CLI 与 SSH 验证。
- `docs/05-runtime-visualization.md`
  feature 进度、时间线、git diff 等运行状态可视化。
- `docs/06-core-workflows.md`
  从规划到实现、监督、验证与记录的核心工作流。

## 当前架构

消息主链路已经统一为：

- 前端通过 `POST /api/clients/:id/turns` 发送命令
- 后端维护每个 client 的展示态 `history + inFlight`
- 前端通过 `GET /api/clients/:id/runtime` 获取兜底快照
- 前端通过 `WS /api/ws` 实时接收 `bootstrap / workspace_update / client_update`

这意味着：

- 前端不再自己拼接 NDJSON 流
- “正在生成”、计划、工具调用和 runtime meta 都来自后端 runtime
- Codex 负责 thread 真历史；后端主要负责会话编排和前端展示态转换
- 停止任务和外部激活都走同一套 turn/runtime 状态机

## 已实现能力

- Codex App Server 作为统一 agent runtime，替代旧 CLI 集成
- 三角色协作链路：`planner -> implementer -> worker`
- 基于 `AGENTS.md`、`planned-features.json`、`codex-progress.md` 的 planning/implementation artifact 体系
- 前端 Codex timeline：assistant、plan、tool call、runtime meta、diff 展示
- `apply_patch` 改动的逐文件 diff 渲染，支持新增/删除/更新的红绿展示
- workspace 级 `.codex/skills` 自动同步和 `/fix git-workspace` 修复链路
- 长命令、`nix`、`ssh`、远程检查统一交给 `worker + tmux-session-runner`
- 中断链路支持 `turn/interrupt` 与断开 runtime 的兜底停止

## 角色

- `planner`
  收敛需求、产出方案、维护 `AGENTS.md`、`planned-features.json` 和 `codex-progress.md`，交接前必须复查 `planned-features.json` 符合 reference，并在用户明确同意后才可交接给 `implementer`。
- `implementer`
  只从 `planned-features.json` 领取任务，按 feature 依赖顺序一次实现一个 feature；开始前先写成 `in_progress`，结束时写回最终状态。每完成一个 feature 前都必须做验证；若验证需要长时间运行、持续监督、`nix`、`ssh`、完整 TTY，或属于软件功能/运行状态检查，则必须激活 `worker`，并默认走 `ssh` 或其他无界面方式，不假设本地 GUI 环境。完成后更新 `codex-progress.md` 并提交独立 git commit。
- `worker`
  监督执行 `nix`、`ssh` 和其他长时间命令，持续汇报状态、交互点和结果，并在完成或阻塞后回调 `implementer`。软件功能或运行状态测试默认也由 `worker` 通过 `ssh` / headless 路径承接。

固定激活方向：

- `planner -> implementer`
- `implementer -> worker`
- `worker -> implementer`

## 核心 Artifact

workspace 根目录使用 3 个核心文件：

- `AGENTS.md`
  Codex 会自动加载的稳定上下文文档，记录仓库规则、目标、边界、约束、关键决策和阶段性变更日志。
- `planned-features.json`
  feature 拆分清单，是唯一任务状态源；implementer 只能从这里领取任务，并在开始/完成时切换状态。
- `codex-progress.md`
  唯一增量日志，按时间记录每轮澄清、每次改动、每次验证、每次交接，以及对应的 git commit；每次 git 提交前都应更新。该文件只允许追加，不允许当作待办清单打勾打叉，也不允许回改旧内容。

## 技能

当前项目内保留的 skill：

- `codex-operations-manual`
  Codex 内部协作操作手册。统一承载跨角色交接规则、激活脚本，以及 planner / implementer 初始化 artifact 时用到的模板，替代早期 legacy runtime 的路径约定。
- `nixos`
  NixOS / flakes / home-manager / modules 相关知识参考。
- `nixos-patterns`
  NixOS / Home Manager / flake 的优秀目录结构、模块拆分与模板模式参考。
- `nixpkgs-inspector`
  用于核查 package / option / module / attr path 是否真实存在，以及定义位置在哪里。
- `tmux-session-runner`
  worker 的执行后端。任何 `nix`、`ssh` 或其他长时间命令都应通过它创建 session、发送命令、轮询状态和查看输出；完成或阻塞后再通过外部交接脚本回调 `implementer`。

planner、implementer 与 worker 的流程规则现在主要由系统提示词和 `codex-operations-manual` 共同约束。

仓库内的源资产位于 `backend/config/skills/`。服务运行时会把需要的 skill 资源同步到目标 workspace 的 `.codex/` 下，当前统一使用：

- `.codex/skills/`

`codex-progress.md` 继续作为历史延续下来的追加式开发日志文件名保留。

## Handoff

当前交接流程已收敛到 `codex-operations-manual` skill 中：

- 激活 `implementer`
  `.codex/skills/codex-operations-manual/scripts/activate-implementer.sh`
- 激活 `worker`
  `.codex/skills/codex-operations-manual/scripts/activate-worker.sh`

其中：

- 源脚本位于 `backend/config/skills/codex-operations-manual/scripts/`
- workspace 实际执行时使用的是运行时同步后的 `.codex/skills/codex-operations-manual/scripts/`
- 脚本只表达“激活哪个 client”，不再把来源角色写进文件名
- 来源 client 通过脚本参数传入
- `planner -> implementer` 的消息内容直接在 `planner.system.md` 中写死
- `implementer -> worker` 和 `worker -> implementer` 支持自定义消息，用于传递具体执行目标、阻塞点和回传结论

## 推荐工作流

一次完整流程建议按下面顺序观察：

1. 用户先和 `planner` 澄清目标、边界、约束和验证标准。
2. `planner` 维护 `AGENTS.md`、`planned-features.json`、`codex-progress.md`，并先按 reference 复查 `planned-features.json`。
3. `planner` 先把需求、测试方案、部署方案和安装/交付路径理解到足够完整，再向用户展示方案与任务清单；只有在用户明确同意后才交接给 `implementer`。
4. `implementer` 从 `planned-features.json` 中领取第一个依赖已满足的 feature，先切到 `in_progress`，再实施。
5. `implementer` 每完成一个 feature 都必须做验证；如果验证需要长时间运行、持续监督、远程安装/构建、`ssh` 或完整 TTY，则必须交接给 `worker`。
6. 如果某个 feature 连续多轮没有实质进展，`implementer` 应优先考虑将其写成 `blocked` / `failed` / `skipped`，记录原因后继续下一个可执行 feature。
7. `implementer` 在 feature 结束前写回最终状态、追加 `codex-progress.md`、并提交独立 git commit。
8. 所有 feature 完成后，再进入下一轮用户确认或后续任务。

## 运行

后端：

```bash
cd backend
npm install
npm run dev
```

前端：

```bash
cd frontend
npm install
npm run dev
```

默认地址：

- frontend: `http://localhost:5173`
- backend: `http://localhost:8787`
- websocket: `ws://localhost:8787/api/ws`

如果前端需要连接其他 backend，可通过 `VITE_API_BASE` 覆盖。

## API 摘要

核心接口只保留当前主链路：

- `GET /api/workspace`
- `POST /api/workspace/init`
- `GET /api/clients`
- `GET /api/clients/:id/runtime`
- `POST /api/clients/:id/turns`
- `POST /api/clients/:id/interrupt`
- `WS /api/ws`

快速索引见 [api.md](./api.md)。

## 根目录文档

- `README.md`
  根目录入口手册，优先说明系统定位、运行方式和导航。
- `api.md`
  根目录 API 快速索引。
- `docs/`
  项目系统 wiki，围绕多角色协作、长时运行智能体、智能调试与运行状态可视化组织。
- `AGENTS.md`
  Codex 在本仓库内必须遵守的最小开发约束。

## 设计约束

- 所有角色都围绕 NixOS 配置生成与验证，不做与目标无关的泛化开发
- SSH 只用于取信息和验证，不直接替用户实施远程配置
- 软件功能、运行状态或交互行为测试默认走 `ssh` 或其他无界面方式，不假设当前环境提供 GUI
- implementer 与 worker 都必须尊重 `planned-features.json`
- planner 只有在 `planned-features.json` 复查通过且用户确认方案/任务清单无误后，才可激活 implementer
- 任何 `nix`、`ssh` 或其他长时间命令，都应交给 `worker` 并通过 `tmux-session-runner` 监督执行
- planner 不得通过读取或加载 `implementer` / `worker` 的 role manual 来代替交接，也不得在当前 turn 中继续扮演 `implementer`
- 每次完成一个功能后，必须：
  - 追加 `codex-progress.md`
  - 提交对应 `git commit`
