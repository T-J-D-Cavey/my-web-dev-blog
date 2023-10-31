import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import classes from "./newsletter-form.module.css";

export default function NewsletterForm({fetchHandler}) {
  const [show, setShow] = useState(false);
  const emailInputRef = useRef()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(e) {
    e.preventDefault();
    setShow(false);
    // ADD CLIENT SIDE VALIDATION HERE (LIB?)
    fetchHandler(emailInputRef.current.value)
  }

  return (
    <div className={classes.container}>
      <Button variant="outline-dark" onClick={handleShow} className={classes.grey500bg} size="sm">
        SIGN UP
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className={classes.grey500bg}>
          <Modal.Title className={classes.grey800color}>EMAIL SUBSCRIPTION:</Modal.Title>
        </Modal.Header>
        <Modal.Body className={classes.grey500bg}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={classes.grey800color}>Email address:</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                ref={emailInputRef}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className={classes.grey500bg}>
          <Button variant="outline-dark" onClick={handleClose}>
            CLOSE
          </Button>
          <Button variant="dark" onClick={handleSubmit}>
            SUBMIT
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}