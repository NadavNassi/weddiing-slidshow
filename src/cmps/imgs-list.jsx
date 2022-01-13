import { ImgPreview } from './img-preview'

export const ImgList = ({ imgs }) => {
    return (
        <section className="img-list card-grid">
            {imgs.map((img, idx) => <ImgPreview key={img.url} img={img} idx={idx} />)}
        </section>
    )
}