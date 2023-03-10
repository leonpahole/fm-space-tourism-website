import clsx from 'clsx';
import Link from 'next/link';
import { useIsPathActive } from '../../../hooks/useIsPathActive';
import dotsNavigationStyles from './DotsNavigation.module.scss';

interface IProps {
  links: { href: string; label: string }[];
  wrapperClassName?: string;
  ariaLabel: string;
}

export const DotsNavigation = ({ links, wrapperClassName, ariaLabel }: IProps) => {
  const { returnIfPathActive } = useIsPathActive();

  return (
    <nav aria-label={ariaLabel} className={clsx(dotsNavigationStyles.wrapper, wrapperClassName)}>
      {links.map((link) => {
        return (
          <Link
            key={link.href}
            className={clsx(
              dotsNavigationStyles.dot,
              returnIfPathActive(link.href, dotsNavigationStyles.active),
            )}
            href={link.href}
            title={link.label}
          />
        );
      })}
    </nav>
  );
};
