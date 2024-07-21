'use client'
import React from 'react';
import styles from './page.module.css';

  const Page: React.FC = () => {
    const comments = [
      {
        date: '2024/05/09',
        text: '一開始學了怎麽安裝 vscode 跟 nodejs， 還有接下來使用在 vs code 用 npm i 跟 npm start 去開啓 react。 最後今天還學了使用 button 跟 input 的用處，并且製作了一個可以 計算BMI的計算器。 這些 code不只是要會用，還有需要知道他們的用意也是很重要的一個環節。',
        author: '蔚霆 陳',
      },
      {
        date: '2024/05/10',
        text: '第二天開始認識了 next 和繼續同時練習HTML：\n\nHTML：\n繼續使用了 freecodecamp，學習了怎麽去製作一個咖啡廳的菜單\nNext：\n開始製作球員卡拍賣系統，並照片是jpg而不是從網絡上導入\n\n遇到的問題：\nnext開不了新的tab因爲沒有用 pnpm dev 打開，本來是用了 pnpm start',
        author: '蔚霆 陳',
      },
      {
        date: '2024/05/13',
        text: '繼續製作球員卡 跟練習 html：\n\nHTML:\n學會使用rgb去修改顔色並且學習調整位子\nNext：\n繼續製作球員拍賣系統，今天把文字跟圖片結合並製作成球員卡的樣子，還有開另外三個購買界面並且給與使用者一個可以輸入信用卡訊息以及地址的input box\n\n遇到的問題：\nbackground只吃靜態圖片而且要把 圖片放在 .public 才可以當成背景使用，原本是放在跟 球員照片同一個地方 under src/assets/image',
        author: '蔚霆 陳',
      },
      {
        date: '2024/05/14',
        text: 'HTML：\nrgba, hsl, hsla, 顔色漸變(linear-gradient)，影子(box-shadow)\n\nNext:\n路徑的設置，還需要掌握css的用法，使用 next/navigation 去把網址路徑修改，創作dymanic routing 可以讓球員卡被應用，不用一直重複寫一樣的code\n\n遇到的問題：\n在把style裡面的position寫成fixed的時候遇到了code出現error的問題，需要告訴程式使用的是哪一個property. i.e. const style = {...} as React.CSSProperties; （這樣之後寫完全不行）\n把code一份一份寫出來是一個錯誤的決定，應用比較好',
        author: '蔚霆 陳',
      },
      {
        date: '2024/05/15',
        text: 'HTML\n繼續製作freecodecamp的表單\n\nPython Flask:\n安裝了python並且把網頁開啓把原本的球員卡從js搬到py並且使用class去做一個球員名字的牽綫好讓python去拉playerdetails\n\n遇到的問題：\n-安裝python有點慢',
        author: '蔚霆 陳',
      },
      {
        date: '2024/05/16',
        text: 'Python Selenium\n安裝了python selenium 去做了爬蟲，學習怎麽從MLB網站的球員名字然後在從那邊爬進去每一個球員資訊去截取每一個球員的資訊\n\n遇到的問題:\n沒有一層一層的去找code的問題導致找不到下載圖片的方法',
        author: '蔚霆 陳',
      },
      {
        date: '2024/05/16',
        text: '-寫完python 爬蟲咨詢並上傳到 flask 創造的網址，然後再用 next去把 上面東西拉下來。\n\n遇到的問題，不知道怎麽去接next.js 跟 python flask 寫的 程式碼，請了Paul跟Tomas 解決了，自己需要多多瞭解。',
        author: '蔚霆 陳',
      },
      {
        date: '2024/05/20',
        text: '學著自己把 http://localhost:3000/playerlist 跟 http://127.0.0.1:8080/api/getPlayerList 串起來\n可以多使用console.log（）確定自己的方向\nplayerList.map((player: any) 可以 跟 python的 for loop 很像\n用 async function x 去找 資料\nuseEffect(() ⇒ { x() }, []) 用於在元件首次掛載時調用 x 函數以獲取數據。\nfreecodecamp\n\n完成了 表單製作\n\n遇到的問題：\n花了很多時間在找出爲什麽網址沒有用\n\n沒注意每個網址的儲存地\n不夠熟練網址輸出方向',
        author: '蔚霆 陳',
      },
      {
        date: '2024/05/24',
        text: '球員卡製作完成， 有包含： 購買界面，增加以及減少球員卡數量，一鍵刪除，購物清單，結賬畫面，客戶資訊，確認購買完成畫面-以及可以儲存 客戶訊息到json file 裏面\n\n先來講球員卡在js寫了什麽:\n在shopping-cart的資料夾裏面的src 資料夾裏面分成: components, context, pages, 以及 utilities 的資料夾以方便做區分\n\ncomponents: 主要是界面會看到的東西\n\nCartItem\nCartItemProps 告訴程式碼我的變量會是什麽形態\n使用了 async function playerdata 宣告一個非同步函數 並且讓這個函數内 使用 await 非同步操作，try-catch block 裏面寫了 fetch 網址 因爲是用了await的操作 所以會停止 playerdata function的進行 直到fetch完爲止而且有feedback ，接下來如果可以沒有問題， 下一個 const players = await response.json 會去解讀裏面json的資料 然後回傳到 players變數。useEffect(() ⇒ { playerdata() }, []); 的用意是確保從API獲取資訊 。 stack是 react-bootstrap套件拿來排版元素用的 利用 img去顯示球員頭貼名字以及名字因爲這個是 購物車裏面的球員卡，存放咨詢還有包含數量使用\n{quantity} 顯示 還有 多少錢還有用formatcurrency 也是另外一個手寫的fuction xx 按鈕被按到的時候就會自動移除全部同一個球員卡\n\nNavbar\n從 useShoppingCart() 獲取 openCart跟 cartQuantity， NavBar 是一個包好的套件可以將 navigationbar 很快的做好 onclick={openCart} 點擊使用 openCart函數 並且在購物籃的右下角用cartQuantity去顯示數量 > 0 才會顯示數量， container提供一個固定寬度的容器， 是從 react-bootstrap的套件出來的\n\nShoppingCart\n定義ShoppingCart 函數 然後接受一個 isOpen 屬性確認 購物車是不是開的，React套件裏面的 React.useState 創建一個playerList變數 還有更新函數 setPlayerList 初始為empty navigate 用在checkoutbutton 上面讓使用者可以去下一個網站 Offcanvas 是 bootstrap的套件 它可以用來創造側邊彈出的界面 讓我們去當作購物車使用，{cartItems.map((item) ⇒ (<CartItem key={item.number} {...item} /> 很像python的 forloop 他會依照每一個list裏面的dictionary去做動作\n\nStoreItem\n使用了 bootstrap裏面 card套件去規劃了球員卡的排版 並且每一個卡上面都有增加遞減刪除球員卡等功能在上面使用的是從shoppingcartcontext搬過來的\n\ncontext: 有些 components需要的細節\n\nShoppingCartContext\n一樣使用了 type 去定義每一個 function的 output type， reduce是一個纍加的function去記錄我們增加的數字，filter則是濾掉不要的東西，\nhooks: local storage的儲存地\n\nuseLocalStorage\n在localStorage 獲取 key值 ， 在localstorage裏面存資料， 網頁刷新的時候還會在\npages: 每一個網址該有的界面\n\ncheckout\n寫了handlechange來處理表單的輸入變化並更新狀態 handlesubmit 阻止默認表單提交行爲，送表單數據到後端成功導到 confirmation畫面\n\nconfirmation\n在這裏做了每一個itemremove的狀態因爲不希望在confirmation page還有購物車咨詢，所以刪除\n\nStore\n在 Store 使用了自己的套件StoreItem去把球員卡顯示出來\n\nutilities：去開啓每一個網站的地方\n\nApp\n這個 App 組件在加載時從 API 獲取球員列表數據，並將其存儲在狀態中。應用程序使用 react-router-dom 來設置多個路由，包括Home, Store, About , Checkout, confirmation 還有一個動態的球員頁面。整個應用被包裹在 ShoppingCartProvider 中，提供了購物車上下文並使用 bootstrap 來設置頁面佈局\n\nmain\n使用 BrowserRouter 來處理網址並用 StrictMode 確保應用在開發過程中有錯誤，應用 App 被加入設置中從而構建出整個應用的頁面結構。',
        author: '蔚霆 陳',
      },
    ];

  return (
    <div className={styles.container}>
      {comments.map((comment, index) => (
        <div key={index} className={styles.commentBox}>
          <div className={styles.speechBubble}>
            <p>{comment.text}</p>
          </div>
          <div className={styles.commentInfo}>
            <span>{comment.author}</span>
            <span>{comment.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
