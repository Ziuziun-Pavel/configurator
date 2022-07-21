import React from 'react';
import s from './Projects.module.scss';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import TextFieldWithTitle from '../../components/UI/TextFields/TextFieldWithTitle/TextFieldWithTitle';
import Button from '../../components/UI/Buttons/Button/Button';
import ProjectBlock from '../../components/Templates/ProjectBlock/ProjectBlock';
import { projectsData } from '../../data/projectsData';

const Projects: React.FC = () => {

    return (
        <>
            <NavigationMenu />
            <HeaderContainer text='Целевые сайты (проекты)' />

            <div className={s.projects__building}>
                <TextFieldWithTitle title='Название проекта' placeholder='Пример: ЦВ' />

                <div className={s.projects__textField}>
                    <TextFieldWithTitle title='Название проекта' placeholder='Пример: ЦВ' />

                </div>

                <div className={s.projects__btn}>
                    <Button width='23.9rem' bgColor='#096BFF' text='Создать проект' />

                </div>
            </div>

            <div className={s.projects__list}>
                <h3 className={s.projects__title}>Список проектов</h3>

                <div className={s.projects__wrapper}>
                    {
                        projectsData.map(project => {
                            return (
                                <ProjectBlock key={project.id}
                                              id={project.id}
                                              title={project.title}
                                              isActive={project.isActive}
                                              subtitle={project.subtitle}
                                              dataOfDeactivation={project.dataOfDeactivation}
                                              region={project.region}
                                              site={project.site} />
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Projects;
