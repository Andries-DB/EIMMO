import MainSection from '../../../Design/Public/MainSection/MainSection';
import InfoSection from '../../../Design/Public/InfoSection/infoSection';
import { InfoData } from '../../../Design/Public/InfoSection/data/infoData';
import NavBar from '../../../Design/NavBar/NavBar';

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
