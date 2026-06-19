# Homepage Update Guide

本说明面向后续维护 `homepage/` 站点时的日常更新，默认命令行为 Windows PowerShell。

## 1. 目录结构

```text
homepage/
├─ src/
│  ├─ data/site.ts          # 中英双语内容源
│  ├─ layouts/              # 页面外层布局
│  ├─ templates/            # 首页 / 履历页 / 栏目页模板
│  ├─ components/           # 公共组件
│  └─ styles/global.css     # 全站样式
├─ astro.config.mjs
├─ package.json
└─ UPDATE_GUIDE.md
```

维护时最常改的是 [src/data/site.ts](D:\Code\blog\homepage\src\data\site.ts) 和 [src/styles/global.css](D:\Code\blog\homepage\src\styles\global.css)。

## 2. 修改个人信息和中英文文案

在 [src/data/site.ts](D:\Code\blog\homepage\src\data\site.ts) 中维护全部公开内容。

- `profile`：首页主标题、简介、导师、研究概述、首页亮点。
- `education`、`research`、`honors`、`activities`、`skills`：履历页内容。
- `links`：联系方式和外部链接。
- `newsItems`：新闻栏目，按时间倒序维护公开报道与动态。
- 所有对外文案都同时包含 `zh` 和 `en` 字段，建议始终成对更新。
- 对外页面只写给访客看的内容；给 Agent 或维护者看的说明放在本文档，不要渲染到页面上。

维护提示：

- 履历页是主页摘要的展开版本，应保持教育、研究、荣誉、活动和技能信息完整。
- 新闻页用于汇总公开可访问的新闻报道，默认按时间倒序展示。
- 新闻条目的图片字段可以先保留占位资源，后续替换为更合适的现场图、报道配图或活动海报。
- 站点内容以中英双语结构化数据维护，更新时优先修改 `src/data/site.ts` 和 `src/data/library.ts`。

示例：

```ts
title: { zh: "新的中文标题", en: "New English Title" }
```

## 3. 新增知识分享卡片

在 [src/data/site.ts](D:\Code\blog\homepage\src\data\site.ts) 的 `knowledgeItems` 数组里追加一项，并把 `status` 设为 `"published"`。

卡片结构如下：

```ts
{
  id: "unique-id",
  title: { zh: "标题", en: "Title" },
  summary: { zh: "摘要", en: "Summary" },
  tag: { zh: "标签", en: "Tag" },
  href: "https://example.com/or/internal-path/",
  kind: "external",
  status: "published",
  featured: true
}
```

说明：

- `kind` 为 `"external"` 时会按外链打开。
- `kind` 为 `"internal"` 时可填写站内路径，如 `"/knowledge/some-note/"`。
- `status: "draft"` 不会显示在页面上，适合先存草稿。

## 4. 新增新闻条目

在 [src/data/site.ts](D:\Code\blog\homepage\src\data\site.ts) 的 `newsItems` 数组中新增一项。

建议字段说明：

```ts
{
  id: "news-2026-01-some-event",
  date: "2026-01-15",
  title: { zh: "中文标题", en: "English Title" },
  summary: { zh: "中文摘要", en: "English summary" },
  source: { zh: "来源名称", en: "Source Name" },
  href: "https://example.com/article",
  image: {
    src: "/images/news/some-event.jpg",
    alt: { zh: "图片说明", en: "Image description" },
    note: { zh: "可选备注", en: "Optional note" }
  }
}
```

说明：

- `date` 使用 `YYYY-MM-DD`。
- 页面会自动按日期倒序显示，所以新增旧新闻时也不必手动调顺序。
- 如果暂时没有图片，可以省略 `image.src`，页面会自动显示占位块。

## 5. 新增应用链接卡片

在 [src/data/site.ts](D:\Code\blog\homepage\src\data\site.ts) 的 `appItems` 中按同样 schema 增加内容。

- `title`：应用名称。
- `summary`：应用用途或说明。
- `href`：最终部署地址或站内路径。
- `featured`：如果后续想做重点展示，可以保留为 `true`。

## 6. 替换或新增外部链接

在 [src/data/site.ts](D:\Code\blog\homepage\src\data\site.ts) 的 `links` 数组中维护。

- 有 `href` 的链接会显示在首页联系方式区域。
- 没有 `href` 的项会被自动隐藏。
- 以后如果要加入 GitHub、Google Scholar、LinkedIn，只要补上真实 `href` 即可。

## 7. 本地运行与构建

首次安装依赖：

```powershell
cd D:\Code\blog\homepage
npm.cmd install
```

启动本地开发服务器：

```powershell
cd D:\Code\blog\homepage
npm.cmd run dev
```

生成静态文件：

```powershell
cd D:\Code\blog\homepage
npm.cmd run build
```

构建完成后，输出目录为 `homepage/dist/`。

## 8. 发布前检查

- 确认中英文页面都可访问。
- 确认新增的外链地址正确。
- 确认新闻时间顺序和图片占位是否符合预期。
- 确认没有误引用 `assets/` 中的任何文件。
- 如果将来部署到子路径，例如 `https://domain.com/some-base/`，需要在 [astro.config.mjs](D:\Code\blog\homepage\astro.config.mjs) 中补充 `base` 配置。

## 9. 发布方式

这是一个纯静态站点，发布时上传 `homepage/dist/` 内容即可。

- GitHub Pages
- 学校 / 实验室静态空间
- Vercel / Netlify 等静态托管平台

如果后续要接入自定义域名、统计脚本或更多页面，优先继续沿用现有的 `src/data/site.ts + templates` 结构，这样维护成本最低。
