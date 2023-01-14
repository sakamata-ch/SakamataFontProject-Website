import Nav from '../components/Nav'
import Footer from '../components/Footer'
import React, { useEffect, useState } from 'react';
import { Link, Trans, useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import '../styles/vanilla.scss';
import '../styles/sakamata-font.scss';
import '../styles/sakamata-font-preview.scss';
import { graphql } from 'gatsby'
import Helmet from 'react-helmet';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet title={t('Tips for using font') + ' - ' + t('Sakamata Font Project')}>
        <meta property="twitter:title" content={t('Tips for using font') + ' - ' + t('Sakamata Font Project')} />
        <meta property="og:title" content={t('Tips for using font') + ' - ' + t('Sakamata Font Project')} />
        <html lang="ja"></html>
        <meta property='twitter:description' content="沙花叉フォントに存在しない文字の効率的な代替方法や、よりバランスの良い表記に変更するテクニック、かわいらしさを引き出す方法について説明します。" />
        <meta name="description" content="沙花叉フォントに存在しない文字の効率的な代替方法や、よりバランスの良い表記に変更するテクニック、かわいらしさを引き出す方法について説明します。" />
        <meta property="og:image" content="/favicon.svg" />
        <meta property="twitter:image" content="/favicon.svg" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={t('Sakamata Font Project')} />
      </Helmet>

      <Nav />

      <section className="p-strip--suru-topped">
        <div className="row u-vertically-center">
          <div className="col-8">
            <h1><Trans>Sakamata Font Project</Trans></h1>
            <p><Trans>Tips for using font</Trans></p>
          </div>
        </div>
      </section>

      <div className="p-strip--light">
        <div className="row">
          <div className="col-12">
            <h2>組み合わせ文字を避ける</h2>
            <p>
              沙花叉フォントでは<code>ず</code>などの濁点がついた文字が収録されていない場合があります。
            </p>
            <p>
              このようなケースに遭遇した場合は<code>す</code>と<code>゛</code>を別の文字として入力すると、
              <span className='font-sakamata-apply'>す゛</span>を得ることができます。
            </p>
            <p>
              このような手法を使う場合、<code>ざ</code>などの収録されている文字においても同じ手法を使うことで、
              見た目に統一感を出すことができます。
            </p>
          </div>
        </div>
      </div>

      <div className="p-strip--dark">
        <div className="row">
          <div className="col-12">
            <h3>代替手法を一部の文字に適用</h3>
            <p className="font-sakamata-apply">
              す゛っと一緒だよ
            </p>
            <h3>代替手法をすべての文字に適用</h3>
            <p className="font-sakamata-apply">
              す゛っと一緒た゛よ
            </p>
          </div>
        </div>
      </div>

      <div className="p-strip--light">
        <div className="row">
          <div className="col-12">
            <h2>半角全角を切りかえる</h2>
            <p>
              沙花叉フォントでは半角文字と全角文字で出力が異なる字があります。
              例えば、<code>!</code>は<span className="font-sakamata-apply">!</span>と<span className="font-sakamata-apply">！</span>の2種が存在します。
            </p>
            <p>
              これらの文字の違いは意図されたものであるパターンとそうでないパターンがありますが、
              表現を豊かにするうえでは有用です。
            </p>
            <p className="u-text--muted">
              注意: これらの字体は更新によって変更される可能性があります。
            </p>
          </div>
        </div>
      </div>

      <div className="p-strip--dark">
        <div className="row">
          <div className="col-12">
            <h3>半角全角を使い分ける例</h3>
            <p className="font-sakamata-apply">
              さかな～
            </p>
            <p className="font-sakamata-apply">
              おもさは15~25tです。
            </p>
          </div>
        </div>
      </div>

      <div className="p-strip--light">
        <div className="row">
          <div className="col-12">
            <h2>不足文字をひらがなで表現する</h2>
            <p>
              沙花叉フォントには存在しない文字が多く存在します。
              我々はこの問題を「<span className="font-jtc-sakamata-apply">BIG学業ぽえぽえ</span>問題」と読んでいますが、
              下記の方法で応急処置的に解決することができます。
            </p>
            <p>
              沙花叉フォントでは最も基本となるひらがな46字と濁点記号の対応が完了しているため、
              存在しない文字を表現する必要がある場合、ひらがなにフォールバックすると良いでしょう。
            </p>
            <p>
              また、本来収録されている文字の一部をひらがなで記述することで、
              統一感と可愛らしさを演出することができます。
            </p>
          </div>
        </div>
      </div>

      <div className="p-strip--dark">
        <div className="row">
          <div className="col-12">
            <h3>ひらがなフォールバックの例</h3>
            <p className="font-sakamata-apply">
              ふおんとを自作したはなし。
            </p>
            <p style={{ color: '#CCC' }}>
              「フォント・話」を「ふおんと・はなし」に変更。
            </p>
          </div>
        </div>
      </div>

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