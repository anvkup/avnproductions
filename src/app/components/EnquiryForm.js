// components/EnquiryForm.js
import React, { useEffect } from 'react';

const EnquiryForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    script.onload = () => {
      window.jotformEmbedHandler("iframe[id='JotFormIFrame-242914651960460']", "https://form.jotform.com/");
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="form-container round-lg">
      <iframe
        id="JotFormIFrame-242914651960460"
        title="Enquiry Form"
        onLoad={() => window.scrollTo(0, 0)}
        allowTransparency="true"
        allow="geolocation; microphone; camera; fullscreen"
        src="https://form.jotform.com/242914651960460"
        style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
      />
    </div>
  );
};

export default EnquiryForm;
