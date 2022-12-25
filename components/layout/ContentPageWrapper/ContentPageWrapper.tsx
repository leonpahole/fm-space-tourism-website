import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import { PageCaption } from '../../shared/PageCaption/PageCaption';
import { PageWrapper } from '../PageWrapper/PageWrapper';
import contentPageWrapperStyles from './ContentPageWrapper.module.scss';

interface IProps {
  captionLabel: string;
  captionNumber: number;
  backgroundImage: StaticImageData;
  children: React.ReactNode;
  paddingWrapperClassName?: string;
  wrapperClassName?: string;
}

export const ContentPageWrapper = ({
  captionLabel,
  captionNumber,
  backgroundImage,
  paddingWrapperClassName,
  wrapperClassName,
  children,
}: IProps) => {
  return (
    <PageWrapper backgroundImage={backgroundImage}>
      <div className={clsx(contentPageWrapperStyles.paddingWrapper, paddingWrapperClassName)}>
        <PageCaption label={captionLabel} number={captionNumber} />
        <div className={clsx(contentPageWrapperStyles.wrapper, wrapperClassName)}>{children}</div>
      </div>
    </PageWrapper>
  );
};
