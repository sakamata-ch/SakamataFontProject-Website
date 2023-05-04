import { Card, Row, Col, Strip } from '@canonical/react-components'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import React, { useEffect, useState } from 'react';
import { Link, Trans, useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import '../styles/vanilla.scss';
import '../styles/sakamata-font.scss';
import '../styles/sakamata-font-preview.scss';
import { graphql } from 'gatsby'
import Helmet from 'react-helmet';
import NavStd from '../components/NavStd';

export default function Home() {
  const { t } = useTranslation();
  const { language, siteUrl } = useI18next();

  const [textInput, setTextInput] = useState<string>('沙花叉クロヱ');

  return (
    <div>
      <Helmet title="さかまた ふぉんと ぷろじぇくと">
        <html lang="ja"></html>
        <meta property="twitter:title" content="さかまた ふぉんと ぷろじぇくと" />
        <meta property="og:title" content="さかまた ふぉんと ぷろじぇくと" />
        <meta property='twitter:description' content="実際に沙花叉フォントを使って沙花叉フォントプロジェクトのサイトを作ってみた例" />
        <meta name="description" content="実際に沙花叉フォントを使って沙花叉フォントプロジェクトのサイトを作ってみた例" />
        <meta property="og:image" content="/favicon.svg" />
        <meta property="twitter:image" content="/favicon.svg" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="沙花叉フォントプロジェクト" />
      </Helmet>

      <Nav />
      <NavStd />

      <section className="p-strip--suru">
        <div className="row u-vertically-center">
          <div className="col-8">
            <h1 className="font-sakamata-apply">さかまた ふおんと ふ゜ろし゛えくと</h1>
            <p className="font-sakamata-apply">
              沙花叉 ふおんと ふ゜ろじえくとは沙花叉クロヱのでかわいい文字を ふおんと にすることで、いつでも使えるようにするふ゜ろじえくとです。
            </p>
            <p className="font-sakamata-apply">
              こじんようとのみでごりよういただけます。
            </p>
            <p>
              このページは実際に沙花叉フォントを適用しています。
              <Link to="/">沙花叉フォントが使われていないページ</Link>もご利用いただけます。
            </p>
          </div>
        </div>
      </section>

      <Strip type="light">
        <Row>
          <Col size={12}>
            <h2 className="font-sakamata-apply">今すぐためす</h2>
            <p className="font-sakamata-apply">
              沙花叉のかわいい文字を今すぐチエックしましょう。
              <Link to="/tips">ふおんと をかしこく使う てくにっく</Link>
            </p>
            <input type="text" onChange={event => setTextInput(event.target.value)} defaultValue={textInput} />
            <div className="font-sakamata">
              {textInput}
            </div>
          </Col>
        </Row>
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