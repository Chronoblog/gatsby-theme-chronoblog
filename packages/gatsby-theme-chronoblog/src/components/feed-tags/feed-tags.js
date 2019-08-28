/** @jsx jsx */
import _ from 'lodash';
import { useContext } from 'react';
import { jsx } from 'theme-ui';

import FeedContext from '../../contexts/context-feed';
import useFeed from '../../hooks/use-feed';
import Tag from './tag';

export default () => {
  //
  const { onChangeTag, value } = useContext(FeedContext);
  //
  let feedItems = useFeed();
  feedItems = feedItems.filter((i) => !i.frontmatter.draft);
  feedItems = feedItems.filter((i) => !i.frontmatter.hide);
  //
  // item.frontmatter.tags
  let tags = feedItems.map((i) => i.frontmatter.tags);
  tags = _.flatten(tags);
  tags = _.uniq(tags);
  tags = tags.filter(Boolean);

  return (
    <div sx={{ marginY: [30] }}>
      {tags
        ? tags.map((i) => (
            <Tag key={i} tag={i} valueTag={value.tag} onClick={onChangeTag} />
          ))
        : ''}
    </div>
  );
};
