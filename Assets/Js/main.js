const imagem = document.querySelectorAll(".hero__mosaico-imgs img"); 


imagem.forEach((imageSelected) => {

    const hover = () => {
        imageSelected.classList.toggle("selected")
        if (imageSelected.alt == "davi" || imageSelected.alt == "dinho") {
            imageSelected.style.boxShadow = " 0px 0px 30px 0px rgb(22, 197, 134)";

        }
        if (imageSelected.alt == "mércia") {
            imageSelected.style.boxShadow = "0px 0px 30px 0px rgb(255, 112, 112)";
        }
        if (imageSelected.alt == "ricardo" || imageSelected.alt == "nico") {
            imageSelected.style.boxShadow = "0px 0px 30px 0px rgb(255, 215, 115)";
        }
    }


    imageSelected.addEventListener("mouseenter", hover);


     imageSelected.addEventListener("mouseleave", hover); 

    
    imagem.forEach((noimageSelected) => {
       
        if (noimageSelected !== imageSelected ) {
            const noHover = () => {
                noimageSelected.classList.toggle("noselected")
            }
            const removeBox =() =>{
                imageSelected.style.boxShadow= "none";
                noimageSelected.classList.toggle("noselected");

            }
            imageSelected.addEventListener("mouseenter", noHover);
            imageSelected.addEventListener("mouseleave", removeBox); 
        }

    });

});


const menuIcons = document.querySelectorAll(".ti");
const lateralMenu = document.querySelector(".header__menuPrincipal-lista");

menuIcons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
        const clickedIcon = e.target;
        const iconClass = clickedIcon.classList;

         if (iconClass.contains("ti-x")) {
            lateralMenu.classList.toggle("closeMenu");
            clickedIcon.classList.remove("ti-x");
            clickedIcon.classList.add("ti-menu-2");
            console.log(`o menu está fechado: ${clickedIcon.classList}`);
        }
        else if (iconClass.contains("ti-menu-2")) {
            lateralMenu.classList.toggle("openMenu");
            clickedIcon.classList.remove("ti-menu-2");
            clickedIcon.classList.add("ti-x");
            console.log(`o menu está aberto: ${clickedIcon.classList}`);
        } 
    });
});


function showBoxShadow(){
    const imagemContainer = document.querySelectorAll(".aboutus article");

    imagemContainer.forEach((boxSelected)=> {

        boxSelected.addEventListener("mouseenter", ()=>{
            boxSelected.classList.toggle("boxAbout");
        });

        boxSelected.addEventListener("mouseleave", ()=>{
            boxSelected.classList.toggle("boxAbout");
        });
    });
};

showBoxShadow();
