import type { NextPage } from 'next';
import picture from '../../public/images/privatmegleren.webp';
import Portfolio from '../components/Portfolio';

const PrivatMegleren: NextPage = () => (
  <Portfolio alt="privatmegleren" picture={picture} />
);

export default PrivatMegleren;
