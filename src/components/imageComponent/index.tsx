import { FC } from "react"
import { ImageWrapper } from "./styles"

type ImageBoxProps = {
    id: string
    url: string
    title: string
    onClick?: (gif: any) => void
}

const ImageBox: FC<ImageBoxProps> = ({id, url, title}) => { 
    return (
        <ImageWrapper>
            <img src={url} key={id} alt={title} />
        </ImageWrapper>
    )
}

export default ImageBox