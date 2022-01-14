import { useState, useEffect, useCallback } from 'react'

import { socketService } from "../services/socket.service"

function useToggle(initialValue = true) {
    const [value, setValue] = useState(initialValue);
    const toggle = useCallback(() => {
        setValue(v => !v);
    }, []);
    return [value, toggle];
}

export function SlideShow() {
    const [imgs, setImgs] = useState([])
    const [slideIdx, setSlideIdx] = useState(null)
    const [img1, setImg1] = useState(null)
    const [img2, setImg2] = useState(null)
    const [isCurrImg1, toggleIsOn] = useToggle();

    useEffect(() => {
        socketService.on('new-imgs', loadImgs)
        
        const interval = setInterval(() => {
            toggleIsOn()
        }, 7000);

        loadImgs()
        setSlideIdx(0)

        return () => {
            console.log('UNMOUNTING Cleaning up');
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        const idx = (slideIdx + 1 >= imgs.length) ? 0 : slideIdx + 1
        setTimeout(() => isCurrImg1?setImg1(imgs[idx]):setImg2(imgs[idx]), 2500)
        setSlideIdx(idx)
    }, [isCurrImg1])

    const loadImgs = async (imgs) => {
        const newImgs = imgs ? imgs : await [{ url: 'https://wfuv.org/sites/default/files/waiting.jpg' },
        { url: 'https://previews.123rf.com/images/gustavofrazao/gustavofrazao1510/gustavofrazao151017895/61039363-happiness-sign-with-arrow-on-beach-background.jpg' }]
        setImgs(newImgs)
    }

    if (!img1 || !img2) return <div>Loading...(we are setting the slideshow)</div>
    return (
        <div className={`slide-screen flex ${isCurrImg1 ? 'slidein' : ''}`}>
            <div className='boxImg'>
                <img src={img1?.url} alt='img' />
            </div>
            <div className='boxImg'>
                <img src={img2?.url} alt='img' />
            </div>
        </div>
    )
}