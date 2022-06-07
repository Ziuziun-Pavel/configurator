import React, {useState} from 'react'
import './App.css'
import Button from './components/Button'
import AdministratorButton from "./components/AdministratorButton";
import TextField from "./components/TextField";
import TypeDropdown from "./components/TypeDropdown";
import DeleteButton from "./components/DeleteButton";
import ListItem from "./components/ListItem";
import TextFieldWithTitle from "./components/TextFieldWithTitle";
import DropdownMenu from "./components/DropdownMenu";
import ControlPanel from "./views/ControlPanel";


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

          {/*<TextField text='Пример: /digital/test/rd1'/>*/}

          {/*<TypeDropdown/>*/}

          {/*<ListItem*/}
          {/*  text='тип1'*/}
          {/*  width='1453px'*/}
          {/*  onClick={() => setSelected(!isSelected)}*/}
          {/*  isSelected={isSelected}*/}
          {/*/>*/}

          {/*<DropdownMenu title='Изучить работадателя (блок 2'/>*/}

          <ControlPanel/>



        </div>
    )
}

export default App
