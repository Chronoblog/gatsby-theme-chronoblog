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
 * @property {string=} pageContextTag
 * @property {object} style
 */

/**
 * @param {TagProps=} props
 */
const Tag = ({ tag, style, pageContextTag }) => {
  const active = tag === pageContextTag;
  return (
    <Link to={`/tags/${_.kebabCase(tag)}/`}>
      <Button sx={style} active={active}>
        #{tag}
      </Button>
    </Link>
  );
};

const AllTagsButton = ({ style }) => {
  const {
    uiText: { allTagsButton }
  } = useSiteMetadata();
  return (
    <Link to="/tags">
      <Button sx={style}>{allTagsButton}</Button>
    </Link>
  );
};

/**
 * @typedef {object} TagsProps
 * @property {string[]} tags
 * @property {string} type
 * @property {string=} pageContextTag
 */

/**
 * @param {TagsProps=} props
 */
const Tags = ({ type, tags, pageContextTag }) => {
  const style = {
    mr: type === 'feed' ? '6px' : '5px',
    my: type === 'feed' ? '3px' : '2.5px',
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
        <Tag key={t} tag={t} style={style} pageContextTag={pageContextTag} />
      ))}
    </div>
  );
};

/**
 * @typedef {object} Props
 * @property {'feed' | 'item'=} type
 * @property {string[]=} tags
 * @property {string=} pageContextTag
 */

/**
 * @param {Props=} props
 */
export default ({ type = 'feed', tags, pageContextTag }) => {
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
    return (
      <Tags type={type} tags={tagsFromItems} pageContextTag={pageContextTag} />
    );
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
