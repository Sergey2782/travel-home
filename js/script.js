
    let closeBtnForBurgerMenu = document.querySelector('.close_line_mobile_burger');
    let newLinkBurgerMenu = document.querySelectorAll('.new_link_burger');
    let allLinksBurgerMenu = document.querySelectorAll('.mobile_link');
    let btnOpenBurger = document.querySelector('.open_burger_mobile');
    let header = document.querySelector(".header");
    let nav = document.getElementById('nav'); 
    let toSwitch = true;
    let borderToCloseLineLinkOnOff;
  
   document.addEventListener("click", function (e) {
     if (e.target.id == "btn_open_burger") {
        openCloseBurger();
      } else if (e.target.id != "nav"){
                     hideBurger();
        }
    }
  );

let setFontSize16 = function (collectionElem) {
    let elemToFontSize16 = collectionElem;
    let doStyle = function(){
     for(let i=0; i < elemToFontSize16.length; i++){
            elemToFontSize16[i].style.fontSize = '16px';
            elemToFontSize16[i].style.opacity = '1';
        };
    };
    setTimeout(doStyle,600);
};
function openCloseBurger(){
    if(toSwitch){
        openBurger();
    }else {
        hideBurger();
    };
};
function openBurger() {

    function setTimeToCloseLIne(){
        closeBtnForBurgerMenu.classList.remove('display_none');
        closeBtnForBurgerMenu.classList.add('close_btn_style');
    }
    closeBtnForBurgerMenu.classList.add('display_none');
    header.classList.remove("transform_translate");
    header.classList.add("transform_translate_zero");
    newLinkBurgerMenu[0].classList.add('display_block',);
    newLinkBurgerMenu[1].classList.add('display_block');
    setFontSize16(allLinksBurgerMenu);
    btnOpenBurger.classList.add('display_none');
    setTimeout(setTimeToCloseLIne,650);
    clearTimeout(setTimeToCloseLIne);

    borderToCloseLineLinkOnOff = setInterval(function (){
        let setTimeThirdPart1 = setTimeout(function (){closeBtnForBurgerMenu.classList.add('border');
                                },100);
        let setTimeThirdPart2 = setTimeout(function (){
                                closeBtnForBurgerMenu.classList.remove('border');
                                },800);
    }, 1500);
    toSwitch = false;
};
function hideBurger(){
    let fewMs = function () {
        newLinkBurgerMenu[0].classList.remove('display_block');
        newLinkBurgerMenu[1].classList.remove('display_block');
    }
    header.classList.add('transform_translate');
    header.classList.remove("transform_translate_zero");
    closeBtnForBurgerMenu.classList.add('display_none');
    btnOpenBurger.classList.remove('display_none');
    setTimeout(fewMs, 800);
    clearInterval(borderToCloseLineLinkOnOff);
    clearTimeout(setFontSize16);
    toSwitch = true;
};

