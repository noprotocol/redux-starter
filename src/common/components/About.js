import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

class About extends Component {

  render() {
    const metaData = {
      title: 'Some Meta Title',
      description: 'I am a description, and I can create multiple tags',
      canonical: 'http://example.com/path/to/page',
      meta: {
        charSet: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    };

    return (
      <div>
        <DocumentMeta {...metaData} />
        <h1>About</h1>
      </div>
    );
  }
};

export default About;
