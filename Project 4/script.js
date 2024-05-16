
function showtime(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    
    var session = "AM";

    if (h>=12) {
        session="PM";
    }
    if (h>12) {
        h = h-12;
    }
    

    h = h<10 ?  '0'+h : h;
    m = m<10 ?  '0'+m : m;
    s = s<10 ?  '0'+s : s;


    var time = h +" : "+ m +" : "+s+" : "+session;
    document.getElementById('clock1').innerText = time;


    var now2 = moment().tz('America/Chicago'); // Get the current time in New York
    var time = now2.format('hh : mm : ss : A');
    document.getElementById('clock2').innerText = time;


    var now = moment().tz('Europe/Zurich'); // Get the current time in New York
    var time = now.format('hh : mm : ss : A');
    document.getElementById('clock3').innerText = time;

    setTimeout(showtime,1000);    // every 1000 milli-seconds
}

