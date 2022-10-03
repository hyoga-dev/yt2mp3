const bot = document.getElementById('bottom')
async function take() {
  const inputID = document.getElementById('inputID')
  const datas = {
    value: inputID.value
  }
  const option = {
    "method" : "post",
    "headers": {
      "content-type": "application/json"
    },
    
    "body": JSON.stringify(datas)
  };

  const res = await fetch('/test', option)
  const data = await res.json()
  console.log(data.link)
  const txt = `
    <a href=${data.link}><button class="btn">DOWNLOAD</button></a>
  `


  bot.innerHTML = txt;
  inputID.value = "";
}

function des() {
  bot.innerHTML = "";
}