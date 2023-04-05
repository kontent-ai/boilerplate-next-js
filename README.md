# A Statically generated page using Next.js and Kontent

[![Netlify Status](https://api.netlify.com/api/v1/badges/da530779-ea55-4d80-9d0c-974f1fc87a34/deploy-status)](https://app.netlify.com/sites/kontent-ai-boilerplate-next-js/deploys)

[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kontent-ai)
[![Discord](https://img.shields.io/discord/821885171984891914?color=%237289DA&label=Kontent.ai%20Discord&logo=discord)](https://discord.gg/SKCxwPtevJ)

This boilerplate showcases [Next.js](https://nextjs.org)'s Static Generation feature using [Kontent.ai](https://kontent.ai) as the data source.

[![Screenshot](./screenshot.png)](https://kontent-ai-boilerplate-next-js.netlify.app/)

## Demo

* <https://kontent-ai-boilerplate-next-js.netlify.app/>

## Getting Started

### Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/kontent-ai/boilerplate-next-js&project-name=kontent-boilerplate-next-js&repository-name=kontent-boilerplate-next-js&env=KONTENT_PROJECT_ID&envDescription=Required%20to%20connect%20the%20app%20with%20Kontent&envLink=https://github.com/kontent-ai/boilerplate-next-js%23Environment-variables)

[![Deploy on Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kontent-ai/boilerplate-next-js)

### Init project by command line

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/kontent-ai/boilerplate-next-js kontent-boilerplate-next-js
# or
yarn create next-app --example https://github.com/kontent-ai/boilerplate-next-js kontent-boilerplate-next-js
```

## Code development

### Environment variables

1. Set up environment variables
    * Copy the `.env.local.template` file in this directory to `.env.local` (which will be ignored by Git):

        ```sh
        cp .env.local.template .env.local
        ```

1. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

🎉 Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

> By default, the content is loaded from a shared Kontent.ai project. If you want to use your own clone of the project so that you can customize it and experiment with Kontent, continue to the next section.

## Create your own data source project in Kontent.ai

### Create Kontent.ai project

To generate the clone of the sample project in order to be able to edit the content, use [Sample site generator](https://app.kontent.ai/sample-site-configuration) - use "CREATE A NEW SAMPLE PROJECT" for generating the project.

### Connect Kontent.ai project with code base

1. Access [the project listing on Kontent.ai application](https://app.kontent.ai/projects/).
1. Select newly generated project (its name is about to be Sample Project M/DD/YYYY, H:MM:SS AM/PM).
1. Set env variables on `.env.local`:
    * `KONTENT_PROJECT_ID` - Should be the Project ID in `Project settings` > `API keys`.

### Content editing development

Run the development server:

```sh
npm run dev
# or
yarn dev
```

🎉 Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying content in Kontent.ai project. The page auto-updates as you edit the content, you just need to [publish the changes](https://kontent.ai/learn/tutorials/write-and-collaborate/publish-your-work/publish-content-items).

#### Preview

Next.js offers embedded possibility to preview unpublished content - [the preview mode](https://nextjs.org/docs/advanced-features/preview-mode). If you want to include this capability - follow the linked guide, or jum straight to the [Kontent.ai example](https://github.com/vercel/next.js/tree/canary/examples/cms-kontent-ai) that already includes implementation of the [preview](https://github.com/vercel/next.js/blob/canary/examples/cms-kontent-ai/pages/api/preview.js) and [exit-preview](https://github.com/vercel/next.js/blob/canary/examples/cms-kontent-ai/pages/api/exit-preview.js) API route.

## Learn More

To learn more about Next.js, take a look at the following resources:

* [Kontent.ai + Next.js blog example](https://github.com/vercel/next.js/tree/canary/examples/cms-kontent-ai#readme) - complex sample project setup including i.e. preview functionality, listing, Tailwind CSS, ...
* [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
* [This Mission: Next.js from the Ground Up](https://explorers.netlify.com/learn/nextjs)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Related content

* [Using the Next image component with Kontent.ai assets](https://meeg.dev/blog/using-the-next-image-component-with-kentico-kontent-assets) by [Chris Meagher](https://github.com/CMeeg)
* [Using Azure Pipelines to build and deploy a Next.js app to Azure app services](https://meeg.dev/blog/using-azure-pipelines-to-build-and-deploy-a-next-js-app-to-azure-app-services) by [Chris Meagher](https://github.com/CMeeg)
* [Build and Deploy a Next.js Blog with Kontent.AI and Vercel](https://dev.to/kentico-kontent/build-and-deploy-a-next-js-blog-with-kentico-kontent-and-vercel-5cp4) by [Ondřej Chrastina](https://github.com/Simply007)
* [Dynamic routing with Kontent.ai and NextJS](https://unplatform.io/stories/dynamic-routing-with-kentico-kontent-and-nextjs) by [Unplatform](https://unplatform.io/)
* [Solving content preview with Next.js Preview Mode](https://rshackleton.co.uk/articles/solving-content-preview-with-next-js-preview-mode) by [Richard Shackleton](https://rshackleton.co.uk/)
* [How to use Highlight.js on a Next.js site](https://dev.to/kentico-kontent/how-to-use-highlight-js-on-a-next-js-site-f9) by [Ondřej Polesný](https://github.com/ondrabus)
* [Pre-rendered, server-rendered, or hybrid: Which should I use?
](https://kontent.ai/blog/pre-rendered-server-rendered-or-hybrid-which-should-i-use) by [Tom Marshall](https://kontent.ai/blog/author/tom-marshall)
* [How to improve cache efficiency and reduce costs with Next.js on-demand ISR
](https://kontent.ai/blog/leveraging-next-js-on-demand-isr) by [Tom Marshall](https://kontent.ai/blog/author/tom-marshall)
