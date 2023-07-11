import { Card, Row, Col, Strip } from '@canonical/react-components'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react';
import React from 'react';
import { Trans, useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import '../../styles/vanilla.scss';
import '../../styles/sakamata-font-preview.scss';
import { graphql } from 'gatsby'
import Helmet from 'react-helmet';
import NavJtc from '../../components/NavJtc';

export default function Home() {
  const { t } = useTranslation();
  const { language, siteUrl } = useI18next();
  const [chars, setChars] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://ccb32c5e-d34b-4288-8651-fa1291fbd49c.cdeliver.net/font.sakamata.ch/jtc/sakamata-jtc-font-char.tsv').then(res => res.text()).then(data => {
      let chars: string[] = [];

      String(data).split('\n').forEach(function (l: string) {
        if (l === '') return;
        const v = l.split('\t');
        chars[chars.length] = v[0];
      });

      setChars(chars);
    });
  }, []);

  return (
    <div>
      <Helmet title={t('Supported Characters') + ' - ' + t('Sakamata Japanese Traditional Calligraphy Font')}>
        <meta property="twitter:title" content={t('Supported Characters') + ' - ' + t('Sakamata Japanese Traditional Calligraphy Font')} />
        <meta property="og:title" content={t('Supported Characters') + ' - ' + t('Sakamata Japanese Traditional Calligraphy Font')} />
        <html lang={language}></html>
        <meta property='twitter:description' content={t("Sakamata Font supported character list")} />
        <meta name="description" content={t("Sakamata Font supported character list")} />
        <meta property="og:image" content="/favicon.svg" />
        <meta property="twitter:image" content="/favicon.svg" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={t('Sakamata Japanese Traditional Calligraphy Font')} />
      </Helmet>

      <Nav />
      <NavJtc />

      <section className="p-strip--suru-topped">
        <div className="row u-vertically-center">
          <div className="col-12">
            <h1><Trans>Sakamata Japanese Traditional Calligraphy Font</Trans></h1>
            <h2><Trans>Supported Characters</Trans></h2>
            <p>{chars.length} <Trans>characters supported now.</Trans></p>
          </div>
        </div>
      </section >

      <Strip type="light">
        <ul className="p-matrix">
          {chars.map(i =>
            <>
              <li className="p-matrix__item" key={i} id={'U+' + (i.charCodeAt(0).toString(16))}>
                <div className="p-matrix__img char-list-preview-holder">
                  <div>
                    <span className="font-jtc-sakamata-apply char-list-preview">{i}</span>
                  </div>
                </div>
                <div className="p-matrix__content">
                  <h3 className="p-matrix__title">{i}: U+{i.charCodeAt(0).toString(16)}</h3>
                </div>
              </li>
            </>
          )}
        </ul>
      </Strip>

      <Footer />

    </div >
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
