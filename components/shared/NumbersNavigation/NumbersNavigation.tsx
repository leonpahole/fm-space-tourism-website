import clsx from 'clsx';
import Link from 'next/link';
import { useIsPathActive } from '../../../hooks/useIsPathActive';
import numbersNavigationStyles from './NumbersNavigation.module.scss';

interface IProps {
  links: { href: string; label: string }[];
  wrapperClassName?: string;
  ariaLabel: string;
}

export const NumbersNavigation = ({ links, wrapperClassName, ariaLabel }: IProps) => {
  const { returnIfPathActive } = useIsPathActive();

  return (
    <nav aria-label={ariaLabel} className={clsx(numbersNavigationStyles.wrapper, wrapperClassName)}>
      {links.map((link, i) => {
        return (
          <Link
            key={link.href}
            className={clsx(
              numbersNavigationStyles.number,
              returnIfPathActive(link.href, numbersNavigationStyles.active),
            )}
            href={link.href}
            title={link.label}
          >
            {i + 1}
          </Link>
        );
      })}
    </nav>
  );
};
