$('document').ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
        $('header').addClass('is-sticky');
        } else {
        $('header').removeClass('is-sticky');
        }
    });

    // accordion


     function toggleAccordion(e) {
                document.querySelector('.accordion').classList.toggle('active');
                if (e.innerText === 'More Questions') {
                    e.innerText = 'Show Less';
                } else {
                    e.innerText = 'More Questions';
                }
            }

            document.querySelectorAll('.accordion-header').forEach(header => {
                header.addEventListener('click', () => {
                    const content = header.nextElementSibling;
                    const item = header.parentElement;
                    const accordion = item.parentElement;

                    // Close previously opened accordion
                    accordion.querySelectorAll('.accordion-item.open').forEach(openItem => {
                        if (openItem !== item) {
                            openItem.classList.remove('open');
                            openItem.querySelector('.accordion-content').style.maxHeight = '0';
                        }
                    });

                    // Toggle the current accordion
                    item.classList.toggle('open');

                    if (item.classList.contains('open')) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                    } else {
                        content.style.maxHeight = '0';
                    }
                });
            });

   document.querySelectorAll('.dropdown-tag').forEach(dropdown => {
                dropdown.addEventListener('click', () => {
                    dropdown.classList.toggle('active');
                });
    });


    

});