import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Destination, destinationApi } from '../../../data/destinations.data';
import BackgroundDestinationDesktop from '../../../public/assets/destination/background-destination-desktop.jpg';
import { Breakpoints } from '../../../utils/breakpoints';
import { FlyInDiv } from '../../animation/FlyInDiv';
import { ContentPageWrapper } from '../../layout/ContentPageWrapper/ContentPageWrapper';
import destinationPageStyles from './DestinationPage.module.scss';

interface IProps {
  destination: Destination;
  allDestinations: Destination[];
}

export const DestinationPage = ({ destination, allDestinations }: IProps) => {
  return (
    <ContentPageWrapper
      backgroundImage={BackgroundDestinationDesktop}
      captionLabel="Pick your destination"
      captionNumber={1}
    >
      <FlyInDiv from="left" className={destinationPageStyles.imageWrapper}>
        <Image
          src={destination.images.png}
          alt={`Image of a ${destination.name}`}
          sizes={`
              (min-width: ${Breakpoints.xl}) 445px,
              (min-width: ${Breakpoints.md}) 300px,
              170px 
            `}
          fill
          className={destinationPageStyles.image}
        />
      </FlyInDiv>
      <FlyInDiv from="right" className={destinationPageStyles.contentWrapper}>
        <nav aria-label="Destinations" className={destinationPageStyles.navigation}>
          <ul className={destinationPageStyles.list}>
            {allDestinations.map((dest) => (
              <li key={dest.slug}>
                <Link
                  className={clsx({
                    [destinationPageStyles.link]: true,
                    [destinationPageStyles.active]: dest.slug === destination.slug,
                  })}
                  href={destinationApi.getUrl(dest)}
                >
                  {dest.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <h1 className={destinationPageStyles.title}>{destination.name}</h1>
        <p className={destinationPageStyles.description}>{destination.description}</p>
        <div className={destinationPageStyles.separator} />
        <div className={destinationPageStyles.statsWrapper}>
          <div className={destinationPageStyles.stat}>
            <h2 className={destinationPageStyles.caption}>Avg. distance</h2>
            <p className={destinationPageStyles.value}>{destination.distance}</p>
          </div>
          <div className={destinationPageStyles.stat}>
            <h2 className={destinationPageStyles.caption}>Est. travel time</h2>
            <p className={destinationPageStyles.value}>{destination.travel}</p>
          </div>
        </div>
      </FlyInDiv>
    </ContentPageWrapper>
  );
};
