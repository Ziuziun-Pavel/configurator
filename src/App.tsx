import React, {useState} from 'react'
import './App.css'
import Button from './components/Button'
import AdministratorButton from "./components/AdministratorButton";


function App() {
  const [isSelected, setSelected] = useState(true);

  return (
        <div className='App'>
            <Button
                text='настроить блоки'
                onClick={() => setSelected(!isSelected)}
                width='249px'
                isSelected={isSelected}
            />

          <AdministratorButton/>

        </div>
    )
}

export default App
