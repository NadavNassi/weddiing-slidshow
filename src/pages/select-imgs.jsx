import { useEffect, useState } from "react"
import { ImgList } from "../cmps/imgs-list"
import { imgsService } from "../services/imgs.service"
import { socketService } from "../services/socket.service"



export const SelectImgs = () => {
    const [imgs, setImgs] = useState([])
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
    return (
        <section className="select-imgs main-container">
            <ImgList imgs={imgs} />
        </section>
    )
}