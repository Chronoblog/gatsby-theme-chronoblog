/** @jsx jsx */
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import normalizeUrl from 'normalize-url';
import ReactHoverObserver from 'react-hover-observer';
import { jsx, Styled } from 'theme-ui';

import CoverImage from '../../cover-image';
import Date from '../../date';
import Tags from '../../tags';

const noStyleLink = {
  display: 'block',
  textDecoration: 'none',
  color: 'inherit'
};

const LinkCard = ({ item, children }) => {
  //
  // links
  if (item.frontmatter.link && item.parent.sourceInstanceName === 'links') {
    const link = normalizeUrl(item.frontmatter.link);
    return (
      <a rel="noopener noreferrer" target="_blank" href={link} sx={noStyleLink}>
        <div className="hover-on">{children}</div>
      </a>
    );
  }
  //
  // notes
  if (item.parent.sourceInstanceName === 'notes') return <div>{children}</div>;
  //
  // posts / rest
  return (
    <Link to={item.fields.slug} sx={noStyleLink}>
      <div className="hover-on">{children}</div>
    </Link>
  );
};

const LinkText = ({ item }) => {
  if (item.frontmatter.link && item.parent.sourceInstanceName === 'links') {
    const link = normalizeUrl(item.frontmatter.link);
    return (
      <Styled.p
        sx={{
          mt: 2,
          mb: 2,
          fontSize: [1],
          color: 'primary',
          fontWeight: 'bold'
        }}
      >
        {`${link}`}
      </Styled.p>
    );
  }
  return <div />;
};

const CardTitle = ({ item }) => {
  if (
    item.frontmatter.title &&
    item.frontmatter.link &&
    item.parent.sourceInstanceName === 'links'
  ) {
    return (
      <Styled.h2 sx={{ mb: '6px', mt: '0px' }}>
        {`🔗 ${item.frontmatter.title}`}
      </Styled.h2>
    );
  }
  return (
    <Styled.h2 sx={{ mb: '6px', mt: '0px' }}>
      {`${item.frontmatter.title}`}
    </Styled.h2>
  );
};

const LinkIconBg = ({
  item,
  color = 'gray',
  fillOpacity = '0.2',
  children
}) => {
  //
  const exLinkIcon = `'data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="${color}" fill-opacity="${fillOpacity}" d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"></path></svg>'`;
  //
  if (
    item.frontmatter.link &&
    item.parent &&
    item.parent.sourceInstanceName &&
    item.parent.sourceInstanceName === 'links'
  ) {
    return (
      <div
        sx={{
          backgroundImage: `url(${exLinkIcon})`,
          backgroundSize: '90px',
          backgroundPosition: '97% 20px',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {children}
      </div>
    );
  }
  return <div>{children}</div>;
};

const Description = ({ item }) => {
  if (item.frontmatter && item.frontmatter.description)
    return <Styled.p>{item.frontmatter.description}</Styled.p>;
  return <div />;
};

const Excerpt = ({ item }) => {
  if (
    item.parent.sourceInstanceName === 'notes' ||
    item.parent.sourceInstanceName === 'links'
  )
    return <div />;
  if (item.excerpt) return <Styled.p>{item.excerpt}</Styled.p>;
  return <div />;
};

const BodyMdx = ({ item }) => {
  if (
    item.parent.sourceInstanceName === 'notes' ||
    item.parent.sourceInstanceName === 'links'
  ) {
    return <MDXRenderer>{item.body}</MDXRenderer>;
  }
  return <div />;
};

const HoverStyle = ({ isHovering = false, style, children }) => (
  <div
    sx={{
      ...style,
      borderColor: isHovering ? 'secondary' : 'muted',
      opacity: isHovering ? 0.8 : 1
    }}
  >
    {children}
  </div>
);

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

const CardStyle = ({ item, children }) => {
  const regStyle = {
    my: '20px',
    pb: '10px',
    color: 'text',
    bg: 'inherit',
    border: '2px',
    borderStyle: 'solid',
    borderRadius: [0]
  };
  //
  if (item.parent && item.parent.sourceInstanceName === 'notes')
    return (
      <div
        sx={{
          ...regStyle,
          borderColor: 'muted'
        }}
      >
        {children}
      </div>
    );
  //
  return (
    <ReactHoverObserver
      {...{
        onMouseOver: ({ e, setIsHovering, unsetIsHovering }) => {
          if (eClassCheck(e.target, 'hover-on')) {
            setIsHovering();
          } else {
            unsetIsHovering();
          }
        }
      }}
    >
      <HoverStyle style={regStyle}>{children}</HoverStyle>
    </ReactHoverObserver>
  );
};

const TagsComponent = ({ tags }) => {
  if (tags && tags !== null) {
    return (
      <div
        sx={{
          mt: '10px',
          px: '20px',
          pb: '10px'
        }}
      >
        <Tags type="item" tags={tags} />
      </div>
    );
  }
  return <div />;
};

const ReadMoreButton = ({ item, text }) => {
  if (text && item.parent.sourceInstanceName === 'posts')
    return (
      <Styled.p
        sx={{
          fontSize: [1],
          opacity: 0.8,
          fontWeight: 'bold'
        }}
      >
        {text}
      </Styled.p>
    );
  return <div />;
};

export default ({ item, uiText }) => {
  //
  const { date } = item.frontmatter;
  const { tags } = item.frontmatter;
  //
  return (
    <article>
      <CardStyle item={item}>
        <LinkCard item={item}>
          <CoverImage data={item} />
        </LinkCard>
        <LinkIconBg item={item}>
          <LinkCard item={item}>
            <div sx={{ px: '20px', pt: '20px' }}>
              <CardTitle item={item} />
              <LinkText item={item} />
              <div sx={{ mb: 2 }}>
                <Date date={date} />
              </div>
            </div>
          </LinkCard>
          <div sx={{ px: '20px' }}>
            <Description item={item} />
            <Excerpt item={item} />
            <BodyMdx item={item} />
            <LinkCard item={item}>
              <ReadMoreButton item={item} text={uiText.cardReadMoreButton} />
            </LinkCard>
          </div>
        </LinkIconBg>
        <TagsComponent tags={tags} />
      </CardStyle>
    </article>
  );
};
