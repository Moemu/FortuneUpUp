<h1><center>FortuneUpUp</center></h1>
<h4><center>今天会是什么样的一天呢</center></h4>


# ✨简介✨

​	一个今日运势占卜工具，设计的初衷是为了取代博客在用的程序员老黄历，旨在给你的生活增添一些乐趣，设计启发和素材来自于《公主连结 Re:Dive》的一次新年占卜活动。

![Demo页面](https://cdn.jsdelivr.net/gh/Moemu/FortuneUpUp/Screenshot/Demo.png)

![占卜结果](https://cdn.jsdelivr.net/gh/Moemu/FortuneUpUp/Screenshot/Demo1.png)

FortuneUpUp里边的推荐你去做/不要做的事件大多都是基于业余程序员（也就是我）的一些日常生活而写出来的，有代码，博客，UP主，视频，游戏，应用，社交，网站，日常等这几大类，如果您有一些想法，欢迎您提出PR。

​	温馨提示: FortuneUpUp生成的内容仅供娱乐，请在面对占卜结果的时候慎重考虑到底要不要做还是不做，由此产生的后果作者概不负责。

# 🪄使用🪄

添加以下代码到您的网页中

```html
<script src="https://cdn.jsdelivr.net/gh/Moemu/FortuneUpUp/FortuneUpUp.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Moemu/FortuneUpUp/FortuneUpUp.css"></link>
```

绑定事件

```html
<div id="StartFortuneUpUp" onclick="StartFortuneUpUp()"></div>
```

或者

```javascript
window.onload = function(){
  StartFortuneUpUp();
}
```

# 🎉示例🎉

博客示例页面: [运势UpUp](https://muspace.top/lab/fortuneupup)

![博客示例页面](https://cdn.jsdelivr.net/gh/Moemu/FortuneUpUp/Screenshot/Demo2.png)


# ⚒️关于⚒️

使用GPL v3.0协议

使用了 https://github.com/jjonline/calendar.js 中的部分源代码并移植

作者: Moemu (muspace.top)
