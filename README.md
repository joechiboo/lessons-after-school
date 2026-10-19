# 出社會該學習的事情

一個職場觀察筆記系列。從日常生活的小場景出發，對照職場上反覆出現的問題，提煉出能帶走的原則。

不是教學文，是把自己這些年走過的彎路、看過的場景，整理成下一個人可以少走一點的提醒。

## 文章目錄

### 出社會篇

剛進職場就用得到的東西。

1. [第一課：Call help 的能力 ——公園裡的管理課](posts/basics/01-call-help.md)
2. [第二課：不要每件事都問，要先歸納彙總](posts/basics/02-summarize-before-asking.md)
3. [第三課：抓重點 ——講重點](posts/basics/03-get-to-the-point.md)

### 制度篇

帶團隊時訂過的規則，以及為什麼這樣訂。不貼條文，只寫設計考量。

1. [第一課：加班超過 46 小時，交一頁 A4](posts/systems/01-overtime-report.md)
2. [第二課：彈性上班，但有核心時段](posts/systems/02-flexible-hours.md)
3. [第三課：值班排班，公平要看得見](posts/systems/03-on-call-rotation.md)
4. [第四課：新人的前十天](posts/systems/04-first-ten-days.md)
5. [第五課：金額愈大，要附的說明愈多](posts/systems/05-petty-cash.md)
6. [第六課：每月一次內部分享，輪流主講](posts/systems/06-monthly-sharing.md)
7. [第七課：規則每半年檢討一次](posts/systems/07-review-every-six-months.md)

### 敏捷篇

把 Scrum 帶進一個十人資訊室的過程。

1. [第一課：四分鐘站會](posts/agile/01-four-minute-standup.md)
2. [第二課：看板，不用再問誰在做什麼](posts/agile/02-kanban.md)
3. [第三課：雙週 Demo，做出來給人看](posts/agile/03-biweekly-demo.md)
4. [第四課：少了 Planning 和 Retro 的團隊](posts/agile/04-planning-and-retro.md)

番外：[一個人的 Scrum](posts/agile/ex01-scrum-for-side-projects.md)

### 主管篇

做主管之後才發現要學的事。素材多半來自[讀書心得](https://github.com/joechiboo/ReadTrack)，但每篇還是要有一個生活場景。

1. [第一課：交辦清單，還是交出所有權](posts/manager/01-hand-over-ownership.md)
2. [第二課：先給，再要求](posts/manager/02-give-first-then-ask.md)
3. [第三課：不用自己變強，把強的人放對位置](posts/manager/03-put-people-in-the-right-place.md)
4. [第四課：政治手腕，就是跨部門溝通](posts/manager/04-politics-is-cross-team-communication.md)
5. [第五課：主管的工作是移除障礙，不是做更多](posts/manager/05-remove-obstacles.md)
6. [第六課：給團隊一個節奏](posts/manager/06-give-the-team-a-rhythm.md)
7. [第七課：你獎勵什麼，就會得到什麼](posts/manager/07-you-get-what-you-reward.md)
8. [第八課：準時和結論，是主管的責任](posts/manager/08-punctuality-and-conclusions.md)
9. [第九課：有事直接找當事人](posts/manager/09-go-to-the-person-directly.md)
10. [第十課：背叛和不會，不是同一件事](posts/manager/10-betrayal-vs-inability.md)
11. [第十一課：罰行為，不罰人；對功臣，話要親口說](posts/manager/11-punish-the-act-not-the-person.md)
12. [第十二課：帶後段班，給資源、給期待、有教練](posts/manager/12-coaching-the-bottom.md)
13. [第十三課：關心和控制的界線](posts/manager/13-care-vs-control.md)
14. [第十四課：用數據管理，不靠直覺](posts/manager/14-manage-by-data.md)
15. [第十五課：承認撐不住，也是一種調度](posts/manager/15-admitting-you-cant.md)

番外：[先想下一步](posts/manager/ex01-think-one-step-ahead.md)、[帶團隊，像照顧一株植物](posts/manager/ex02-yellow-and-black-leaves.md)

規劃中的題目見 [posts/manager/index.md](posts/manager/index.md)。

## 寫作格式

每篇文章採三段式結構:

1. **生活故事** — 一個具體的場景
2. **職場對照** — 同樣的模式在工作裡怎麼出現
3. **提煉原則** — 一句話能帶走的提醒

制度篇和敏捷篇的素材不一定有生活場景，改用「規則／做法 → 為什麼這樣設計 → 提煉原則」，詳見各系列的介紹頁。

## 目錄結構

```
index.md              首頁:四個系列卡片 + 最近更新(新文章記得補一行)
about.md              關於這個系列
posts/
├── basics/           出社會篇
├── systems/          制度篇
├── agile/            敏捷篇
└── manager/          主管篇
.vitepress/
├── config.mjs        導覽列、側欄(新文章記得加側欄)
└── theme/custom.css  首頁「最近更新」樣式
```
