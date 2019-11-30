/** @jsx jsx */
import { Avatar, Heading, Text } from '@theme-ui/components';
import { jsx } from 'theme-ui';

import useSiteMetadata from '../hooks/use-site-metadata';
import SocialLinks from './social-links';

const AuthorBannerMain = ({
  avatar = '',
  author = '',
  authorDescription = '',
  socialLinks,
  //
  avatarStyle = {},
  //
  authorHeadingAs = 'h3',
  authorHeadingStyle = {},
  //
  authorDescriptionStyle = {},
  //
  socialLinksFontSize = '30px',
  socialLinksStyle = {},
  //
  children,
  ...props
}) => {
  return (
    <div
      sx={{
        bg: 'muted',
        borderRadius: 'authorBanner',
        px: ['6px', '36px'],
        pt: '36px',
        pb: '36px'
      }}
      {...props}
    >
      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}
      >
        {avatar ? (
          <Avatar
            sx={{ marginRight: '30px', mb: '4px', ...avatarStyle }}
            src={avatar}
          />
        ) : (
          ''
        )}
        <div>
          <Heading as={authorHeadingAs} sx={{ ...authorHeadingStyle }}>
            {author}
          </Heading>
          <Text sx={{ fontSize: [3], mb: '8px', ...authorDescriptionStyle }}>
            {authorDescription}
          </Text>
          {socialLinks && socialLinks.length > 0 ? (
            <SocialLinks
              socialLinks={socialLinks}
              fontSize={socialLinksFontSize}
              sx={{ ...socialLinksStyle }}
            />
          ) : (
            ''
          )}
        </div>
      </div>
      <div sx={{ px: ['6px', '6px'] }}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ({
  avatar = '',
  author = '',
  authorDescription = '',
  socialLinks,
  children,
  ...props
}) => {
  const siteMeta = useSiteMetadata();
  return (
    <AuthorBannerMain
      avatar={avatar || siteMeta.avatar}
      author={author || siteMeta.author}
      authorDescription={authorDescription || siteMeta.authorDescription}
      socialLinks={socialLinks || siteMeta.social}
      {...props}
    >
      {children}
    </AuthorBannerMain>
  );
};
