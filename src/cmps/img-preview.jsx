
export const ImgPreview = ({ img, idx }) => {
    return (
        <article>
            <img src={img.url} alt="" /* onClick={() => toggleImg(idx)} */ />
            {img.isSelected && <p>'Image Selected'</p>}
        </article>
    )
}