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
       date: now.getFullYear() + '.' + now.getMonth()+1 + '.' + now.getDate() + '.' + now.getHours() + ':' + now.getMinutes() + '送信済み'
   });
   message.value="";
   name.value="";
});

//受信処理
database.ref(room).on("child_added", function(data) {
   const v = data.val();
   const k = data.key;
   let str = "";
   str += '<div class="c-news__item">';
   str += '<div class="c-news__date">'+v.date+'</div>';
   str += '<div class="c-news__type">'+v.name+'</div>';
   str += '<div class="c-news__name">'+v.message+'</div>';
   str += '</div>';
   output.innerHTML += str;
});
