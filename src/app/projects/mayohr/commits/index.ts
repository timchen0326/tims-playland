const commits = [
    {
      hash: "12bb513ed53c1ab051912b217eb449f48dcbb715",
      message: "Merged PR 69138: pr",
      author: "蔚霆 陳",
      date: "Tue Jul 16 09:14:24 2024 +0000",
      learnings: "I learned how to merge PRs and resolve conflicts."
    },
    {
      hash: "45df303c13a8ba4678d80dc138ad76c23ba79c2e",
      message: "install framer-motion",
      author: "建瑩 李",
      date: "Tue Jul 16 16:55:45 2024 +0800",
      learnings: "I learned how to integrate framer-motion for animations."
    },
    {
      hash: "e57c24707805d8d5422e966defe967e37909b9c5",
      message: "Merged PR 69135: breadcrumb changes\n\nbreadcrumb changes",
      author: "蔚霆 陳",
      date: "Tue Jul 16 08:31:18 2024 +0000"
    },
    {
      hash: "1333f3ef8c15aeb6175237824a77620956b9bf54",
      message: "breadcrumb changes",
      author: "cwt0326",
      date: "Tue Jul 16 16:21:32 2024 +0800"
    },
    {
      hash: "35da0b871d60c06b06906f315fa8f52f52c5c392",
      message: "accoutnManagement Done",
      author: "cwt0326",
      date: "Tue Jul 16 14:43:32 2024 +0800"
    },
    {
      hash: "a22236ad98582022609da7686626bfb3f9d03f17",
      message: "USER filter and visual problems",
      author: "cwt0326",
      date: "Tue Jul 16 14:03:30 2024 +0800"
    },
    {
      hash: "99db37ca534456a93ce9874bf182cd55f6211605",
      message: "Merged PR 68966: Commit e67ccada: feedbackform restricted for users, also added modifyName, as well as state change",
      author: "蔚霆 陳",
      date: "Mon Jul 15 10:20:53 2024 +0000"
    },
    {
      hash: "70635c4297f4d7703d0daf12e5439ef338f7f0a4",
      message: "boolean change as well as changing some functions",
      author: "cwt0326",
      date: "Mon Jul 15 11:37:54 2024 +0800"
    },
    {
      hash: "c90bc355a133973da98d065c07599067508d9528",
      message: "id to account fix",
      author: "cwt0326",
      date: "Mon Jul 15 08:50:22 2024 +0800"
    },
    {
      hash: "d23f53197ba7fdd635a62028c9658305230e7775",
      message: "account management complete",
      author: "cwt0326",
      date: "Fri Jul 12 16:20:56 2024 +0800"
    },
    {
      hash: "df58602e7eaa79f4adf222bc4d916e15e5357647",
      message: "undone",
      author: "cwt0326",
      date: "Thu Jul 11 08:42:24 2024 +0800"
    },
    {
      hash: "e67ccadad31f59401fbcc79f4238bfc920842a33",
      message: "feedbackform restricted for users, also added modifyName, as well as state change",
      author: "cwt0326",
      date: "Tue Jul 9 13:37:21 2024 +0800"
    },
    {
      hash: "9bc19fce067c7339365907f1f4a43f65656b4f4a",
      message: "Merge branch 'main' into feedbackformupdate",
      author: "cwt0326",
      date: "Tue Jul 9 11:15:04 2024 +0800"
    },
    {
      hash: "8353417038cef4373402156bed17e6b03dc53749",
      message: "merge main",
      author: "cwt0326",
      date: "Tue Jul 9 11:14:13 2024 +0800"
    },
    {
      hash: "b4c1f185b5de4fbd0b8bd0f98ce691a0fc84bc0f",
      message: "feedbackform change",
      author: "cwt0326",
      date: "Tue Jul 9 11:06:28 2024 +0800"
    },
    {
      hash: "b4da75d18282b85aada7a94fd0f24ccdada6d84b",
      message: "unsure",
      author: "cwt0326",
      date: "Mon Jul 8 16:45:25 2024 +0800"
    },
    {
      hash: "b81974f4a36a6bad8351610f5071a287652f6136",
      message: "Merged PR 68908: REDUX權限",
      author: "蔚霆 陳",
      date: "Mon Jul 8 08:36:21 2024 +0000"
    },
    {
      hash: "8c99e4a76214d0f710703b0348974077e7f90280",
      message: "changes to env",
      author: "cwt0326",
      date: "Mon Jul 8 16:33:16 2024 +0800"
    },
    {
      hash: "991768c7a8d3dd518c94a90b5254f1747c8becb4",
      message: "tst bug",
      author: "cwt0326",
      date: "Mon Jul 8 16:05:44 2024 +0800"
    },
    {
      hash: "f98310c2472193ad0b07411e5fa99254f06623a4",
      message: '"api connected"',
      author: "cwt0326",
      date: "Mon Jul 8 15:23:02 2024 +0800"
    },
    {
      hash: "05d369cd03206c57d2cb9920e004fb05f29a1b6c",
      message: '"save in progress"',
      author: "cwt0326",
      date: "Mon Jul 8 15:12:49 2024 +0800"
    },
    {
      hash: "081931c0e9d80f7d67273377acc7cb4c014bc7be",
      message: "add suppressHydrationWarning",
      author: "建瑩 李",
      date: "Mon Jul 8 14:37:20 2024 +0800"
    },
    {
      hash: "c0d924335c79b0c431012a5888c11af53419b633",
      message: "revert to localstorage",
      author: "cwt0326",
      date: "Mon Jul 8 09:50:05 2024 +0800"
    },
    {
      hash: "545d7393481029de20e08c582b30d9e12718eec5",
      message: 'Revert "bug fix"\n\nThis reverts commit 60e8ab52e94f4bd9faa7a3b73eef33b40dae7f40.',
      author: "cwt0326",
      date: "Mon Jul 8 09:38:19 2024 +0800"
    },
    {
      hash: "60e8ab52e94f4bd9faa7a3b73eef33b40dae7f40",
      message: "bug fix",
      author: "cwt0326",
      date: "Mon Jul 8 09:34:30 2024 +0800"
    },
    {
      hash: "5882a20c71a7be4d6be480eef41e2111d480ad93",
      message: "userId is now redux",
      author: "cwt0326",
      date: "Fri Jul 5 17:29:07 2024 +0800"
    },
    {
      hash: "864d9cf7eb0aed4fa1530dce0f904eb571d27e10",
      message: "fixes with api",
      author: "cwt0326",
      date: "Fri Jul 5 16:46:59 2024 +0800"
    },
    {
      hash: "dc503506895f14b3611cab06991a2c55cec7852d",
      message: "API then done！",
      author: "cwt0326",
      date: "Fri Jul 5 16:30:41 2024 +0800"
    },
    {
      hash: "22f40d0e173c7cd857cbc1d59e5bda03be5495df",
      message: "not found page change",
      author: "cwt0326",
      date: "Thu Jul 4 17:29:33 2024 +0800"
    },
    {
      hash: "2b4c0a87ea588cf2a5c3f25fe3d34ce78fc035f3",
      message: "實體redux還沒測 權限有拉好",
      author: "cwt0326",
      date: "Thu Jul 4 17:17:01 2024 +0800"
    },
    {
      hash: "7f8203e7482ae91ac26028fb0edb012a7de65e11",
      message: "Merged PR 68834: 更改了tree的員工資訊現在有manager還有formdetail頁＋了rawdata還有designversion\n\n更改了tree的員工資訊現在有manager還有formdetail頁＋了rawdata還有designversion",
      author: "蔚霆 陳",
      date: "Wed Jul 3 07:54:40 2024 +0000"
    },
    {
      hash: "e470b75ad5e0a047db137f7ec0b36c245fb24ac5",
      message: "fixes",
      author: "cwt0326",
      date: "Wed Jul 3 15:16:56 2024 +0800"
    },
    {
      hash: "5af37be921c1d38aeaff41cbbc38a1662d495da2",
      message: "fixes",
      author: "cwt0326",
      date: "Wed Jul 3 15:15:05 2024 +0800"
    },
    {
      hash: "b49c42790e120dc115b3ab584205375fecdc59a6",
      message: "更改了tree的員工資訊現在有manager還有formdetail頁＋了rawdata還有designversion",
      author: "cwt0326",
      date: "Wed Jul 3 15:12:59 2024 +0800"
    },
    {
      hash: "385a27478d8513162a9cba775f223fd43d69174b",
      message: "JsonEditor stringTruncate be 5000",
      author: "建瑩 李",
      date: "Wed Jul 3 14:48:49 2024 +0800"
    },
    {
      hash: "fbebc8c1571edcaf02c8836abeb7170cc7f6f8d7",
      message: "Merged PR 68653: org tree done",
      author: "蔚霆 陳",
      date: "Mon Jul 1 06:25:29 2024 +0000"
    },
    {
      hash: "9c1810cbf88b98961efb6ef5773e9e93677aee10",
      message: "關閉沒實作的sidebar menu",
      author: "建瑩 李",
      date: "Mon Jul 1 14:25:03 2024 +0800"
    },
    {
      hash: "0bcc27c7735137331a15d363381e7be0e87476ac",
      message: "org tree complete",
      author: "cwt0326",
      date: "Thu Jun 27 17:30:00 2024 +0800"
    },
    {
      hash: "0026090ec63e128a5b1600f0182b3df710a2a296",
      message: "added new organization tree, no zoom",
      author: "cwt0326",
      date: "Wed Jun 26 15:29:04 2024 +0800"
    },
    {
      hash: "3e1e86864f6be4ac6eb3d465539726b25605b9ab",
      message: "Merged PR 68457: 優化了formdetail界面 更改了 formOverview 切畫面scrollPosition formdetail 連接了 formoverview",
      author: "蔚霆 陳",
      date: "Tue Jun 25 01:29:51 2024 +0000"
    },
    {
      hash: "71d6beadd0922faea2053352af624e1c8c72da56",
      message: "changed query and homepage",
      author: "cwt0326",
      date: "Tue Jun 25 09:19:32 2024 +0800"
    },
    {
      hash: "e44211cb05c6ad37b1bafcdfb9385eb2fa292249",
      message: "used tablewithoutheader in various places",
      author: "cwt0326",
      date: "Mon Jun 24 14:39:10 2024 +0800"
    },
    {
      hash: "6078647c9786b453143bd38ec70b4bc77ec017e2",
      message: "added TableWithoutHeader as a component and code format fix",
      author: "cwt0326",
      date: "Mon Jun 24 14:32:29 2024 +0800"
    },
    {
      hash: "a30f817e492c8152314f1b595f5dd3257aa329f7",
      message: "把很多的該在index的東西從page移到index， formdetail 完成 增加了 formoverview單個表單的data到 formdetail 右上角",
      author: "cwt0326",
      date: "Mon Jun 24 14:00:04 2024 +0800"
    },
    {
      hash: "bec693f78a068caf5fa171ced9da51ee12a317af",
      message: "優化了formdetail界面 更改了 formOverview 切畫面scrollPosition",
      author: "cwt0326",
      date: "Fri Jun 21 17:25:17 2024 +0800"
    },
    {
      hash: "d9d977536cf473655803950be59428dfae5e614f",
      message: "connected to formdetail with query",
      author: "cwt0326",
      date: "Thu Jun 20 17:31:49 2024 +0800"
    },
    {
      hash: "9e148b09fda0095f7e6a56b7ca4797f0c69072bb",
      message: "fix:handleNavigationToApplyingForms",
      author: "建瑩 李",
      date: "Thu Jun 20 13:03:20 2024 +0800"
    },
    {
      hash: "ef2ed2681d8bac98450cebc0febcffc92b53a42c",
      message: "Merged PR 68350: formdetail 06/19 完成 ， detail的bug修改好\n\nformdetail 06/19 完成 ， detail的bug修改好",
      author: "蔚霆 陳",
      date: "Thu Jun 20 03:59:46 2024 +0000"
    },
    {
      hash: "ceaf2bf6b2b37f083dfb072af7cc30c921e0ea57",
      message: "code cleanup",
      author: "cwt0326",
      date: "Thu Jun 20 11:57:52 2024 +0800"
    },
    {
      hash: "50ada240ef858052708d8704155a101ab27210fe",
      message: "Merged PR 68376: hotfix: fix json and filter\n\nhotfix: fix json and filter",
      author: "建瑩 李",
      date: "Thu Jun 20 03:36:57 2024 +0000"
    },
    {
      hash: "376acb5fab2c67d51da67479419bd01656ca15a6",
      message: "hotfix: fix json and filter",
      author: "建瑩 李",
      date: "Thu Jun 20 11:36:03 2024 +0800"
    },
    {
      hash: "39cfa79ac308805b59567b802639ec1f83ded5be",
      message: "Merged PR 68371: hotfix:fix formOverviews Json\n\nhotfix:fix formOverviews Json",
      author: "建瑩 李",
      date: "Thu Jun 20 03:16:23 2024 +0000"
    },
    {
      hash: "ecd13f1b716b874840074025d2857bf56586c516",
      message: "hotfix:fix formOverviews Json",
      author: "建瑩 李",
      date: "Thu Jun 20 11:15:41 2024 +0800"
    },
    {
      hash: "3f94178d58b13acd6ca1f14632a3608359bdd06d",
      message: "Merged PR 68358: feature:AddFormOverviews\n\nfeature:AddFormOverviews",
      author: "建瑩 李",
      date: "Thu Jun 20 02:15:10 2024 +0000"
    },
    {
      hash: "00ad4e1d71e1123abee47adbce070392a0a50631",
      message: "feature:AddFormOverviews",
      author: "建瑩 李",
      date: "Thu Jun 20 09:11:19 2024 +0800"
    },
    {
      hash: "6630586bb48f3287c1fecb1081cb6c35a0f0e4ba",
      message: "global css修改",
      author: "cwt0326",
      date: "Wed Jun 19 17:27:29 2024 +0800"
    },
    {
      hash: "5427c457c3154696a5392e25ed2e0c6083c852d0",
      message: "formdetail 06/19 完成 ， detail的bug修改好",
      author: "cwt0326",
      date: "Wed Jun 19 17:25:14 2024 +0800"
    },
    {
      hash: "84d2748fa65b8fc917c0665085e9dccdee1c952b",
      message: "Merged PR 68261: dashboard 完成 + 麵包屑 + url 調整\n\ndash",
      author: "蔚霆 陳",
      date: "Mon Jun 17 08:15:46 2024 +0000"
    },
    {
      hash: "9f9e8c74df4802891e9efe4ca8c51e248bcc2ed9",
      message: "dashboard 完成 + 麵包屑 + url 調整",
      author: "cwt0326",
      date: "Mon Jun 17 16:11:34 2024 +0800"
    },
    {
      hash: "9f9e8c74df4802891e9efe4ca8c51e248bcc2ed9",
      message: "added getfrompathname to retrieve tenantId",
      author: "cwt0326",
      date: "Mon Jun 17 16:11:34 2024 +0800"
    },
    {
      hash: "5b4be0f0131e002217a3244e358bd07846a4b3a4",
      message: "dashboard 完成 + 麵包削 + url 調整",
      author: "cwt0326",
      date: "Mon Jun 17 13:53:58 2024 +0800"
    },
    {
      hash: "615514a11d8d790975b9ef9a02b798cda896a921",
      message: "rebuild",
      author: "Mike Lee",
      date: "Sat Jun 15 16:51:20 2024 +0800"
    },
    {
      hash: "a0c8749f529e5ffa869b5c9ed40516449715e9d7",
      message: "Merged PR 68074: 把客戶回饋表單做好了 加上一些icon上的更改以及layout調整",
      author: "蔚霆 陳",
      date: "Sat Jun 15 08:44:49 2024 +0000"
    },
    {
      hash: "416ed6db5ed404a87fe1cba994a4317100875170",
      message: "dashboard 告了一個段落",
      author: "cwt0326",
      date: "Fri Jun 14 17:46:47 2024 +0800"
    },
    {
      hash: "28261b63b5c62a328a032b92e2906ef5a2fcdb18",
      message: "undone",
      author: "cwt0326",
      date: "Tue Jun 11 17:05:41 2024 +0800"
    },
    {
      hash: "e8bf1b454fca30c975b2f350791d3296ca8b8b7e",
      message: "把客戶回饋表單做好了 加上一些icon上的更改以及layout調整",
      author: "cwt0326",
      date: "Tue Jun 11 16:12:52 2024 +0800"
    },
    {
      hash: "17743ac09f6ee0c629d84d87997624ad87f9cebe",
      message: "Merged PR 68035: TableWithPagination max-height: max-content;\n\nTableWithPagination max-height: max-content;",
      author: "建瑩 李",
      date: "Fri Jun 7 06:08:06 2024 +0000"
    },
    {
      hash: "5fe563d20c22fe8188ada4ff60c964901466e77d",
      message: "TableWithPagination max-height: max-content;",
      author: "建瑩 李",
      date: "Fri Jun 7 13:49:55 2024 +0800"
    },
    {
      hash: "dc6b3bfb322dc4213ad6d63a3888e05b5b86cfd8",
      message: "Merge branch 'main' into gettenantdetail",
      author: "cwt0326",
      date: "Fri Jun 7 09:13:11 2024 +0800"
    },
    {
      hash: "3687ea99c8b1f548b0a7ae546e4f265fbfe0a37b",
      message: "Merged PR 68002:  Merged PR 68001\n\n- icon的加入以及layout的變更\n- Merged PR 68001: icon的加入以及layout的變更",
      author: "蔚霆 陳",
      date: "Thu Jun 6 08:55:59 2024 +0000"
    },
    {
      hash: "7cd0d5a55d0facbe38ba2011616f0354d847d8bf",
      message: "Merged PR 68001: icon的加入以及layout的變更\n\nicon的加入以及layout的變更",
      author: "蔚霆 陳",
      date: "Thu Jun 6 08:55:04 2024 +0000"
    },
    {
      hash: "8752d928c780ede734906ff40088119e82416d72",
      message: "icon的加入以及layout的變更",
      author: "cwt0326",
      date: "Thu Jun 6 16:43:14 2024 +0800"
    },
    {
      hash: "3eb7dc30e3c5f17b4945f995f42a27a6ada9cc2a",
      message: "incomplete gettenantdetail",
      author: "cwt0326",
      date: "Thu Jun 6 11:16:37 2024 +0800"
    },
    {
      hash: "7403edd5430bd477f8f6c8ee211b5fe5ba410d7f",
      message: "Merged PR 67888: Added JsonEditor Feature",
      author: "蔚霆 陳",
      date: "Tue Jun 4 02:19:13 2024 +0000"
    },
    {
      hash: "c3f180bcf7a8df7c8c08bf8e9e1a9d0d2828d290",
      message: "fix merge",
      author: "cwt0326",
      date: "Tue Jun 4 10:13:40 2024 +0800"
    },
    {
      hash: "235f31f2e84d2f7fcad0ed964865a3f46584ebfa",
      message: "Merge branch 'main' into getdesigndata",
      author: "cwt0326",
      date: "Tue Jun 4 09:58:29 2024 +0800"
    },
    {
      hash: "65e25556498e9434c6d8948c64bce54343d867bc",
      message: "Merge branches 'getdesigndata' and 'getdesigndata' of https://mayohr.visualstudio.com/MAYO-Form/_git/MAYOForm-WebAdmin into getdesigndata",
      author: "cwt0326",
      date: "Tue Jun 4 09:48:36 2024 +0800"
    },
    {
      hash: "6135bc5fab2d38fb5205501450caf9a229b2d00f",
      message: "added JsonEditor",
      author: "cwt0326",
      date: "Tue Jun 4 09:45:38 2024 +0800"
    },
    {
      hash: "5e09bcd52e865c35cf0dfb1b7680e114def661b9",
      message: "fix merge",
      author: "Mike Lee",
      date: "Thu May 30 22:05:05 2024 +0800"
    },
    {
      hash: "9b1166c69cccd6dff37f9aee954bb8e711a9be54",
      message: "Merged PR 67812: 取得表單設計and流程設計\n\n取得表單設計and流程設計",
      author: "蔚霆 陳",
      date: "Thu May 30 13:57:27 2024 +0000"
    },
    {
      hash: "d976aeea743fc69ce1f276d44f55c8511c8c387f",
      message: "fix package",
      author: "Mike Lee",
      date: "Thu May 30 21:56:53 2024 +0800"
    },
    {
      hash: "2dacbde38dddd726499c2f679ef06269d973e722",
      message: "code fix",
      author: "cwt0326",
      date: "Thu May 30 17:17:56 2024 +0800"
    },
    {
      hash: "9743efa5a05cfa3266a143f977e82bb8b0152d2b",
      message: "JsonEditor 增加",
      author: "cwt0326",
      date: "Thu May 30 16:25:01 2024 +0800"
    },
    {
      hash: "ad1e89feab012cefd7c96372cc2b295a705d3c00",
      message: "取得表單設計and流程設計",
      author: "cwt0326",
      date: "Thu May 30 15:11:43 2024 +0800"
    },
    {
      hash: "8c7abe523b34bb51c197b64f6a171427a68c04ed",
      message: "Merged PR 67764: 加了請求id的篩選範圍，還有請求數據/回應內容 改為使用Button點擊展開Modal後呈現，新增Id,RequestId,CreatedTime\n\n加了請求id的篩選範圍，還有請求數據/回應內容 改為使用Button點擊展開Modal後呈現，新增Id,RequestId,CreatedTime",
      author: "蔚霆 陳",
      date: "Wed May 29 09:20:43 2024 +0000"
    },
    {
      hash: "de76097f9038ab48aea0888c6d9ead8ede349315",
      message: "fix wording",
      author: "建瑩 李",
      date: "Wed May 29 17:19:46 2024 +0800"
    },
    {
      hash: "13eb387a12b179dbdd9e6e81592921af0d777b23",
      message: "加了請求id的篩選範圍，還有請求數據/回應內容 改為使用Button點擊展開Modal後呈現，新增Id,RequestId,CreatedTime",
      author: "cwt0326",
      date: "Wed May 29 14:49:15 2024 +0800"
    },
    {
      hash: "fe36488f982a9129da98cd3dc75c18f44bee8845",
      message: "Merged PR 67699: 新增租戶回饋表查詢\n\n新增租戶回饋表查詢",
      author: "蔚霆 陳",
      date: "Tue May 28 05:25:20 2024 +0000"
    },
    {
      hash: "6a3cc9ad655ad9abfcf8d8dc91f8d776693ff039",
      message: "username",
      author: "cwt0326",
      date: "Tue May 28 11:39:50 2024 +0800"
    },
    {
      hash: "26d8e487d352f7f7cf897a38964c182112969af1",
      message: "新增租戶回饋表查詢",
      author: "cwt0326",
      date: "Tue May 28 11:05:55 2024 +0800"
    },
  ];
  
  export default commits;
  