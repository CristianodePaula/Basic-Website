import React, { useState } from 'react'
import { 
    Container, 
    Image, 
    Gallery 
} from './ImageGalleryStyle'
import { dataGallery } from '../../data/Data'
import { FaRegWindowClose } from 'react-icons/fa'

function ImageGallery() {

    const [model, setModel] = useState(false)
    const [tempimgSrc, setTempImgSrc] = useState('')

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc)
        setModel(true)
    }
    return (
        <Container id='gallery'>
            <div className={model ? 'model open' : 'model'} >
                <Image src={tempimgSrc} />
                <FaRegWindowClose onClick={() => setModel(false)} />
            </div>
            <Gallery>
                {dataGallery.map((image) => (
                    <Image onClick={() => getImg(image.imageUrl)} src={image.imageUrl} />
                ))}
            </Gallery>
        </Container>
    )
}
export default ImageGallery