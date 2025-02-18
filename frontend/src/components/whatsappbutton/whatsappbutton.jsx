import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <div className="fixed flex flex-col bottom-12 right-6 lg:right-12 items-center">
            <h2 className="text-[#D9B84A] py-2 font-semibold lg:block hidden">Send us a message...</h2>
            <a
                href="https://wa.me/442035040786"
                className="bg-[#25D366] hover:bg-[#30ad60] text-white p-3 rounded-full shadow-2xl flex items-center justify-center z-50 w-14 h-14"  // Set explicit width and height
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp className="h-9 w-9" />  {/* Keeps the icon size fixed */}
            </a>
        </div>
    );
};

export default WhatsAppButton;
