import React, { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
        style={{display:"block"}}
        data-ad-client="ca-pub-2207263959761061"
        data-ad-slot="3809900228"
        data-ad-format="auto"
        data-full-width-responsive="true">
    </ins>
  );
};

export default AdBanner;                   
