import React from 'react';
import s from './TableForStatistics.module.scss';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { TableForStatisticsProps } from '../../../models/Interfaces';

const today = new Date();
const last8Days = [
  `${today.getDate() - 7}.${correctDate(today.getMonth())}`,
  `${today.getDate() - 6}.${correctDate(today.getMonth())}`,
  `${today.getDate() - 5}.${correctDate(today.getMonth())}`,
  `${today.getDate() - 4}.${correctDate(today.getMonth())}`,
  `${today.getDate() - 3}.${correctDate(today.getMonth())}`,
  `${today.getDate() - 2}.${correctDate(today.getMonth())}`,
  `${today.getDate() - 1}.${correctDate(today.getMonth())}`,
  `${today.getDate()}.${correctDate(today.getMonth())}`
];

function correctDate(month: number) {
  if (month < 10) return `0${month}`;
  if (month >= 10) return month;
}

const TableForStatistics: React.FC<TableForStatisticsProps> = ({ withHeader, testData, requests }) => {

  function createData(
    isTitle: boolean,
    phrase: string,
    clicks8: number,
    clicks7: number,
    clicks6: number,
    clicks5: number,
    clicks4: number,
    clicks3: number,
    clicks2: number,
    clicks1: number
  ) {
    return { isTitle, phrase, clicks8, clicks7, clicks6, clicks5, clicks4, clicks3, clicks2, clicks1 };
  }

  const rows = [
    createData(true, 'Группа основные наркология', 159, 6.0, 24, 4.0, 4.0, 237, 9.0, 37),
    createData(false, 'Вывод из запоя', 237, 9.0, 37, 4.3, 237, 4.0, 9.0, 37),
    createData(false, 'Лечение наркомании', 262, 16.0, 24, 6.0, 237, 4.0, 9.0, 37),
    createData(false, 'Лечение алкоголизма', 305, 3.7, 67, 4.3, 237, 4.0, 9.0, 37)
  ];

  return (
    <div className={s.table}>
      <TableContainer component={Paper}>
        <Table sx={{
          minWidth: 1000
        }} size='small' aria-label='a dense table'>
          {
            withHeader ?
              <TableHead>
                <TableRow>
                  <TableCell sx={{
                    fontWeight: 400,
                    fontSize: '2rem',
                    lineHeight: '2.4rem',
                    width: '32rem',
                    height: '7.3rem',
                    borderRight: '0.5px solid rgba(0, 0, 0, 0.3)',
                    background: '#F0F6FF'
                  }}>Дата:</TableCell>
                  {
                    last8Days.map((date, index) => {
                      return (
                        <TableCell key={index} sx={{
                          fontWeight: 400,
                          fontSize: '2rem',
                          lineHeight: '2.4rem',
                          width: '7rem',
                          borderRight: '0.5px solid rgba(0, 0, 0, 0.3)',
                          background: '#F0F6FF'
                        }} align='left'>{date}
                          <p className={s.table__allClicks}>всего кликов <p
                            className={s.table__allClicksNumber}>{requests?.reduce((r, a) => 0 + (a.intensivity as number),0) }</p></p>
                        </TableCell>
                      );
                    })
                  }
                </TableRow>
              </TableHead>
              : ''
          }

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.phrase}
                sx={{
                  '&:first-child td': {
                    background: '#0F5BCD',
                    color: '#FFF',
                    border: '0.5px solid rgba(0, 0, 0, 0.3)'
                  },
                  height: '7.9rem'

                }}
              >
                {
                  row.isTitle ?
                    <TableCell component='th' scope='row' sx={{
                      fontWeight: 400,
                      fontSize: '2rem',
                      lineHeight: '2.4rem',
                      width: '32rem',
                      background: '#F0F6FF',
                      border: '.2rem solid #000000'
                    }}>
                      {row.phrase}

                      <div className={s.table__titleCell}>
                        <span>{testData.region}</span>
                        <span className={s.table__titleCell_browser}>{testData.search_system}</span>
                        <span></span>

                      </div>

                    </TableCell> :
                    <TableCell component='th' scope='row' sx={{
                      fontWeight: 400,
                      fontSize: '1.6rem',
                      lineHeight: '1.9rem',
                      color: 'rgba(0, 0, 0, 0.5)',
                      width: '32rem',
                      background: '#F0F6FF'
                    }}>
                      {row.phrase}
                    </TableCell>
                }
                <TableCell sx={{
                  fontWeight: 400,
                  fontSize: '2rem',
                  lineHeight: '2.4rem',
                  width: '9.5rem',
                  background: 'rgba(15, 91, 205, 0.5)',
                  border: '0.5px solid rgba(0, 0, 0, 0.3)'
                }} align='center'>{row.clicks8}</TableCell>
                <TableCell sx={{
                  fontWeight: 400,
                  fontSize: '2rem',
                  lineHeight: '2.4rem',
                  width: '9.5rem',
                  background: 'rgba(15, 91, 205, 0.5)',
                  border: '0.5px solid rgba(0, 0, 0, 0.3)'
                }} align='center'>{row.clicks7}</TableCell>
                <TableCell sx={{
                  fontWeight: 400,
                  fontSize: '2rem',
                  width: '9.5rem',
                  lineHeight: '2.4rem',
                  background: 'rgba(15, 91, 205, 0.5)',
                  border: '0.5px solid rgba(0, 0, 0, 0.3)'
                }} align='center'>{row.clicks6}</TableCell>
                <TableCell sx={{
                  fontWeight: 400,
                  fontSize: '2rem',
                  lineHeight: '2.4rem',
                  width: '9.5rem',
                  background: 'rgba(15, 91, 205, 0.5)',
                  border: '0.5px solid rgba(0, 0, 0, 0.3)'
                }} align='center'>{row.clicks5}</TableCell>
                <TableCell sx={{
                  fontWeight: 400,
                  fontSize: '2rem',
                  lineHeight: '2.4rem',
                  width: '9.5rem',
                  background: 'rgba(15, 91, 205, 0.5)',
                  border: '0.5px solid rgba(0, 0, 0, 0.3)'
                }} align='center'>{row.clicks4}</TableCell>
                <TableCell sx={{
                  fontWeight: 400,
                  fontSize: '2rem',
                  lineHeight: '2.4rem',
                  width: '9.5rem',
                  background: 'rgba(15, 91, 205, 0.5)',
                  border: '0.5px solid rgba(0, 0, 0, 0.3)'
                }} align='center'>{row.clicks3}</TableCell>
                <TableCell sx={{
                  fontWeight: 400,
                  fontSize: '2rem',
                  lineHeight: '2.4rem',
                  width: '9.5rem',
                  background: 'rgba(15, 91, 205, 0.5)',
                  border: '0.5px solid rgba(0, 0, 0, 0.3)',
                  boxShadow: 'inset 0px 0px 16px #FFFFFF'
                }} align='center'>{row.clicks2}</TableCell>
                <TableCell sx={{
                  fontWeight: 400,
                  fontSize: '2rem',
                  lineHeight: '2.4rem',
                  width: '9.5rem',
                  background: 'rgba(15, 91, 205, 0.5)',
                  border: '0.5px solid rgba(0, 0, 0, 0.3)',
                  boxShadow: 'inset 0px 0px 16px #FFFFFF'
                }} align='center'>{row.clicks1}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableForStatistics;
