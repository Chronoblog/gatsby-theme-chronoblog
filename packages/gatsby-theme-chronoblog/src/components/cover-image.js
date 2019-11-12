/** @jsx jsx */
// import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import { jsx } from 'theme-ui';

/**
 * @param {'fixed' | 'fluid'} imgType
 * @param {*} frontmatter
 */
const getCover = (frontmatter, imgType) => {
  if (
    frontmatter &&
    frontmatter.cover &&
    frontmatter.cover.childImageSharp &&
    frontmatter.cover.childImageSharp[imgType] &&
    frontmatter.cover.childImageSharp[imgType] !== '' &&
    frontmatter.cover.childImageSharp[imgType] !== 0
  )
    return frontmatter.cover.childImageSharp[imgType];
  return '';
};

const CoverImage = ({
  data: { frontmatter },
  height = 192,
  isHovering = false
}) => {
  const borderRadius = '6px 6px 0px 0px';
  const coverFluidImage = getCover(frontmatter, 'fluid');
  const backgroundImageStyle = {
    backdropFilter: `blur(5px) contrast(50%)`,
    WebkitBackdropFilter: `blur(5px) contrast(50%)`,
    borderRadius
  };
  return (
    <div>
      {coverFluidImage ? (
        <div
          sx={{
            backgroundColor: isHovering ? 'secondary' : 'muted',
            maxHeight: height
          }}
        >
          <div
            sx={{
              backgroundImage: `url(${coverFluidImage.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundClip: 'padding-box',
              borderRadius
            }}
          >
            <BackgroundImage
              // if image is very small - apply backgroundSize: 'auto auto'
              // in other cases - backgroundSize: 'contain'
              style={
                coverFluidImage.presentationHeight <= height &&
                coverFluidImage.presentationWidth <= 768
                  ? {
                      backgroundSize: 'auto auto',
                      ...backgroundImageStyle
                    }
                  : {
                      backgroundSize: 'contain',
                      ...backgroundImageStyle
                    }
              }
              fluid={coverFluidImage}
            >
              <div
                sx={{
                  minHeight: height,
                  backdropFilter: `drop-shadow(0px 0px 20px black)`,
                  boxShadow: 'inset 0px 0px 15px black',
                  borderRadius
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

export default CoverImage;
