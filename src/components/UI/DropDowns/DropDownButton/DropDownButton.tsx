import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { DropDownBtnProps } from '../../../../models/Interfaces';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../../router/routeNames';

const DropDownButton: React.FC<DropDownBtnProps> = ({  text, isTest, isBlock }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuItemStyle = {
        color: 'black',
        fontFamily: 'Circe',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '2.4rem'
    };

    const style: any = {
        '& .css-6hp17o-MuiList-root-MuiMenu-list': {
            padding: '2.5rem 0',
            background: '#F0F6FF'
        },
        '& .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper': {
            marginTop: '1.5rem',
            boxShadow: 'none',
            width: '32.6rem'
        },
        '& .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root': {
            fontFamily: 'Circe',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '1.8rem',
            lineHeight: '2.7rem',
            color: ' #171923'
        }

    };

    if (isTest) {
        return (
            <div>
                <Button
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    style={menuItemStyle}
                >
                    {text}
                    <KeyboardArrowDownIcon sx={{
                        fontSize: '3.5rem'
                    }} />
                </Button>
                <Menu
                    MenuListProps={{
                        'aria-labelledby': 'fade-button'
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    sx={style}
                >

                    <Link to={RouteNames.TESTS_ASSEMBLY}><MenuItem onClick={handleClose}>Сборка теста</MenuItem></Link>
                    <Link to={RouteNames.TESTS}><MenuItem onClick={handleClose}>Список всех тестов</MenuItem></Link>

                </Menu>
            </div>
        );


    } else if (isBlock) {
        return (
            <div>
                <Button
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    style={menuItemStyle}
                >
                    {text}
                    <KeyboardArrowDownIcon sx={{
                        fontSize: '3.5rem'
                    }} />
                </Button>
                <Menu
                    MenuListProps={{
                        'aria-labelledby': 'fade-button'
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    sx={style}
                >
                    <Link to={RouteNames.QUESTIONS}><MenuItem onClick={handleClose}>Список всех блоков вопросов</MenuItem></Link>
                    <Link to={RouteNames.TASKS}><MenuItem onClick={handleClose}>Список всех блоков заданий</MenuItem></Link>
                    <Link to={RouteNames.QUESTIONS_ASSEMBLY}><MenuItem onClick={handleClose}>Создание блока вопросов</MenuItem></Link>
                    <Link to={RouteNames.TASKS_ASSEMBLY}><MenuItem onClick={handleClose}>Создание блока заданий</MenuItem></Link>

                </Menu>
            </div>
        );
    } else {
        return (
            <div>
                <Button
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    style={menuItemStyle}
                >
                    {text}
                </Button>


            </div>
        );
    }


};

export default DropDownButton;
