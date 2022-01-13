import { SelectImgs } from './pages/select-imgs'
import { UploadImg } from './pages/upload-img'


export const routes = [
    {
        path: '/select',
        element: <SelectImgs />
    },
    {
        path: '/',
        element: <UploadImg />,
    },
]