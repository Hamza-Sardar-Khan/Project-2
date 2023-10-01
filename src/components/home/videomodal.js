import React from "react"
import { Modal } from "react-bootstrap"
import Vid from "../videoPlayer/videoPlayer.js"

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <Vid src="Lz_ggnTS4W4" provider="youtube" isAutoplay/>
      </Modal.Body>
    </Modal>
  )
}

export default MyVerticallyCenteredModal
