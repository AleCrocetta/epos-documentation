import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/epos-open-source/docs/search',
    component: ComponentCreator('/epos-open-source/docs/search', '54a'),
    exact: true
  },
  {
    path: '/epos-open-source/docs/',
    component: ComponentCreator('/epos-open-source/docs/', '2b9'),
    routes: [
      {
        path: '/epos-open-source/docs/',
        component: ComponentCreator('/epos-open-source/docs/', '340'),
        routes: [
          {
            path: '/epos-open-source/docs/',
            component: ComponentCreator('/epos-open-source/docs/', '347'),
            routes: [
              {
                path: '/epos-open-source/docs/category/trial---sidebar',
                component: ComponentCreator('/epos-open-source/docs/category/trial---sidebar', 'd86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/epos-open-source/docs/sidebar-trial/file1',
                component: ComponentCreator('/epos-open-source/docs/sidebar-trial/file1', 'a14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/epos-open-source/docs/trial',
                component: ComponentCreator('/epos-open-source/docs/trial', '058'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/epos-open-source/docs/',
                component: ComponentCreator('/epos-open-source/docs/', 'e3c'),
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
