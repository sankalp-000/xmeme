import { useState, useEffect } from 'react'
import Heading from './components/Heading'
import Upload from './components/Upload'
import Header from './components/Header'
import Memes from './components/Memes'
import AddMeme from './components/AddMeme'

const App = () => {

  const [showAddMeme, setShowAddMeme] = useState(false)

  const [memes, setMemes] = useState([])

  useEffect(() => {
    const getMemes = async () => {
      const memesfromServer = await fetchMemes()
      setMemes(memesfromServer)
    }
    getMemes()
  }, [])

  //fetch memes
  const fetchMemes = async () => {
    const res = await fetch('http://localhost:8081/memes');
    const data = await res.json();
    return data;
  };

  //fetch meme
  const fetchMeme = async (id) => {
    const res = await fetch(`http://localhost:8081/memes/${id}`);
    const data = await res.json();
    return data;
  };

  // add memes
  const addMeme = async (meme) => {

    const res = await fetch("http://localhost:8081/memes", {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(meme),
    })

    const data = await res.json()
    setMemes([...memes, data])
  }

  //Delete memes
  const deleteMeme = async (id) => {

    await fetch(`http://localhost:8081/memes/${id}`, {
      method: 'DELETE',
    })
    setMemes(memes.filter((meme) => meme.id !== id))
  }



  return (
    <div >
      <Heading />
      <Header
        onAdd={() => setShowAddMeme(!showAddMeme)}
        showAdd={showAddMeme} />
      <Upload onAdd={() => setShowAddMeme(!showAddMeme)}
        showAdd={showAddMeme} />
      { showAddMeme && <AddMeme onAdd={addMeme} />}
      { memes.length > 0 ? <Memes memes={memes}
        onDelete={deleteMeme} /> : ('No memes posted yet ')}
    </div>
  );
}


export default App;
