import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default class Imprint extends React.Component {

    render() {

        return (
          <Layout>
            <Helmet>
              <title>{`${config.siteTitle} | Impressum`}</title>
            </Helmet>
            <SEO />
            <div className="page-wrap">
              <section className="page">
                <header className="page-header">
                  <h1>Impressum</h1>
                </header>
                <div className="page-content">
                  <div className="one-half first">
                    <p>
                      <h3>Angaben gemäß § 5 TMG:</h3>
                      Sebastian Fiele
                      <br />
                      Von-Kluck-Str. 6
                      <br />
                      48151 Münster
                    </p>
                    <p>
                      <h4>Kontakt</h4>
                      E-Mail: _rawsta__(at)__rawsta_._de_
                      GitHub: (at)_rawsta_
                      Twitter: (at)_rawsta_
                    </p>
                  </div>
                </div>
                <hr />
                <Footer config={config} />
              </section>
            </div>
          </Layout>
        );
    }
}
