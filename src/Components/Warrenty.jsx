import React from 'react';
import './Css/Warrenty.css'

const ServiceItem = ({ icon, text }) => (
  <div className="service-item">
    <div className="service-icon">{icon}</div>
    <div className="service-text">{text}</div>
  </div>
);

const ServicesSection = () => (
  <div className="services-section">
    <ServiceItem icon="🛒" text="Free Shipping Across India" />
    <ServiceItem icon="⏱" text="Ship in 24 Hours" />
    <ServiceItem icon="🏠" text="24 Months Warranty" />
    <ServiceItem icon="↩️" text="7 Day Return" />
    <ServiceItem icon="ℹ️" text="100% Authenticity Guarantee" />
  </div>
);

const Warrenty = () => (
  <div>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Service Icons Section</title>
    </head>
    <body>
      <ServicesSection />
    </body>
  </div>
);

export default Warrenty;