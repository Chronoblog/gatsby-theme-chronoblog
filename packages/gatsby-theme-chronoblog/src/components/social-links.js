/** @jsx jsx */
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { jsx, Styled } from 'theme-ui';

import useSiteMetadata from '../hooks/use-site-metadata';

config.autoAddCss = false;
library.add(fab);

const SocialUrlLink = ({ url, altTextToUse, children }) => {
  return (
    <Styled.a
      target="_blank"
      rel="noopener"
      href={url}
      alt={altTextToUse}
      aria-label={altTextToUse}
      sx={{
        color: 'currentcolor',
        textDecoration: 'none'
      }}
    >
      {children}
    </Styled.a>
  );
};

/** @typedef { import('@fortawesome/fontawesome-svg-core').IconProp } IconProp */
/** @typedef { import('@fortawesome/fontawesome-common-types').IconName } IconName */

/**
 *
 * @param {IconName} icon
 * @returns {IconProp}
 */
const iconToUseFun = (icon) => {
  if (icon === 'envelope') return 'envelope';
  if (icon === 'at') return 'at';
  if (icon === 'phone') return 'phone';
  return ['fab', icon];
};

const SocialUrl = ({ icon, url, altText, index, ...props }) => {
  if (!icon || !url) return <div />;
  const altTextToUse = altText || icon;
  //
  return (
    <div {...props}>
      <SocialUrlLink url={url} altTextToUse={altTextToUse}>
        {index === 0 ? '' : '\u00A0'}
        <FontAwesomeIcon icon={iconToUseFun(icon)} />
        &nbsp;
      </SocialUrlLink>
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
        paddingX: '1px',
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
        {social.map((s, index) => (
          <SocialUrl
            key={s.url}
            icon={s.icon}
            url={s.url}
            altText={s.altText}
            aria-label={s.alt}
            index={index}
          />
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
