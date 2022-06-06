import React, {useState} from 'react'
import './App.css'
import Button from './components/Button'
import AdministratorButton from "./components/AdministratorButton";
import TextField from "./components/TextField";


function App() {
  const [isSelected, setSelected] = useState(true);

  return (
        <div className='App'>
          {/*  <Button*/}
          {/*      text='настроить блоки'*/}
          {/*      onClick={() => setSelected(!isSelected)}*/}
          {/*      width='249px'*/}
          {/*      isSelected={isSelected}*/}
          {/*  />*/}

          {/*<AdministratorButton/>*/}

          <TextField
                text='Пример: /digital/test/rd1'
          />
        </div>
    )
}

export default App
