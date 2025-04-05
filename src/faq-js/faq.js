import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faqItems = document.querySelectorAll('.faq-ac-item');
const section = document.querySelector('.section-faq');

faqItems.forEach(item => {
        const faqTrigger = item.querySelector('.faq-ac-trigger');
        const faqPanel = item.querySelector('.faq-ac-panel');

    faqTrigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        item.classList.toggle('is-open');

        if (isOpen) {
            faqPanel.style.maxHeight = null;
        }
        else {
            faqPanel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })
})