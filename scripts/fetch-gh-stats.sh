#!/usr/bin/env bash
set -euo pipefail

mkdir -p "$(dirname "$0")/../assets"
cd "$(dirname "$0")/.."

# 下载 GitHub Readme Stats SVG（如被阻断请在可访问网络下执行）
curl -L "https://github-readme-stats.vercel.app/api?username=heidsoft&show_icons=true&theme=radical" -o assets/gh-stats.svg
curl -L "https://github-readme-stats.vercel.app/api/top-langs/?username=heidsoft&layout=compact&theme=radical" -o assets/top-langs.svg

echo "Downloaded assets/gh-stats.svg and assets/top-langs.svg"
