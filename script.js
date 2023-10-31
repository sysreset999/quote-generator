const api = 'https://api.quotable.io/random'

function getQuote(){
    fetch(api).then(res =>{
    return res.json()
    .then(data =>{
        console.log(data)
        const authName =  data.author;
        document.getElementById('qt-area').innerHTML = data.content + ` -&nbsp`+ `<lol>${authName}</lol>`;
    })
})
}

document.getElementById('qt-gen').onclick = function(){getQuote()}
