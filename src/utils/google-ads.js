/**
 * Utilidad para el seguimiento de conversiones de Google Ads.
 * Modifica estos eventos según tus necesidades.
 */

// Este ID es el que te dará Google Ads (e.g., AW-123456789)
const GOOGLE_ADS_ID = "AW-XXXXXXXXX";

export const trackWhatsAppClick = () => {
    if (window.gtag) {
        window.gtag('event', 'conversion', {
            'send_to': `${GOOGLE_ADS_ID}/whatsapp_click`, // Cambiar por tu etiqueta de conversión
            'event_category': 'contact',
            'event_label': 'whatsapp'
        });
        console.log("Evento WhatsApp enviado a Google Ads");
    } else {
        console.log("Gtag no encontrado. Configura el script en el head de index.html");
    }
};

export const trackFormSubmit = () => {
    if (window.gtag) {
        window.gtag('event', 'conversion', {
            'send_to': `${GOOGLE_ADS_ID}/form_submit`, // Cambiar por tu etiqueta de conversión
            'event_category': 'leads',
            'event_label': 'contact_form'
        });
        console.log("Evento Formulario enviado a Google Ads");
    }
};
