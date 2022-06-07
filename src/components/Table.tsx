import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
  request: string,
  intensivity: number,
) {
  return {request, intensivity};
}

const rows = [
  createData('Разработка сайтов', 10),
  createData('', 2),
];

export default function AcccessibleTable() {
  return (
    <TableContainer sx={{
      border: '2px solid #000'
    }}>
      <Table align="center" sx={{
        minWidth: 365,
        overflow: 'hidden',

      }} aria-label="caption table">
        <TableHead>
          <TableRow sx={{
            borderBottom: '2px solid #000',
          }}>
            <TableCell sx={{
              borderRight: '2px solid #000',
            }} align="center">Запрос</TableCell>
            <TableCell align="center">Интенсивность</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.request}>
              <TableCell sx={{
                borderBottom: '2px solid #000',
                borderRight: '2px solid #000'
              }} align="center" component="th" scope="row">
                {row.request}
              </TableCell>
              <TableCell sx={{
                borderBottom: '2px solid #000',
                borderRight: '2px solid #000'
              }} align="center">{row.intensivity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
