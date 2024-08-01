import React from 'react'
const skillLinks = [
    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035341/portfolio/htmlcss_y65bgm.jpg',
    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035342/portfolio/tailwind_akrjiq.jpg',
    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035341/portfolio/js_jt0hn9.jpg',
    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035343/portfolio/react1_vhxzat.jpg',
   
    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035342/portfolio/node_j23non.jpg',
    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035341/portfolio/express_nduxdk.jpg',
    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035342/portfolio/mongo_phxmxt.jpg',

    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035342/portfolio/git_skorfi.jpg',
    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035343/portfolio/rest_bt616m.jpg',
]

const Technologies = () => {
    const imagesPerRow = 3; // Number of images per row
  
    const renderImageRows = () => {
      const rows = [];
      for (let i = 0; i < skillLinks.length; i += imagesPerRow) {
        const rowImages = skillLinks.slice(i, i + imagesPerRow);
        rows.push(
          <div className="flex justify-center" key={i}>
            {rowImages.map((image, index) => (
              <div key={index} className="p-2">
                <img src={image} width='300px' height='150px' alt='tech'></img>
              </div>
            ))}
          </div>
        );
      }
      return rows;
    };
  
    return (
      <div>
        {renderImageRows()}
      </div>
    );
  };

export default Technologies
