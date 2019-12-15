/** @jsx jsx */
import { Link as GatsbyLink } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import get from 'lodash/get';
import normalizeUrl from 'normalize-url';
import { jsx, Styled } from 'theme-ui';

import useSiteMetadata from '../../../hooks/use-site-metadata';

const noStyleLink = {
  display: 'block',
  textDecoration: 'none',
  color: 'inherit'
};

const ItemLink = ({ item, children }) => {
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
    <GatsbyLink className="hover-on" to={item.fields.slug} sx={noStyleLink}>
      {children}
    </GatsbyLink>
  );
};

const ItemLinkText = ({ item }) => {
  if (item.frontmatter.link && item.fields.type === 'links') {
    const link = normalizeUrl(item.frontmatter.link);
    return (
      <Styled.p
        sx={{
          mt: 2,
          mb: 2,
          fontSize: [1],
          color: 'link',
          fontWeight: 'bold'
        }}
      >
        {`${link}`}
      </Styled.p>
    );
  }
  return <div />;
};

const ItemTitle = ({ item, linksBeforeTitle = '' }) => {
  const style = { mb: '6px', mt: '0px' };
  if (
    item.frontmatter.title &&
    item.frontmatter.link &&
    item.fields.type === 'links'
  ) {
    return (
      <Styled.h2 sx={style}>
        {`${linksBeforeTitle}${item.frontmatter.title}`}
      </Styled.h2>
    );
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
    item.frontmatter &&
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

const ReadMoreButton = ({ children }) => (
  <Styled.p
    sx={{
      fontSize: [1],
      opacity: 0.8,
      fontWeight: 'bold'
    }}
  >
    {children}
  </Styled.p>
);

const ItemReadMoreButton = ({ item, text = '' }) => {
  const siteMeta = useSiteMetadata();
  const { uiText } = siteMeta;
  if (item.fields.type !== 'posts') return <div />;
  if (text) return <ReadMoreButton>{text}</ReadMoreButton>;
  if (uiText.cardReadMoreButton)
    return <ReadMoreButton>{uiText.cardReadMoreButton}</ReadMoreButton>;
  return <div />;
};

const ItemBody = ({ item, children }) => {
  const coverFluidImage = get(
    item,
    'frontmatter.cover.childImageSharp["fluid"]',
    undefined
  );
  return (
    <div
      sx={{
        borderRadius: 'card',
        backgroundColor: 'background',
        pb: ['10px', '20px'],
        px: ['10px', '20px'],
        borderTopLeftRadius: coverFluidImage ? 0 : null,
        borderTopRightRadius: coverFluidImage ? 0 : null
      }}
    >
      <LinkExternalIconBg item={item}>{children}</LinkExternalIconBg>
    </div>
  );
};

const ItemContent = ({ item }) => {
  return (
    <div>
      <Description item={item} />
      <Excerpt item={item} />
      <BodyMdx item={item} />
    </div>
  );
};

const ItemHoveringStyle = ({ children, isHovering = false }) => (
  <div
    sx={{
      opacity: isHovering ? 0.8 : 1,
      borderWidth: 'card',
      borderStyle: 'solid',
      borderRadius: 'card',
      borderColor: isHovering ? 'secondary' : 'muted',
      backgroundColor: isHovering ? 'secondary' : 'muted'
    }}
  >
    {children}
  </div>
);

const CardComponents = {
  Link: ItemLink,
  LinkText: ItemLinkText,
  Title: ItemTitle,
  ReadMoreButton: ItemReadMoreButton,
  Body: ItemBody,
  Content: ItemContent,
  HoveringStyle: ItemHoveringStyle
};
export default CardComponents;
