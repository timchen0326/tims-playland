'use client';
import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/util/redux/store';
import { toggleCheckbox } from '@/util/redux/checkboxSlice';

const MayoHR = () => {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const checkedItems = useSelector((state: RootState) => state.checkbox.checkedItems);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      setUserId(localStorage.getItem('userId'));
    } catch (error) {
      console.error("Failed to get userId from localStorage:", error);
    }
  }, []);

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
  ];

  const endingInternshipItem = {
    date: "2024-08-01",
    icon: "/mayologo.png",
    alt: "離開 MAYO",
    route: '/projects/mayohr/drinks',
    descriptionRoute: '',
    text: "結束在 MAYO 的實習",
    description: ""
  };

  const filteredItems = useMemo(() => {
    const baseItems = userId === 'User01' 
      ? timelineItems.filter(item => item.alt === "使用者權限")
      : timelineItems;

    const allChecked = Object.keys(checkedItems).length > 12.9;
    return allChecked ? [...baseItems, endingInternshipItem] : baseItems;
  }, [userId, checkedItems]);

  const handleCheckboxChange = (index: number) => {
    dispatch(toggleCheckbox(index));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center p-6 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-4xl font-bold mb-10 text-gray-800 bg-clip-text text-transparent bg-black"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Progress Report Timeline
      </motion.h1>
      <div className="relative w-full max-w-6xl">
        {/* Vertical line */}
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 to-pink-500"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>
        
        {filteredItems.map((item, index) => (
          <motion.div 
            key={index} 
            className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
            variants={itemVariants}
          >
            <div className="order-1 w-5/12"></div>
            <motion.div 
              className="z-20 flex items-center order-1 bg-white w-24 h-24 rounded-full"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <motion.img 
                src={item.icon}
                className={`w-20 h-20 rounded-full object-cover cursor-pointer border-4 border-white-500 ml-2`}
                alt={item.alt}
                onClick={() => router.push(item.route)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            </motion.div>
            <motion.div 
              className={`order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
            >
              <a href={item.descriptionRoute} className="no-underline">
                <h3 className={`mb-3 font-bold text-gray-800 text-xl`}>{item.alt}</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{item.text}</p>
                <p className="text-xs text-gray-600">{item.description}</p>
                <p className="text-xs text-gray-500 mt-2">{item.date}</p> {/* Add date here */}
              </a>
              <div className="mt-2">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="custom-checkbox"
                    checked={!!checkedItems[index]} 
                    onChange={() => handleCheckboxChange(index)} 
                  />
                  <span className="ml-2 text-gray-700">完成</span>
                </label>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default MayoHR;
