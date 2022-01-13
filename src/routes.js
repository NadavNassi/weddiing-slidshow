import { SelectImgs } from './pages/select-imgs'
import { UploadIImg } from './pages/upload-img'


export const routes = [
    {
        path: '/select',
        comoponent: SelectImgs
    },
    {
        path: '/',
        comoponent: UploadIImg,
    },
]