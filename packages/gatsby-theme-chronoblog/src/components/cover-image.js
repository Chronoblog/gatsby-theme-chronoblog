/** @jsx jsx */
import BackgroundImage from 'gatsby-background-image';
import get from 'lodash/get';
import { jsx } from 'theme-ui';

export default ({ data, type = 'post' }) => {
  //
  const coverFluidImage = get(
    data,
    'frontmatter.cover.childImageSharp["fluid"]',
    undefined
  );
  if (!coverFluidImage) return <div />;
  const imageAlt = get(data, 'frontmatter.title', '');
  //
  const height = 366;
  const mobileHeight = height / 2;
  const borderRadiusForCard =
    type === 'card'
      ? {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      : {};
  //
  const blurStyle = {
    backdropFilter: `blur(5px) contrast(50%)`,
    WebkitBackdropFilter: `blur(5px) contrast(50%)`,
    borderRadius: 'inherit'
  };
  let backgroundSize = { backgroundSize: 'contain' };
  if (coverFluidImage.presentationWidth < 320)
    backgroundSize = { backgroundSize: 'auto auto' };
  //
  return (
    <div
      sx={{
        maxHeight: [mobileHeight, height]
      }}
    >
      <div
        sx={{
          backgroundImage: `url(${coverFluidImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 'card',
          ...borderRadiusForCard
        }}
      >
        <BackgroundImage
          style={{
            ...blurStyle,
            ...backgroundSize
          }}
          alt={imageAlt}
          title={imageAlt}
          fluid={coverFluidImage}
        >
          <div
            sx={{
              borderRadius: 'card',
              ...borderRadiusForCard,
              backdropFilter: `drop-shadow(0px 0px 20px black)`,
              boxShadow: 'inset 0px 0px 15px black'
            }}
          >
            <div
              sx={{
                minHeight: [mobileHeight, height]
              }}
            />
          </div>
        </BackgroundImage>
      </div>
    </div>
  );
};
