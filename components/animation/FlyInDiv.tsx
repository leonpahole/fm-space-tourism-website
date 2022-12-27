import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';

type IProps = {
  from?: 'left' | 'right';
} & HTMLMotionProps<'div'>;

export const FlyInDiv = ({ from = 'left', ...divProps }: IProps) => {
  return (
    <motion.div
      initial={{ x: from === 'left' ? -100 : 100 }}
      animate={{ x: 0 }}
      exit={{ x: from === 'left' ? -100 : 100 }}
      {...divProps}
    />
  );
};
