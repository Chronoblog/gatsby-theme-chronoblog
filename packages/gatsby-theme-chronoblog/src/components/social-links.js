/** @jsx jsx */
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { jsx, Styled } from 'theme-ui';

import useSiteMetadata from '../hooks/use-site-metadata';

config.autoAddCss = false;
library.add(fab);

const SocialUrl = ({ icon, url, ...props }) => {
  if (!icon || !url) return <div />;
  //
  return (
    <div {...props}>
      <Styled.a
        href={url}
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

/**
 * @typedef {object} SocialLinks
 * @property {string | number=} fontSize
 * @property {string=} justifyContent
 */

/**
 * @param {SocialLinks=} props
 */
export default ({ fontSize, justifyContent = 'start', ...props }) => {
  const siteMeta = useSiteMetadata();
  const { social } = siteMeta;
  if (social.length === 0) return <div />;
  //
  let fontSizeObj = {};
  if (fontSize) fontSizeObj = { fontSize };
  //
  return (
    <div
      sx={{ display: 'flex', flexWrap: 'wrap', justifyContent, ...fontSizeObj }}
      {...props}
    >
      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {social.map((s) => (
          <SocialUrl key={s.url} icon={s.icon} url={s.url} />
        ))}
      </div>
    </div>
  );
};
