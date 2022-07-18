import { FC } from 'react';
import { Navigation } from '../components';

export interface HomeProps {
  message: string;
}

export const Home: FC<HomeProps> = ({ message }) => {
  const sayHello = `Printing this message : "${message}"`;
  return (
    <div>
      <Navigation />
      <h3>Hello World ! {sayHello}</h3>
      
    </div>
  );
};
