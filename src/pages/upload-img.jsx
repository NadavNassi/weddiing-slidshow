import React, { useEffect, useState } from 'react'
import { uploadImg } from '../services/cloudinary.service'
import { ThankModal } from '../cmps/thank-modal'
import { socketService } from '../services/socket.service'

export const UploadIImg = () => {
    const [file, setFile] = useState(null)
    const [isModalOpen, setModal] = useState(false)
    const onSubmit = async () => {
        if (!file) return
        const url = await uploadImg(file)
        setModal(true)
        setFile(null)
        // socketService.emit('new-img', url)
    }
    return (
        <section className="upload-img">
            <h2 className="upload-title">Welcome to our wedding!</h2>
            <input type="file" accept="image/png, image/jpeg" onChange={({ target }) => setFile(target.files[0])} />
            <button onClick={onSubmit}>Show us your photo!</button>
            {isModalOpen && <ThankModal setModal={setModal} />}
        </section>
    )
}
