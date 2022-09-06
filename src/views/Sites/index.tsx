import React, { useEffect, useState } from 'react';
import s from './Sites.module.scss';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import TextFieldWithTitle from '../../components/UI/TextFields/TextFieldWithTitle/TextFieldWithTitle';
import Button from '../../components/UI/Buttons/Button/Button';
import SiteBlock from '../../components/Templates/SiteBlock/SiteBlock';
import axios from 'axios';
import LoadingSpinner from '../../components/Templates/LoadingSpinner/LoadingSpinner';
import { SiteBlockProps } from '../../models/Interfaces';

const Sites: React.FC = () => {
  const [allSites, setAllSites] = useState<SiteBlockProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [siteTitle, setSiteTitle] = useState('');
  const [siteUrl, setSiteUrl] = useState('');

  const ResetFormControls = () => {
    setSiteTitle('');
    setSiteUrl('');
  };

  const addSite = () => {
    setIsLoading(true);

    const data: SiteBlockProps = {
      id: 1,
      title: siteTitle,
      url: siteUrl,
      isActive: true,
      start_date: '',
      deactivation_date: ''
    };

    axios.post('/sites', data).then(r => {
      setAllSites((prev) => [...prev, data]);
      setIsLoading(false);
    }).catch(error => {
      setErrorMessage(error.message);
      setIsLoading(false);
    });

    ResetFormControls();

  };

  const getSites = () => {
    setIsLoading(true);

    axios({
      method: 'GET',
      url: '/sites'
    }).then((response) => {
      const data: SiteBlockProps[] = response.data.data;
      setAllSites(data.sort((x, y) => x.title.localeCompare(y.title)));
      setIsLoading(false);
    }).catch((error) => {
      setErrorMessage(error.message);
      setIsLoading(false);

    });
  };

  useEffect(() => {
    getSites();
  }, []);


  return (
    <>
      <NavigationMenu />
      <HeaderContainer text='Целевые сайты (проекты)' />

      {
        isLoading ? <div className={s.sites__loading}>
            <LoadingSpinner />
          </div> :
          <div className={s.sites__building}>
            <TextFieldWithTitle title='Название проекта'
                                value={siteTitle}
                                placeholder='Пример: ЦВ'
                                onChange={(e) => setSiteTitle(e.target.value)} />

            <div className={s.sites__textField}>
              <TextFieldWithTitle title='URL'
                                  value={siteUrl}
                                  placeholder='Пример: Nasrf.ru'
                                  onChange={(e) => setSiteUrl(e.target.value)} />

            </div>

            <div className={s.sites__btn}>
              <Button width='23.9rem'
                      bgColor='#096BFF'
                      text='Создать проект'
                      disabled={!siteUrl && !siteTitle}
                      onClick={addSite} />

            </div>
            {errorMessage && <div className={s.sites__error}>{errorMessage}</div>}
          </div>

      }
      <div className={s.sites__list}>
        <h3 className={s.sites__title}>Список проектов</h3>

        {isLoading ? (<div className={s.sites__loading}>
            <LoadingSpinner />
          </div>) :
          (<div className={s.sites__wrapper}>
            {
              allSites.map((site, index) => {
                return (
                  <SiteBlock
                  key={index}
                  setAllSites={setAllSites}
                  setErrorMessage={setErrorMessage}
                  setIsLoading={setIsLoading}
                  {...site}
                />
                )
              })

            }
            {errorMessage && <div className={s.sites__error}>{errorMessage}</div>}
          </div>)
        }

      </div>
    </>
  );
};

export default Sites;
