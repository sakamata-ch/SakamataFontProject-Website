import { Navigation, Theme } from '@canonical/react-components'
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';
import React from 'react';
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.scss'

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
                url: `/${language}/`
              },
              {
                label: t('Japanese Traditional Calligraphy'),
                url: `/${language}/jtc`
              }
            ]
          },
          {
            label: 'Languages',
            items: [
              {
                label: '日本語',
                url: `/ja`
              },
              {
                label: 'English',
                url: '/en'
              }
            ]
          }
        ]}
        logo={{
          src: "/あ.svg",
          title: t('Sakamata Font Project'),
          url: `/${language}/`
        }}
        theme={Theme.DARK}
      />
    </>
  )
}
