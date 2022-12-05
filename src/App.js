import { useState } from 'react'
import './index.css'

function App() {
    const [number, setNumber] = useState(0)

    return (
        <div className='App'>
            <div>
                <img
                    src='https://testometrika.com/upload/uf/ba1/ba128dca62e8ca4cdaf166addae7afde.svg'
                    className='image'
                    alt=''
                />
                <h2>Лічильник психологічних захворювань:</h2>
                <h1>{number}</h1>
                <button className='minus' onClick={() => setNumber(number - 1)}>
                    - Мінус
                </button>
                <button className='plus' onClick={() => setNumber(number + 1)}>
                    Плюс +
                </button>
            </div>
        </div>
    )
}

export default App
