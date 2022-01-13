import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { ImgList } from "../cmps/imgs-list"
import { imgsService } from "../services/imgs.service"
import { socketService } from "../services/socket.service"



export const SelectImgs = () => {
    const [imgs, setImgs] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            socketService.on('new-img', onNewImg)
            const imgs = await imgsService.query()
            setImgs(imgs)
        })()
    }, [])
    const onNewImg = (url) => {
        setImgs(prevImgs => [...prevImgs, url])
    }
    const onSelect = (idx) => {
        const newImgs = imgs.slice()
        newImgs[idx].isSelected = !newImgs[idx].isSelected
        setImgs(newImgs)
    }
    const onSubmit = () => {
        const selectedImgs = imgs.filter(img => img.isSelected)
        dispatch({ type: 'SET_SELECTED', selectedImgs })
    }
    return (
        <section className="select-imgs main-container">
            <ImgList imgs={imgs} onSelect={onSelect} />
            <button onClick={onSubmit}>Select those photos!</button>
        </section>
    )
}