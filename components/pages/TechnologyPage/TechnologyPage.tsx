import Image from 'next/image';
import { technologiesApi, Technology } from '../../../data/technologies.data';
import BackgroundTechnologyDesktop from '../../../public/assets/technology/background-technology-desktop.jpg';
import { FlyInDiv } from '../../animation/FlyInDiv';
import { ContentPageWrapper } from '../../layout/ContentPageWrapper/ContentPageWrapper';
import { NumbersNavigation } from '../../shared/NumbersNavigation/NumbersNavigation';
import technologyPageStyles from './TechnologyPage.module.scss';

interface IProps {
  technology: Technology;
  allTechnologies: Technology[];
}

export const TechnologyPage = ({ technology, allTechnologies }: IProps) => {
  return (
    <ContentPageWrapper
      backgroundImage={BackgroundTechnologyDesktop}
      captionLabel="Space launch 101"
      captionNumber={3}
      paddingWrapperClassName={technologyPageStyles.paddingWrapper}
      wrapperClassName={technologyPageStyles.contentWrapper}
    >
      <FlyInDiv from="right" className={technologyPageStyles.imageWrapper}>
        <Image
          src={technology.images.landscape}
          alt=""
          fill
          sizes="100vw"
          className={technologyPageStyles.image}
        />
      </FlyInDiv>

      <FlyInDiv from="left" className={technologyPageStyles.textAndNavigationWrapper}>
        <NumbersNavigation
          links={allTechnologies.map((t) => ({
            href: technologiesApi.getUrl(t),
            label: t.name,
          }))}
          wrapperClassName={technologyPageStyles.navigationWrapper}
          ariaLabel="Technologies"
        />
        <article className={technologyPageStyles.textWrapper}>
          <p className={technologyPageStyles.terminology}>The terminology...</p>
          <h1 className={technologyPageStyles.name}>{technology.name}</h1>
          <p className={technologyPageStyles.description}>{technology.description}</p>
        </article>
      </FlyInDiv>
    </ContentPageWrapper>
  );
};
