import React, { useState, useRef } from "react";
import {
  Button,
  Card,
  Col,
  FloatingLabel,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import { axiosInstance } from "../../apis/baseApi";

export default function ProductForm() {
  const inputRef = useRef();
  const [book, setBook] = useState({
    isbn: "",
    title: "",
    author: "",
    published: "",
    publisher: "",
    page: "",
    image: "",
    description: "",
    price: "",
  });

  const resetBook = () => {
    setBook({
      isbn: "",
      title: "",
      author: "",
      published: "",
      publisher: "",
      page: "",
      image: "",
      description: "",
      price: "",
    });
    inputRef.current.value = null;
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("image", book.image, book.image.name);
    try {
      const { data, status } = await axiosInstance.post(
        "/image-upload",
        formData
      );
      formData.delete("image");
      if (status === 201) {
        return data.url;
      }
    } catch (err) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await uploadImage();
    if (data) {
      try {
        const newBook = { ...book, imageUrl: data };
        const res = await axiosInstance.post("/books", newBook);
        if (res.status === 201) {
          resetBook();
        }
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Card className="mt-4">
      <h1 className="text-center fs-2 fw-bold mt-4">Add New Book</h1>
      <Form className="p-4" onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <FloatingLabel label="Code" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Code"
                required
                value={book.isbn}
                onChange={(e) => setBook({ ...book, isbn: e.target.value })}
              />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel label="Published" className="mb-3">
              <Form.Control
                type="date"
                placeholder="Published"
                required
                value={book.published}
                onChange={(e) =>
                  setBook({ ...book, published: e.target.value })
                }
              />
            </FloatingLabel>
          </Col>
        </Row>
        <FloatingLabel label="Title" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Title"
            required
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
          />
        </FloatingLabel>
        <Row>
          <Col md={6}>
            <FloatingLabel label="Author" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Author"
                required
                value={book.author}
                onChange={(e) => setBook({ ...book, author: e.target.value })}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Publisher" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Publisher"
                required
                value={book.publisher}
                onChange={(e) =>
                  setBook({ ...book, publisher: e.target.value })
                }
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FloatingLabel label="Price" className="mb-3">
              <Form.Control
                type="number"
                placeholder="Price"
                required
                value={book.price}
                onChange={(e) => setBook({ ...book, price: e.target.value })}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Number Of Pages" className="mb-3">
              <Form.Control
                type="number"
                placeholder="Number Of Pages"
                required
                value={book.page}
                onChange={(e) => setBook({ ...book, page: e.target.value })}
              />
            </FloatingLabel>
          </Col>
        </Row>

        <FloatingLabel label="Description" className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Description"
            style={{ height: "100px" }}
            required
            value={book.description}
            onChange={(e) => setBook({ ...book, description: e.target.value })}
          />
        </FloatingLabel>
        <FormControl
          ref={inputRef}
          type="file"
          accept=".jpg,.png,.jpeg"
          placeholder="Thumbnail"
          className="mb-3"
          onChange={(e) => setBook({ ...book, image: e.target.files[0] })}
        />
        <Row className="d-flex justify-content-end">
          <Col xs={12} md={4}>
            <Button
              variant="info"
              type="submit"
              className="text-white mx-0 w-100"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
