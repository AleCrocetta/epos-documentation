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
    component: ComponentCreator('/epos-documentation/', 'ed7'),
    routes: [
      {
        path: '/epos-documentation/',
        component: ComponentCreator('/epos-documentation/', '596'),
        routes: [
          {
            path: '/epos-documentation/',
            component: ComponentCreator('/epos-documentation/', '0fb'),
            routes: [
              {
                path: '/epos-documentation/epos-documentation',
                component: ComponentCreator('/epos-documentation/epos-documentation', 'e3b'),
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
