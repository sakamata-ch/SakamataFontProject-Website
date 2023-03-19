import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.scss'

export default function Nav(): JSX.Element {

  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href={`/${language}/`}><Trans>Standard Font</Trans></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <Trans>Supported Characters</Trans>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item text-light" href={`/${language}/ascii`}><Trans>Alphabet, Number, ASCII Character</Trans></a></li>
                  <li><a className="dropdown-item text-light" href={`/${language}/hiragana-katakana`}><Trans>Hiragana, Katakana</Trans></a></li>
                  <li><a className="dropdown-item text-light" href={`/${language}/all-chars`}><Trans>All Characters</Trans></a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" target="_blank" rel="noreferrer noopener" href="https://github.com/sakamata-ch/SakamataFontProject/releases">
                  <Trans>Downloads</Trans> <i className="bi bi-box-arrow-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
