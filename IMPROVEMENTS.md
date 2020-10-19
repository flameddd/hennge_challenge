# IMPROVEMENTS.md

## Results: mail(0)
On mobile mode, "Results mail" can margin into table header, then it will have **MORE SPACE**, and screen are more clean.

![m07.jpg](./screenshots/m07.jpg)

## Inconsistent hover effect
The **"hover effect"** should be consistency.  
![16.jpg](./screenshots/16.jpg)  

## Inconsistent sort design
According to the design, both "**sorted date**" and "**sorted from**" are **UP** arrow.  
Its means that "**sorted date**" and "**sorted from**" should be **SAME** order. And we can see
- date field: From "The most **recent/latest** dates" to "The most **oldest** dates".
  - It's **Descending** order
- from field: From "**A**" to "**Z**"
  - It's **Ascending** order

So the "**date field**"'s arrow should be a **DOWN** arrow (on design)
- The **UP** arrow represent "ascending order", which means the oldest dates will be at the top of the list
- (I made this change on my repo.)

ref:
- [Wiki about Sorting](https://en.wikipedia.org/wiki/Sorting)
- [bootstrap-table](https://examples.bootstrap-table.com/#extensions/multiple-sort.html)
- [material-ui table](https://material-ui.com/components/tables/)

![17.jpg](./screenshots/17.jpg)

## Unknown's meta data
- The "+1/+2" is missing header,and it make me confuse what its meaning.

In my opinion
- The icon leave too much space. It should be more close to "Subject". Just like "Attachment" icon.
- or, just remove the whole field.

![18.jpg](./screenshots/18.jpg)


## mobile mode
- `results 結果` 可以移到 header 裡面去
  - mobile 模式中，空間很珍貴，這太佔空間了
  - sort From 上面是錯的嗎？符號  arrow 的 inconsistent
    - https://en.wikipedia.org/wiki/Sorting
    - https://www.kb.blackbaud.co.uk/articles/Article/117098
    - https://material-ui.com/components/tables/
    - https://mottie.github.io/tablesorter/docs/#Demo
    - https://examples.bootstrap-table.com/#extensions/multiple-sort.html
    - 向上 是 asc
      - Ascending : from A to Z.
      - The oldest dates will be at the top of the list.
    - 向下 是 desc
      - Descending: from Z to A.
      - The most recent/latest dates will be at the top of the list.
    - design 的 date 箭頭向上 asc、但排序結果是  新 -> 舊

## desktop
- hover color 後面 inconsistent
- date format inconsistent
- metadata 不知道是甚麼東西，沒有任何提示
- metadata 兩邊的 space 太大了，感覺很空，靠近 subject 就好了
