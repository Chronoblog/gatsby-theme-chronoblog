/** @jsx jsx */
import { Link } from 'gatsby';
import _ from 'lodash';
import { jsx } from 'theme-ui';

import useFeed from '../../hooks/use-feed';
import useSiteMetadata from '../../hooks/use-site-metadata';
import Button from '../button';

/**
 * @typedef {object} TagProps
 * @property {string} tag
 * @property {object} style
 */

/**
 * @param {TagProps=} props
 */
const Tag = ({ tag, style }) => {
  return (
    <Link to="/feed" state={{ tag }}>
      <Button sx={style}>#{tag}</Button>
    </Link>
  );
};

const AllTagsButton = ({ style }) => {
  const {
    uiText: { allTagsButton }
  } = useSiteMetadata();
  return (
    <Link to="/feed">
      <Button sx={style}>{allTagsButton}</Button>
    </Link>
  );
};

/**
 * @typedef {object} TagsProps
 * @property {string[]} tags
 * @property {string} type
 */

/**
 * @param {TagsProps=} props
 */
const Tags = ({ type, tags }) => {
  const style = {
    mr: type === 'feed' ? '6px' : '5px',
    my: '2px',
    px: type === 'feed' ? '16px' : '12px',
    py: type === 'feed' ? '10px' : '6px',
    fontSize: type === 'feed' ? [2] : [0],
    opacity: 0.8
  };
  //
  return (
    <div>
      {type === 'feed' ? <AllTagsButton style={style} /> : ''}
      {tags.map((t) => (
        <Tag key={t} tag={t} style={style} />
      ))}
    </div>
  );
};

/**
 * @typedef {object} Props
 * @property {'feed' | 'item'=} type
 * @property {string[]=} tags
 */

/**
 * @param {Props=} props
 */
export default ({ type = 'feed', tags }) => {
  if (type === 'feed') {
    let feedItems = useFeed();
    feedItems = feedItems.filter((i) => !i.frontmatter.draft);
    feedItems = feedItems.filter((i) => !i.frontmatter.hide);
    //
    // item.frontmatter.tags
    let tagsFromItems = feedItems.map((i) => i.frontmatter.tags);
    tagsFromItems = _.flatten(tagsFromItems);
    tagsFromItems = _.uniq(tagsFromItems);
    tagsFromItems = tagsFromItems.filter(Boolean);
    return <Tags type={type} tags={tagsFromItems} />;
  }
  //
  if (tags) {
    let tagsUse = tags;
    tagsUse = tagsUse.filter((t) => typeof t === 'string');
    tagsUse = tagsUse.filter((t) => t !== '');
    if (tagsUse) return <Tags type={type} tags={tagsUse} />;
  }
  //
  return <div />;
};
