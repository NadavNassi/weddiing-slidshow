import { useState, useEffect, useCallback } from 'react'

function useToggle(initialValue = true) {
    const [value, setValue] = useState(initialValue);
    const toggle = useCallback(() => {
        setValue(v => !v);
    }, []);
    return [value, toggle];
}

export default function SlideShow() {
    const [imgs, setImgs] = useState([])
    const [slideIdx, setSlideIdx] = useState(null)
    const [img1, setImg1] = useState(null)
    const [img2, setImg2] = useState(null)
    const [isCurrImg1, toggleIsOn] = useToggle();

    useEffect(() => {
        const interval = setInterval(() => {
            toggleIsOn()
        }, 2500);
        loadImgs()
        setSlideIdx(0)
        return () => {
            console.log('UNMOUNTING Cleaning up');
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        console.log(isCurrImg1, slideIdx)
        const idx = (slideIdx + 1 >= imgs.length) ? 0 : slideIdx + 1
        if (isCurrImg1) {
            setImg1(imgs[idx])
        } else {
            setImg2(imgs[idx])
        }
        setSlideIdx(idx)
    }, [isCurrImg1])

    const loadImgs = async () => {
        const newImgs = await [{ imgUrl: '001' }, { imgUrl: '002' }, { imgUrl: '003' }, { imgUrl: '004' }]
        setTimeout(() => {
            const newImgs2 = [{ imgUrl: '001' }, { imgUrl: '002' }, { imgUrl: '003' }, { imgUrl: '004' }, { imgUrl: '005' }]
            setImgs(newImgs2)
        }, 10000)
        setImgs(newImgs)
    }

    return (
        <div>
            <h1>currImgs: {isCurrImg1 ? 'true' : 'false'} slideIdx: {slideIdx}</h1>
            <pre>{JSON.stringify(imgs)}</pre>
            <pre>{JSON.stringify(img1)}</pre>
            <pre>{JSON.stringify(img2)}</pre>
        </div>
    )
}