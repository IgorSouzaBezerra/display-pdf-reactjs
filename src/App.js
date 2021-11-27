import React, { useEffect, useRef } from 'react';
import CloudPdfViewer from '@openbook/cloudpdf-viewer';

import './styles.css';

function App() {

  const viewer = useRef(null);
  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "c2e4e29b-b7ba-4d87-99dd-126b671fd19d",
        darkMode: true
      },
      viewer.current
    ).then((instance) => {});
  }, []);

  return (
    <div className="app">
      <div className="viewer" ref={viewer}></div>
    </div>
  );
}

export default App;
