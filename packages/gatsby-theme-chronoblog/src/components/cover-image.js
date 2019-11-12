/** @jsx jsx */
import BackgroundImage from 'gatsby-background-image';
import get from 'lodash/get';
import { jsx } from 'theme-ui';

export default ({ data, height = 192, type = 'post' }) => {
  const coverFluidImage = get(
    data,
    'frontmatter.cover.childImageSharp["fluid"]',
    undefined
  );
  const borderRadiusForCard =
    type === 'card'
      ? {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      : {};
  return (
    <div>
      {coverFluidImage ? (
        <div
          sx={{
            maxHeight: height
          }}
        >
          <div
            sx={{
              backgroundImage: `url(${coverFluidImage.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: [0],
              ...borderRadiusForCard
            }}
          >
            <BackgroundImage
              // if image is very small - apply backgroundSize: 'auto auto'
              // in other cases - backgroundSize: 'contain'
              sx={
                coverFluidImage.presentationHeight <= height &&
                coverFluidImage.presentationWidth <= 768
                  ? {
                      backgroundSize: 'auto auto',
                      backdropFilter: `blur(5px) contrast(50%)`,
                      WebkitBackdropFilter: `blur(5px) contrast(50%)`,
                      borderRadius: 'inherit'
                    }
                  : {
                      backgroundSize: 'contain',
                      backdropFilter: `blur(5px) contrast(50%)`,
                      WebkitBackdropFilter: `blur(5px) contrast(50%)`,
                      borderRadius: 'inherit'
                    }
              }
              fluid={coverFluidImage}
            >
              <div
                sx={{
                  minHeight: height,
                  borderRadius: [0],
                  ...borderRadiusForCard,
                  backdropFilter: `drop-shadow(0px 0px 20px black)`,
                  boxShadow: 'inset 0px 0px 15px black'
                }}
              />
            </BackgroundImage>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
