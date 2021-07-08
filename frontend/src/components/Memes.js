import Meme from './Meme'

const Memes = ({ memes, onDelete }) => {

    const memelist = [];
    for (let i = Math.min(100, memes.length - 1); i >= 0; i--)
        memelist.push(memes[i]);

    return (
        <div className='container'>
            <h2 className='recent'>  RECENTLY UPLOADED MEMES  </h2>
            {memelist.map((meme) => (
                <Meme key={meme.id} meme={meme}
                    onDelete={onDelete} />
            ))}
        </div>
    )
}

export default Memes
