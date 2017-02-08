import React, { Component } from 'react';
import { styles } from '../style/home.scss'
import ImageGallery from 'react-image-gallery';

class Home extends Component {

  render() {
    const images =
        [{
      original: '../../images/foto.jpg'
    },
    {
      original: '../../images/foto.jpg'
    }];

    return (
        <ImageGallery
            items={images}
            slideInterval={5000}
            slideDuration={1000}
            showFullscreenButton={false}
            autoPlay={true}
            showThumbnails={false}
            showBullets={true}
            className="gallery-wrapper"
        />
    );
  }
}

export default Home;
