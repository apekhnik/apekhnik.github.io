
window.onload = () => {
    
    let windowsPart = document.querySelectorAll('.window div'),
        window      = document.querySelector('.window');
   
    var layers = document.querySelectorAll('.layer');

    function parallax(event){
       windowsPart.forEach(function(layer){
         
            var speed = layer.getAttribute('data-speed');
            layer.style.transform = 'translateX('+ (event.clientX*speed)/1000 +'px)';
            
            
       });
    }

    document.addEventListener('mousemove', parallax);



    const hourOnesRing = document.querySelector('#hour-ones');
    const minuteTensRing = document.querySelector('#minute-tens');
    const minuteOnesRing = document.querySelector('#minute-ones');
    
    const resetRing = (event) => {
      if (event.target.style.transform === 'rotate(-180deg)') {
        event.target.style.transition = 'none';
        event.target.style.transform = 'rotate(180deg)';
      }
    };
    
    const updateRing = (ring, rotate) => {
      if (ring.style.transition.startsWith('none')) {
        ring.style.transition = null;
      }
    
      if (rotate === 'rotate(180deg)' && ring.style.transform !== 'rotate(180deg)') {
        ring.style.transform = 'rotate(-180deg)';
      } else {
        ring.style.transform = rotate;
      }
    };
    
    hourOnesRing.addEventListener('transitionend', resetRing);
    minuteTensRing.addEventListener('transitionend', resetRing);
    minuteOnesRing.addEventListener('transitionend', resetRing);
    
    const faster = document.querySelector('#faster');
    
    
    
    
    
    
    
    
    
    
    const update = () => {
      const fasterType = document.querySelector('.faster');
      const now = new Date();
      const hours = faster.checked ? now.getMinutes() : now.getHours();
      const minutes = faster.checked ? now.getSeconds() : now.getMinutes();
        
      const hoursTwelves = Math.floor(hours % 12);
      const minuteTens = Math.floor(minutes / 10) + 6 * (hours % 2);
      const minuteOnes = minutes % 10;
    
      updateRing(hourOnesRing, `rotate(${180 - 30 * hoursTwelves}deg)`);
      updateRing(minuteTensRing, `rotate(${180 - 30 * minuteTens}deg)`);
      updateRing(minuteOnesRing, `rotate(${180 - 36 * minuteOnes}deg)`);
      if(faster.checked){
       fasterType.textContent = "Slower!";
        
      }else{
        fasterType.textContent = "Faster!";
      }
    };
    
    update();
    
    hourOnesRing.style.transition = 'none';
    minuteTensRing.style.transition = 'none';
    minuteOnesRing.style.transition = 'none';
    
    setInterval(update, 1000);
    
    // Fix for Firefox and Safari
    if (!navigator.userAgent.includes('Chrome')) {
      document.querySelectorAll('feImage[*|href^="#"]').forEach((feImage) => {
        const href = feImage.getAttribute('xlink:href');
        const svg = `<svg viewBox="0 0 300 300" width="300" height="300" xmlns="http://www.w3.org/2000/svg">${document.querySelector(href).outerHTML}</svg>`;
        const dataUri = `data:image/svg+xml;base64,${window.btoa(svg)}`;
        feImage.setAttribute('xlink:href', dataUri);
      });
    }
   
   
        var message = document.querySelector('.message h2');
        new TypeIt(message, {
            speed: 50,
            startDelay: 900,
            waitUntilVisible:true,
            deleteSpeed: null,
            loop: true
          })
          .type('<НУЖЕН КРУТОЙ САЙТ?/>')
          .pause(7000)
          .delete(42)
          .pause(750)
          .type('< У ВАС ЕСТЬ ПРОБЛЕМА? В МОИХ В СИЛАХ ЕЁ РЕШИТЬ/>')
          .pause(7000)
          .delete(49)
          .pause(750)
          .type('<ИЩИТЕ РАЗРАБОТЧИКА?/>')
          .pause(7000)
          .go();
      









          var zakaz = document.querySelector('.zakaz');
          var exitBtn = document.querySelector('.exit-btn');

          var modalLayout  = document.querySelector('.modal-bg');
          var modalBtn = document.querySelectorAll('.open-modal');
         
         
         
         
         
          
          
          
          
          
          modalBtn.forEach(function(item){
              item.addEventListener('click', showModal);
          });
          // zakaz.addEventListener('click', showModal);
          exitBtn.addEventListener('click', hideModal);
          
          
          
          document.documentElement.addEventListener('click', function(event){
           console.log(event.target);
           if(event.target == ".modal-bg"){
            console.log('event.target');
           }
         });
          
          
         
         
         function showModal(event){
            // modalLayout.style.top = - document.querySelector('body').getBoundingClientRect().y + 'px';
            modalLayout.style.display = "flex";
            modalLayout.style.opacity = '1';
            modalLayout.querySelector('.modal').style.opacity = '1';
            console.log(modalLayout.querySelector('.modal').style.opacity);
            document.querySelector('body').style.overflow = 'hidden';
            
          }
          function hideModal(event){
            modalLayout.style.display = "none";
            modalLayout.style.opacity = '0';
            modalLayout.querySelector('.modal').style.opacity = '0';
            document.querySelector('body').style.overflow = '';
          }

          // {
          //   //slider setup
          //   $('.portfolio-container').slick({
          //     dots: true,
          //     infinite: true,
          //     speed: 300,
          //     slidesToShow: 2,
          //     autoplay: true,
          //     autoplaySpeed: 4000,
          //     slidesToScroll: 4,
          //     responsive: [
          //       {
          //         breakpoint: 1024,
          //         settings: {
          //           slidesToShow: 3,
          //           slidesToScroll: 3,
          //           infinite: true,
          //           dots: true
          //         }
          //       },
          //       {
          //         breakpoint: 600,
          //         settings: {
          //           slidesToShow: 2,
          //           slidesToScroll: 2
          //         }
          //       },
          //       {
          //         breakpoint: 480,
          //         settings: {
          //           slidesToShow: 1,
          //           slidesToScroll: 1
          //         }
          //       }
          //       // You can unslick at a given breakpoint now by adding:
          //       // settings: "unslick"
          //       // instead of a settings object
          //     ]
          //   });
          // }
          $('.portfolio-container').slick({
            centerMode: true,
            centerPadding: '160px',
            slidesToShow: 2,
            arrows: true,
            autoplay: true,
            infinite: true,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              }
            ]
          });

       {
        $(".hide-btn").on('click', function(){
          $(".hide-btn").toggleClass("btn-hide-active");
          $(".mobile-menu").toggleClass('mobile-menu__open');
        });
       }
}
