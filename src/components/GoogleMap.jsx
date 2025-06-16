const GoogleMap = () => {
  return (
    <div className="google-map-wrapper card-p20 responsive-map wow fadeInUp w-full h-full">
      <iframe
        className="w-full h-full rounded-2xl"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Faladié+socoro+Bamako+Mali"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default GoogleMap;
