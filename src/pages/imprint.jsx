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
                <hr />
                <div className="page-content">
                  <h3>Angaben gemäß § 5 TMG:</h3>
                  <div className="one-half first">
                    <p>
                      Sebastian Fiele
                      <br />
                      Von-Kluck-Str. 6
                      <br />
                      48151 Münster
                    </p>
                  </div>
                  <div className="one-half">
                    <p>
                      E-Mail: rawsta(at)rawsta.de
                      <br />
                      GitHub: (at)rawsta
                      <br />
                      Twitter: (at)rawsta
                    </p>
                  </div>
                  <hr class="clearfix"/>
                  <div>
                    <p>
                      <h4>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h4>
                      Sebastian Fiele
                      <br />
                      Von-Kluck-Str. 6
                      <br />
                      48151 Münster
                    </p>
                  </div>
                </div>
                <hr/>
                <Footer config={config} />
              </section>
            </div>
          </Layout>
        );
    }
}
