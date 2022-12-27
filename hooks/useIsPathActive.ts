import { useRouter } from 'next/router';

export const useIsPathActive = () => {
  const router = useRouter();

  const isPathActive = (path: string) => {
    if (path === '/') {
      return router.asPath === path;
    }

    return router.asPath.startsWith(path);
  };

  const returnIfPathActive = <T>(path: string, val: T): T | undefined => {
    if (isPathActive(path)) {
      return val;
    }

    return undefined;
  };

  return { isPathActive, returnIfPathActive };
};
