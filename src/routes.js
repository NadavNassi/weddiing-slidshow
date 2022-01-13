import { SelectImgs } from './pages/select-imgs'
import { UploadImg } from './pages/upload-img'

import { SlideShow } from './pages/slideshow'

export const routes = [
    {
        path: '/select',
        element: <SelectImgs />
    },
    {
        path: '/',
        element: <UploadImg />,
    },
    {
        path: '/slideshow',
        element: <SlideShow />,
    }
]