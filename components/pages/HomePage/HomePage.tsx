import Link from 'next/link';
import BackgroundHomeDesktop from '../../../public/assets/home/background-home-desktop.jpg';
import { FlyInDiv } from '../../animation/FlyInDiv';
import { Paths } from '../../layout/Navbar/Navbar';
import { PageWrapper } from '../../layout/PageWrapper/PageWrapper';
import homePageStyles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <PageWrapper backgroundImage={BackgroundHomeDesktop}>
      <article className={homePageStyles.wrapper}>
        <FlyInDiv from="left" className={homePageStyles.textWrapper}>
          <p className={homePageStyles.intro}>So, you want to travel to</p>
          <h1 className={homePageStyles.heading}>Space</h1>
          <p className={homePageStyles.description}>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!
          </p>
        </FlyInDiv>
        <FlyInDiv from="right" className={homePageStyles.exploreLink}>
          <Link href={Paths.destination}>Explore</Link>
        </FlyInDiv>
      </article>
    </PageWrapper>
  );
};
