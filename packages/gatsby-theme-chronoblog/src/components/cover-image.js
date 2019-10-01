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
  borderRadius = '4px 4px 0px 0px',
  height = 192
}) => {
  const coverFluidImage = getCover(frontmatter, 'fluid');
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
                      backdropFilter: `blur(5px) contrast(50%)`,
                      '-webkit-backdrop-filter': `blur(5px) contrast(50%)`,
                      borderRadius
                    }
                  : {
                      backgroundSize: 'contain',
                      backdropFilter: `blur(5px) contrast(50%)`,
                      '-webkit-backdrop-filter': `blur(5px) contrast(50%)`,
                      borderRadius
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
