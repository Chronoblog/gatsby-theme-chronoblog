/** @jsx jsx */
import { Link } from 'gatsby';
import normalizeUrl from 'normalize-url';
import ReactHoverObserver from 'react-hover-observer';
import { jsx, Styled } from 'theme-ui';

import Date from '../../date';
import Tags from '../../tags';

const noStyleLink = {
  display: 'block',
  textDecoration: 'none',
  color: 'inherit'
};

/**
 * @param {*} eTarget
 * @param {string} className
 * @returns {boolean}
 */
const eClassCheck = (eTarget, className = '') => {
  if (!className || !eTarget) return false;
  if (eTarget.className.includes(className)) return true;
  if (eTarget.parentElement.className.includes(className)) return true;
  if (eTarget.parentElement.parentElement.className.includes(className))
    return true;
  if (
    eTarget.parentElement.parentElement.parentElement.className.includes(
      className
    )
  )
    return true;
  if (
    eTarget.parentElement.parentElement.parentElement.parentElement.className.includes(
      className
    )
  )
    return true;
  if (
    eTarget.parentElement.parentElement.parentElement.parentElement.parentElement.className.includes(
      className
    )
  )
    return true;
  return false;
};

const LinkCompact = ({ item, children, ...props }) => {
  // links
  if (item.frontmatter.link && item.fields.type === 'links') {
    const link = normalizeUrl(item.frontmatter.link);
    return (
      <a
        className="hover-on"
        rel="noopener noreferrer"
        target="_blank"
        href={link}
        sx={noStyleLink}
        {...props}
      >
        {children}
      </a>
    );
  }
  // notes
  if (item.fields.type === 'notes')
    return (
      <Link
        className="hover-on"
        to={item.fields.slug}
        sx={noStyleLink}
        {...props}
      >
        {children}
      </Link>
    );
  // posts / rest
  return (
    <Link
      className="hover-on"
      to={item.fields.slug}
      sx={noStyleLink}
      {...props}
    >
      {children}
    </Link>
  );
};

const titleForNoteSlice = (string, sliceTo = 40) => {
  string = string.replace(/\.\.\.$/, '');
  if (string.length > sliceTo) {
    string = string.slice(0, sliceTo);
    return `${string}...`;
  }
  return string;
};

const TitleForNote = ({ item }) => {
  if (item.frontmatter.title) return item.frontmatter.title;
  if (item.headings && item.headings.length > 0) {
    return item.headings[0].value;
  }
  if (item.frontmatter.description)
    return titleForNoteSlice(item.frontmatter.description);
  return titleForNoteSlice(item.excerpt);
};

const TitleCompact = ({ item, ...props }) => {
  const style = {
    fontSize: [1, 1],
    fontWeight: 'normal',
    mb: '0px',
    lineHeight: null
  };
  if (
    item.frontmatter.title &&
    item.frontmatter.link &&
    item.fields.type === 'links'
  ) {
    return (
      <Styled.h3 sx={style} {...props}>
        {`🔗 ${item.frontmatter.title}`}
      </Styled.h3>
    );
  }
  if (item.fields.type === 'notes') {
    return (
      <Styled.h3 sx={style} {...props}>
        <TitleForNote item={item} />
      </Styled.h3>
    );
  }
  return (
    <Styled.h3 sx={style} {...props}>{`${item.frontmatter.title}`}</Styled.h3>
  );
};

/**
 * @typedef {object} Props
 * @property {boolean=} isHovering
 * @property {object=} sxHover
 * @property {React.ReactNode=} children
 */

/**
 * @param {Props=} props
 */
const CompactHoveringStyle = ({
  isHovering = false,
  sxHover = { opacity: 0.7 },
  children
}) => {
  return isHovering ? (
    <div sx={{ ...sxHover }}>{children}</div>
  ) : (
    <div>{children}</div>
  );
};

const CompactMain = ({ isHovering, item }) => {
  return (
    <article sx={{ mb: '18px', mt: '6px', color: 'text' }}>
      <CompactHoveringStyle isHovering={isHovering}>
        <LinkCompact item={item}>
          <TitleCompact item={item} />
        </LinkCompact>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            mt: '0px'
          }}
        >
          <LinkCompact item={item}>
            <Date
              date={item.frontmatter.date}
              sx={{ mr: '10px', mt: '6px' }}
              fontSize={[0]}
            />
          </LinkCompact>
          <Tags
            tagStyle={{ fontSize: [0], py: 1, px: 2, bg: 'transparent' }}
            type="item"
            tags={item.frontmatter.tags}
            showStatsNumber={false}
          />
        </div>
      </CompactHoveringStyle>
    </article>
  );
};

export default ({ item }) => {
  //
  return (
    <ReactHoverObserver
      {...{
        onMouseOver: ({ e, setIsHovering, unsetIsHovering }) =>
          eClassCheck(e.target, 'hover-on')
            ? setIsHovering()
            : unsetIsHovering(),
        onFocus: ({ e, setIsHovering, unsetIsHovering }) =>
          eClassCheck(e.target, 'hover-on')
            ? setIsHovering()
            : unsetIsHovering()
      }}
    >
      {({ isHovering }) => <CompactMain isHovering={isHovering} item={item} />}
    </ReactHoverObserver>
  );
};
