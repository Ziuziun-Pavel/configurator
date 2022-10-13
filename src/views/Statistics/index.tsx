import React, { useEffect, useState } from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import s from './Statistics.module.scss';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import TableForStatistics from '../../components/Templates/TableForStatistics/TableForStatistics';
import { RangeDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';
import { StatisticsProps } from '../../models/Interfaces';
import axios from 'axios';

const Statistics: React.FC = () => {
  const [allStatistics, setAllStatistics] = useState<StatisticsProps[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getStatistics = () => {
    setIsLoading(true);

    axios.get('/test_statistic').then((response) => {
      const data = response.data.data;
      setAllStatistics(data);
      setIsLoading(false);
    }).catch((error) => {
      setIsLoading(false);
      setErrorMessage(error.message);
    });
  };

  useEffect(() => {
    getStatistics();
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
            [{
              "id": 1,
              "date": "2022-09-21",
              "click_amount": 33,
              "test_title": "TьуаьцУВЛБ",
              "test_region": "Russia",
              "test_search_system": "Google",
              "phrase": {
                  "group": "Group",
                  "subgroup": "Sub Group",
                  "phrase": "Phrase",
                  "intensivity": 33
                }
            },
              {
                "id": 2,
                "date": "2022-09-21",
                "click_amount": 6,
                "test_title": "Title99",
                "test_region": "МОСКВА",
                "test_search_system": "Google",
                "phrase": {
                  "group": "тььльль",
                  "subgroup": "Sub цццццц",
                  "phrase": "цццццц",
                  "intensivity": 6
                }
              },
              {
                "id": 3,
                "date": "2022-09-21",
                "click_amount": 3,
                "test_title": "фьщукпщлбцфу",
                "test_region": "РОССИЯ",
                "test_search_system": "Google",
                "phrase": {
                  "group": "йййййййй",
                  "subgroup": "йтлсьуалщцу",
                  "phrase": "здюдбщлй",
                  "intensivity": 3
                }
              },
              {
                "id": 4,
                "date": "2022-09-21",
                "click_amount": 12,
                "test_title": "Tкфука",
                "test_region": "Russia",
                "test_search_system": "Google",
                "phrase": {
                  "group": "жхцжух2ь",
                  "subgroup": "фуклщплбущфкп",
                  "phrase": "фщлкплукфда",
                  "intensivity": 12
                }
              },
                ].map((test, index) => {
              if (index === 0) {
                return (
                  <div key={index}>
                    <TableForStatistics withHeader={true}
                                        testData={test}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={index}>
                    <TableForStatistics testData={test}
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
