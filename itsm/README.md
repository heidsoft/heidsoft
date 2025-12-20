# ITSM — 事件/变更/问题管理与运维自动化

这是 `itsm` 项目（演示/样例），用于展示一套面向企业的 IT 服务管理（ITSM）解决方案，包含事件管理、变更管理、问题追踪与常见运维自动化脚本。

## 主要特性

- 事件（Incident）与问题（Problem）记录与生命周期管理
- 变更（Change）审批流程与回滚策略示例
- 工单分发与自动化工单处理脚本（示例中使用脚本/Operator）
- 与监控/告警系统集成示例（Prometheus/Grafana/Alertmanager）

## 架构概览

- 前端：React（演示界面）
- 后端：REST API（示例实现可用 Node.js / Python / Spring Boot）
- 数据库：Postgres / MySQL（示例配置）
- 可选：消息队列（RabbitMQ/Kafka）用于事件流

## 快速开始（开发者本地运行）

1. 克隆仓库：

```bash
git clone https://github.com/heidsoft/itsm.git
cd itsm
```

1. 使用 Docker Compose（示例）启动服务：

```bash
docker-compose up -d
# 等待服务启动后访问 http://localhost:3000
```

1. 或者本地运行前后端：

- 前端：进入 `frontend` 目录，`npm install`，`npm start`
- 后端：进入 `backend` 目录，安装依赖并启动（例如 `python -m venv .venv && pip install -r requirements.txt && uvicorn app:app --reload`）

## 配置

- 环境变量示例请参见 `examples/.env.example`（数据库、队列、外部监控地址等）。

## 演示截图

（此处可放置 demo 截图或 GIF；在 PR 或仓库中放 `docs/images/demo.png` 并在此引用）

## 贡献

欢迎提交 Issue 与 PR。若希望贡献文档、测试或示例脚本，请先创建 Issue 讨论实现方向。

## 许可

本项目采用 MIT 许可（或根据实际情况替换为合适许可证），详见 LICENSE 文件。

## 联系方式

- 项目作者：heidsoft
- 个人主页：[https://github.com/heidsoft](https://github.com/heidsoft)
