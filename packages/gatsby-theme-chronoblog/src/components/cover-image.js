/** @jsx jsx */
import GatsbyImage from 'gatsby-image';
import get from 'lodash/get';
import { jsx } from 'theme-ui';

const Image = (props) => <GatsbyImage {...props} />;

const CoverImageBase = ({ data, type, height, coverFluidImage }) => {
  const borderRadiusForCard =
    type === 'card'
      ? {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      : {};
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
          backdropFilter: `drop-shadow(0px 0px 20px black)`,
          boxShadow: 'inset 0px 0px 15px black',
          // backgroundColor: 'green',
          backgroundImage: `url(${coverFluidImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 'card',
          ...borderRadiusForCard
        }}
      >
        <Image
          sx={{
            backdropFilter: `blur(5px) contrast(50%)`,
            WebkitBackdropFilter: `blur(5px) contrast(50%)`,
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
    />
  );
};
