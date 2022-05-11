/* eslint-disable react/jsx-props-no-spreading */
import NavBar from '../../../Design/NavBar/NavBar';
import MainSection from '../../../Design/Public/MainSection/MainSection';
import InfoSection from '../../../Design/Public/InfoSection/infoSection';
import { InfoData } from '../../../Design/Public/InfoSection/data/infoData';

function LandingPage() {
  return (
    <>
      <NavBar />
      <MainSection />
      <InfoSection {...InfoData} />
    </>

  );
}

export default LandingPage;
