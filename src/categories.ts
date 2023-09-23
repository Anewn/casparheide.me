import { Biotech } from '@emotion-icons/material';
import {
  Article,
  Help,
  School,
  WorkOutline,
} from '@emotion-icons/material-outlined';
import { CategoryData } from 'cv';
import {
  education,
  experience,
  lookingFor,
  other,
  research,
} from '../assets/data/index';

export const categories: CategoryData[] = [
  {
    header: 'categories.experience',
    icon: WorkOutline,
    type: 'timeline',
    data: experience,
    order: { xs: 1, xl: 1 },
  },
  {
    header: 'categories.education',
    icon: School,
    type: 'timeline',
    data: education,
    order: { xs: 2, xl: 3 },
  },
  {
    header: 'categories.lookingFor',
    icon: Help,
    type: 'list',
    data: lookingFor,
    order: { xs: 5, xl: 5 },
  },
];
