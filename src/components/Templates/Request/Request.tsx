import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import AddIcon from '@mui/icons-material/Add';
import s from './Request.module.scss';

function createData(
    name: string,
    intensivity: number
) {
    return { name, intensivity };
}

const rows = [
    createData('Создание сайта', 159),
    createData('Создание сайта', 237),
    createData('Создание сайта', 262),
    createData('Создание сайта', 305)
];

const Request = () => {
    return (
        <>

            <div className={s.request}>

                <div className={s.request__body}>

                    <TableContainer sx={{ 'fontFamily': 'Inter', 'padding': '0' }}>
                        <Table aria-label='simple table'>

                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell sx={{ 'fontSize': '2rem' }} component='th' scope='row'>
                                            {row.name}
                                        </TableCell>
                                        <TableCell sx={{ 'fontSize': '2rem' }} align='right'>{row.intensivity}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <div className={s.request__add}>
                        Добавьте новый запрос
                        <AddIcon
                            sx={{
                                position: 'absolute',
                                top: '.7rem',
                                right: '1.5rem',
                                fontSize: '2em',
                                color: 'blue',
                                fontWeight: '700'
                            }}
                        />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Request;
