import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title: 'ResQ | Relief',
  siteName: 'ResQ | Relief',
  description: 'An application to connect different resque agencies!',
  /** Without additional '/' on the ends */
  url: 'https://resq.theditor.xyz',
  type: 'website',
  robots: 'follow, index',
  /**
   * No need to be filled, will be populated with openGraph function
   * If you wish to use a normal image, just specify the path below
   */
  image:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXU1NSamprX19eXl5eVlZW7u7uioqKlpaXJycm+vr6urq60tLSrq6uenp7Nzc3S0tLFxcXBgtJwAAAC4UlEQVR4nO3a25KrIBCFYQU04im+/9MOJJ4SdSbiRWjm/652WbrLNZhuRLIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGKnLvn23X/CtrdwdRV9RtUanetAea6NjTyiKtxtXmL6b2f4nercTYYOoR/EXDdxD6LyT1pThGpdxFZAwj64kjbuNywhYRV8tUsoYgznhCFj6BJG3RZXCdVgT/O/w9vjX/dYQy4J+zKslo6lOI+1L84JVX6xMZrh21n2TQmvd/68jHMQ54S1u8euDOYf1sgTttrPTkL1RkDCS/MvEn5RWELf4l+6fHIJbWeMrvvl9MQS3kv9bPRLk08roSqn1mmG6YKkEq7nBl2aCW/LNEZPM7WkEmariZouxmNJJbzr1BNm3SqhHY8JTmi3V9TLIOr7eFBsQlWY7Zr28piaRnwtdWHmYVousWYcwZv4ju8fSL19sVVVZ7TWppE/a6v8YO2th6rKFkO2Oi40oSqfv7Zi59bfFhCFJrRjSdmpNu+EJtw2hUMiEz7Wsz9YRlP+65rIhP16dlYf3r2yvmdITOgPLHarzeO0xrQyE6rhdYVYH1SbVudSE3b5m91qU47fD+Ul3Fnk35nb9P5bh9CE903AbbUZH2SZCddvSEfVZpqAy0xY7X6IMuuv4a6I5nITjhPSrVW1aac/gsiEdncIfbWZr5vXTGUm3HSKt2rzLKKCEzZHQ+gX19T7bEBgwv44oDunc15OkJfwdUL6N3kJB5N4wsNOkUpCdXYIBSY8u69GWsIsyYTG7y9NOqGum6Ypk0047vN+3GuaCe1SO9NM6F52zcuu+8Gc3WMae0LXH5ramX6HVX1WEXvCcXf3Mi89y/8XkSf00t25N/knCeu+CuQrcOwJ/fphwGb99ab9uBOefi3c9sXj71NxcH3xWsDuz8+o36aKwyW2D3R19AGdS09Z5I8oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg/IHctFkjAUokAAAAASUVORK5CYII=',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  // Use siteName if there is templateTitle
  // but show full title if there is none
  // !STARTERCONF Follow config for opengraph, by deploying one on https://github.com/theodorusclarence/og
  // ? Uncomment code below if you want to use default open graph
  // meta['image'] = openGraph({
  //   description: meta.description,
  //   siteName: props.templateTitle ? meta.siteName : meta.title,
  //   templateTitle: props.templateTitle,
  // });

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@nottheditor' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta name='author' property='article:author' content='ThEditor' />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  );
}

const favicons: Array<React.ComponentPropsWithoutRef<'link'>> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/favicon/site.webmanifest' },
  {
    rel: 'mask-icon',
    href: '/favicon/safari-pinned-tab.svg',
    color: '#00e887',
  },
  { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
];
