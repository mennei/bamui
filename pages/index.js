import React, {Component} from 'react';
import Head from 'next/head';
import FilterableProductTable
  from '../client/components/FilterableProductTable';

const conf = require ('../server.config');

class Index extends Component {
  constructor (props) {
    super (props);
  }

  // Init props by getting values from DB
  static async getInitialProps (props) {
    const res = await fetch (conf.VALUES_URL);
    const data = await res.json ();
    if (res.status != 200) throw Error ('Error!!');
    return data;
  }

  render () {
    let shows = this.props.data;
    return (
      <div className="grid-container" align="center">
        <Head>
          <title>Bam UI</title>
          <link href="./static/favicon.ico" rel="icon" type="image/x-icon" />
          <link href="./static/style.css" rel="stylesheet" />
        </Head>
        <div className="item1">
          <img src="./static/Menora_logo.png" />
          <h1>Bam UI</h1>
        </div>
        <FilterableProductTable products={shows} />
      </div>
    );
  }
}
export default Index;
