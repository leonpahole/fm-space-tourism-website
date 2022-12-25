import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import dotsNavigationStyles from './DotsNavigation.module.scss';

interface IProps {
  links: { href: string; label: string }[];
  wrapperClassName?: string;
}

export const DotsNavigation = ({ links, wrapperClassName }: IProps) => {
  const router = useRouter();

  return (
    <nav aria-label="Crew members" className={clsx(dotsNavigationStyles.wrapper, wrapperClassName)}>
      {links.map((link) => {
        return (
          <Link
            key={link.href}
            className={`${dotsNavigationStyles.dot} ${
              router.asPath === link.href ? dotsNavigationStyles.active : ''
            }`}
            href={link.href}
            title={link.label}
          />
        );
      })}
    </nav>
  );
};
