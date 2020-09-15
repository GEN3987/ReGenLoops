var database = firebase.database();
let room = "chat_room";
const send = document.getElementById("send");
const name = document.getElementById("name");
const message = document.getElementById("message");
const output = document.getElementById("output");

//送信処理
send.addEventListener('click', function() {
   var now = new Date();
   database.ref(room).push({
       name: name.value,
       message: message.value,
       date: now.getFullYear() + '.' + now.getMonth()+1 + '.' + now.getDate() + '.' + now.getHours() + ':' + now.getMinutes() + ' '
   });
   message.value="";
   name.value="";
});

//受信処理
database.ref(room).on("child_added", function(data) {
   const v = data.val();
   const k = data.key;
   let str = "";
   str += '<hr><span class="c-badge c-badge--pickup">' + v.name + '</span><font size=0.5><h1>' + v.date + '</h1></font><br><p>' + v.message + '</p><hr>';
   output.innerHTML += str;
});
