/** @jsx jsx */
import { jsx } from 'theme-ui';

import CoverImage from '../../cover-image';
import Date from '../../date';
import Tags from '../../tags';
import CardComponents from './card-components';

export default ({ item, isHovering, uiText }) => {
  return (
    <article sx={{ mb: '40px', mt: '20px', color: 'text' }}>
      <CardComponents.ItemHoveringStyle isHovering={isHovering}>
        <CardComponents.ItemLink item={item}>
          <CoverImage data={item} type="card" />
        </CardComponents.ItemLink>
        <CardComponents.ItemBody item={item}>
          <CardComponents.LinkExternalIconBg item={item}>
            <CardComponents.ItemLink item={item}>
              <div sx={{ px: ['10px', '20px'], pt: ['10px', '20px'] }}>
                <CardComponents.ItemTitle item={item} />
                <CardComponents.LinkText item={item} />
                <div sx={{ mb: 2 }}>
                  <Date date={item.frontmatter.date} />
                </div>
              </div>
            </CardComponents.ItemLink>
            <div sx={{ px: ['10px', '20px'] }}>
              <CardComponents.Description item={item} />
              <CardComponents.Excerpt item={item} />
              <CardComponents.BodyMdx item={item} />
              <CardComponents.ItemLink item={item}>
                <CardComponents.ReadMoreButton
                  item={item}
                  text={uiText.cardReadMoreButton}
                />
              </CardComponents.ItemLink>
            </div>
          </CardComponents.LinkExternalIconBg>
          <div sx={{ px: ['10px', '20px'], mt: '10px', pb: '10px' }}>
            <Tags tags={item.frontmatter.tags} />
          </div>
        </CardComponents.ItemBody>
      </CardComponents.ItemHoveringStyle>
    </article>
  );
};
