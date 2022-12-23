import { StaticImageData } from 'next/image';
import { PageCaption } from '../../shared/PageCaption/PageCaption';
import { PageWrapper } from '../PageWrapper/PageWrapper';
import contentPageWrapperStyles from './ContentPageWrapper.module.scss';

interface IProps {
  captionLabel: string;
  captionNumber: number;
  backgroundImage: StaticImageData;
  children: React.ReactNode;
}

export const ContentPageWrapper = ({
  captionLabel,
  captionNumber,
  backgroundImage,
  children,
}: IProps) => {
  return (
    <PageWrapper backgroundImage={backgroundImage}>
      <div className={contentPageWrapperStyles.paddingWrapper}>
        <PageCaption label={captionLabel} number={captionNumber} />
        <div className={contentPageWrapperStyles.wrapper}>{children}</div>
      </div>
    </PageWrapper>
  );
};
