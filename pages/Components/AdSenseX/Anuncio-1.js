import {useEffect} from 'react';

export default function GoogleAd() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{display: 'block'}}
      data-ad-client="pub-2207263959761061"
      data-ad-slot="3809900228"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
