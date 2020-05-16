import React from "react";
import {
  Container,
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";

const Home = props => {
  const { blogs } = props;

  return (
    <div className="Home">
      <Container>
        <Row>
          <h2 className="text-center col-12 my-4">Home</h2>
        </Row>
        <Row>
          {blogs.map(blog => (
            <div className="col-6 my-4">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://picsum.photos/400/200"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle><b>{blog.title}</b></CardTitle>
                  <CardSubtitle>Date: {blog.date}</CardSubtitle>
                  <CardText>
                    {blog.content}
                  </CardText>
                  <Button color="primary">Read</Button>
                </CardBody>
              </Card>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
