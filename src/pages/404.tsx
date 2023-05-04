import * as React from "react"
import { Navigation, Theme } from '@canonical/react-components'
import { Link } from "gatsby"
import '../styles/sakamata-font-preview.scss'
import '../styles/sakamata-font.scss'

// markup
const NotFoundPage = () => {
  return (
    <>
      <Navigation
        items={[
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
          title: 'Sakamata Font Project',
          url: '/'
        }}
        theme={Theme.DARK}
      />

      <section className="p-strip">
        <div className="row">
          <div className="col-6 col-medium-3 u-vertically-center u-align--center">
            <div>
              <img src="/404-orca.png" alt="404 Orca" width="480" height="480" />
              <p>
                <small>
                  Photo by <a href="https://unsplash.com/@t_lipke">Thomas Lipke</a> on <a href="https://unsplash.com/photos/p5nDU-d3Y0s">Unsplash</a>
                </small>
              </p>
            </div>
          </div>
          <div className="col-6 col-medium-3 u-vertically-center">
            <div>
              <h1><span className="font-sakamata-apply">OPPS!</span> Something went wrong.</h1>
              <p className="p-heading--4">The requested page was not found.</p>
              <Link to="/">Back home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage
