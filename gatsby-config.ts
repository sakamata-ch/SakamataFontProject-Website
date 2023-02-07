import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Sakamata Font Project`,
    siteUrl: `https://font.sakamata.ch`,
    image: '/icon.png',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-04XE89SE0Y"
    }
  }, "gatsby-plugin-sitemap", "gatsby-plugin-sass", 'gatsby-plugin-pnpm', `gatsby-plugin-react-helmet`, {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`ja`, `en`],
        defaultLanguage: `ja`,
        fallbackLanguage: 'en',
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://font.sakamata.ch`,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: 'always',
        redirect: false,
        generateDefaultLanguagePage: true,
        // you can pass any i18next options
        i18nextOptions: {
          keySeparator: false,
          nsSeparator: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-clarity`,
      options: {
        // String value for your clarity project id
        // Project id is found in your clarity dashboard url
        // https://clarity.microsoft.com/projects/view/{clarity_project_id}/
        clarity_project_id: 'eten4je243',
        // Boolean value for enabling clarity while developing
        // true will enable clarity tracking code on both development and production environments
        // false will enable clarity tracking code on production environment only
        enable_on_dev_env: true
      },
    }
  ]
};

export default config;
