//day= [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday ];
setInterval(()=> {
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date =  new Date();
    let time = date.getHours() +":" + date.getMinutes() +":"+ date.getSeconds();
    let currDate = date.getDate() +"/" + date.getMonth()+1 + "/" + date.getFullYear();
    let day = weekdays[date.getDay()];
    document.getElementById('time').innerHTML = time + "<br>" + " on " + day + " " + currDate;
    
}, 1000);
