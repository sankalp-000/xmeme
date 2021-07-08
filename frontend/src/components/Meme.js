import { FaTimes } from 'react-icons/fa'

const Meme = ({ meme, onDelete }) => {
    return (
        <div className='container' className={` meme ${meme.reminder ? 'reminder' : ''}`} >
            <h3>

                <span className='postedstyle'><u>Uploaded By</u> :- {meme.name} </span>
                <span >
                    <span className='deletebtn'>
                        <FaTimes style={{ cursor: 'pointer' }}
                            onClick={() => onDelete(meme.id)} />
                    </span>
                 Delete
                </span>

            </h3>
            <div className='captiondiv'> <u>Captions </u>  :-
            <span className='captionstyle'>  #{meme.caption}</span>
            </div>
            <div>
                <img className='images' src={meme.url} alt="meme" />

            </div>
           

        </div>
    )
}

export default Meme
