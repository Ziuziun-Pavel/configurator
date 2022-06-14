import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ControlPanel from '../views/ControlPanel';
import ListOfBlocks from '../views/ListOfBlocks';
import ControlPanelTasks from '../views/ControlPanelTasks';
import ControlPanelQuestions from '../views/ControlPanelQuestions';
import { RouteNames } from './routeNames';
import Semantics from '../views/Semantics';
import Statistics from '../views/Statistics';
import Preview from '../views/Preview';

const AppRouter = () => {
    return (
        <Routes>
            <Route path={RouteNames.CONFIGURATOR} element={<ControlPanel />} />
            <Route path={RouteNames.BLOCKS} element={<ListOfBlocks />} />
            <Route path={RouteNames.TASKS} element={<ControlPanelTasks />} />
            <Route path={RouteNames.QUESTIONS} element={<ControlPanelQuestions />} />
            <Route path={RouteNames.SEMANTICS} element={<Semantics />} />
            <Route path={RouteNames.STATISTICS} element={<Statistics />} />
            <Route path={RouteNames.PREVIEW} element={<Preview />} />
        </Routes>
    );
};

export default AppRouter;
