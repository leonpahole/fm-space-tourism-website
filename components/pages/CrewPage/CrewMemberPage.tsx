import Image from 'next/image';
import { CrewMember, crewMemberApi } from '../../../data/crew.data';
import BackgroundCrewDesktop from '../../../public/assets/crew/background-crew-desktop.jpg';
import { Breakpoints } from '../../../utils/breakpoints';
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
        <div className={crewMemberPageStyles.imageWrapper}>
          <Image
            src={`/${crewMember.images.png}`}
            alt={`Image of ${crewMember.name} crew member`}
            sizes={`
              (min-width: ${Breakpoints.xl}) 568px,
              (min-width: ${Breakpoints.md}) 456px,
              327px 
            `}
            fill
            className={crewMemberPageStyles.image}
          />
        </div>

        <div className={crewMemberPageStyles.navigationAndInfoWrapper}>
          <DotsNavigation
            links={allCrewMembers.map((cm) => ({
              href: crewMemberApi.getUrl(cm),
              label: `Link to ${cm.name}`,
            }))}
            wrapperClassName={crewMemberPageStyles.dotsNavigationWrapper}
          />
          <div className={crewMemberPageStyles.crewMemberInfoWrapper}>
            <p className={crewMemberPageStyles.role}>{crewMember.role}</p>
            <h1 className={crewMemberPageStyles.name}>{crewMember.name}</h1>
            <p className={crewMemberPageStyles.bio}>{crewMember.bio}</p>
          </div>
        </div>
      </div>
    </ContentPageWrapper>
  );
};
