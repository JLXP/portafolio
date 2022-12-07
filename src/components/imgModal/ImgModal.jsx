export const ModalImg = ({ imagen, isOpen, onToggle }) => {
    return (
      <Modal show={isOpen} onHide={onToggle} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!
          <p>{imagen.likes}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onToggle}>
            Close
          </Button>
          <Button variant="primary" onClick={onToggle}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }