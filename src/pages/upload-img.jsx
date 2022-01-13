import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { uploadImg } from '../services/cloudinary.service'
import { ThankModal } from '../cmps/thank-modal'

export const UploadIImg = () => {
    const dispatch = useDispatch()
    const [file, setFile] = useState(null)
    const [isModalOpen, setModal] = useState(false)
    useEffect(() => {
        console.log(file);
    }, [file])
    const onSubmit = async () => {
        if (!file) return
        console.log("🚀 ~ file: upload-img.jsx ~ line 10 ~ UploadIImg ~ isModalOpen", isModalOpen)
        // const url = await uploadImg(file)
        // dispatch({ type: 'ADD_IMG', img: url })
        setModal(true)
        setFile(null)
        console.log("🚀 ~ file: upload-img.jsx ~ line 10 ~ UploadIImg ~ isModalOpen", isModalOpen)
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
