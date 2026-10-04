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
      {
        text: '文章',
        items: [
          { text: '基本功篇', link: '/posts/basics/' },
          { text: '主管篇', link: '/posts/manager/' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/joechiboo/lessons-after-school' }
    ],

    sidebar: {
      '/posts/': [
        {
          text: '基本功篇',
          link: '/posts/basics/',
          items: [
            { text: '第一課:Call help 的能力', link: '/posts/basics/01-call-help' },
            { text: '第二課:歸納彙總再問', link: '/posts/basics/02-summarize-before-asking' },
            { text: '第三課:抓重點、講重點', link: '/posts/basics/03-get-to-the-point' }
          ]
        },
        {
          text: '主管篇',
          link: '/posts/manager/',
          items: [
            { text: '第一課:交辦清單,還是交出所有權', link: '/posts/manager/01-hand-over-ownership' },
            { text: '第二課:先給,再要求', link: '/posts/manager/02-give-first-then-ask' },
            { text: '第三課:不用自己變強,把強的人放對位置', link: '/posts/manager/03-put-people-in-the-right-place' }
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
