import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// 左侧 Explorer 不显示这些文件夹（内容仍可经链接/搜索访问）。
// 保留 Quartz 默认对 "tags" 的过滤。
const explorerOptions = {
  filterFn: (node: { name: string }) =>
    !["tags", "50_Templates_模板", "Rust", "Thinking"].includes(node.name),
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://git
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages th. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle
    Component.ContentMeta(
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer(explorerOptions)),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(
    Component.Backlinks(),
  ],
}

// components for pages th.g. tags or folders)
export const defaultListPa
  beforeBody: [Component.BleTitle(),Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(C
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(tions)),
  ],
  right: [],
}
