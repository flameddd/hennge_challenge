# todos
- 先看清楚需求
- 列出 todo
- 一關一關過
- 送出之前要重看一次 面試流程
- 我是有經驗的開發者，想必是期待所有的 mission 都要過關
- 可以參考 hotmail, gmail web 版
  - 看的時候，手機方面也多截圖，方便反覆比對
  - 甚至看看 youtube 有沒有 "hotmail ui refactor" or "gmail ui refactor"
  - 這系統是 `archives emails`，跟 email 可以還是有點不一樣
- 測試實機 iOS 畫面
  - 別忘了 mobile 的 input
- 結圖，丟到網路上做 color analysis 產 css color
  - https://mdigi.tools/color-extractor/
  - https://colorate.azurewebsites.net/Color/3F3F3F
  - https://imagecolorpicker.com/
  - color 命名可以參考各大網站 css 變數
  - 這段可以寫在說明上，顏色方面我找工具分析顏色來使用
- 我可以加入 storybook 寫喔！
- 可以加入 test 來寫 針對邏輯部分
- add prettier
- add eslint
- add hooks
- 說明方面，可以加上 file structure 幫忙 review 更快了解專案

ref
- https://challenge.hennge.com/challenge-details/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZmxhbWVkZGRAaG90bWFpbC5jb20iXSwiaXNzIjoiaGVubmdlLWFkbWlzc2lvbi1jaGFsbGVuZ2UiLCJzdWIiOiJjaGFsbGVuZ2UifQ.8l93jN79xudYDphEl9cBAn9UKo2SfDgx6oOTMRWC_Z4


## time line
- 20200925:18:00 讀完說明、抓出顏色，準備開工，相信自己的水準
  - 抓出一些顏色，但還不知道怎麼命名
  - 先把 task 列出來（這些步驟寫下來，到時候應開可以寫上去）
    - analysis design, then divide page into small components (tasks)
  - 先列出元件吧，要不要用 react date 再想看看
  - `npx create-react-app@latest hennge_challenge` init project
  - 今天算是只弄了 init project，這樣進度不行，要拉高一點
- 20200928:14:48
  - 混了兩天今天要有點進度阿
  - 命名了 color
  - 要把 mobile 跟 desktop 的 layout 想一下
    - mobile 就 div, div, div 讓整個 scroll，上面考慮用 fix 滑下來
    - desktop 就要指定外層高度，要把下面的空間佔滿 flex 0 0 1 
  - 先弄 search bar
    - 先弄了 UI，還有 toggle 還沒出來... 可以玩玩 grid 喔!，但 UI logic 其實很複雜
  - 下午弄 table，今天想弄完，思考到底要用哪種 tag
    - 有 mobile mode，我用 div 是不是比較好處理?
    - breaking point 要設定多少? -> 600px
    - table 基本樣子有了
    - 還差很多，還有排序、還有 mobile 明天要在加油
- 20200929:10:55 繼續吧
  - table 繼續，要先弄哪塊? 先 mobile ?
  - 把 data 準備起來
  - sort 功能我再考慮看看吧，因為只要 UI mock，文件上並沒有說到要實現這個 feature
  - 把 data 建立起來了
  - 如果沒有要 date sort，那我可以先 date sort UI！因為如果不先弄，那後續 mobile 會不會比較麻煩？
  - 先把 dataset 放進去吧
  - 放進去了，接著呢？放入 sort 符號好了！跟 time render logic
  - 好，desktop table 有基本了，換 mobile table

- 20201004
  - 今天終於面對現實一點了
  - 把 flexbox 改用 grid 實現，到時候可以寫在 readme 中
    - 說一開始思考要不要拆成兩個元件
    - 決定用一個元件，然後 flexbox 處理
    - 最後覺得太亂，改用 grid 處理

- 20201005 我先來整理 style，我想要先 commit 一次
  - sort mail 還沒有 unit test
  - 持續懷疑該拿 date 怎麼辦
  - 靠妖，差點忘了有 extend 功能
  - 補上了 sort unit test、花時間弄清楚 asc, desc 的邏輯與設計
  - 想想事情還差很多阿！！ extend, mobile extends, date picker, 真正的 react App 也沒有
    - 明天，先把 data 加上 ID
    - 抓圖 gmail, hotmail 的 deaktop, mobile 的樣子來 mockup
    - mobile 的要 real device test、然後要有 scroll lock 不要 scroll 造成 extend
- 20201006
  - 先來加入 data ID
  - 下午都再弄 extendmail。有點譜了
  - shrink 的 button 還不是很好
- 20201007 弄 date 嗎？
  - 還缺 extend, mobile extends, date picker, 真正的 react App 也沒有
  - mobile 要記得拿掉 height、scroll 
  - 該不該自己做呢？
  - 現在我卡甚麼問題，我要不要自己做 date picker
  - 到時候就說，我猶豫要不要自己做，但有說明叫我別猶豫，決定不重覆造輪子！
  - 選擇 lib 時，不採用 react-dates 因為有 monent js dep，這個 mockup 我不想用到這個
      - 會用 react dates 可能是因為 airbnb 的業務
    - 後來採用 https://github.com/hypeserver/react-date-range
    - 但事過後發現，沒辦法 custom appear
    - 改回 react-dates
- 20201011
  - extendmail 的 metadata, attach 還沒放、不知道要怎麼放
  - 我要放 icon 嗎？
- 20201011
  - 先妥協一下 mobile 的 date range picker
  - 可以寫寫，我本來想要 hover 設計的，但設計上已經有 design 了所以沒弄
- 20201013
  - 整理 shrink button
  - 今天弄 react app 吧!
  - extendmail 的 height 記得拿掉
  - 弄 create react app 吧！要把 filter 的功能弄出來才行！
  - 我要解決
    - deaktop container 100%
    - mobile searchbar width 問題
- 20201014
  - 最後的 10%，90 分的力氣
  - 先解決 mobile searchbar 的問題吧
  - 到底要做到多好？，可惡　
  - 更好的位置，就是 mobile 時，變成整行！
  - 然後要 sticky。 height 要指定，這樣就不會有空白看透過去
  - mobile 的 animation 好像沒用(有用，後來確認有用)
  - sticky mobile 問題搞定，沒想到 overflow-x 也會影響
  - 目前想到就是 datepicker 的行為不夠好
  - 到時候可以寫寫，弄 mobile 的 scroll 花了一點時間
  - 又可以說，我一開始是 div div div，但 mobile 的 scroll UX 差
  - 所以弄了 sticky 效果之類的

todos
- 要考慮改用 rem font-size
- 記得要 refactor `colors`
- datepicker 的行為不夠好
- extendmail 的 icon 都沒放，不知道要不要放
- 本來想要 mobile extendmail 時，把 tableitem 縮小的，目前沒有好的辦法


元件（盡量拆小一點）
- css normalize
- layout
  - 可能要看看 github iOS bug 那個 100vh
- date selector
  - UI
  - logic
  - serach button
- Header
- table title
- table header (mobile)
- table icon
- table item (mobile, hover)
  - from
  - to
  - subject
  - Date
  - table item tag
  - attach icon

還有展開的樣式！而且應該還要有 mobile extends

功能面
- search date feature
- table sort feature
- date 的顯示邏輯



我要做 router 嗎？
- 不要

那版面要怎麼處理？

# steps
## init project
1. `npx create-react-app@latest hennge_challenge` create init project
2. add `eslint`, `prettier` and `husky` for pre-commit to check lint
3. add `storybook` for develop UI components
4. add `styled-components` for style (and add normalize.css global css)

# CHALLENGE DETAILS
Description
Suppose we have a system which archives emails of an organization. In the event of security incidents (such as leakage of sensitive information via emails), this system will be used by the organization's auditing department to retrieve and verify the emails of the concerning parties through its admin console. We would like you to design the user interface (UI) mockup for this system.

## 任務 1: Design the UI using the given images
- `frontend_resources.zip` 裡面有設計和一些 assets  
- 依照 design，用 HTML, CSS, Javascript 做 UI mockup
- You can use any framework or just vanilla JS to build this mockup.


## 任務 2: Extend the UI in order to implement a new feature
- 在 `search result section`，擴展 UI mockup
- 讓 user 能夠在 search result 查看每一封 email 的內容
- The extended design should allow user to **inspect multiple email bodies at once**.

它沒有說、也沒有任何建議 extended design，那代表說這段是我自己要發揮的

## 任務 3: Indicate UI parts that can be improved
- 說出你的意見，覺得 design 哪些 UI 是可以改進的？
  - 可以改進的理由是？該怎麼改進？


# Rules: (題目的規則)
- 要使用 hennge 提供的 `images`
- 要產出 high-fidelity UI mockup
- 任何固定的 texts 都可以用作 UI 中的 data
- For 任務 2: The extended design should allow user to inspect multiple email bodies at once.

# What to include in the solution (最後要交哪些東西？)
1. 最後的 **UI mockup**
2. **IMPROVEMENTS.md** 裡面列出你的 improvement 建議(Markdown 格式)
3. **REPORT.md**  describing your efforts in the process of completing the missions above.
4. Push 到 github **private** repo。install hennge 的  Github App **permissions to read it**
  - (**HENNGE Admission Challenge Github App**)

## 任務 4: Submit your solution
- 上傳到 github (**private**)
- 只上傳所需要的檔案
- Give us permissions on your solution

# Build your solution request

填好 JSON
```json
{
  "github_url": "https://github.com/YOUR_ACCOUNT/GITHUB_REPOSITORY",
  "contact_email": "YOUR_EMAIL"
}
```

填入 email、repo address
- email 要 double check，公司會用 email 連絡

然後用 POST request
- `https://api.challenge.hennge.com/challenges/003`
- JSON string as the body part
- `Content-Type` must `application/json`
- 要有 `Authorization` header
  - userid -> email 裡面的 email address
  - password -> 10 位數符合 RFC6238 TOTP 的 time-based one time password

## 產生 Authorization password
- 讀 RFC6238，然後自己產生正確的 one time password
- TOTP's Time Step X is 30 seconds. T0 is 0.
- Use `HMAC-SHA-512` for the **hash function**, instead of the default HMAC-SHA-1.
- Token shared secret is the userid followed by ASCII string value "HENNGECHALLENGE003" (not including double quotations).

### Shared secret examples
For example
- if the userid is **"ninja@example.com"**
- the token shared secret is **"ninja@example.comHENNGECHALLENGE003"**

For example
- if the userid is **"ninjasamuraisumotorishogun@example.com"**
- the token shared secret is **"ninjasamuraisumotorishogun@example.comHENNGECHALLENGE003"**

# POST 成功的話
- server returns HTTP status code **200**


# Rules
- You do not have to disclose how you achieved this mission at this time.
- Do not hesitate to use source codes or tools on the net, but do the exploring process by yourself 
- Do not ask your friend to help you. The only thing that matters is that it works!
- No bruteforce attacks, please!


## Sample Request

```
POST /challenges/003 HTTP/1.1
Authorization: Basic bmluamFAZXhhbXBsZS5jb206MTU5NTk0MjU2MA==
Host: api.challenge.hennge.com
Accept: */*
Content-Type: application/json
Content-Length: 104
```

```json
{
  "contact_email":"ninja@example.com",
  "github_url":"https://github.com/hennge/frontend_repository"
}
```
## Sample Response

```
HTTP/1.1 200 OK
Content-Type: application/json
Date: Wed, 26 Jun 2019 02:15:16 GMT
Transfer-Encoding: chunked
```

```json
{
  "message":"Congratulations! You have achieved mission 3"
}
```

# After successful
- 你會收到 email （內含有你的 CV、cover letter link）
- 公司收到後，engineers 會 review 你的內容，用 email 連絡你的結果





import { BREAK_POINT_SM } from '../constants'

export const HORIZONTAL_ORIENTATION = 'horizontal';
export const VERTICAL_ORIENTATION = 'vertical';
export const VERTICAL_SCROLLABLE = 'verticalScrollable';


// withPortal={window.innerWidth < 600}
// orientation={window.innerWidth > 600 ? "horizontal" : "verticalScrollable"}

withPortal={true}
orientation={"verticalScrollable"}
//     orientation="verticalScrollable"



    // withPortal={true} or with withFullScreenPortal={true}

    // 判斷 windows size 有沒有超過 break point
    // 有的話，有改
    // orientation: PropTypes.oneOf([HORIZONTAL_ORIENTATION, VERTICAL_ORIENTATION]),
//     verticalScrollable
//     <DayPickerRangeController
//     onDatesChange={aaa => console.log(aaa)}
    
//     startDate={null}
//     endDate={null}
    
//     numberOfMonths={2} 
//     hideKeyboardShortcutsPanel="true" 
//     withPortal={true}
//     orientation="verticalScrollable"
// />
// <DayPicker
// orientation="verticalScrollable"
// />




// 標題要有特別標示嗎？
// 標題樣式是？
// H1 的 margin 有點太多了

// from, to 要有標示嗎
// 樣式是？

// body 的 font size, line height, letter space 是？

// attach, date 要放哪個位置