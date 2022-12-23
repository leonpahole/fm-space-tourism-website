import { CrewMember } from '../../../data/crew.data';
import BackgroundDestinationDesktop from '../../../public/assets/destination/background-destination-desktop.jpg';
import { ContentPageWrapper } from '../../layout/ContentPageWrapper/ContentPageWrapper';

interface IProps {
  crewMember: CrewMember;
  allCrewMembers: CrewMember[];
}

export const CrewMemberPage = ({ crewMember, allCrewMembers }: IProps) => {
  return (
    <ContentPageWrapper
      backgroundImage={BackgroundDestinationDesktop}
      captionLabel="Meet your crew"
      captionNumber={2}
    >
      {crewMember.name} {allCrewMembers.length}
    </ContentPageWrapper>
  );
};
