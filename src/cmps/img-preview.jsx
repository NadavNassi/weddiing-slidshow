import { CheckCircle } from '@material-ui/icons'
export const ImgPreview = ({ img, idx, onSelect }) => {
    return (
        <article className="img-prev">
            <img src={img.url} alt="" onClick={() => onSelect(idx)} />
            {img.isSelected && <CheckCircle style={{ color: 'rgb(60, 111, 60)', fontSize: 40 }} />}
        </article>
    )
}