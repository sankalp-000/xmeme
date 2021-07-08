
import Button from './Button'

const Upload = ({ onAdd, showAdd }) => {
    return (
        <div className=' btncontainer header'>
            <Button color='green' text={showAdd ? 'Close' : 'upload meme'} onClick={onAdd} />
        </div>
    )
}



export default Upload
