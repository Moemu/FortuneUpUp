//今日的运势是？
function WhatisTodaysFortune() {
  let options = [
    { name: '大吉', probability: 0.2 },
    { name: '中吉', probability: 0.4 },
    { name: '小吉', probability: 0.3 },
    { name: '不太吉', probability: 0.1 }
  ];
  let total = 0;
  for (let i = 0; i < options.length; i++) {
    total += options[i].probability;
  }
  let r = Math.random() * total;
  for (let i = 0; i < options.length; i++) {
    if (r < options[i].probability) {
      console.log(options[i].name)
      return options[i].name;
    }
    r -= options[i].probability;
  }
}

//运势有了，接下来该是今天适合和不适合做的事情了
function WhatisTodaysFortuneEvent(Fortune){
  let Events = [
    {name:"写代码",good:"今天Debug报错少",bad:"今天Debug报错多"},
    {name:"写网页前端",good:"今天写出来的网页很漂亮",bad:"你会发现你的CSS不起作用"},
    {name:"为你的项目想一个功能",good:"实现后你的项目会大受欢迎",bad:"实现的时间会比预期长"},
    {name:"构想一个小工具",good:"没准很实用",bad:"脑子被榨干了~下次再说~"},
    {name:"编译你的项目",good:"有些问题编译后才能发现",bad:"IDE的报错都没解决完就想编译?"},
    {name:"解决一个bug",good:"解决起来会非常简单",bad:"小心屎山"},
    {name:"暴力测试你的应用",good:"增加上线安全性",bad:"先完成基本功能再说"},
    {name:"换个密码",good:"定期更换密码有利于确保账户的安全性",bad:null},
    {name:"写博客",good:"今天博文会帮助很多人",bad:"没人会看你的博文"},
    {name:"写一篇随笔",good:"未来的你会看的",bad:"这篇随笔有可能会被遗忘"},
    {name:"逛逛别人的博客",good:"没准可以找到志同道合的朋友",bad:"也许今天找到的大多不再更新了"},
    {name:"写作业",good:"今天效率很高",bad:"你会很快被其他事情分心"},
    {name:"学习一下",good:"偶尔努力一下有助于提高成绩",bad:"今天学的效率会很低"},
    {name:"复习一下",good:"重要性不用我多说了吧",bad:"很没意思"},
    {name:"做视频",good:"今天你会很有创意",bad:"可能今天没有什么创意"},
    {name:"去B站刷视频",good:"今天B友又有了很多活",bad:"你会遇到很多梗小鬼"},
    {name:"去A站看番",good:"或许今天会有新番",bad:"A站还没有买新番"},
    {name:"看一部新番",good:"这次的新番不错",bad:"感觉不如..."},
    {name:"回顾一下看过的番",good:"经典永不过时",bad:"下次再说"},
    {name:"看漫画",good:"ACGN一家亲",bad:"找漫画是件费劲的事情"},
    {name:"看轻小说",good:"ACGN一家亲",bad:"找小说是件费劲的事情"},
    {name:"回顾以前玩过的游戏",good:"都是回忆",bad:"下次一定"},
    {name:"发个空间/朋友圈",good:"你会收获很多点赞",bad:"没有人在意你"},
    {name:"打音游",good:"今天可以拿下很多图",bad:"你会收到很多好"},
    {name:"推Gal",good:"你会推得很爽",bad:"你会被刀哭"},
    {name:"找Gal玩",good:"扩展下后宫",bad:"避免审美疲劳"},
    {name:"抽卡",good:"今天一定出货",bad:"喜提保底"},
    {name:"许一个愿望",good:"没准就实现了呢~",bad:null},
    {name:"尝试一个新APP",good:"你的生活会很有效率",bad:"广告大于功能"},
    {name:"看看今天的探索队列",good:"愿望单又多了几位新成员",bad:"全是三国杀"},
    {name:"听新歌",good:"推荐给你的都是好东西",bad:"还不如歌单里面的经典"},
    {name:"试一下新歌单",good:"没准能发现宝藏歌曲",bad:"流量歌单没有意思"},
    {name:"唱首歌给朋友",good:"太好听了吧~简直就是天籁",bad:"人家不屑于听你的歌"},
    {name:"睡觉",good:"都抽到我了不去睡一下怎么行?",bad:"很容易睡过头"},
    {name:"早睡",good:"补充一下精神",bad:"你的工作还有很多"},
    {name:"熬夜",good:"今晚就可以完成所有工作辣",bad:"白天会把你熬夜的时间补回来"},
    {name:"通宵",good:"就看个日出应该没什么的吧(心虚)",bad:"你会肾虚"},
    {name:"逛某宝某东",good:"今天的购物车会吃得很饱",bad:"你会剁手"},
    {name:"整理小窝",good:"整理过后,神清气爽",bad:"现在的小窝找东西更有效率"},
    {name:"清一下电脑垃圾",good:"看看又堆了几个G",bad:"红了再说"},
    {name:"扫一下病毒",good:"重要性不用我多说了吧",bad:null},
    {name:"约朋友出来玩",good:"今天会玩得很高兴",bad:"人家没时间"},
    {name:"上Twitter",good:"关注的同志更新了",bad:"时间线会被魔怔人占领"},
    {name:"上Pixiv",good:"今天又有很多好图",bad:"今天的图很没意思"},
    {name:"看Discord",good:"群友的聊天很精彩",bad:"群友聊的不关你事"},
    {name:"看看你不经常看的群聊",good:"群友的聊天很精彩",bad:"群友聊的不关你事"},
    {name:"去泡个澡",good:"你有多少天没有洗澡了",bad:"洗澡在浪费你的时间"},
    {name:"去散个步",good:"你会发现你从未发现的景象",bad:"你会很快疲惫"},
    {name:"去骑单车",good:"你会骑得很爽",bad:"今天的红灯挺多"},
    {name:"找个景点玩玩",good:"找到的景点人少风景又美",bad:"景点人挺多的,还贵"},
    {name:"穿可爱的衣服",good:"今天的你也是如此可爱~",bad:"会被不应该发现的人发现"},
  ];
  let today = new Date();
  ;
  let SpecialEvents = [
    {Isdate:IsLunarNewYear(),name:"换新衣",good:"当然是穿漂亮衣服辣",bad:null},
    {Isdate:IsLunarNewYear(),name:"走亲访友",good:"听说会有大红包",bad:null},
    {Isdate:IsLunarNewYear(),name:"行花街",good:"行行花街,睇睇春花",bad:null},
    {Isdate:IsLunarNewYear(),name:"回看拜年祭视频",good:"不管是大规模的还是民间的,开心就好",bad:null},
    {Isdate:IsLunarNewYear(),name:"讨红包",good:"今日获得的红包翻倍噢",bad:null}
  ];
  //判断部分
  let GoodEventList = [];
  let BadEventList = [];
  function Extractor(GoodEventsCount,BadEventsCount){
    for(i = 0;i < GoodEventsCount;i++){
      GoodEventList.push(Events[Math.floor(Math.random()*Events.length)]);
      Events.splice(Events.indexOf(GoodEventList[i]),1);
    }
    for(i = 0;i < BadEventsCount;i++){
      let BadEvent = Events[Math.floor(Math.random()*Events.length)];
      if(BadEvent["bad"]==null){i--}else{BadEventList.push(BadEvent)};
      Events.splice(Events.indexOf(BadEvent),1);
    }
  }
  if(Fortune == "大吉"){
    Extractor(4,0);
  }else if(Fortune == "中吉"){
    Extractor(3,1);
  }else if(Fortune == "小吉"){
    Extractor(2,2);
  }else if(Fortune == "不太吉"){
    Extractor(1,3);
  }
  return [GoodEventList,BadEventList];
}

//Cookie部分
function getCookie(cname) { //ReadCookie的铺助函数,用于规范读取cookie
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function ReadCookie(){ //读取cookie,如果有cookie则直接读取,否则返回False
  let Fortune = getCookie("Fortune");
  let GoodEventList = getCookie("GoodEventList");
  let BadEventList = getCookie("BadEventList");
  if(Fortune != "" && GoodEventList != "" && BadEventList != ""){
    GoodEventList = JSON.parse(GoodEventList);
    BadEventList = JSON.parse(BadEventList);
    return [Fortune,GoodEventList,BadEventList];
  }else{
    return false;
  }
}

function setCookie(name, value) {
  let d = new Date();
  d.setDate(d.getDate() + 1);
  d.setHours(8);
  d.setMinutes(0);
  d.setSeconds(0);
  let expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/;";
}

//前端交互部分
function mouseUpEvent(MoveBox) {
  document.getElementById("Signbox").removeEventListener("mousemove", MoveBox);
  document.getElementById("Signbox").removeEventListener("touchmove", MoveBox);
  document.getElementById("Signbox").removeEventListener("mousedown", mouseDownEvent);
  document.getElementById("Signbox").removeEventListener("touchstart", mouseDownEvent);
  document.getElementById("Signbox").removeEventListener("mouseup", mouseUpEvent);
  document.getElementById("Signbox").removeEventListener("touchend", mouseUpEvent);
  document.getElementById("Signbox").style.display = "none";
  let CookieFortune = ReadCookie();
  if(CookieFortune){
    var Fortune = CookieFortune[0];
    var GoodEventList = CookieFortune[1];
    var BadEventList = CookieFortune[2];
  }else{
    var Fortune = WhatisTodaysFortune();
    var FortuneEvent = WhatisTodaysFortuneEvent(Fortune);
    var GoodEventList = FortuneEvent[0];
    var BadEventList = FortuneEvent[1];
    setCookie("Fortune", Fortune);
    setCookie("GoodEventList", JSON.stringify(GoodEventList));
    setCookie("BadEventList", JSON.stringify(BadEventList));
  };
  WriteFortuneToImg(Fortune,GoodEventList,BadEventList)
};

function mouseDownEvent(event) {
    var initialX;
    var initialY;
    var currentX;
    var currentY;
    var xOffset = 0;
    var yOffset = 0;
  
    if (event.type === "mousedown") {
      initialX = event.clientX;
      initialY = event.clientY;
    }else if (event.type == "touchstart") {
      initialX = event.touches[0].clientX;
      initialY = event.touches[0].clientY;
    };
    xOffset = initialX - Signbox.offsetLeft;
    yOffset = initialY - Signbox.offsetTop;
    function MoveBox(event) {
      event.preventDefault();
      if (event.type === "touchmove") {
        currentX = event.touches[0].clientX - xOffset;
        currentY = event.touches[0].clientY - yOffset;
      }else{
      currentX = event.clientX - xOffset;
      currentY = event.clientY - yOffset;
      };
      Signbox.style.top = currentY + "px";
      Signbox.style.left = currentX + "px";
      };
    document.getElementById("Signbox").addEventListener("mousemove", MoveBox, false);
    document.getElementById("Signbox").addEventListener("mouseup", function(){mouseUpEvent(MoveBox)}, false);
    document.getElementById("Signbox").addEventListener("touchmove", MoveBox, { passive: false });
    document.getElementById("Signbox").addEventListener("touchend", function(){mouseUpEvent(MoveBox)}, { passive: false });
  }
  
function CloseSignbox(){
  document.getElementById("Signbox").style.display = "none";
  document.getElementById("SignboxResult").style.display = "none";
}

function WriteFortuneToImg(Fortune,GoodEventList,BadEventList) {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  let Background = document.createElement("img");
  let GoodThingImg = document.createElement("img");
  let BadThingImg = document.createElement("img");
  let IsRun = true;
  canvas.width = 804;
  canvas.height = 452;
  Background.id = "SignboxResultImg"
  Background.src = SignboxResultImgBase64;
  Background.style.opacity = 0;
  GoodThingImg.src = GoodThingImgBase64;
  BadThingImg.src = BadThingImgBase64;
  document.getElementById("SignboxResult").appendChild(Background)
  Background.onload = function() {
    if (IsRun) {
      // 画图部分
      ctx.drawImage(Background, 0, 0); //插入背景
      ctx.drawImage(GoodThingImg,35,105); //插入图标
      //调整标题字体
      ctx.font = "60px 小赖字体 等宽 SC"; //在此处修改运势字体大小和字体
      ctx.fillStyle = "#ee3f4d";
      //定位标题
      var FortuneWidth = ctx.measureText(Fortune).width;
      var x = canvas.width / 2 - FortuneWidth / 2;
      var y = 105 + 28 + 30; //105是图标位置，28是图标高度，30是图标和文字的间距
      ctx.fillText(Fortune, x, 100);
      // 宜
      for(let i = 0;i<GoodEventList.length;i++){
        ctx.font = "30px 小赖字体 等宽 SC"; //在此处修改事件字体大小和字体
        ctx.fillStyle = "#ee3f4d"
        ctx.fillText("· "+GoodEventList[i]["name"], 60, y);
        ctx.font = "15px 小赖字体 等宽 SC"; //在此处修改备注字体大小和字体
        ctx.fillStyle = "#7a7374"
        ctx.fillText(GoodEventList[i]["good"], 110, y+25);
        y += 60;
      }
      y -= 25;
      // 忌
      if(BadEventList.length != 0){
        ctx.drawImage(BadThingImg,35,y);
        y += 28 + 30;
        for(let i = 0;i<BadEventList.length;i++){
          ctx.font = "30px 小赖字体 等宽 SC"; //在此处修改事件字体大小和字体
          ctx.fillStyle = "#ee3f4d"
          ctx.fillText("· "+BadEventList[i]["name"], 60, y);
          ctx.font = "15px 小赖字体 等宽 SC"; //在此处修改备注字体大小和字体
          ctx.fillStyle = "#7a7374"
          ctx.fillText(BadEventList[i]["bad"], 110, y+25);
          y += 60;
        }
      }
      // 写入
      Background.src = canvas.toDataURL()
      Background.style.opacity = 1;
      SignboxResultShape.style.zIndex = 88;
      IsRun = false;
    }
  };
}


// 加载部分
// 加载依赖函数
function loadDependency(url) {
  return new Promise((resolve, reject) => {
    if(url.split('.').pop()=="js"){
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
    }else if(url.split('.').pop()=="css"){
      const css = document.createElement('link');
      css.href = url;
      css.rel = "stylesheet";
      css.onload = resolve;
      css.onerror = reject;
      document.head.appendChild(css);
    }else if(url.split('.').pop()=="png"){
      var SignboxImg = document.createElement('img');
      SignboxImg.src = url;
      SignboxImg.onload = resolve;
      SignboxImg.onerror = reject;
      SignboxImg.id = "SignboxImg";
      document.getElementById("Signbox").appendChild(SignboxImg);
    };
  });
};

// 加载第一部分: 加载Snackbar
function LoadSnackbar(){
  const Snackbardependencies = [
    'https://cdn.jsdelivr.net/npm/node-snackbar@latest/src/js/snackbar.min.js',
    'https://cdn.jsdelivr.net/npm/node-snackbar@latest/dist/snackbar.min.css'
  ];

  Promise.all(Snackbardependencies.map(loadDependency))
    .then(() => {
      Snackbar.show({text:"少女祈祷中..",showAction:false,timeout:10000})
    })
    .catch((error) => {
      console.error(`Error loading dependencies: ${error}`);
    });
}

// 加载第二部分: 加载其他JS依赖与IMG依赖
function LoadDependent(){
  const dependencies = [
    'https://cdn.jsdelivr.net/gh/Moemu/FortuneUpUp/js/LunarCalendar.js',
    'https://cdn.jsdelivr.net/gh/Moemu/FortuneUpUp/js/SignboxResultImg.js',
    'https://cdn.jsdelivr.net/gh/Moemu/FortuneUpUp/images/Signbox.png'
  ];

  Promise.all(dependencies.map(loadDependency))
    .then(() => {
      Snackbar.close();
    })
    .catch((error) => {
      console.error(`Error loading dependencies: ${error}`);
    });
}
    
// 总启动函数
function StartFortuneUpUp(){
  LoadSnackbar();
  var Signbox = document.createElement("div");
  var SignboxResultShape = document.createElement("div");
  var SignboxResult = document.createElement("div");
  SignboxResult.id = "SignboxResult";
  Signbox.id = "Signbox";
  Signbox.addEventListener("mousedown", mouseDownEvent);
  Signbox.addEventListener("touchstart", mouseDownEvent)
  SignboxResultShape.id = "SignboxResultShape";
  SignboxResultShape.style = "background-color: black;opacity: 0.75;";
  SignboxResultShape.addEventListener("mousedown", CloseSignbox);
  SignboxResultShape.addEventListener("touchstart", CloseSignbox);
  SignboxResult.appendChild(SignboxResultShape);
  document.body.appendChild(SignboxResult);
  document.body.appendChild(Signbox);
  LoadDependent();
}