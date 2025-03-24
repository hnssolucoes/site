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
});

function validarFormulario(event) {
    event.preventDefault();

    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let mensagem = document.getElementById("mensagem");
    let mensagemErro = document.getElementById("mensagemErro");
    let mensagemAgradecimento = document.getElementById("mensagemAgradecimento");

    let erros = [];

    nome.style.border = "";
    email.style.border = "";
    mensagem.style.border = "";

    if (nome.value.trim() === "") {
        erros.push("Nome");
        nome.style.border = "2px solid red";
    }

    if (email.value.trim() === "") {
        erros.push("Email");
        email.style.border = "2px solid red";
    }

    if (mensagem.value.trim() === "") {
        erros.push("Mensagem");
        mensagem.style.border = "2px solid red";
    }

    if (erros.length > 0) {
        mensagemErro.innerHTML = "Por favor, preencha os campos: " + erros.join(", ");
        mensagemErro.style.display = "block";
        mensagemAgradecimento.style.display = "none";
    } else {
        mensagemErro.style.display = "none";
        mensagemAgradecimento.style.display = "block";

        nome.value = "";
        email.value = "";
        mensagem.value = "";
    }

    function validarFormulario(event) {
        event.preventDefault();

        let nome = document.getElementById("nome");
        let email = document.getElementById("email");
        let mensagem = document.getElementById("mensagem");
        let mensagemErro = document.getElementById("mensagemErro");
        let mensagemAgradecimento = document.getElementById("mensagemAgradecimento");

        let erros = [];

        nome.style.border = "";
        email.style.border = "";
        mensagem.style.border = "";

        if (nome.value.trim() === "") {
            erros.push("Nome");
            nome.style.border = "2px solid red";
        }

        if (email.value.trim() === "") {
            erros.push("Email");
            email.style.border = "2px solid red";
        }

        if (mensagem.value.trim() === "") {
            erros.push("Mensagem");
            mensagem.style.border = "2px solid red";
        }

        if (erros.length > 0) {
            mensagemErro.innerHTML = "Por favor, preencha os campos: " + erros.join(", ");
            mensagemErro.style.display = "block";
            mensagemAgradecimento.style.display = "none";
        } else {
            mensagemErro.style.display = "none";
            mensagemAgradecimento.style.display = "block";

            nome.value = "";
            email.value = "";
            mensagem.value = "";
        }

    }
}