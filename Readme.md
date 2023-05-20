<h1><center>FortuneUpUp</center></h1>
<h4><center>今天会是什么样的一天呢</center></h4>


# ✨简介✨

​	一个今日运势占卜工具，设计的初衷是为了取代博客在用的程序员老黄历，旨在给你的生活增添一些乐趣，设计启发和素材来自于《公主连结 Re:Dive》的一次新年占卜活动。

![Demo页面](https://cdn.jsdelivr.net/gh/Moemu/FortuneUpUp/Screenshot/Demo.png)

![占卜结果](https://cdn.jsdelivr.net/gh/Moemu/FortuneUpUp/Screenshot/Demo1.png)

FortuneUpUp里边的推荐你去做/不要做的事件大多都是基于业余程序员（也就是我）的一些日常生活而写出来的，有代码，博客，UP主，视频，游戏，应用，社交，网站，日常等这几大类，如果您有一些想法，欢迎您提出PR。

关于特性与近期更新目标：

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

# ⚒️自定义⚒️

我们鼓励用户folk此repo以自定义自己的FourtuneUpUp页面。

如果您对JavaScript不熟悉，那么本内容可能对您有所帮助。

**1. 自定义字体**

FortuneUpUp允许用户自定义自己的字体，在`FortuneUpUp.js`首行的设置项中找到`CustomFont`变量，将其中的内容换成你自己的字体即可。

温馨提示：您需要提前在您的CSS/HTML文件中加入您字体的CDN链接，并确保它在FortuneUpUp之前加载，不然会显示默认的微软雅黑。

**2. 自定义事件**

按照这个格式配置你的自定义事件。

对于`Events`中的普通事件，格式如下：

```json
{name:"(事件名/标题)",good:"(若这个事件被选为宜事件,下方显示的注释。)",bad:"(若这个事件被选为忌事件,下方显示的注释。输入null则不会被选为忌事件)",tag:"(事件标签，通常是职位或者是兴趣爱好名，在未来引入该特性)"}
```

对于`SpecialFestivalEvents`中的特别日事件，格式如下：

```json
{Date:"(触发日期。日期格式: (L)MM.DD 若日期前含有L,则为农历)",name:"(事件名/标题)",good:"(若这个事件被选为宜事件,下方显示的注释。)",bad:"(若这个事件被选为忌事件,下方显示的注释。输入null则不会被选为忌事件)"}
```

对于`NormalFestivalEvents`中的普通节假日事件，格式与`Events`一致（注意：`NormalFestivalDateList`不支持农历）


# 🎉示例🎉

博客示例页面: [运势UpUp](https://muspace.top/lab/fortuneupup)

![博客示例页面](https://cdn.jsdelivr.net/gh/Moemu/FortuneUpUp/Screenshot/Demo2.png)


# ⚒️关于⚒️

使用GPL v3.0协议

使用了 https://github.com/jjonline/calendar.js 中的部分源代码并移植

作者: Moemu (muspace.top)
