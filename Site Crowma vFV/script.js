window.onload = ajustarZoom;

            let bg = document.getElementById("bg");
            let moon = document.getElementById("moon");
            let mountain = document.getElementById("mountain");
            let road = document.getElementById("road");
            let text = document.getElementById("text");

            window.addEventListener('scroll', function(){
            var value = window.scrollY;

            bg.style.top = value * 0.5 + 'px';
            moon.style.left = -value * 0.5 + 'px';
            mountain.style.top = -value * 0.15 + 'px';
            road.style.top = value * 0.15 + 'px';
            text.style.top = value * 1 + 'px';

            })

            window.onscroll = function() {
            var navbar = document.getElementById('navbar');
            var logo = document.querySelector('.logo');

            if (window.pageYOffset > 0) {
                navbar.classList.add('solid');
                logo.style.display = 'block';
            } else {
                navbar.classList.remove('solid');
                logo.style.display = 'none';
            }
            };


            
            function ajustarZoom() {

            const larguraTela = window.innerWidth;
            const alturaTela = window.innerHeight;
    
 
            if (larguraTela <= 1366 || alturaTela <= 768) {
                document.body.style.zoom = "67%";
            } else if (larguraTela >= 1920 && alturaTela >= 1080) {
                document.body.style.zoom = "100%";
            }
            }

            window.onload = ajustarZoom;
        

        