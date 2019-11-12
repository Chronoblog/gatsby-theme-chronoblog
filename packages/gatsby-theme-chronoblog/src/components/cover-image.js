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

const CoverImage = ({ data: { frontmatter }, height = 192 }) => {
  const coverFluidImage = getCover(frontmatter, 'fluid');
  return (
    <div sx={{ backgroundClip: 'padding-box', borderRadius: [0] }}>
      {coverFluidImage ? (
        <div
          sx={{
            maxHeight: height,
            backgroundClip: 'padding-box',
            borderRadius: [0]
          }}
        >
          <div
            sx={{
              backgroundImage: `url(${coverFluidImage.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundClip: 'padding-box',
              borderRadius: [0]
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
                      // borderRadius: [0],
                      borderRadius: 'inherit',
                      backgroundClip: 'padding-box'
                    }
                  : {
                      backgroundSize: 'contain',
                      backdropFilter: `blur(5px) contrast(50%)`,
                      WebkitBackdropFilter: `blur(5px) contrast(50%)`,
                      // borderRadius: [0],
                      borderRadius: 'inherit',
                      backgroundClip: 'padding-box'
                    }
              }
              fluid={coverFluidImage}
            >
              <div
                sx={{
                  minHeight: height,
                  borderRadius: [0],
                  backgroundClip: 'padding-box',
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

export default CoverImage;
