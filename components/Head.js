import * as React from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

// #major-version-switch
const HOST = 'https://raspbaby.ddns.net';

export default function Head(props) {
  const {
    card = '/static/social-previews/default-preview.jpg',
    children,
    description = t('strapline'),
    disableAlternateLocale = false,
    largeCard = true,
    title = t('headTitle'),
  } = props;
  const router = useRouter();
  const preview = card.startsWith('http') ? card : `${HOST}${card}`;

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Twitter */}
      <meta name="twitter:card" content={largeCard ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:site" content="@hoangndst" />
      {/* #major-version-switch */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={preview} />
      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      {/* #major-version-switch */}
      <meta property="og:url" content={`${HOST}${router.asPath}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={preview} />
      <meta property="og:ttl" content="604800" />
      {/* #major-version-switch */}
      <meta name="docsearch:version" content="master" />
      {disableAlternateLocale
        ? null
        : LANGUAGES_SSR.map((userLanguage2) => (
            <link
              key={userLanguage2}
              rel="alternate"
              href={`https://raspbaby.ddns.net${
                userLanguage2 === 'en' ? '' : `/${userLanguage2}`
              }${canonicalAs}`}
              hrefLang={userLanguage2}
            />
          ))}
      {children}
    </NextHead>
  );
}

Head.propTypes = {
  card: PropTypes.string,
  children: PropTypes.node,
  description: PropTypes.string,
  disableAlternateLocale: PropTypes.bool,
  largeCard: PropTypes.bool,
  title: PropTypes.string,
};
