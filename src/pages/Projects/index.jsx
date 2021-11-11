import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import MobileCarousel from '../../components/Carousel/Mobile'
import DesktopCarousel from '../../components/Carousel/Desktop'

function Projects() {
  const { t } = useTranslation();
  const [MobileDevice, setMobileDevice] = useState(false);
  const [DesktopDevice, setDesktopDevice] = useState(false);
  
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 768px)")
    if (mobile.matches) {
      mobile.addEventListener("change", () =>{})
      setMobileDevice(true);
    } else {
      setDesktopDevice(true);
    }
  }, [MobileDevice, DesktopDevice])

    return (
      <div>
        <Helmet>
          <title>| {t("Projects")}</title>
        </Helmet>
          {MobileDevice && <MobileCarousel />}
          {DesktopDevice && <DesktopCarousel />}
      </div>
    )
}

export default Projects