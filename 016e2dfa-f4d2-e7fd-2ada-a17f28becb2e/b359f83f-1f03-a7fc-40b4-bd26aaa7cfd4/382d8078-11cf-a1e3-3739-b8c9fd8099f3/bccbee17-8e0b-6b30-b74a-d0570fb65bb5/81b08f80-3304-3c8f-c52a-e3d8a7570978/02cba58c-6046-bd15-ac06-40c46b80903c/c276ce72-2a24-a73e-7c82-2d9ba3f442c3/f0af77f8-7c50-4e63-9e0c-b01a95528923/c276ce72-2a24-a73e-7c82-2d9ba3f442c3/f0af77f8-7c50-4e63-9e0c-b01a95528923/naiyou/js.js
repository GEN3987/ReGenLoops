function run() {
    var daimei = document.getElementById("daimei").value;
    var syurui = document.getElementById("syurui").value;
    var hiduke = document.getElementById("hiduke").value;
    var naiyou = document.getElementById("naiyou").value;
    var url = document.getElementById("url").value;
    var HTML = document.createTextNode
("<div class=" + "news" + ">" + "<h2 class=" + "c-post__title" + "><!-- ▼ タイトル-->" + daimei + "</h2><!-- ▲ タイトル--><div class=" + "c-post__info" + "> <!--日付--><span class=" + "c-post__date" + ">" + hiduke + "</span><!--これは放置で--><span class=" + "c-post__info__seq" + ">|</span><!--ニュースのジャンル--><span class=" + "c-post__category" + ">" + syurui + "</span></div><!--br連打は初心者に付き物、放置で--><br><br><br><br><font color=" + "#707070" + ">" + "<p><span style=" + "font-size: 14pt;" + "><strong><br></strong></span></p><p><span style=" + "font-size: 14pt;" + "><strong><!-- ▼ さっきのタイトル-->" + daimei + "<!-- ▲ さっきのタイトル--></strong></span></p><p><!-- ▼ 内容-->" + naiyou + "<!-- ▲ 内容--></p></font><br>" + "<div class=" + "back" + "><a href=" + "./" + "><font size=" + "3" + ">Back to List</font></a></div>" + "ここからはシェアのコードだよ！ここからはシェアのコードだよ！ここからはシェアのコードだよ！ここからはシェアのコードだよ！ここからはシェアのコードだよ！ここからはシェアのコードだよ！ここからはシェアのコードだよ！ここからはシェアのコードだよ！ここからはシェアのコードだよ！ここからはシェアのコードだよ！ここからはシェアのコードだよ！ここからはシェアのコードだよ！ここからはシェアのコードだよ！ここからはシェアのコードだよ！ここからはシェアのコードだよ！ここからはシェアのコードだよ！ここからはシェアのコードだよ！ここからはシェアのコードだよ！ここからはシェアのコードだよ！ここからはシェアのコードだよ！" + "<div id=" + "main-visual" + "><div class=" + "title" + "><font size=" + "6" + "><p>News</p></font><h1>Share</h1><a href=" + "http://twitter.com/share?url=" + url + "&amp;hashtags=#Gen鯖" + "rel=" + "nofollow" + "><img src=" + "./icon/twitter_black.png" + " alt=" + "Twitter_icon_black" + " width=" + "30%" + "></a><a href=" + "http://www.facebook.com/share.php?u=" + url + "><img src=" + "./icon/facebook_black.png" + " alt=" + "Facebook_icon_black" + " width=" + "30%" + "></a></div></div>"); 
    var element = document.createElement ("p")
    document.body.appendChild(element).appendChild(HTML);
}
