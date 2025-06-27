document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    
    document.querySelectorAll('.main-nav a').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
            if (window.innerWidth <= 768 && mainNav) {
                mainNav.classList.remove('active');
                const icon = menuToggle?.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    });

    
    const handleForm = (formId, btnClass) => {
        const form = document.getElementById(formId);
        const btns = document.querySelectorAll(btnClass);
        
        if (!form || btns.length === 0) return;
        
        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                form.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
        
        return form;
    };

    const quoteForm = handleForm('quoteForm', '.quote-btn, .header-actions .quote-btn');
    const bookForm = handleForm('bookForm', '.book-btn, .book-now-btn, .header-actions .book-btn');

 
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (quoteForm) quoteForm.style.display = 'none';
            if (bookForm) bookForm.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });


    window.addEventListener('click', (e) => {
        if (e.target === quoteForm) {
            quoteForm.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === bookForm) {
            bookForm.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    
    const quoteFormContent = document.getElementById('quoteFormContent');
    const bookFormContent = document.getElementById('bookFormContent');

    if (quoteFormContent) {
        quoteFormContent.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Quote request submitted successfully!');
            if (quoteForm) quoteForm.style.display = 'none';
            document.body.style.overflow = 'auto';
            e.target.reset();
        });
    }

    if (bookFormContent) {
        bookFormContent.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Booking request submitted successfully!');
            if (bookForm) bookForm.style.display = 'none';
            document.body.style.overflow = 'auto';
            e.target.reset();
        });
    }
});