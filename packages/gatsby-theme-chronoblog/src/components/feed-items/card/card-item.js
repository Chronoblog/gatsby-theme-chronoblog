/** @jsx jsx */
import { jsx } from 'theme-ui';

import CoverImage from '../../cover-image';
import Date from '../../date';
import Tags from '../../tags';
import CardComponents from './card-components';

const Card = CardComponents;

export default ({ item, isHovering, linksBeforeTitle = '' }) => {
  return (
    <article sx={{ mb: '40px', mt: '20px', color: 'text' }}>
      <Card.HoveringStyle isHovering={isHovering}>
        <Card.Link item={item}>
          <CoverImage data={item} type="card" />
        </Card.Link>
        <Card.Body item={item}>
          <Card.Link item={item}>
            <div sx={{ pt: ['10px', '20px'], mb: 2 }}>
              <Card.Title item={item} linksBeforeTitle={linksBeforeTitle} />
              <Card.LinkText item={item} />
              <Date date={item.frontmatter.date} />
            </div>
          </Card.Link>
          <Card.Content item={item} />
          <Card.Link item={item}>
            <Card.ReadMoreButton item={item} />
          </Card.Link>
          <div sx={{ marginTop: '20px' }}>
            <Tags type="item" tags={item.frontmatter.tags} />
          </div>
        </Card.Body>
      </Card.HoveringStyle>
    </article>
  );
};
