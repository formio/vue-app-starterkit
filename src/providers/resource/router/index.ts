import { List, Create, Resource, View, Edit, Delete } from '../views';

export default [
  {
    path: '',
    component: List,
  },
  {
    path: 'new',
    component: Create,
  },
  {
    path: ':id',
    component: Resource,
    children: [
      {
        path: '',
        component: View,
      },
      {
        path: 'edit',
        component: Edit,
      },
      {
        path: 'delete',
        component: Delete,
      },
    ],
  },
];
