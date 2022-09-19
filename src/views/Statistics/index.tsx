import React, { useEffect, useState } from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import s from './Statistics.module.scss';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import TableForStatistics from '../../components/Templates/TableForStatistics/TableForStatistics';
import { RangeDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';
import { RequestsProps, TestProps } from '../../models/Interfaces';
import axios from 'axios';

const Statistics: React.FC = () => {
  const [allTests, setAllTests] = useState<TestProps[]>([]);
  const [allRequests, setAllRequests] = useState<RequestsProps[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getTests = () => {
    setIsLoading(true);

    axios.get('/tests').then((response) => {
      const data = response.data.data;
      setAllTests(data.sort((x: { title: string; }, y: { title: any; }) => x.title.localeCompare(y.title)));
      setIsLoading(false);
    }).catch((error) => {
      setIsLoading(false);
      setErrorMessage(error.message);
    });
  };

  const getRequests = () => {

    setIsLoading(true);
    axios({
      method: 'GET',
      url: '/phrases'
    }).then((response) => {
      const requests = response.data.data;
      setAllRequests(requests);
      setIsLoading(false);
    }).catch((error) => {
      setErrorMessage(error.message);

    });
  };

  useEffect(() => {
    getTests();
    getRequests();
  }, []);

  return (
    <>
      <NavigationMenu />
      <div className='container'>
        <HeaderContainer text='Табличка со всеми тестами (статистика)' />

        <div className={s.table__dateContainer}>
          <div>
            <p className={s.table__dateTitle}>Выбрать дату или диапазон:</p>

            <RangeDatePicker
              startDate={new Date()}
              endDate={new Date()}
              minDate={new Date(1900, 0, 1)}
              maxDate={new Date(2100, 0, 1)}
              dateFormat='D'
              monthFormat='MMM YYYY'
              startDatePlaceholder='С'
              endDatePlaceholder='По'
              disabled={false}
              className='dataRange'
              startWeekDay='monday'
            />

          </div>
        </div>

        <div className={s.table__container}>

          {
            allTests.map((test, index) => {
              if (index === 0) {
                return (
                  <div key={index}>
                    <TableForStatistics withHeader={true}
                                        testData={test}
                                        requests={test.direction}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={index}>
                    <TableForStatistics testData={test} requests={test.direction}
                    />
                  </div>
                );
              }

            })
          }
        </div>


      </div>
    </>
  );
};

export default Statistics;
