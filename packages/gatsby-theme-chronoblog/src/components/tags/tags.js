/** @jsx jsx */
import { Link } from 'gatsby';
import _ from 'lodash';
import { jsx } from 'theme-ui';

import useFeed from '../../hooks/use-feed';
import Button from '../button';

/**
 * @typedef {object} TagProps
 * @property {string} tag
 */

/**
 * @param {TagProps=} props
 */
const Tag = ({ tag }) => {
  return (
    <Link to="/feed" state={{ tag }}>
      <Button
        sx={{
          mr: ['5px'],
          mt: ['2px'],
          mb: ['2px'],
          px: '12px',
          py: '6px',
          fontSize: [0],
          opacity: 0.8
        }}
      >
        #{tag}
      </Button>
    </Link>
  );
};

const AllTagsButton = () => {
  return (
    <Link to="/feed">
      <Button
        sx={{
          mr: ['5px'],
          mt: ['2px'],
          mb: ['2px'],
          px: '12px',
          py: '6px',
          fontSize: [0],
          opacity: 0.8
        }}
      >
        all tags
      </Button>
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
  return (
    <div>
      {type === 'feed' ? <AllTagsButton /> : ''}
      {tags.map((t) => (
        <Tag key={t} tag={t} />
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
    if (!tagsUse) return <div />;
    if (tagsUse) return <Tags type={type} tags={tagsUse} />;
  }
  //
  return <div />;
};
