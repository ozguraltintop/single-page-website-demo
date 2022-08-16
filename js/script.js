
        let menuBtn=document.ElementbyId("menuBtn");
        let sideNav=document.ElementbyId("sideNav");


        sideNav.style.right = "-250px";
        menuBtn.onclick = function() {
            if (sideNav.style.right === "-250px") {
                sideNav.style.right = "0px";
            } else { 
                sideNav.style.right = "-250px";
                 }
            }