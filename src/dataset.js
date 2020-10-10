export const emails = [
  {
    id: "email1",
    from: "aaa@example.com",
    to: ["zzz.zzz@example.com"],
    metadata: "",
    subject: "[ HR-888 ] Notice of official announcement",
    body:
      "This document is important and requires your immediate att ention.If you are in any doubt as to any aspect of the proposals ref  erred to in the document or about the action you should take, you are rec  ommended to seek your own independent advice immediately from your stockbroker  , bank manager, solicitor  , ac  countant or other appropriately authorised independent prof  es  sional adviser who is authorised under the Financial Services and Markets Act 2000 if you are in the United Kingdom or, if not, from another appropriately authorised independent adviser.If you have sold or transferred all your Ordinary Shares or underlying Depositary Inter  es  ts in 888 Holdings Public Limited Company (888 or the Company), you should pass this letter and all other documents enclosed with it to the purchaser or transfer  ee or to the stockbrok  ers, bank or other agent through whom the sale or transfer was effected for transmission to the purchaser or transfer  ee  .Notice of the Annual General Meeting (the Meeting) of 888 to be held at 9.00am CEST (8.00am BST) on Wednesday 9 May 2018 at Suite 601/ 701, Europort, Europort Road, Gibraltar is set out on pages7 to 9 of this document.Ordinary ShareholdersThe enclosed Form of Proxy, f  or use in connection with the Meeting by Ordinary Shareholders only, should be completed andreturned, in accor  dance with the instructions printed thereon, as soon as possible and by no later than 9.00am CEST (8.00amBST) on 7 May 2018. Shareholders may also appoint a proxy electronically by logging on to https://www.signalshares.com. Furtherdetails are set out in the notes to the Form of Proxy.Depositary Inter  est Holders/Employee ShareholdersThe enclosed Form of Direction, for use in connection with the Meeting by Depositary Inter  es  t Holders and Employee Shareholders only, should be completed and returned, in accor  dance with the instructions printed thereon, as soon as possible and by no later than 9.00am CEST (8.00am BST) on 4 May 2018. Alternatively, CREST members may instruct the Depositary how to vot  e the shares underlying their Depositary Inter  es  ts by using the electronic voting service. Further details are set out in the notes to the Form of Direction.",
    attachment: false,
    date: new Date(2020, 0, 3, 0, 20, 0),
  },
  {
    id: "email2",
    from: "bbb.bbbb@exam.com.jp",
    to: ["yyy@example.com"],
    metadata: "",
    subject: '[web:333] "Web Contact"',
    body:
      "The Mexican colonial web-building spider Metepeira incrassata is frequently attacked by predatory wasps from a number of families. Previous studies have shown that wasps often attack more than one spider during a ‘run’ on a colony, but capture success declines as colony size increases, and that spiders in the central core of the colony have lower risk (Rayor & Uetz 1990, Behavioral Ecology and Sociobiology, 27, 77–85; Uetz & Hieber 1994, Behavioral Ecology, 5, 326–333). We used data from direct observation of attacks and field experiments to test the hypothesis that colonial web-building spiders benefit from ‘early warning’ of predator approach through vibrations in the colony web. Analysis of 135 naturally occurring wasp attack ‘runs’ (attacks on 454 spiders) showed that the per-attack run and per-spider capture success of wasps decreased significantly with increased spider colony size",
    attachment: false,
    date: new Date(2020, 0, 3, 0, 10, 0),
  },
  {
    id: "email3",
    from: "ccc@example.com",
    to: ["xxx@example.com", "xxx2@example.com", "xxx3@example.com"],
    metadata: "+1",
    subject: "Happy New Year! Greetings for the New Year.",
    body:
      "New Year Wishes: You may have had some really good memories about the past one, but you never know what’s the new one is bringing for you. Its time to be hopeful, have new dreams and make some new resolutions for the new year in your life. Its time to connect with each other and make new year wishes. Its time to move on and embrace what’s new. New year means a lot of new dreams and new achievements. People throughout the world anticipate eagerly for this time of year to celebrate the memories they made in the past year and to welcome the new one. If you are excited about the new year that’s soon to be taking place, its time to look at these unique new year messages and wishes because you really need to wish your dearest ones a happy new year!",
    attachment: true,
    date: new Date(2020, 0, 3, 0, 0, 0),
  },
  {
    id: "email4",
    from: "ddd.dddd@exam.com.jp",
    to: ["vvv.vvv@example.com", "vvv.vvv2@example.com", "vvv.vvv3@example.com"],
    metadata: "+1",
    subject:
      "[HR-887(Revised: Office Expansion Project Team)] Notice of off-the-Clock Work Not Liable for Unpaid Wages",
    body:
      "Before becoming permanent, the Commerce Alternative Personnel System was, as the Demonstration Project, modified and expanded several times through the Office of Personnel Management’s approval. Modifications were made largely based on employee input and/or evaluation results in an effort to continually improve the Demonstration Project. Once OPM approved the requested changes, they were published as notices in the Federal Register. The following are links to all the modifications requiring Federal Register notification. ",
    attachment: false,
    date: new Date(2020, 0, 1, 0, 30, 0),
  },
  {
    id: "email5",
    from: "eee@example.com",
    to: [
      "sss@example.com",
      "sss2@example.com",
      "sss3@example.com",
      "sss4@example.com",
    ],
    metadata: "+2",
    subject: "[Github] Logout page",
    body:
      "This solution fixed my issues on Windows 10 with error 403 while I am trying to use HTTPS protocol and two different usernames. I think the problem stems from the Git Desktop Client. I don't use it at home, and I have no issues there. Here at the office, I couldn't push to my personal repo. Blowing out the Windows credentials via the above steps seems to have done the trick. It also caused the Git login window to load when I did git push, so that's why I suspect the Desktop Client.",
    attachment: false,
    date: new Date(2020, 0, 1, 0, 20, 0),
  },
  {
    id: "email6",
    from: "fff.ffff@example.com",
    to: ["qqq.qqq@example.com"],
    metadata: "",
    subject: "[dev] Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
    body: ` This update fixes 5+ year old bugs, and provides a Postfix 3.4 fix for sites that depend on undocumented behavior.

    Changes for all supported stable releases:
    
        Starting with Postfix 3.0, LMTP connections over UNIX-domain sockets were cached but not reused. Therefore, idle cached connections could exhaust LMTP server resources, resulting in two-second pauses between email deliveries. Problem reported by Juliana Rodrigueiro.
    
    Changes for Postfix 3.4:
    
        With message_size_limit=0, which is NOT SUPPORTED by any documentation, BDAT chunks were always rejected as too large.
    
    Changes for Postfix 3.3, 3.2, 3.1, already part of Postfix 3.4:
    
        Starting with Postfix 2.2, reject_multi_recipient_bounce produced false rejects with smtpd_end_of_data_restrictions. The same bug was causing false rejects with the Postfix 3.4 BDAT command. The latter was reported by Andreas Schulze.
    `,
    attachment: false,
    date: new Date(2020, 0, 1, 0, 10, 0),
  },
  {
    id: "email7",
    from: "ggg@example.com",
    to: ["ppp@example.com"],
    metadata: "",
    subject: "Re: [Github] Brush-up on loading animation",
    body:
      "The UICompositionAnimations library exposes classes and APIs to quickly implement animations and effects to a UWP application. It also has a collection of helper methods to load Win2D images, dispatch code to the UI thread and more.",
    attachment: false,
    date: new Date(2020, 0, 1, 0, 0, 0),
  },
  {
    id: "email8",
    from: "hhh.hhh@examp.com",
    to: ["ooo.ooo@example.com"],
    metadata: "",
    subject: "Workplace Summary for sample, Inc.: Jun 2 - Jun 9",
    body:
      "EMI conducted outside normal working hours should be conducted either immediately before or after the member’s workday.  However, if the CO or OIC (as defined in section 0106(b)) determines military exigencies do not permit such an arrangement, they may direct EMI at a different reasonable time.  Reserve component personnel on inactive duty training, however, may not be required to perform EMI outside normal periods of inactive duty training.",
    attachment: true,
    date: new Date(2020, 0, 1, 0, 0, 0),
  },
  {
    id: "email9",
    from: "iii@example.com",
    to: ["nnn@example.com"],
    metadata: "",
    subject: "I love you",
    body:
      "I Love You is the title of at least 47 songs, 15 albums and 13 movies in the English-language canon. We say and hear it all the time — even if it isn’t directed at anyone in particular. The phrase, or a version thereof, adorns items as tiny as guitar picks and large as bags of dog kibble. And we get so close to saying it so often! We love Rihanna and Ruth Bader Ginsburg and even Vin Diesel. So much. Yet when it comes to actually speaking the words out loud, to another person, whose face we can actually see, people can get squeamish.",
    attachment: true,
    date: new Date(2019, 11, 31, 0, 40, 0),
  },
  {
    id: "email10",
    from: "Pablo-Diego@example.com",
    to: ["Pablo-Diego-José-Francisc@example.com"],
    metadata: "",
    subject: "[info:888] ABC EQUIPMENT COMPANY",
    body:
      "The ABC Equipment Rental & Sales name is synonymous with outstanding service and knowledge in the construction industry in the Northeastern Ohio area. Serving surrounding communities in Cleveland, including downtown Cleveland, Akron, Fairlawn, Beachwood, Parma, Medina and many more, our team of experts and extensive equipment inventory is the culmination of years of experience in the industry, getting you the right equipment for your project at the best rates possible.",
    attachment: false,
    date: new Date(2019, 11, 31, 0, 30, 0),
  },
];

export default emails;
