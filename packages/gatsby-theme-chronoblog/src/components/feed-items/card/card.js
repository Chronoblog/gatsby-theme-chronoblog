/** @jsx jsx */
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import get from 'lodash/get';
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
      >
        {children}
      </a>
    );
  }
  // notes
  if (item.fields.type === 'notes') return <div>{children}</div>;
  // posts / rest
  return (
    <Link className="hover-on" to={item.fields.slug} sx={noStyleLink}>
      {children}
    </Link>
  );
};

const LinkText = ({ item }) => {
  if (item.frontmatter.link && item.fields.type === 'links') {
    const link = normalizeUrl(item.frontmatter.link);
    return (
      <Styled.p
        sx={{
          mt: 2,
          mb: 2,
          fontSize: [1],
          color: 'link',
          textDecorationLine: 'underline',
          textDecorationStyle: 'solid',
          textDecorationColor: 'link',
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
  const style = { mb: '6px', mt: '0px' };
  if (
    item.frontmatter.title &&
    item.frontmatter.link &&
    item.fields.type === 'links'
  ) {
    return <Styled.h2 sx={style}>{`🔗 ${item.frontmatter.title}`}</Styled.h2>;
  }
  return <Styled.h2 sx={style}>{`${item.frontmatter.title}`}</Styled.h2>;
};

const LinkExternalIconBg = ({
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
    item.fields.type &&
    item.fields.type === 'links'
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
  if (item.fields.type === 'notes' || item.fields.type === 'links')
    return <div />;
  if (item.excerpt && !item.frontmatter.description)
    return <Styled.p>{item.excerpt}</Styled.p>;
  return <div />;
};

const BodyMdx = ({ item }) => {
  if (item.fields.type === 'notes' || item.fields.type === 'links') {
    return <MDXRenderer>{item.body}</MDXRenderer>;
  }
  return <div />;
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

const CardStyle = ({ children, isHovering = false }) => (
  <div
    sx={{
      my: '20px',
      color: 'text',
      opacity: isHovering ? 0.8 : 1,
      border: '2px',
      borderStyle: 'solid',
      borderRadius: 'card',
      borderColor: isHovering ? 'secondary' : 'muted',
      backgroundColor: isHovering ? 'secondary' : 'muted'
    }}
  >
    {children}
  </div>
);

const TagsComponent = ({ tags }) => {
  if (tags && tags !== null) {
    return (
      <div
        sx={{
          mt: '10px',
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
  if (text && item.fields.type === 'posts')
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

const CardBody = ({ item, children }) => {
  const coverFluidImage = get(
    item,
    'frontmatter.cover.childImageSharp["fluid"]',
    undefined
  );
  return (
    <div
      sx={{
        backgroundColor: 'background',
        pb: ['5px', '10px'],
        borderRadius: 'card',
        borderTopLeftRadius: coverFluidImage ? 0 : null,
        borderTopRightRadius: coverFluidImage ? 0 : null
      }}
    >
      {children}
    </div>
  );
};

const CardMain = ({ isHovering, item, uiText, tags, date }) => {
  return (
    <article>
      <CardStyle isHovering={isHovering}>
        <LinkCard item={item}>
          <CoverImage data={item} type="card" />
        </LinkCard>
        <CardBody item={item}>
          <LinkExternalIconBg item={item}>
            <LinkCard item={item}>
              <div sx={{ px: ['10px', '20px'], pt: ['10px', '20px'] }}>
                <CardTitle item={item} />
                <LinkText item={item} />
                <div sx={{ mb: 2 }}>
                  <Date date={date} />
                </div>
              </div>
            </LinkCard>
            <div sx={{ px: ['10px', '20px'] }}>
              <Description item={item} />
              <Excerpt item={item} />
              <BodyMdx item={item} />
              <LinkCard item={item}>
                <ReadMoreButton item={item} text={uiText.cardReadMoreButton} />
              </LinkCard>
            </div>
          </LinkExternalIconBg>
          <div sx={{ px: ['10px', '20px'] }}>
            <TagsComponent tags={tags} />
          </div>
        </CardBody>
      </CardStyle>
    </article>
  );
};

export default ({ item, uiText }) => {
  //
  const { date } = item.frontmatter;
  const { tags } = item.frontmatter;
  const { type } = item.fields;
  //
  if (type === 'notes')
    return (
      <CardMain
        isHovering={false}
        item={item}
        date={date}
        tags={tags}
        uiText={uiText}
      />
    );
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
        <CardMain
          isHovering={isHovering}
          item={item}
          date={date}
          tags={tags}
          uiText={uiText}
        />
      )}
    </ReactHoverObserver>
  );
};
