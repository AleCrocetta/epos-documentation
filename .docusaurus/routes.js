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
    component: ComponentCreator('/epos-documentation/', '10b'),
    routes: [
      {
        path: '/epos-documentation/',
        component: ComponentCreator('/epos-documentation/', 'f11'),
        routes: [
          {
            path: '/epos-documentation/',
            component: ComponentCreator('/epos-documentation/', 'dea'),
            routes: [
              {
                path: '/epos-documentation/home',
                component: ComponentCreator('/epos-documentation/home', '378'),
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
