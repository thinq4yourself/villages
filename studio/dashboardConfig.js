export default {
  widgets: [
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
                  buildHookId: '5eb5dd688a29b201b0a491ba',
                  title: 'Sanity Studio',
                  name: 'villages-studio',
                  apiId: 'dcc2fc01-5e38-47de-bcde-c1702a99a8e1'
                },
                {
                  buildHookId: '5eb5dd688a29b20170a49009',
                  title: 'Blog Website',
                  name: 'villages-web',
                  apiId: '421c8c84-bfa2-4ee7-9a01-c5af5757e946'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thinq4yourself/villages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://villages-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
