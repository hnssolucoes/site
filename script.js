$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })


    
    document.getElementById("github-link").addEventListener("click", function() {
        window.open("https://github.com/efak77", "_blank");
    });

        function mostrarPopup(titulo, descricao) {
                alert(titulo + ":\n" + descricao);
            }

                function mostrarPopup(event) {
                    event.preventDefault(); 
                    alert("Obrigado por sua mensagem! Em breve, a HNS entrará em contato.");

                    document.getElementById("formContato").submit(); 
                }


        document.getElementById("dropdown_btn").addEventListener("click", function() {
            var dropdownMenu = document.getElementById("dropdown_menu");
            dropdownMenu.classList.toggle("active"); 
        });


    var filePickerSetup = {
            mimetype: 'image/*'
        };


        var onSuccess = function (file) {
            var inputFile = document.getElementById('file');
            inputFile.value = file.url;
        };


        var onError = function (data) {
            alert('Houve um erro ao carregar seus arquivos');
        };


        var filePickerButton = document.getElementById('filepicker');
        filePickerButton.addEventListener('click', function() {
            filepicker.setKey("A4xZuT80pQ3Kc1iZ3sj2Mz");
            filepicker.pick(filePickerSetup, onSuccess, onError);
        });
});

