import { PageWrapper } from '../../layout/PageWrapper/PageWrapper';
import BackgroundHomeDesktop from '../../../public/assets/home/background-home-desktop.jpg';
import homePageStyles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <PageWrapper backgroundImage={BackgroundHomeDesktop}>
      <div className={homePageStyles.wrapper}>
        <div className={homePageStyles.textWrapper}>
          <p className={homePageStyles.intro}>So, you want to travel to</p>
          <h1 className={homePageStyles.heading}>Space</h1>
          <p className={homePageStyles.description}>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!
          </p>
        </div>
        <button className={homePageStyles.button} type="button">
          Explore
        </button>
      </div>
    </PageWrapper>
  );
};
