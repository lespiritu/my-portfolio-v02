import { FC } from 'react';
import { Navigation } from '../components';
import { Typography } from '@ui-design';

export const Home: FC = () => {
  return (
    <>
      <Navigation />;
      <hr />
      <Typography variant="header1">Header 1</Typography>
      <Typography variant="header2">Header 2</Typography>
      <Typography variant="header3">Header 3</Typography>
      <Typography variant="header4">Header 4</Typography>
      <Typography variant="header5">Header 5</Typography>
      <Typography variant="paragraph">Paragraph</Typography>
      <Typography variant="button">button</Typography>
      <Typography variant="input">input</Typography>
      <Typography variant="label">label</Typography>
    </>
  );
};
