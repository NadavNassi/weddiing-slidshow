import axios from 'axios'

const imgs = [
    {
        _id: 'i101',
        url: 'https://res.cloudinary.com/triplen91/image/upload/v1623062587/mlvf4mok0lqspwytehme.jpg',
        isSelected: false
    },
    {
        _id: 'i102',
        url: 'https://res.cloudinary.com/triplen91/image/upload/v1623314271/qafio7fn6d3rskorynad.jpg',
        isSelected: false
    },
    {
        _id: 'i103',
        url: 'https://res.cloudinary.com/triplen91/image/upload/v1626881369/yyndnyspcr3rtokjl4xq.jpg',
        isSelected: false
    },
    {
        _id: 'i104',
        url: 'https://res.cloudinary.com/triplen91/image/upload/v1631122548/a4p5nq464rmcradtkqwx.jpg',
        isSelected: false
    },
    {
        _id: 'i105',
        url: 'https://res.cloudinary.com/triplen91/image/upload/v1642065132/aa7azfd0gmc6cf428lmu.png',
        isSelected: false
    },
    {
        _id: 'i106',
        url: 'https://res.cloudinary.com/triplen91/image/upload/v1632429687/ag4afgtfrryxzlctmap2.jpg',
        isSelected: false
    },
]

async function query() {
    return Promise.resolve(imgs)
}

async function fetchData() {
    const res = await axios.get('https://random-data-api.com/api/cannabis/random_cannabis?size=10')
    return res.data
}


export const imgsService = {
    fetchData,
    query
}