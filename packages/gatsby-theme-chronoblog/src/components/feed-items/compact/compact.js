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

const LinkCompact = ({ item, children }) => {
  // links
  if (item.frontmatter.link && item.fields.type === 'links') {
    const link = normalizeUrl(item.frontmatter.link);
    return (
      <a rel="noopener noreferrer" target="_blank" href={link} sx={noStyleLink}>
        <div className="hover-on">{children}</div>
      </a>
    );
  }
  // notes
  if (item.fields.type === 'notes')
    return (
      <Link to={item.fields.slug} sx={noStyleLink}>
        <div className="hover-on">{children}</div>
      </Link>
    );
  // posts / rest
  return (
    <Link to={item.fields.slug} sx={noStyleLink}>
      <div className="hover-on">{children}</div>
    </Link>
  );
};

const TitleForNote = ({ item }) => {
  if (item.frontmatter.title) return item.frontmatter.title;
  // if (item.headings) {
  //   return item.headings.value;
  // }
  if (item.frontmatter.description) return item.frontmatter.description;
  return item.excerpt;
};

const TitleCompact = ({ item, ...props }) => {
  const style = { fontSize: [1, 1], fontWeight: 'normal', mb: '1px' };
  if (
    item.frontmatter.title &&
    item.frontmatter.link &&
    item.fields.type === 'links'
  ) {
    return (
      <Styled.h2 sx={style} {...props}>
        {`🔗 ${item.frontmatter.title}`}
      </Styled.h2>
    );
  }
  if (item.fields.type === 'notes') {
    return (
      <Styled.h2 sx={style} {...props}>
        <TitleForNote item={item} />
      </Styled.h2>
    );
  }
  return (
    <Styled.h2 sx={style} {...props}>{`${item.frontmatter.title}`}</Styled.h2>
  );
};

const CompactStyle = ({ children, isHovering = false }) => {
  return (
    <div
      sx={{
        my: '10px',
        color: 'text',
        opacity: isHovering ? 0.7 : 1
      }}
    >
      {children}
    </div>
  );
};

const CompactMain = ({ isHovering, item, date, tags }) => {
  return (
    <article>
      <CompactStyle isHovering={isHovering}>
        <LinkCompact item={item}>
          <TitleCompact item={item} />
        </LinkCompact>
        <div sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline' }}>
          <LinkCompact item={item}>
            <Date date={date} sx={{ mr: '10px' }} />
          </LinkCompact>
          <Tags
            tagStyle={{ fontSize: [0], py: 1, px: 2, bg: 'transparent' }}
            type="item"
            tags={tags}
            showStatsNumber={false}
          />
        </div>
      </CompactStyle>
    </article>
  );
};

export default ({ item }) => {
  const { date } = item.frontmatter;
  const { tags } = item.frontmatter;
  // const { type } = item.fields;
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
      {({ isHovering }) => (
        <CompactMain
          isHovering={isHovering}
          item={item}
          date={date}
          tags={tags}
        />
      )}
    </ReactHoverObserver>
  );
};
