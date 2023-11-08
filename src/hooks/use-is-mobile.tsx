import { useState, useEffect, useCallback } from 'react';

const mobileResolution = 768;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < mobileResolution : false,
  );

  const handleResize = useCallback(() => {
    const isLowerThanMobileResolution = window.innerWidth < mobileResolution;

    if (isMobile !== isLowerThanMobileResolution) {
      setIsMobile(window.innerWidth < mobileResolution);
    }
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return isMobile;
};
