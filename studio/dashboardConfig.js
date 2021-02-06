export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601e0a9483c314d5de1bd84a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pukjuu4x',
                  apiId: 'e26752f3-7316-45f1-8ace-eb6787888811'
                },
                {
                  buildHookId: '601e0a945610f9eabd4b1719',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wwosdy44',
                  apiId: '7b58a4ad-f49c-41ba-8dab-46dc71e7cf61'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcelooliveira/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wwosdy44.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
