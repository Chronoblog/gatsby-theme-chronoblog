/** @jsx jsx */
import GatsbyImage from 'gatsby-image';
import get from 'lodash/get';
import { jsx } from 'theme-ui';

const Image = (props) => <GatsbyImage {...props} />;

const CoverImageBase = ({
  data,
  type,
  height,
  coverFluidImage,
  objectFit = 'scale-down'
}) => {
  const borderRadiusForCard =
    type === 'card'
      ? {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      : {};
  //
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
          backdropFilter: `drop-shadow(0px 0px 20px black)`,
          boxShadow: 'inset 0px 0px 15px black',
          backgroundImage: `url(${coverFluidImage.src})`,
          backgroundSize: 'cover',
          //
          maxHeight: height,
          backgroundPosition: 'center',
          borderRadius: 'card',
          ...borderRadiusForCard
        }}
      >
        <Image
          css={`
            @supports (backdrop-filter: blur(5px)) {
              background-color: rgba(255, 255, 255, 0);
            }
            background-color: rgba(40, 40, 40, 0.7);
          `}
          sx={{
            backdropFilter: 'blur(5px) contrast(50%)',
            WebkitBackdropFilter: 'blur(5px) contrast(50%)',
            maxHeight: height,
            minHeight: height,
            borderRadius: 'card',
            ...borderRadiusForCard
          }}
          imgStyle={{
            objectFit,
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
      objectFit="scale-down"
    />
  );
};
