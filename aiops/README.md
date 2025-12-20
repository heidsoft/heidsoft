# AIOps — 告警关联、根因分析与运维自动化示例

`aiops` 项目演示如何将机器学习与规则引擎结合到运维流程中，提供告警降噪、告警聚合、根因定位（RCA）与自动化处置策略的参考实现。

## 主要特性

- 告警聚合与降噪规则（基于时间窗口与标签）
- 告警关联（事件关联）与拓扑感知的根因分析示例
- 自动化处置策略（runbook / 自动化脚本 / operator）
- 与监控（Prometheus）、日志（ELK/ClickHouse）与告警网关的接入示例
- 可视化面板示例（Grafana）与告警展示 UI

## 架构概览

- 数据源：Prometheus、Alertmanager、ELK/ClickHouse、外部监控API
- 数据处理：事件处理流水线（规则引擎 + ML 模型）
- 存储：时序 DB + OLAP（示例：ClickHouse）
- 可视化：Grafana + React 前端

## 快速开始（开发者本地运行）

1. 克隆仓库：

```bash
git clone https://github.com/heidsoft/aiops.git
cd aiops
```

1. 使用 Docker Compose 启动示例组件：

```bash
# 在项目根目录（包含 docker-compose.yml）
docker-compose up -d
# 访问 Grafana / 前端等服务
```

1. 本地开发

- 前端：`cd frontend && npm install && npm start`
- 后端 / 事件处理：`cd backend && ./run-dev.sh`（或根据实际项目启动方式）

## 配置

- 将示例环境变量复制到 `examples/.env.example` 并按需修改。
- 数据源地址（Prometheus、Alertmanager、ClickHouse）需在 `.env` 中配置。

## 示例用例

- 告警聚合示例：规则文件 `rules/aggregation.yml`
- 根因分析示例：`notebooks/rca-example.ipynb`（使用示例数据集运行）

## 演示截图

（在 `docs/images/` 放置 demo.png，并在此引用）

## 贡献

欢迎提交 Issue 与 PR；若要贡献模型或规则，请先在 Issue 中说明你的方案与评估数据集。

## 许可

本项目默认采用 MIT 许可，详见 LICENSE 文件。

## 联系方式

- 作者：heidsoft
- 主页：<https://github.com/heidsoft>
