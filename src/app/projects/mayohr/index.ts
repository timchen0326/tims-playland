const timelineItems = [
    {
      date: "2024-05-09",
      icon: "/0_aZ3qgyVGmcQd488S.webp",
      alt: "Install VS Code and React.js",
      route: '/projects/mayohr/log',
      descriptionRoute: '#',
      text: "開始學習怎麽下載 VS Code 跟 使用 React.js / Next.js",
      description: "如何設置 VS Code 和 React.js。這是我開始使用 Next.js 和 React.js 的第一步，學習如何配置開發環境以及基礎的開發工具。"
    },
    {
      date: "2024-05-13",
      icon: "/unnamed.png",
      alt: "Freecodecamp",
      route: 'https://www.freecodecamp.org/',
      descriptionRoute: 'https://www.freecodecamp.org/',
      text: "從零開始學習與收悉 HTML",
      description: "通過 freeCodeCamp 的課程熟悉 HTML 基本概念，這些基礎知識為我後續的前端開發打下了堅實的基礎。"
    },
    {
      date: "2024-05-14",
      icon: "/pngtree-bmi-cartoon-vector-illustration-depicting-medical-concept-unhealthy-vector-body-vector-png-image_47239794.jpg",
      alt: "BMI",
      route: '/projects/mayohr/bmi',
      descriptionRoute: '/projects/mayohr/bmi',
      text: "初階瞭解 usestate 的用意並更瞭解 react 用法",
      description: "建立 BMI 計算器以理解 React 的狀態管理，這讓我熟悉了 useState 的使用以及如何在 React 中管理組件狀態。"
    },
    {
      date: "2024-05-15",
      icon: "/python.svg",
      alt: "Python 爬蟲 / Flask 架 API",
      route: '#',
      descriptionRoute: 'https://flask.palletsprojects.com/en/3.0.x/',
      text: "學習如何使用 Python 去爬蟲和架 API",
      description: "編寫 Python 爬蟲腳本並使用 Flask 建立 API，這使我能夠抓取網頁數據並提供後端服務。"
    },
    {
      date: "2024-05-24",
      icon: "/9b205bc30c406fdff6e173156594b8cb.jpg",
      alt: "拍賣球員卡網站",
      route: '/projects/mayohr/shoppingCart',
      descriptionRoute: 'https://shopping-cart-k73y.vercel.app/',
      text: "自行去創造自己的球員卡拍賣網站 使用的是爬蟲完的資料",
      description: "開發一個基於爬蟲數據的球員卡拍賣平台，這讓我學會了如何將爬蟲獲取的數據應用於實際項目中。"
    },
    {
      date: "2024-05-26",
      icon: "/images (1).png",
      alt: "learngitbranching",
      route: '/projects/mayohr/git',
      descriptionRoute: 'https://git-scm.com/',
      text: "學了基本 git 的操作",
      description: "學習和應用 Git 進行版本控制，這是協作開發中必備的技能。"
    },
    {
      date: "2024-05-28",
      icon: "/46415699-cfc5cf00-c6f3-11e8-9bcc-2fc2bf1759ec.png",
      alt: "Azure DevOps",
      route: '#',
      descriptionRoute: 'https://azure.microsoft.com/en-us/products/devops',
      text: "開始協助後台前端功能的開發",
      description: "使用 Azure DevOps 協作開發前端功能，這讓我熟悉了現代開發工作流程和工具。"
    },
    {
      date: "2024-05-30",
      icon: "/json-editor-online-icon-filled-256.webp",
      alt: "JsonEditor",
      route: '/projects/mayohr/jsonEditor',
      descriptionRoute: 'https://github.com/CarlosNZ/json-edit-react',
      text: "使用 JsonEditor 套件去修改 Json File",
      description: "集成 JsonEditor 進行 JSON 文件的編輯和管理，這讓我能夠更靈活地處理和展示 JSON 數據。"
    },
    {
      date: "2024-06-14",
      icon: "/dashboard-8312011_1280.png",
      alt: "Dashboard",
      route: '/projects/mayohr/dashboard',
      descriptionRoute: 'https://react.dev/',
      text: "使用 dashboard 是為了提供一個集中化的界面來可視化數據",
      description: "開發和設計數據可視化儀表板，這讓我學會了如何使用 React 開發複雜的用戶界面。"
    },
    {
      date: "2024-06-26",
      icon: "/istockphoto-921617728-612x612.jpg",
      alt: "React D3 Tree",
      route: '/projects/mayohr/reactD3Tree',
      descriptionRoute: 'https://www.npmjs.com/package/react-d3-tree',
      text: "修改公司套件使用組織樹套件",
      description: "實現和修改組織樹圖表以適應公司的需求，這使我學會了如何自定義和擴展第三方庫。"
    },
    {
      date: "2024-07-04",
      icon: "/profile-icon-login-head-icon-vector.jpg",
      alt: "使用者權限",
      route: '/login',
      descriptionRoute: '/login',
      text: "限制使用者可以看到的網頁",
      description: "建立用戶權限控制系統，確保不同角色的用戶只能訪問他們被授權的頁面。"
    },
    {
      date: "2024-07-08",
      icon: "/images.png",
      alt: "Redux",
      route: '/projects/mayohr/redux',
      descriptionRoute: 'https://react-redux.js.org/',
      text: "輕鬆管理 React 應用程式的狀態",
      description: "使用 Redux 進行狀態管理，優化 React 應用性能，這讓我能夠更有效地管理應用的全局狀態。"
    },
    {
      date: "2024-05-09 - 2024-08-01",
      icon: "/Git_icon.svg.png",
      alt: "Commits",
      route: '/projects/mayohr/commits',
      descriptionRoute: 'https://react-redux.js.org/',
      text: "提交了大量代碼變更，涵蓋多個項目",
      description: "在實習期間提交了多個 commit，覆蓋了從設計到開發再到部署的各個階段。"
    },
    {
      date: "2024-08-01",
      icon: "/mayologo.png",
      alt: "離開 MAYO",
      route: '/projects/mayohr/drinks',
      descriptionRoute: '',
      text: "結束在 MAYO 的實習",
      description: ""
    },
  ];