/** @jsx jsx */
import { jsx } from 'theme-ui';

import CoverImage from '../../cover-image';
import Date from '../../date';
import Tags from '../../tags';
import CardComponents from './card-components';

export default ({ item, isHovering }) => {
  return (
    <article sx={{ mb: '40px', mt: '20px', color: 'text' }}>
      <CardComponents.ItemHoveringStyle isHovering={isHovering}>
        <CardComponents.ItemLink item={item}>
          <CoverImage data={item} type="card" />
        </CardComponents.ItemLink>
        <CardComponents.ItemBody item={item}>
          <CardComponents.ItemLink item={item}>
            <div sx={{ pt: ['10px', '20px'], mb: 2 }}>
              <CardComponents.ItemTitle item={item} />
              <CardComponents.ItemLinkText item={item} />
              <Date date={item.frontmatter.date} />
            </div>
          </CardComponents.ItemLink>
          <CardComponents.ItemContent item={item} />
          <CardComponents.ItemLink item={item}>
            <CardComponents.ItemReadMoreButton item={item} />
          </CardComponents.ItemLink>
          <Tags tags={item.frontmatter.tags} />
        </CardComponents.ItemBody>
      </CardComponents.ItemHoveringStyle>
    </article>
  );
};
