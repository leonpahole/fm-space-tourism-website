import Image, { StaticImageData } from 'next/image';
import { Navbar } from '../Navbar/Navbar';
import pageWrapperStyles from './PageWrapper.module.scss';

interface IProps {
  backgroundImage: StaticImageData;
  children: React.ReactNode;
}

export const PageWrapper = ({ backgroundImage, children }: IProps) => {
  return (
    <div className={pageWrapperStyles.background}>
      <Navbar />
      <Image className={pageWrapperStyles.image} src={backgroundImage} alt="" sizes="100vw" fill />
      <main className={pageWrapperStyles.main}>{children}</main>
    </div>
  );
};
