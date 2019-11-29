/** @jsx jsx */
import { Avatar, Text } from '@theme-ui/components';
import { jsx, Styled } from 'theme-ui';

import useSiteMetadata from '../hooks/use-site-metadata';
import SocialLinks from './social-links';

const AuthorBannerMain = ({
  avatar = '',
  author = '',
  authorDescription = '',
  socialLinks,
  children,
  ...props
}) => {
  return (
    <div sx={{ marginY: '40px' }} {...props}>
      <div
        sx={{
          bg: 'muted',
          borderRadius: 'authorBanner',
          px: ['6px', '36px'],
          pt: '36px',
          pb: '36px'
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}
        >
          {avatar ? <Avatar sx={{ marginRight: '30px' }} src={avatar} /> : ''}
          <div>
            <Styled.h4>{author}</Styled.h4>
            <Text sx={{ fontSize: [3], mb: '8px' }}>{authorDescription}</Text>
            {socialLinks && socialLinks.length > 0 ? (
              <SocialLinks socialLinks={socialLinks} fontSize="30px" />
            ) : (
              ''
            )}
          </div>
        </div>
        <div sx={{ px: ['6px', '6px'] }}>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ({
  avatar = '',
  author = '',
  authorDescription = '',
  socialLinks = [],
  children,
  ...props
}) => {
  if (avatar || author || authorDescription || children)
    return (
      <AuthorBannerMain
        avatar={avatar}
        author={author}
        authorDescription={authorDescription}
        socialLinks={socialLinks}
        {...props}
      >
        {children}
      </AuthorBannerMain>
    );
  //
  const siteMeta = useSiteMetadata();
  if (siteMeta.author || siteMeta.authorDescription)
    return (
      <AuthorBannerMain
        avatar={siteMeta.avatar}
        author={siteMeta.author}
        authorDescription={siteMeta.authorDescription}
        socialLinks={siteMeta.social}
        {...props}
      >
        {children}
      </AuthorBannerMain>
    );
  //
  return <div />;
};
