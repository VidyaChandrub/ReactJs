function clock(){
    
    let hr = document.getElementById('hours')
    let mi = document.getElementById('minutes')
    let sec = document.getElementById('seconds')
    let apm = document.getElementById('ap')
    let date = document.getElementById('date')
    let mon = document.getElementById('month') 
    let fullyear = document.getElementById('fy')
    let dys = document.getElementById('day')
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let d = new Date().getDate();
    let mn = new Date().getMonth();
    let year = new Date().getFullYear();
    let day = new Date().getDay();
    
    let ampm = h >= 12 ? "PM" : "AM";
    if(h > 12){
        h = h-12;
    }
    h = (h<10) ? "0"+h : h;
    m = (m<10) ? "0"+m : m;
    mn = mn+1
    s = (s<10) ? "0"+s : s;
    
    
    hr.innerHTML = h;
    mi.innerHTML = m;
    sec.innerHTML = s;
    apm.innerHTML = ampm;
    date.innerHTML = d;
    mon.innerHTML = mn;
    fullyear.innerHTML = year;
    dys.innerHTML = day;
    }
    setInterval(clock,[1000]);