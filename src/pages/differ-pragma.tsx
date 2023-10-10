import type { NextPage } from 'next';
import picture from '../../public/images/differpragma.webp';
import Portfolio from '../components/Portfolio';

const DifferPragma: NextPage = () => (
  <Portfolio alt="Differ Pragma" picture={picture} />
);

export default DifferPragma;
