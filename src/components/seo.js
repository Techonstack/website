import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'TechOnStack is a solution oriented technology team with key focus on delivering quality solutions within estimated timelines',
  author = 'TechOnStack Inc.',
  meta,
  title = 'TechOnStack',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: `twitter:url`,
      content: 'https://techonstack.vercel.app/',
    }
  ].concat(meta);
  const faviconURL = 'techonstack_icon.png'
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" type="image/x-icon" href={`/${faviconURL}`} />
      <meta property="twitter:image" content="https://res.cloudinary.com/edustripe/image/upload/v1631538173/techonstack.png" />
      <meta property="og:image" content="https://res.cloudinary.com/edustripe/image/upload/v1631538173/techonstack.png" />
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
