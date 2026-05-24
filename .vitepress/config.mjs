import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '出社會該學習的事情',
  description: '一個職場觀察筆記系列。從日常生活的小場景出發,提煉能帶走的原則。',
  lang: 'zh-TW',
  base: '/lessons-after-school/',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '文章', link: '/posts/01-call-help' },
      { text: 'GitHub', link: 'https://github.com/joechiboo/lessons-after-school' }
    ],

    sidebar: {
      '/posts/': [
        {
          text: '出社會該學習的事情',
          items: [
            { text: '第一課:Call help 的能力', link: '/posts/01-call-help' },
            { text: '第二課:歸納彙總再問', link: '/posts/02-summarize-before-asking' },
            { text: '第三課:抓重點、講重點', link: '/posts/03-get-to-the-point' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/joechiboo/lessons-after-school' }
    ],

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    outline: {
      label: '本頁目錄'
    },

    lastUpdatedText: '最後更新',

    footer: {
      message: '以 VitePress 建置',
      copyright: '© 2026 joechiboo'
    }
  }
})
