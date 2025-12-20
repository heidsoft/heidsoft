# heidsoft-libc — 轻量 C 标准库 / 系统库合集

`heidsoft-libc` 是一个面向内核、嵌入式及系统工程的轻量 C 库集合，包含常用数据结构、字符串/内存工具、轻量 IO 封装与平台适配层（POSIX 兼容的子集）。该仓库可作为教学、工具链测试或嵌入式工程的基础库。

## 主要内容

- 字符串与内存工具：`str*`、`mem*` 的安全实现
- 常用数据结构：链表、环形缓冲区、哈希表、队列
- 简易 I/O 封装：文件、日志与简易文件系统接口（示例）
- 平台适配层：小型 POSIX 兼容 shim，便于移植到 RTOS/裸机
- 测试用例与 CI：单元测试与 cross-compile 示例

## 目标用户

- 内核/内核模块开发者
- 嵌入式系统工程师
- 需要小体积 runtime 的工具和项目

## 快速开始（开发与测试）

1. 克隆仓库：

```bash
git clone https://github.com/heidsoft/heidsoft-libc.git
+cd heidsoft-libc
```

1. 本地构建（示例使用 Makefile）：

```bash
make
make test
```

1. 交叉编译示例（ARM）：

```bash
make CROSS_COMPILE=arm-none-eabi-
```

## 示例目录结构

- `src/` - 库实现
- `include/` - 头文件
- `tests/` - 单元测试
- `examples/` - 演示程序
- `ci/` - CI 配置与 cross-compile 脚本

## 贡献

欢迎提交 Issue 与 PR。若要贡献新模块或平台适配，请先创建 Issue 说明目标平台与测试计划。

## 许可

采用 MIT 许可，详见 LICENSE 文件。

## 联系方式

- 作者：heidsoft
- 主页：<https://github.com/heidsoft>
