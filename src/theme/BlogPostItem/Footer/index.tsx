import React from 'react';
import Head from '@docusaurus/Head';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client'; // v3.5.0
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Footer from '@theme-original/BlogPostItem/Footer';
import { useColorMode } from '@docusaurus/theme-common';
import Giscus from '@giscus/react';

export default function FooterWrapper(props: {}) {
  const { siteConfig } = useDocusaurusContext();
  const { metadata, isBlogPostPage } = useBlogPost();
  const { colorMode } = useColorMode();

  if (!isBlogPostPage || metadata.source.match(/blog-work/)) {
    return <Footer {...props} />;
  }

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <Footer {...props} />
      <div className="margin-vert--xl">
        <Giscus
          id="comments"
          repo={`${siteConfig.organizationName}/${siteConfig.projectName}`}
          repoId={siteConfig.customFields.giscusProjectId as string}
          category={siteConfig.customFields.giscusDiscussionCategory as string}
          categoryId={siteConfig.customFields.giscusDiscussionCategoryId as string}
          mapping="title"
          term="Welcome to @giscus/react component!"
          reactionsEnabled="0"
          emitMetadata="0"
          inputPosition="top"
          theme={colorMode}
          lang="en"
          loading="lazy"
        />
      </div>
    </>
  );
}
