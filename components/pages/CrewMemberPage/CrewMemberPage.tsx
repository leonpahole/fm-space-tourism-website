import Image from 'next/image';
import { CrewMember, crewMemberApi } from '../../../data/crew.data';
import BackgroundCrewDesktop from '../../../public/assets/crew/background-crew-desktop.jpg';
import { Breakpoints } from '../../../utils/breakpoints';
import { FlyInDiv } from '../../animation/FlyInDiv';
import { ContentPageWrapper } from '../../layout/ContentPageWrapper/ContentPageWrapper';
import { DotsNavigation } from '../../shared/DotsNavigation/DotsNavigation';
import crewMemberPageStyles from './CrewMemberPage.module.scss';

interface IProps {
  crewMember: CrewMember;
  allCrewMembers: CrewMember[];
}

export const CrewMemberPage = ({ crewMember, allCrewMembers }: IProps) => {
  return (
    <ContentPageWrapper
      backgroundImage={BackgroundCrewDesktop}
      captionLabel="Meet your crew"
      captionNumber={2}
      paddingWrapperClassName={crewMemberPageStyles.paddingWrapper}
      wrapperClassName={crewMemberPageStyles.contentWrapper}
    >
      <div className={crewMemberPageStyles.wrapper}>
        <FlyInDiv from="right" className={crewMemberPageStyles.imageWrapper}>
          <Image
            src={crewMember.images.png}
            alt={`Image of ${crewMember.name} crew member`}
            sizes={`
              (min-width: ${Breakpoints.xl}) 568px,
              (min-width: ${Breakpoints.md}) 456px,
              327px 
            `}
            fill
            className={crewMemberPageStyles.image}
          />
        </FlyInDiv>

        <FlyInDiv from="left" className={crewMemberPageStyles.navigationAndInfoWrapper}>
          <DotsNavigation
            links={allCrewMembers.map((cm) => ({
              href: crewMemberApi.getUrl(cm),
              label: `Link to ${cm.name}`,
            }))}
            wrapperClassName={crewMemberPageStyles.dotsNavigationWrapper}
            ariaLabel="Crew members"
          />
          <article className={crewMemberPageStyles.crewMemberInfoWrapper}>
            <p className={crewMemberPageStyles.role}>{crewMember.role}</p>
            <h1 className={crewMemberPageStyles.name}>{crewMember.name}</h1>
            <p className={crewMemberPageStyles.bio}>{crewMember.bio}</p>
          </article>
        </FlyInDiv>
      </div>
    </ContentPageWrapper>
  );
};
