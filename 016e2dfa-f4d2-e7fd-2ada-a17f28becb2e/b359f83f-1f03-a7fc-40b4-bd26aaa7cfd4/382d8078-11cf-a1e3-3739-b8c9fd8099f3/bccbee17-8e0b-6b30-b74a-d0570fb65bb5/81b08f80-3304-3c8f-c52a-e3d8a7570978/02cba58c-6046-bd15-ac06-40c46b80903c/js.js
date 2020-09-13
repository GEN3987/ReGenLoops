function run() {
    var daimei = document.getElementById("daimei").value;
    var syurui = document.getElementById("syurui").value;
    var hiduke = document.getElementById("hiduke").value;
    var naiyou = document.getElementById("niayou").value;
    var url = document.getElementById("url").value;
    var tellrawv = document.createTextNode
("<div class=" + "c-news__item" + ">" + "<a href=" + url + "><div class=" + "c-news__date" + ">" + hiduke + "</div><div class=" + "c-news__type" + ">" + syurui + "</div><div class=" + "c-news__badge" + "><span class=" + "c-badge c-badge--new" + ">NEW</span></div><div class=" + "c-news__name" + ">" + daimei + "</div></a></div>");    var element = document.createElement ("p")
    document.body.appendChild(element).appendChild(tellrawv);
}

