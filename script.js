// Made by: Uday Prakash Gupta
// github: @sysreset999
// website:- https://udayprakashgupta.me

const api = 'https://api.quotable.io/quotes/random?maxLength=70'

function getQuote(){
    fetch(api).then(res =>{
    return res.json()
    .then(data =>{
        console.log(data[0])
        const authName =  data[0].author;
        document.getElementById('qt-area').innerHTML = data[0].content + `<lol>- ${authName}</lol>`;
    })
})
}

document.getElementById('qt-gen').onclick = function(){getQuote()}
