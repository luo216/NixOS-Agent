# API

Base URL: `http://localhost:8787`

## 概览

- 协议：HTTP + WebSocket
- 默认前端来源：`http://localhost:5173`
- 数据格式：JSON
- WebSocket 地址：`ws://localhost:8787/api/ws`

## 健康检查

### `GET /health`

返回后端健康状态、workspace 状态和 client 摘要。

## Workspace

### `GET /api/workspace`

返回当前 workspace 状态。

响应字段：

- `initialized`
- `directory`

### `POST /api/workspace/init`

初始化或切换 workspace。

请求体：

```json
{
  "directory": "/absolute/path/to/workspace"
}
```

成功响应字段：

- `ok`
- `workspace`
- `clients`

### `POST /api/workspace/sync-codex`

把 `backend/config/skills/` 同步到 workspace 的 `.codex/skills/`。

成功响应字段：

- `ok`
- `directory`
- `codexDir`

## Planned Features

### `GET /api/workspace/planned-features`

读取根目录 `planned-features.json`。

成功响应字段：

- `exists`
- `path`
- `mtimeMs`
- `itemCount`
- `feature`

异常情况：

- workspace 未初始化：`400`
- JSON 解析失败：`500`

### `PUT /api/workspace/planned-features`

覆盖写入 `planned-features.json`。

请求体：

```json
{
  "feature": {
    "name": "Project Features",
    "readme": {},
    "features": []
  }
}
```

成功响应字段：

- `ok`
- `exists`
- `path`
- `mtimeMs`
- `itemCount`
- `feature`

## Git 与修复

### `GET /api/workspace/fix-state`

检查当前 workspace 是否存在以下问题：

- 不是 git 仓库
- `.codex/` 不存在
- `.codex/` 没有被 git ignore

成功响应字段：

- `directory`
- `gitInitialized`
- `codexIgnored`
- `codexExists`
- `needsFix`
- `issues`

### `GET /api/workspace/git-status`

返回当前 git 分支、文件列表和逐文件 diff。

成功响应字段：

- `directory`
- `branch`
- `fileCount`
- `files`

`files[]` 典型字段：

- `path`
- `staged`
- `unstaged`
- `status`
- `untracked`
- `unstagedDiff`
- `stagedDiff`

### `GET /api/workspace/git-commits?limit=50`

返回最近 commit 列表。

成功响应字段：

- `directory`
- `count`
- `commits`

`commits[]` 典型字段：

- `hash`
- `shortHash`
- `author`
- `date`
- `subject`

### `POST /api/fix/run`

执行一次临时修复 turn。

请求体：

```json
{
  "kind": "git-workspace",
  "text": "/fix git-workspace"
}
```

说明：

- 用于前端 fix dialog 触发的一次性修复执行
- 具体返回内容取决于修复执行结果

## Tools

### `GET /api/tools/catalog`

返回前端展示使用的工具目录。

成功响应字段：

- `items`

## Clients

### `GET /api/clients`

返回全部 client 摘要。

成功响应字段：

- `items`

`items[]` 典型字段：

- `id`
- `name`
- `status`
- `historyCount`
- `options`
- `lastError`

### `GET /api/clients/:id/runtime`

返回指定 client 的 runtime 快照。

成功响应字段：

- `clientId`
- `status`
- `lastError`
- `history`
- `inFlight`

### `GET /api/clients/:id/options`

返回指定 client 当前配置。

成功响应字段：

- `id`
- `status`
- `systemPrompt`
- `addDirs`

### `PUT /api/clients/:id/options`

更新指定 client 配置并重建其 runtime。

当前有效请求字段：

- `systemPrompt`

成功响应字段：

- `ok`
- `item`

### `POST /api/clients/:id/turns`

向指定 client 发起一轮 turn。

当前支持的请求体：

```json
{
  "kind": "user_message",
  "text": "hello",
  "images": [
    {
      "id": "img_1",
      "name": "pasted-image",
      "mimeType": "image/png",
      "dataUrl": "data:image/png;base64,..."
    }
  ]
}
```

成功响应：

```json
{
  "ok": true,
  "clientId": "planner",
  "status": "accepted"
}
```

异常情况：

- workspace 未初始化：`400`
- client 不存在：`404`
- client 正忙：`409`
- payload 非法：`400`

### `POST /api/clients/:id/interrupt`

中断指定 client 当前 turn。

### `POST /api/clients/:id/history/clear`

清空指定 client 历史并重置 thread。

## Activations

### `GET /api/activations/pending`

返回待消费 activation 列表。

成功响应字段：

- `items`

### `POST /api/activations/:id/consume`

消费一条 activation。

成功响应字段：

- `ok`
- `id`
- `toClientId`
- `consumedAt`

### `POST /api/clients/:targetClientId/activate-client`

向目标 client 登记一条 activation。

请求体：

```json
{
  "fromClientId": "planner",
  "message": "请开始实现下一个 feature"
}
```

成功响应字段：

- `ok`
- `message`
- `fromClientId`
- `toClientId`
- `dispatched`

## WebSocket

### `WS /api/ws`

建立后会接收三类事件：

- `bootstrap`
- `workspace_update`
- `client_update`

### `bootstrap`

连接建立后立即发送，包含：

- `workspace`
- `clients`
- `pendingActivations`

### `workspace_update`

workspace 或 activation 队列变化时发送，包含：

- `workspace`
- `clients`
- `pendingActivations`

### `client_update`

单个 client 状态变化时发送，包含：

- `client`
- `runtime`
