clock = document.querySelector('.clock');

setInterval(() => {

    now = new Date;

    let h = now.getHours();

    let m = now.getMinutes();

    let s = now.getSeconds();

    html = `<span>${h}</span> :
    <span>${m}</span> : 
    <span>${s}</span>`

    clock.innerHTML = html;

}, 1000)

console.log(h);