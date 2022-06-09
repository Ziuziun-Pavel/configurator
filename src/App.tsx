import React from 'react';
import './App.css';
import './styles/set.scss';
import {Routes, Route} from "react-router-dom";

import ControlPanel from "./views/ControlPanel";
import ListOfBlocks from "./views/ListOfBlocks";
import ControlPanelTasks from './views/ControlPanelTasks';
import ControlPanelQuestions from './views/ControlPanelQuestions';



function App() {

  return (
        <div className='App'>
            <Routes>
                <Route path="/" element={<ControlPanel />} />
                <Route path="/blocks" element={<ListOfBlocks />} />
                <Route path="/tasks" element={<ControlPanelTasks />} />
                <Route path="/questions" element={<ControlPanelQuestions />} />

            </Routes>

        </div>
    )
}

export default App
