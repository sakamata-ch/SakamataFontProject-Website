import { Navigation, Theme } from '@canonical/react-components'
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.scss'

export default function Nav(): JSX.Element {

  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <div>
      <Navigation
        items={[
          {
            label: t('Supported Characters'),
            items: [
              {
                label: t('Alphabet, Number, ASCII Character'),
                url: `/${language}/ascii`
              },
              {
                label: t('Hiragana, Katakana'),
                url: `/${language}/hiragana-katakana`
              },
              {
                label: t('All Characters'),
                url: `/${language}/all-chars`
              }
            ]
          },
          {
            label: t('Downloads'),
            items: [
              {
                label: t('Standard Font'),
                url: 'https://github.com/sakamata-ch/SakamataFontProject/releases'
              },
              {
                label: t('Japanese Traditional Calligraphy'),
                url: 'https://github.com/sakamata-ch/SakamataTraditionalCalligraphyFont/releases'
              }
            ]
          },
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
                url: '/ja'
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
    </div>
  )
}
