import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export default function initFaq() {
    document.addEventListener('DOMContentLoaded', function () {
        new Accordion('.js-accordion', {
        duration: 400,
        showMultiple: true,
        elementClass: 'faq-ac-item',
        triggerClass: 'faq-ac-header',
        panelClass: 'faq-ac-panel',
        activeClass: 'is-active'
        });
    });
}
