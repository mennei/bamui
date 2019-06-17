import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../styleguide/getPageContext';
import styled from "styled-components";
const withJssProvider = (App, pageContext, props) => (
  <JssProvider registry={pageContext.sheetsRegistry} generateClassName={pageContext.generateClassName} jss={pageContext.jss}>
    <App pageContext={pageContext} {...props} />
  </JssProvider>
);

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet(); // for styled-components
    const pageContext = getPageContext();

    const page = renderPage(App => props => {
      const WrappedApp = withJssProvider(App, pageContext, props); // for material-ui
      sheet.collectStyles(WrappedApp); // for styled-components
      return WrappedApp;
    });

    return {
      ...page,
      styleTags: sheet.getStyleElement(),
      pageContext,
      styles: (
        <style
          id="jss-server-side"
          dangerouslySetInnerHTML={{
            __html: pageContext.sheetsRegistry.toString()
          }}
        />
      )
    };
  }

  render() {
    return (
      <html
        style={{
          height: '100%'
        }}
      >
        <Head>
          <meta
           charSet="utf-8"
           httpEquiv="X-UA-Compatible"
           content="IE=edge"
          />
          <meta
           charSet="utf-8"
           httpEquiv="X-UA-Compatible"
           content="IE=11"
          />
          <meta
           httpEquiv="Pragma"
           content="no-cache"
          />
          <meta
           httpEquiv="Expires"
           content="-1"
          />
            <meta
           name="robots"
           content="noindex"
          />
                     <meta
           name="googlebot"
           content="noindex"
          />
          <meta name='viewport' content='width=device-width, initial-scale=1,  minimum-scale=1,user-scalable=yes' /> 
          <style>
            {`
              #__next{
                height: 100%;
                width: 100%;
                
            `}
          </style>
          {this.props.styleTags}
        </Head>
        <body dir="rtl"
          style={{
            height: '100%',
            margin: 0,
            
          }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    );
    
  }
}

