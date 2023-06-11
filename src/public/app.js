const api = 'http://localhost:3000/pong';

let person = [1,2,3,4,5,6,7,8,9,10];
const getPerson = () =>{
    fetch(api,{
        method:'POST',
        body: JSON.stringify(person)
    });
    // .then(response => response.json())
    // .then(data=>{
    //     person = data.data;
    //     console.log(data);
    // })
}
document.addEventListener('DOMContentLoaded',e=>{
    document.addEventListener('click', e=>{
        if(e.target.matches('.agr')){
            getPerson();
        }
        else if(e.target.matches('.ver')){
            fetch(api).then(e=> e.json()).then(console.log)
        }
    })
})