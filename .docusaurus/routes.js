import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/epos-documentation/search',
    component: ComponentCreator('/epos-documentation/search', 'c41'),
    exact: true
  },
  {
    path: '/epos-documentation/',
    component: ComponentCreator('/epos-documentation/', '67f'),
    routes: [
      {
        path: '/epos-documentation/',
        component: ComponentCreator('/epos-documentation/', 'd85'),
        routes: [
          {
            path: '/epos-documentation/',
            component: ComponentCreator('/epos-documentation/', '11a'),
            routes: [
              {
                path: '/epos-documentation/epos-documentation',
                component: ComponentCreator('/epos-documentation/epos-documentation', '599'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
