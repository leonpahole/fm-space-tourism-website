import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { PageWrapper } from '../../layout/PageWrapper/PageWrapper';
import BackgroundDestinationDesktop from '../../../public/assets/destination/background-destination-desktop.jpg';
import destinationPageStyles from './DestinationPage.module.scss';
import { PageCaption } from '../../shared/PageCaption/PageCaption';
import { Destination, getDestinationUrl } from '../../../data/destinations.data';
import { Breakpoints } from '../../../utils/breakpoints';

interface IProps {
  destination: Destination;
  allDestinations: Destination[];
}

export const DestinationPage = ({ destination, allDestinations }: IProps) => {
  return (
    <PageWrapper backgroundImage={BackgroundDestinationDesktop}>
      <div className={destinationPageStyles.paddingWrapper}>
        <PageCaption label="Pick your destination" number={1} />
        <div className={destinationPageStyles.wrapper}>
          <div className={destinationPageStyles.imageWrapper}>
            <Image
              src={`/${destination.images.png}`}
              alt={`Image of a ${destination.name}`}
              sizes={`
              (min-width: ${Breakpoints.xl}) 445px,
              (min-width: ${Breakpoints.md}) 300px,
              170px 
            `}
              fill
              className={destinationPageStyles.image}
            />
          </div>
          <div className={destinationPageStyles.contentWrapper}>
            <nav className={destinationPageStyles.navigation}>
              <ul className={destinationPageStyles.list}>
                {allDestinations.map((dest) => (
                  <li key={dest.slug}>
                    <Link
                      className={clsx({
                        [destinationPageStyles.link]: true,
                        [destinationPageStyles.active]: dest.slug === destination.slug,
                      })}
                      href={getDestinationUrl(dest)}
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
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
