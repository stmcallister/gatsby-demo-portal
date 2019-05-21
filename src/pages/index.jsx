import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Portal from "../components/Portal";
import config from "../../data/SiteConfig";

class IndexPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="PagerPoop Developer Portal">
        <div className="about-container">
          <Helmet>
            <title>{`${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/`} />
          </Helmet>

          <Portal />
        
        </div>
      </Layout>
    );
  }
}

export default IndexPage;