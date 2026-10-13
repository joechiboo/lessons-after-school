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
      { text: '出社會篇', link: '/posts/basics/', activeMatch: '/posts/basics/' },
      { text: '制度篇', link: '/posts/systems/', activeMatch: '/posts/systems/' },
      { text: '敏捷篇', link: '/posts/agile/', activeMatch: '/posts/agile/' },
      { text: '主管篇', link: '/posts/manager/', activeMatch: '/posts/manager/' },
      { text: '關於', link: '/about' }
    ],

    sidebar: {
      '/posts/basics/': [
        {
          text: '出社會篇',
          items: [
            { text: '系列介紹', link: '/posts/basics/' },
            { text: '第一課:Call help 的能力', link: '/posts/basics/01-call-help' },
            { text: '第二課:歸納彙總再問', link: '/posts/basics/02-summarize-before-asking' },
            { text: '第三課:抓重點、講重點', link: '/posts/basics/03-get-to-the-point' }
          ]
        }
      ],
      '/posts/manager/': [
        {
          text: '主管篇',
          items: [
            { text: '系列介紹', link: '/posts/manager/' },
            { text: '第一課:交辦清單,還是交出所有權', link: '/posts/manager/01-hand-over-ownership' },
            { text: '第二課:先給,再要求', link: '/posts/manager/02-give-first-then-ask' },
            { text: '第三課:不用自己變強,把強的人放對位置', link: '/posts/manager/03-put-people-in-the-right-place' },
            { text: '第四課:政治手腕,就是跨部門溝通', link: '/posts/manager/04-politics-is-cross-team-communication' }
          ]
        },
        {
          text: '番外',
          items: [
            { text: '先想下一步', link: '/posts/manager/ex01-think-one-step-ahead' }
          ]
        }
      ],
      '/posts/systems/': [
        {
          text: '制度篇',
          items: [
            { text: '系列介紹', link: '/posts/systems/' },
            { text: '第一課:加班超過 46 小時,交一頁 A4', link: '/posts/systems/01-overtime-report' },
            { text: '第二課:彈性上班,但有核心時段', link: '/posts/systems/02-flexible-hours' },
            { text: '第三課:值班排班,公平要看得見', link: '/posts/systems/03-on-call-rotation' },
            { text: '第四課:新人的前十天', link: '/posts/systems/04-first-ten-days' },
            { text: '第五課:金額愈大,要附的說明愈多', link: '/posts/systems/05-petty-cash' }
          ]
        }
      ],
      '/posts/agile/': [
        {
          text: '敏捷篇',
          items: [
            { text: '系列介紹', link: '/posts/agile/' },
            { text: '第一課:四分鐘站會', link: '/posts/agile/01-four-minute-standup' },
            { text: '第二課:看板,不用再問誰在做什麼', link: '/posts/agile/02-kanban' },
            { text: '第三課:雙週 Demo,做出來給人看', link: '/posts/agile/03-biweekly-demo' },
            { text: '第四課:少了 Planning 和 Retro 的團隊', link: '/posts/agile/04-planning-and-retro' }
          ]
        },
        {
          text: '番外',
          items: [
            { text: '一個人的 Scrum', link: '/posts/agile/ex01-scrum-for-side-projects' }
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
