/** @jsx jsx */
import { Link } from 'gatsby';
import normalizeUrl from 'normalize-url';
import { jsx, Styled } from 'theme-ui';

import CoverImage from '../../cover-image';
import Date from '../../date';
import Tags from '../../tags';
// @ts-ignore
// import exLinkIcon from './external-link-alt-solid.svg';

const getDescriptionForCard = (fromFrontmatter, fromExcerpt) => {
  if (fromFrontmatter) return fromFrontmatter;
  if (fromFrontmatter === '') return '';
  if (fromExcerpt && fromExcerpt !== '') return fromExcerpt;
  return '';
};

const noStyleLink = {
  display: 'block',
  textDecoration: 'none',
  color: 'inherit'
};

const LinkCard = ({ item, children }) => {
  if (item.fields.link && item.parent.sourceInstanceName === 'links')
    return (
      <a href={item.fields.link} sx={noStyleLink}>
        {children}
      </a>
    );
  //
  return (
    <Link to={item.fields.slug} sx={noStyleLink}>
      {children}
    </Link>
  );
};

const LinkText = ({ item }) => {
  if (item.fields.link && item.parent.sourceInstanceName === 'links') {
    const link = normalizeUrl(item.fields.link);
    return (
      <Styled.p
        sx={{
          mt: 0,
          mb: 0,
          fontWeight: 'bold',
          opacity: '0.5'
        }}
      >
        {`${link}`}
      </Styled.p>
    );
  }
  return <div />;
};

const CardTitle = ({ item }) => {
  if (item.fields.link && item.parent.sourceInstanceName === 'links') {
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

const ExLinkIconBg = ({
  item,
  color = 'gray',
  fillOpacity = '0.2',
  children
}) => {
  //
  const exLinkIcon = `'data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="${color}" fill-opacity="${fillOpacity}" d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"></path></svg>'`;
  //
  if (item.fields.link && item.parent.sourceInstanceName === 'links') {
    return (
      <div
        sx={{
          backgroundImage: `url(${exLinkIcon})`,
          backgroundSize: '78px',
          backgroundPosition: '95% 5%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {children}
      </div>
    );
  }
  return <div>{children}</div>;
};

export default ({ item }) => {
  //
  const description = getDescriptionForCard(
    item.frontmatter.description,
    item.excerpt
  );
  const { date } = item.frontmatter;
  const { tags } = item.frontmatter;
  //
  return (
    <article>
      <div
        sx={{
          my: '20px',
          color: 'text',
          bg: 'inherit',
          border: '2px',
          borderColor: 'muted',
          borderStyle: 'solid',
          borderRadius: [0],
          '&:hover': {
            opacity: 0.9,
            borderColor: 'secondary'
          }
        }}
      >
        <LinkCard item={item}>
          <CoverImage data={item} />
        </LinkCard>
        <LinkCard item={item}>
          <div sx={{ px: '20px', pt: '20px' }}>
            <ExLinkIconBg item={item}>
              <CardTitle item={item} />
              <LinkText item={item} />
              <Date date={date} />
              <Styled.p sx={{ mb: '18px' }}>{description}</Styled.p>
            </ExLinkIconBg>
          </div>
        </LinkCard>
        {tags && tags !== null ? (
          <div sx={{ mt: '10px', px: '20px', pb: '20px' }}>
            <Tags tags={tags} />
          </div>
        ) : (
          ''
        )}
      </div>
    </article>
  );
};
