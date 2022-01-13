import { UploadIImg } from './pages/upload-img'
import SlideShow from './pages/slideshow'

export const routes = [
    {
        path: '/',
        element: <UploadIImg />,
    },
    {
        path: '/slideshow',
        element: <SlideShow />,
    }
]