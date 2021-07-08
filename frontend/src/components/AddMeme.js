import { useState } from 'react'

const AddMeme = ({ onAdd }) => {

    const [name, setName] = useState('')
    const [caption, setCaption] = useState('')
    const [url, setUrl] = useState('')


    const onSubmit = (e) => {

        if (!name) {
            alert('your must enter your name')
            return
        }

        onAdd({ name, caption, url })
        setName('')
        setCaption('')
        setUrl('')
    }


    return (
        <form className='add-form container' onSubmit={onSubmit}>
            <div className='form-control'>
                <label> Enter Your Name</label>
                <input
                    type='text'
                    placeholder='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label> Enter caption for your meme</label>
                <input
                    type='text'
                    placeholder='caption'
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)} />
            </div>
            <div className='form-control'>
                <label> paste URL</label>
                <input
                    type='text'
                    placeholder='URL'
                    value={url}
                    onChange={(e) => setUrl(e.target.value)} />
            </div>

            <input type='submit' value='Submit' className='btn btn-block' />
        </form>
    )
}

export default AddMeme
