/** @jsx jsx */
import { jsx } from 'theme-ui';

import Date from '../../date';
import Tags from '../../tags';
import CompactComponents from './compact-components';

const Compact = CompactComponents;

export default ({ item, isHovering, linksBeforeTitle = '' }) => {
  return (
    <article sx={{ mb: '18px', mt: '6px', color: 'text' }}>
      <Compact.HoveringStyle
        sxHovering={{ opacity: 0.7 }}
        isHovering={isHovering}
      >
        <Compact.Link item={item}>
          <Compact.Title item={item} linksBeforeTitle={linksBeforeTitle} />
        </Compact.Link>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            mt: '0px'
          }}
        >
          <Compact.Link item={item}>
            <Date
              date={item.frontmatter.date}
              sx={{ mr: '10px', mt: '6px' }}
              fontSize={[0]}
            />
          </Compact.Link>
          <Tags
            tagStyle={{ fontSize: [0], py: 1, px: 2, bg: 'transparent' }}
            type="item"
            tags={item.frontmatter.tags}
            showStatsNumber={false}
          />
        </div>
      </Compact.HoveringStyle>
    </article>
  );
};
