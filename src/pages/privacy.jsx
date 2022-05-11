import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Footer from "../components/Footer/Footer";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default class Privacy extends React.Component {

    render() {

        return (
          <Layout>
            <Helmet>
              <title>{`${config.siteTitle} | Datenschutzerkl&auml;rung`}</title>
            </Helmet>
            <SEO />
            <div className="page-wrap">
              <section className="page">
                <div className="page-content">
                  <header className="page-header">
                    <h1>Datenschutzerkl&auml;rung</h1>
                  </header>
                  <p>
                    Diese Datenschutzerkl&auml;rung kl&auml;rt Sie &uuml;ber die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten“) im Rahmen der Erbringung unserer Leistungen sowie innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepr&auml;senzen, wie z.B. unser Social Media Profile auf (nachfolgend gemeinsam bezeichnet als „Onlineangebot“). Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung“ oder „Verantwortlicher“ verweisen wir auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).
                  </p>
                  <div className="one-half first">
                    <h4>Verantwortlicher</h4>
                    Sebastian Fiele<br />
                    Graelstr. 45<br />
                    48151 M&uuml;nster
                    <br />
                    E-Mail: rawsta(at)rawsta(.)de
                  </div>
                </div>
                <hr />
              </section>
            </div>
            <Footer config={config} />
          </Layout>
        );
    }
}
