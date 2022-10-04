const bot = document.getElementById("bottom");
function youtube_parser(url){
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}

async function take() {
  const inputID = document.getElementById("inputID");

  const datas = {
    value: youtube_parser(inputID.value),
  };
  const option = {
    method: "post",
    headers: {
      "content-type": "application/json",
    },

    body: JSON.stringify(datas),
  };
  // console.log(datas)
  // fetch("/api", option)
  const res = await fetch("/api", option);
  const data = await res.json();
  console.log(data.link);
  const txt = `
    <a href=${data.link}><button class="btn" onclick="setTimeout(des(), 500)">DOWNLOAD</button></a>
  `;

  bot.innerHTML = txt;
  inputID.value = "";
}

function des() {
  bot.innerHTML = "";
}

// * =================================================