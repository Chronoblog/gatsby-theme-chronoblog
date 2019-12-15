/** @jsx jsx */
import ReactHoverObserver from 'react-hover-observer';
import { jsx } from 'theme-ui';

import CompactItem from './compact-item';

/**
 * @param {*} eTarget
 * @param {string} className
 * @returns {boolean}
 */
const eClassCheck = (eTarget, className = '') => {
  if (!className || !eTarget) return false;
  if (eTarget.className.includes(className)) return true;
  if (eTarget.parentElement.className.includes(className)) return true;
  if (eTarget.parentElement.parentElement.className.includes(className))
    return true;
  if (
    eTarget.parentElement.parentElement.parentElement.className.includes(
      className
    )
  )
    return true;
  if (
    eTarget.parentElement.parentElement.parentElement.parentElement.className.includes(
      className
    )
  )
    return true;
  if (
    eTarget.parentElement.parentElement.parentElement.parentElement.parentElement.className.includes(
      className
    )
  )
    return true;
  return false;
};

const ItemMain = ({ isHovering, item, linksBeforeTitle = '' }) => {
  return (
    <CompactItem
      isHovering={isHovering}
      item={item}
      linksBeforeTitle={linksBeforeTitle}
    />
  );
};

export default ({ item, linksBeforeTitle = '' }) => {
  //
  return (
    <ReactHoverObserver
      {...{
        onMouseOver: ({ e, setIsHovering, unsetIsHovering }) =>
          eClassCheck(e.target, 'hover-on')
            ? setIsHovering()
            : unsetIsHovering(),
        onFocus: ({ e, setIsHovering, unsetIsHovering }) =>
          eClassCheck(e.target, 'hover-on')
            ? setIsHovering()
            : unsetIsHovering()
      }}
    >
      {({ isHovering }) => (
        <ItemMain
          isHovering={isHovering}
          item={item}
          linksBeforeTitle={linksBeforeTitle}
        />
      )}
    </ReactHoverObserver>
  );
};
