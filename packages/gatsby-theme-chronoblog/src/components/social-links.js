/** @jsx jsx */
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { jsx, Styled } from 'theme-ui';

import useSiteMetadata from '../hooks/use-site-metadata';

config.autoAddCss = false;
library.add(fab);

const SocialUrl = ({ icon, url, alt, ...props }) => {
  if (!icon || !url) return <div />;
  //
  return (
    <div {...props}>
      <Styled.a
        target="_blank"
        rel="noopener"
        href={url}
        alt={alt}
        aria-label={alt}
        sx={{
          color: 'currentcolor',
          textDecoration: 'none'
        }}
      >
        &nbsp;
        <FontAwesomeIcon icon={['fab', icon]} />
        &nbsp;
      </Styled.a>
    </div>
  );
};

const SocialLinksMain = ({ justifyContent, fontSizeObj, social, ...props }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        fontFamily: 'sans-serif',
        justifyContent,
        ...fontSizeObj
      }}
      {...props}
    >
      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {social.map((s) => (
          <SocialUrl key={s.url} icon={s.icon} url={s.url} alt={s.alt} aria-label={s.alt}/>
        ))}
      </div>
    </div>
  );
};

/**
 * @typedef {object} SocialLinksProps
 * @property {React.ReactNode=} children
 * @property {string | number=} fontSize
 * @property {string | string[]=} justifyContent
 * @property {*=} socialLinks
 */

/**
 * @param {SocialLinksProps=} props
 */
export default ({
  fontSize,
  justifyContent = ['center', 'start'],
  socialLinks,
  ...props
}) => {
  let fontSizeObj = {};
  if (fontSize) fontSizeObj = { fontSize };
  //
  if (socialLinks && socialLinks.length > 0) {
    return (
      <SocialLinksMain
        fontSizeObj={fontSizeObj}
        justifyContent={justifyContent}
        social={socialLinks}
        {...props}
      />
    );
  }
  //
  const siteMeta = useSiteMetadata();
  if (!siteMeta.social) return <div />;
  const socialFromMeta = siteMeta.social;
  if (socialFromMeta && socialFromMeta.length > 0)
    return (
      <SocialLinksMain
        fontSizeObj={fontSizeObj}
        justifyContent={justifyContent}
        social={socialFromMeta}
        {...props}
      />
    );
  //
  return <div />;
};
