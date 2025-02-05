
        // Toggle dark/light mode on button click
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;

        darkModeToggle.addEventListener('click', () => {
            // Toggle the dark-mode class on the body
            body.classList.toggle('dark-mode');
            
            // Update the button's text and icon based on the current mode
            if (body.classList.contains('dark-mode')) {
                darkModeToggle.innerHTML = '<i class="bi bi-brightness-high"></i>';
            } else {
                darkModeToggle.innerHTML = '<i class="bi bi-brightness-low"></i> ';
            }
            //start of addition javascrip code 


            document.getElementById("git-link").addEventListener("click",function(){
                window.location.assign("https://github.com/ISONIC0788");
               });

             // link decration 
             let  gitpr1 = "";
             let gitpr2= "";
            document.getElementById("pr1").addEventListener("click",function(){
                window.location="https://github.com/ISONIC0788/EPSONIC_MS";
            })
            document.getElementById("pr2").addEventListener("click",function(){
                window.location ="https://github.com/ISONIC0788/Window_app_in_python";
            })
           
             //end for addition javascpi code  

        });
    
   

//    document.getElementById("linked-link").addEventListener("click",function{
//     window.location.assign("");
//    })

    