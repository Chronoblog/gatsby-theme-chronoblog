/** @jsx jsx */
import { Avatar, Heading, Text } from '@theme-ui/components';
import { jsx } from 'theme-ui';

import useSiteMetadata from '../hooks/use-site-metadata';
import SocialLinks from './social-links';

/**
 * @typedef {object} AuthorBannerDescriptionProps
 * @property {React.ReactNode=} children
 */

/**
 * @param {AuthorBannerDescriptionProps=} props
 */
export const AuthorBannerDescription = ({ children, ...props }) => {
  const siteMeta = useSiteMetadata();
  if (children)
    return (
      <Text sx={{ fontSize: [2], mb: '8px' }} {...props}>
        {children}
      </Text>
    );
  if (siteMeta.authorDescription)
    return (
      <Text sx={{ fontSize: [2], mb: '8px' }} {...props}>
        {siteMeta.authorDescription}
      </Text>
    );
  return <div />;
};

export const AuthorBannerAvatar = ({ src = '', ...props }) => {
  const siteMeta = useSiteMetadata();
  if (src)
    return (
      <Avatar sx={{ marginRight: '30px', mb: '8px' }} src={src} {...props} />
    );
  if (siteMeta.avatar)
    return (
      <Avatar
        sx={{ marginRight: '30px', mb: '8px' }}
        src={siteMeta.avatar}
        {...props}
      />
    );
  return <div />;
};

/**
 * @typedef {object} AuthorBannerHeadingProps
 * @property {React.ReactNode=} children
 * @property {string=} as
 */

/**
 * @param {AuthorBannerHeadingProps=} props
 */
export const AuthorBannerHeading = ({ as = 'h3', children, ...props }) => {
  const siteMeta = useSiteMetadata();
  if (children)
    return (
      <Heading sx={{ fontSize: [5] }} as={as} {...props}>
        {children}
      </Heading>
    );
  if (siteMeta.author)
    return (
      <Heading sx={{ fontSize: [5] }} as={as} {...props}>
        {siteMeta.author}
      </Heading>
    );
  return <div />;
};

const AuthorBannerMain = ({ children, ...props }) => {
  return (
    <div
      sx={{
        bg: 'muted',
        borderRadius: 'authorBanner',
        px: ['6px', '36px'],
        pt: '36px',
        pb: '36px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}
      {...props}
    >
      {children}
    </div>
  );
};

const AuthorBanner = ({ children, ...props }) => {
  if (children) {
    return <AuthorBannerMain {...props}>{children}</AuthorBannerMain>;
  }
  return (
    <AuthorBannerMain {...props}>
      <AuthorBannerAvatar />
      <div>
        <AuthorBannerHeading />
        <AuthorBannerDescription />
        <SocialLinks fontSize="30px" />
      </div>
    </AuthorBannerMain>
  );
};

export default AuthorBanner;
