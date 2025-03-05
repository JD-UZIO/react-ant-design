import React, { useState } from 'react'
import { Button, Modal } from 'antd';
function AppWork() {
  const [state,setState] = useState(false)

  const showModal = () => {
    setState(true);
  };

  const handleCancel = e => {
    console.log(e);
    setState(false);
  };
  return (
    <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>How it works</h2>
            <p>check our latest video to know how it works</p>
          </div>
          <div className="contentHolder">
            <Button size="large" onClick={showModal}><i className="fas fa-play"></i></Button>
          </div>
          <Modal
            title="Woocommerce Tutorial"
            open={state}
            onCancel={handleCancel}
            footer={null}
            destroyOnClose = {true}
          >
            <iframe title="Woocommerce Tutorial" width="100%" height="350" src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"></iframe>
          </Modal>
        </div>
      </div>
  )
}

export default AppWork