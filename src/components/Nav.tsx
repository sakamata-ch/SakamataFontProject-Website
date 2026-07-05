import { Navigation, Theme } from '@canonical/react-components'
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import aSvg from '../images/あ.svg';
import {BASE_URL} from '../consts';

export default function Nav(): JSX.Element {

  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <>
      <Navigation
        items={[
          {
            label: t('Styles'),
            items: [
              {
                label: t('Standard Font'),
                url: `${BASE_URL}/${language}/`
              },
              {
                label: t('Japanese Traditional Calligraphy'),
                url: `${BASE_URL}/${language}/jtc`
              }
            ]
          },
          {
            label: 'Languages',
            items: [
              {
                label: '日本語',
                url: `${BASE_URL}/ja`
              },
              {
                label: 'English',
                url: `${BASE_URL}/en`
              }
            ]
          }
        ]}
        logo={{
          src: aSvg,
          title: t('Sakamata Font Project'),
          url: `${BASE_URL}/${language}/`
        }}
        theme={Theme.DARK}
      />
    </>
  )
}
