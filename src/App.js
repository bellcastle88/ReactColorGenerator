import React, { useState } from 'react'
import SingleColor from './SingleColor'

// color library
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#477EFF').all(10));

  const handleSubmit =(e)=>{
    e.preventDefault();
    try {
      // input으로 color을 받으면 출력
      let colors = new Values(color).all(10)
      setList(colors)
      setError(false)
    } catch (error) {
      setError(true)
      console.log(error);
    }
  }

  return (
    <>
    <section className="container">
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={color} 
        onChange={(e) => setColor(e.target.value)}
        placeholder='#477EFF'
        // error표시 또는 null (css)
        className={`${error ? 'error' : null}`}
        />
        <button className='btn' type='submit'>
          submit
        </button>
      </form>
    </section>
    <section className='colors'>
      {list.map((color, index) => {
        return (
        <SingleColor 
          key={index} 
          {...color} 
          index={index}
          hexColor={color.hex} 
        />
        )
      })}
    </section>
    </>
  );

}

export default App
