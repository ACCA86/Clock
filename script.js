const hr = document.querySelector('#hr');
         const mn = document.querySelector('#mn');
         const sc = document.querySelector('#sc');
         

         setInterval(()=>{
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * 6;
        let ss = day.getSeconds() * 6;

        hr.style.transform = 'rotateZ('+(hh*(mm/12))+'deg)';
        mn.style.transform = 'rotateZ('+mm+'deg)';
        sc.style.transform = 'rotateZ('+ss+'deg)';
         })
        


        setInterval(()=>{
            let hours = document.querySelector('#hour');
        let minutes = document.querySelector('#minute');
        let seconds = document.querySelector('#second');
        let pm = document.querySelector('#pm');

        let h  = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        let am = "AM";
        
        h = (h < 10) ? "0" + h  : h
        m = (m < 10) ? "0" +  m : m
        s = (s < 10) ? "0" +  s : s

        
        hours.innerHTML = h+":";
        minutes.innerHTML = m+":";
        seconds.innerHTML = s+"&nbsp";
        pm.innerHTML = am;

        if(h > 12){
            h = h - 12;
            let am = "PM";
        }
        })