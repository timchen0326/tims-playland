  const commits = [
      {
        hash: "12bb513ed53c1ab051912b217eb449f48dcbb715",
        message: "Merged PR 69138: pr",
        author: "蔚霆 陳",
        date: "Tue Jul 16 09:14:24 2024 +0000",

      },
      {
        hash: "45df303c13a8ba4678d80dc138ad76c23ba79c2e",
        message: "install framer-motion",
        author: "建瑩 李",
        date: "Tue Jul 16 16:55:45 2024 +0800",
      },
      {
        hash: "e57c24707805d8d5422e966defe967e37909b9c5",
        message: "Merged PR 69135: breadcrumb changes\n\nbreadcrumb changes",
        author: "蔚霆 陳",
        date: "Tue Jul 16 08:31:18 2024 +0000",
        learnings: (
          <div className="text-center">
            <p>更新的 breadcrumb</p>             
            <p className='mt-5'>在製作現在這個網站的時候發現 breadcrumb 其實是可以被打包 不用在每一頁刻</p>
            <p>遇到的問題是 因爲每個 page有自己的需求 像是不要tenantId 或是 不要哪一個節點 等等 </p>
            <p>解決的方案是讓那些需要customize的網站創造一個自己的breadcrumb其他的就讓自己做的套件自己去刻</p>
            <p>實作放在layout上就不用每一頁去刻</p>
            <p>會想要去 做這個新的 breadcrumb 的原因是來自 Mike 的想法 他希望很多東西當需要寫很多次一樣的 不如把他寫成一個套件  讓大家享福</p>
            <p>這也讓我聯想到 我一開始來公司的時候做的球員網站 我是一個page一個page去刻的 然後Jake跟我說有別的 一次可以解決的辦法 就是讓每個人名字便成網址 就不用一頁一頁去刻</p>
            </div>)
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
        date: "Mon Jul 8 08:36:21 2024 +0000",
        learnings: (
          <div className="text-center">
            <p>修改 userId 權限 並用redux來取資料</p>             
            <p className='mt-5'>使用 redux 來拉 user 的權限是因為才不能讓使用者擅自修改 localstorage 擅自的去修改自己的權限</p>
            <p>一開始對redux這個套件完全不瞭解 需要做到的是 理清楚先後順序 要先打 api 然後存取資料 還是後打 api </p>
            <p>會決定 後面打 API 的主要原因是假如後臺修改了權限那使用者不用重新登入 只要更換網頁 權限會自動刷新 不會影響到 使用者的困擾</p>
            <p>實作是把redux參數綁在layout 這樣每一個界面都可以接觸到 省去了很多不必要的麻煩</p>
            <p className='mt-5'>很多時候遇到這種狀況 需要理清楚先後順序 理解套件 然後再滿足需求 不然很容易搞混</p>
            </div>)
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
        date: "Wed Jul 3 07:54:40 2024 +0000",
        learnings: (
          <div className="text-center">
            <p>組織樹</p>             
            <p className='mt-5'>對於製作這個組織樹有很特別的印象</p>
            <p>一開始完全對與修改這個套件感到奇妙 後來使用了 react-d3-tree 這個套件去把原本的組織樹包起來</p>
            <p>原本以爲修改組織樹就完成了 後來又有新的 request 需要讓組織樹可以被查詢 所以後來去詳細閲讀了 套件網站之後 發現可以 customize 去修改搜尋之後的顔色</p>
            <p>做完之後 又有新的 request 是希望可以搜尋並 移動到那一個 node 上面</p>
            <p>本來想說套件可能有自帶 可是後來發現沒有 在 Mike 的帶領下 找到了點擊制中 後來使用了模擬點擊來解決問題</p>
            </div>)
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
        hash: "fbebc8c1571edcaf02c8836abeb7170cc7f6f8d7",
        message: "Merged PR 68653: org tree done",
        author: "蔚霆 陳",
        date: "Mon Jul 1 06:25:29 2024 +0000"
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
        date: "Mon Jun 24 14:32:29 2024 +0800",
        learnings: (
        <div className="text-center">
          <p>TableWithoutHeader</p>             
          <p className='mt-5'>在製作的過程中 有發現 有些表格不需要 header 一直找不到解決方案</p>
          <p>試了把 title 直接刪掉 但是 header 還是會保留</p>
          <p>後來發現是公司的套件有自帶 header 拿不掉的</p>
          <p>後來詢問過後 決定自己實作一個沒有 header 的套件出來</p>
          <p>實作方法 是參考原本 Table 的套件 並將 header 拿掉 然後讓設計更簡約</p>
          </div>)
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
        date: "Mon Jun 17 08:15:46 2024 +0000",
        learnings: (
          <div  className="text-center">
              <p>麵包屑</p>
              <p className="mt-5">這次給的任務是在每一個網頁上加上麵包屑
              我當時一直在尋找套件想看看有沒有比較好的做法來管理 後來發現因爲每一個網頁上的麵包屑 都有自己的需求 所以最後的解法是在 global.css 添加麵包屑 然後在 每一個頁面使用麵包屑 的 className 來製作 breadcrumb</p>
              <p className="mt-5">在這一頁的左上角 有麵包屑的使用 這個新版的 breadcrumb 之後會解釋</p>
          </div>
        ),
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
        date: "Fri Jun 14 17:46:47 2024 +0800",
        learnings: (
          <div  className="text-center">
              <p>平行路由</p>
              <p>平行路由的用意是讓很多網頁在同一時間渲染 這樣網頁才不會很慢才渲染出來</p>
              <p>一開始去搜尋了 next.js自己的<a className="text-blue-500 underline" href='https://nextjs.org/docs/app/building-your-application/routing/parallel-routes'>網站</a></p>
              <p>一直鬼打墻 因爲發現平行路由需要 layout.tsx 來包 不然網頁沒辦法呈現</p>
              <p className="mt-5">後來還有遇到一個 需求 是要把 dashboard上面的資料 變成 link 點過去 他原本的界面 並且搜尋</p>
              <p >當時想到的做法是用 localstorage 去管理 但是 localstorage 是一個很難去維護的一個東西 所以後來把所有東西都綁成 query 寫在網址上 非常的好理解 而且是在一個看得到的地方</p>
              <pre>
                  <code>
                  {`
dashboard/
    @bmi/
        page.tsx
    @jsonEditor/
        page.tsx
    @piechart/
        page.tsx
    @table/
        page.tsx
    layout.tsx
    page.tsx
                    `}
                  </code>
              </pre>
              <p>資料夾大概長這樣</p>
              <p><a className="text-blue-500 underline" href='/projects/mayohr/dashboard'>這個可以看到Dashboard</a></p>
          </div>
        ),
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
        hash: "9b1166c69cccd6dff37f9aee954bb8e711a9be54",
        message: "Merged PR 67812: 取得表單設計and流程設計\n\n取得表單設計and流程設計",
        author: "蔚霆 陳",
        date: "Thu May 30 13:57:27 2024 +0000"
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
        date: "Thu May 30 16:25:01 2024 +0800",
        learnings: (
          <div  className="text-center">
              <p>在這裡 引用了新的套件 JsonEditor 一開始對於 套件還不夠熟悉 需要閲讀<a className="text-blue-500 underline" href='https://github.com/CarlosNZ/json-edit-react'>文件</a></p>
              <p>遇到的問題不是如何把Json資料放進去 而是如何去編輯這個資料</p>
              <p>一開始遇到的瓶頸是可以編輯但是資料永遠都回傳不去api</p>
              <p>後來發現的問題是 我沒有把更新完的資料回傳給api 所以他永遠都不會更新</p>
              <p><a className="text-blue-500 underline" href='/projects/mayohr/jsonEditor'>這個可以玩JsonEditor</a></p>
          </div>
        ),
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
        hash: "13eb387a12b179dbdd9e6e81592921af0d777b23",
        message: "加了請求id的篩選範圍，還有請求數據/回應內容 改為使用Button點擊展開Modal後呈現，新增Id,RequestId,CreatedTime",
        author: "cwt0326",
        date: "Wed May 29 14:49:15 2024 +0800"
      },
      {
        hash: "fe36488f982a9129da98cd3dc75c18f44bee8845",
        message: "Merged PR 67699: 新增租戶回饋表查詢",
        author: "蔚霆 陳",
        date: "Tue May 28 05:25:20 2024 +0000",
        learnings: (
          <div  className="text-center">
              <p>第一次接觸公司專案 協助Mike來開發後端的前台 一開始對於 react 還是不夠理解 花了很久的時間 來尋找公司文件的規律 來切出 feedbackform 這個頁面</p>
              <p>我察覺到的規律 並詢問了才知道 通常會把 fetch 資料和型別的 code 都放在 index.ts 剩下的都會到 page.tsx</p>
              <p>inline style 需要被放到 css 裡面 然後用 className 去使用他</p>
              <p>學習如何定義型別 不單單只是用 any 去解決問題: </p>
              <pre className="text-left">
                  <code>
                  {`
export interface UserFeedback {
    appCode: string;
    appName: string;
    tenantCode: string;
    tenantName: string;
    userName: string;
    requestUrl: string;
    payload: string;
    content: string;
}
                    `}
                  </code>
              </pre>
              <p>如何使用公司串api套件:</p>
              <pre className="text-left">
                  <code>
                  {`
export const getUserFeedbacks = async (
    userFeedbackRequest: PaginationDataRequestForHandler<UserFeedbackRequest>,
    setShowLoading: Dispatch<SetStateAction<boolean>>,
    lng: string
): Promise<PaginationDataResult<UserFeedback>> => {
    const emptyFeedbacks: UserFeedback[] = [];
    const result: Result<PaginationDataResult<UserFeedback>> = await PostData<PaginationDataResult<UserFeedback>>(
    '/api/*******/getUser**********', userFeedbackRequest, setShowLoading, lng);
    if (result.status === 1 && result.data) {
        return result.data;
    } else {
        return { data: emptyFeedbacks, totalCount: 0 };
    }
};
                    `}
                  </code>
              </pre>
              <p>一開始串完這個 api 之後 還是不知道 什麽是 PaginationDataRequestHandler 和 setShowLoading</p>
              <p>後來才得知 PaginationDataRequestHandler 是拿來包 requestData 的 才可以繳交給 api requestData</p>
              <p>而 setShowLoading 是拿來 顯示以及隱藏 pagination 的表格</p>
              <p>第一個 commit 完成</p>
          </div>
        ),
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
        date: "Tue May 28 11:05:55 2024 +0800",
      },
    ];
    
    export default commits;
    