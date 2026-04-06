import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "挖坟教材",
  description: "EVE Online 探索（挖坟）完全指南",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/getting-started' }
    ],
    sidebar: [
      {
        text: '基础入门',
        items: [
          { text: '新手上路', link: '/getting-started' },
          { text: '基础设置', link: '/basics' },
        ]
      },
      {
        text: '任务与行业',
        items: [
          { text: '寻找代理人', link: '/finding-agents' },
          { text: '军事任务', link: '/military' },
          { text: '工业任务', link: '/industry' },
        ]
      },
      {
        text: '进阶实践',
        items: [
          { text: '高级挖坟', link: '/advanced-practice' },
          { text: '补充内容', link: '/supplemental-content' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present'
    }
  }
})
