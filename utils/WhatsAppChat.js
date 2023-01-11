import React, { useEffect } from 'react'

const WhatsAppChat = () => {
    useEffect(() => {
        const options = {
            whatsapp: "555199999999",
            call_to_action: "Fale conosco",
            position: "right",
        };
        const proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = url + '/widget-send-button/js/init.js';
        script.onload = () => { WhWidgetSendButton.init(host, proto, options); };
        document.getElementsByTagName('body')[0].appendChild(script);
    }, [])

    return (
        <div>
            {/* Add a placeholder */}
        </div>
   



