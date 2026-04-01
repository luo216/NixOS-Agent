# Docs

本目录作为项目级 wiki，只围绕当前系统的核心概念组织内容，不再按“接口大全”或“代码模块清单”铺开。

## 核心主题

- 多角色协作
- 长时运行智能体
- 智能调试
- 运行状态可视化

专业知识库与技能包不单独拆成孤立主题，而是作为多角色协作能力的一部分进行说明。

## 推荐阅读顺序

1. `01-system-overview.md`
2. `02-multi-agent-collaboration.md`
3. `03-long-running-agents.md`
4. `04-intelligent-debugging.md`
5. `05-runtime-visualization.md`
6. `06-core-workflows.md`

## 目录地图

- `01-system-overview.md`
  系统定位、边界与整体结构。
- `02-multi-agent-collaboration.md`
  多角色划分、职责边界、交接机制，以及知识库与技能包如何支撑协作。
- `03-long-running-agents.md`
  长时任务执行、状态保持、任务衔接与恢复思路。
- `04-intelligent-debugging.md`
  基于 `tmux-session-runner` 的长命令监督、交互式 CLI 调试与 SSH 验证。
- `05-runtime-visualization.md`
  前端如何展示 feature 进度、运行状态、时间线与 git diff。
- `06-core-workflows.md`
  从规划到实现、监督、验证、记录的主工作流。

## 使用原则

- wiki 优先解释“为什么这样设计”和“系统怎样协同工作”
- API 细节保留在根目录 `api.md`
- 实现代码的逐文件拆解不再作为 wiki 主结构
