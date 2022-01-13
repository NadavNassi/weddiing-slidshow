import { ImgPreview } from './img-preview'

export const ImgList = ({ imgs, onSelect }) => {
    return (
        <section className="img-list card-grid">
            {imgs.map((img, idx) => <ImgPreview key={img._id} img={img} idx={idx} onSelect={onSelect} />)}
        </section>
    )
}