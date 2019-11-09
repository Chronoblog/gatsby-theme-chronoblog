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
  const link = active ? '/tags' : `/tags/${_.kebabCase(tag)}`;
  return (
    <Link to={link}>
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
  style = {
    ...style,
    boxShadow: (theme) => `inset 0 0 0 2px ${theme.colors.muted}`,
    bg: `rgba(0,0,0,0)`
  };
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
 * @property {boolean=} showAllTagsButton
 * @property {string=} pageContextTag
 */

/**
 * @param {TagsProps=} props
 */
const Tags = ({ type, showAllTagsButton = false, tags, pageContextTag }) => {
  const style = {
    mr: type === 'feed' ? '6px' : '5px',
    my: type === 'feed' ? '3px' : '2.5px',
    px: type === 'feed' ? '16px' : '14px',
    py: type === 'feed' ? '10px' : '8px',
    fontSize: [2],
    opacity: 0.75
  };
  //
  return (
    <div>
      {type === 'feed' && showAllTagsButton ? (
        <AllTagsButton style={style} />
      ) : (
        ''
      )}
      {tags.map((t) => (
        <Tag key={t} tag={t} style={style} pageContextTag={pageContextTag} />
      ))}
    </div>
  );
};

/**
 * @typedef {object} Props
 * @property {'feed' | 'item'=} type
 * @property {boolean=} showAllTagsButton
 * @property {string[]=} tags
 * @property {string=} pageContextTag
 */

/**
 * @param {Props=} props
 */
export default ({
  type = 'feed',
  showAllTagsButton = true,
  tags,
  pageContextTag
}) => {
  if (type === 'feed') {
    const feedItems = useFeed();
    //
    // item.frontmatter.tags
    let tagsFromItems = feedItems.map((i) => i.frontmatter.tags);
    tagsFromItems = _.flatten(tagsFromItems);
    tagsFromItems = _.uniq(tagsFromItems);
    tagsFromItems = tagsFromItems.filter(Boolean);
    return (
      <div id="tags" sx={{ marginY: [20] }}>
        <Tags
          type={type}
          showAllTagsButton={showAllTagsButton}
          tags={tagsFromItems}
          pageContextTag={pageContextTag}
        />
      </div>
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
