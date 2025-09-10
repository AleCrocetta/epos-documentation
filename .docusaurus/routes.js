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
    component: ComponentCreator('/epos-documentation/', '614'),
    routes: [
      {
        path: '/epos-documentation/',
        component: ComponentCreator('/epos-documentation/', 'c38'),
        routes: [
          {
            path: '/epos-documentation/',
            component: ComponentCreator('/epos-documentation/', '829'),
            routes: [
              {
                path: '/epos-documentation/epos-documentation',
                component: ComponentCreator('/epos-documentation/epos-documentation', '87d'),
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
