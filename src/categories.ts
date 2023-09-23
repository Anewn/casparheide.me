import { Biotech } from '@emotion-icons/material';
import {
  Article,
  Help,
  School,
  WorkOutline,
  Collections,
} from '@emotion-icons/material-outlined';
import { CategoryData } from 'cv';
import {
  education,
  experience,
  gallery,
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
    header: 'categories.research',
    icon: Biotech,
    type: 'articles',
    data: research,
    order: { xs: 3, xl: 2 },
  },
  {
    header: 'categories.other',
    icon: Article,
    type: 'articles',
    data: other,
    order: { xs: 4, xl: 4 },
  },
  {
    header: 'categories.lookingFor',
    icon: Help,
    type: 'list',
    data: lookingFor,
    order: { xs: 5, xl: 5 },
  },
  {
    header: 'categories.gallery',
    icon: Collections,
    type: 'gallery',
    data: gallery,
    order: { xs: 6, xl: 6 },
  },
];
