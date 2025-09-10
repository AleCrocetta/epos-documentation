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
    component: ComponentCreator('/epos-documentation/', 'b24'),
    routes: [
      {
        path: '/epos-documentation/',
        component: ComponentCreator('/epos-documentation/', 'ced'),
        routes: [
          {
            path: '/epos-documentation/',
            component: ComponentCreator('/epos-documentation/', '8bc'),
            routes: [
              {
                path: '/epos-documentation/index',
                component: ComponentCreator('/epos-documentation/index', '86e'),
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
