// ======small-device-menu======
const activeBtn = document.querySelector('[data-menu-active-btn]'),
      closeBtn = document.querySelector('[data-menu-close-btn]'),
      navMenu = document.querySelector('[data-nav-menu]');

    const closeFunction = function(){
        navMenu.classList.remove('active');
    }

      activeBtn.addEventListener('click', function(){
        navMenu.classList.add('active');
    });
    closeBtn.addEventListener('click', closeFunction);


// =====foxed-header-&-back-to-top======
const fixedNavMenu = document.querySelector('[data-fixed-nav-menu]'),
      backToTop = document.querySelector('[data-back-to-top]');
    const fixedNav = function(){
        if(this.scrollY >= 160){
            fixedNavMenu.classList.add('fixed');
            backToTop.classList.add('enable');
        }
        else{
            fixedNavMenu.classList.remove('fixed');
            backToTop.classList.remove('enable');
        };
    };
    window.addEventListener('scroll', fixedNav);




