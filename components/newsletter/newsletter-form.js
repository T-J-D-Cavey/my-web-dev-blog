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
    if(emailInputRef.current.value.length === 0) {
      fetchHandler({invalidInput: 'Email input is empty...'});
      return;
    }
    if(!emailInputRef.current.value.includes("@")) {
      fetchHandler({invalidInput: 'Invalid format for email address...'});
      return;
    }
    fetchHandler(emailInputRef.current.value)
    setShow(false);
  }

  return (
    <div className={classes.container}>
      <Button variant="dark" onClick={handleShow} size="sm" className={classes.button}>
        SIGN UP
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className={classes.background}>
          <Modal.Title className={classes.textColor}>EMAIL SUBSCRIPTION:</Modal.Title>
        </Modal.Header>
        <Modal.Body className={classes.background}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={classes.textColor}>Email address:</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
                autoFocus
                ref={emailInputRef}
                className={classes.form_input}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className={classes.background}>
          <Button variant="outline-dark" onClick={handleClose}>
            CLOSE
          </Button>
          <Button variant="dark" onClick={handleSubmit} type="submit" className={classes.button}>
            SUBMIT
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
