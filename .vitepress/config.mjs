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
            { text: '第四課:政治手腕,就是跨部門溝通', link: '/posts/manager/04-politics-is-cross-team-communication' },
            { text: '第五課:主管的工作是移除障礙,不是做更多', link: '/posts/manager/05-remove-obstacles' },
            { text: '第六課:給團隊一個節奏', link: '/posts/manager/06-give-the-team-a-rhythm' },
            { text: '第七課:你獎勵什麼,就會得到什麼', link: '/posts/manager/07-you-get-what-you-reward' },
            { text: '第八課:準時和結論,是主管的責任', link: '/posts/manager/08-punctuality-and-conclusions' },
            { text: '第九課:有事直接找當事人', link: '/posts/manager/09-go-to-the-person-directly' },
            { text: '第十課:背叛和不會,不是同一件事', link: '/posts/manager/10-betrayal-vs-inability' },
            { text: '第十一課:罰行為,不罰人;對功臣,話要親口說', link: '/posts/manager/11-punish-the-act-not-the-person' },
            { text: '第十二課:帶後段班,給資源、給期待、有教練', link: '/posts/manager/12-coaching-the-bottom' },
            { text: '第十三課:關心和控制的界線', link: '/posts/manager/13-care-vs-control' },
            { text: '第十四課:用數據管理,不靠直覺', link: '/posts/manager/14-manage-by-data' },
            { text: '第十五課:承認撐不住,也是一種調度', link: '/posts/manager/15-admitting-you-cant' }
          ]
        },
        {
          text: '番外',
          items: [
            { text: '先想下一步', link: '/posts/manager/ex01-think-one-step-ahead' },
            { text: '黃葉和黑葉', link: '/posts/manager/ex02-yellow-and-black-leaves' }
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
            { text: '第五課:金額愈大,要附的說明愈多', link: '/posts/systems/05-petty-cash' },
            { text: '第六課:每月一次內部分享,輪流主講', link: '/posts/systems/06-monthly-sharing' },
            { text: '第七課:規則每半年檢討一次', link: '/posts/systems/07-review-every-six-months' }
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
