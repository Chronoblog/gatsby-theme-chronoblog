/** @jsx jsx */
import GatsbyImage from 'gatsby-image';
import get from 'lodash/get';
import { isFirefox } from 'react-device-detect';
import { jsx } from 'theme-ui';

const Image = (props) => <GatsbyImage {...props} />;

const CoverImageBase = ({
  data,
  type,
  height,
  coverFluidImage,
  backdropType = `blurImage`
}) => {
  const borderRadiusForCard =
    type === 'card'
      ? {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      : {};
  //
  const blurImageStyle = {
    backdropFilter: `drop-shadow(0px 0px 20px black)`,
    boxShadow: 'inset 0px 0px 15px black',
    backgroundImage: `url(${coverFluidImage.src})`,
    backgroundSize: 'cover'
  };
  let backdropStyle = {};
  if (backdropType === `blurImage`) backdropStyle = blurImageStyle;
  //
  const imageTitle = get(data, 'frontmatter.title', '');
  //
  return (
    <div
      sx={{
        maxHeight: height
      }}
    >
      <div
        sx={{
          maxHeight: height,
          ...backdropStyle,
          backgroundPosition: 'center',
          borderRadius: 'card',
          ...borderRadiusForCard
        }}
      >
        <Image
          sx={{
            backdropFilter: 'blur(5px) contrast(50%)',
            WebkitBackdropFilter: 'blur(5px) contrast(50%)',
            maxHeight: height,
            minHeight: height,
            borderRadius: 'card',
            ...borderRadiusForCard
          }}
          imgStyle={{
            objectFit: 'none',
            objectPosition: '50% 50%'
          }}
          alt={imageTitle}
          title={imageTitle}
          fluid={coverFluidImage}
        />
      </div>
    </div>
  );
};

export default ({ data, type = 'post' }) => {
  //
  const coverFluidImage = get(
    data,
    'frontmatter.cover.childImageSharp["fluid"]',
    undefined
  );
  if (!coverFluidImage) return <div />;
  //
  let backdropType = 'blurImage';
  if (isFirefox) backdropType = 'none';
  //
  const heightMain = 366;
  const heightMobile = 183;
  const heightArray = [heightMobile, heightMain];
  //
  return (
    <CoverImageBase
      data={data}
      type={type}
      height={heightArray}
      coverFluidImage={coverFluidImage}
      backdropType={backdropType}
    />
  );
};
