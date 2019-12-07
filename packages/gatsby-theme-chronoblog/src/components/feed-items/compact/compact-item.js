/** @jsx jsx */
import { jsx } from 'theme-ui';

import Date from '../../date';
import Tags from '../../tags';
import CompactComponents from './compact-components';

export default ({ item, isHovering }) => {
  return (
    <article sx={{ mb: '18px', mt: '6px', color: 'text' }}>
      <CompactComponents.ItemHoveringStyle
        sxHovering={{ opacity: 0.7 }}
        isHovering={isHovering}
      >
        <CompactComponents.ItemLink item={item}>
          <CompactComponents.ItemTitle item={item} />
        </CompactComponents.ItemLink>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            mt: '0px'
          }}
        >
          <CompactComponents.ItemLink item={item}>
            <Date
              date={item.frontmatter.date}
              sx={{ mr: '10px', mt: '6px' }}
              fontSize={[0]}
            />
          </CompactComponents.ItemLink>
          <Tags
            tagStyle={{ fontSize: [0], py: 1, px: 2, bg: 'transparent' }}
            type="item"
            tags={item.frontmatter.tags}
            showStatsNumber={false}
          />
        </div>
      </CompactComponents.ItemHoveringStyle>
    </article>
  );
};
