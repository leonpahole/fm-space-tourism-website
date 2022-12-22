import pageCaptionStyles from './PageCaption.module.scss';

interface IProps {
  number: number;
  label: string;
}

export const PageCaption = ({ label, number }: IProps) => {
  return (
    <h2 className={pageCaptionStyles.caption}>
      <span className={pageCaptionStyles.number}>0{number}</span>
      {label}
    </h2>
  );
};
