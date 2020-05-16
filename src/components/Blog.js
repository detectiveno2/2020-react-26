import React, { Component } from "react";
import {
  Container,
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  Switch,
  Route
} from "react-router-dom";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  prevPage(currentPage) {
    return event => {
      this.setState({
        currentPage: --currentPage
      });
    };
  }

  onClick(num) {
    return event => {
      this.setState({
        currentPage: num
      });
    };
  }

  nextPage(currentPage) {
    return event => {
      this.setState({
        currentPage: ++currentPage
      });
    };
  }

  render() {
    const { blogs } = this.props;
    const { currentPage } = this.state;

    const perPage = 6;
    const end = currentPage * perPage;
    const start = end - perPage;

    let pageQuantity = Math.ceil(blogs.length / perPage);

    let numberPage = [];
    for (let i = 1; i <= pageQuantity; i++) {
      numberPage.push(i);
    }

    return (
      <div className="Blog">
        <Router>
          <Container>
            <Row>
              <h2 className="text-center col-12 m-4">Blogs</h2>
            </Row>
            <Row>
              {blogs.slice(start, end).map(blog => (
                <div className="col-4 my-4">
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="https://picsum.photos/400/200"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>
                        <b>{blog.title}</b>
                      </CardTitle>
                      <CardSubtitle>Date: {blog.date}</CardSubtitle>
                      <CardText>{blog.content}</CardText>
                      <Button color="primary">Read</Button>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </Row>
            <Row>
              <Pagination>
                <PaginationItem disabled={currentPage <= 1}>
                  <PaginationLink
                    previous
                    onClick={this.prevPage(currentPage)}
                  />
                </PaginationItem>
                {numberPage.map(num => (
                  <PaginationItem key={num}>
                    <PaginationLink onClick={this.onClick(num)}>
                      {num}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem disabled={currentPage >= pageQuantity}>
                  <PaginationLink next onClick={this.nextPage(currentPage)} />
                </PaginationItem>
              </Pagination>
            </Row>
          </Container>
        </Router>
      </div>
    );
  }
}

export default Blog;
