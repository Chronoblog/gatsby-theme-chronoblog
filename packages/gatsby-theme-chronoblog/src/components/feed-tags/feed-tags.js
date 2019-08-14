/** @jsx jsx */
import _ from 'lodash';
import { useContext } from 'react';
import { jsx } from 'theme-ui';

import FeedContext from '../../contexts/context-feed';
import useFeed from '../../hooks/use-feed';
import Tag from './tag';

export default () => {
  //
  const { onChange } = useContext(FeedContext);
  //
  const feedItems = useFeed();
  //
  // item.frontmatter.tags
  let tags = feedItems.map((i) => i.frontmatter.tags);
  tags = _.flatten(tags);
  console.log(tags);
  tags = _.uniq(tags);
  tags = tags.filter(Boolean);

  return (
    <div>{tags ? tags.map((i) => <Tag tag={i} onClick={onChange} />) : ''}</div>
  );
};
