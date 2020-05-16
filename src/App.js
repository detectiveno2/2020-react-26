import React, { Component } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

class App extends Component {
  render() {
    const blogs = [
      {
        id: 1,
        title: "I Want a Dog for Christmas, Charlie Brown",
        content:
          "fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl",
        date: "5/19/2019"
      },
      {
        id: 2,
        title: "Thale",
        content:
          "mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac",
        date: "7/26/2019"
      },
      {
        id: 3,
        title: "When a Stranger Calls",
        content:
          "rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia",
        date: "12/14/2019"
      },
      {
        id: 4,
        title: "Devil's Own, The",
        content:
          "vel ipsum praesent blandit lacinia erat vestibulum sed magna at",
        date: "6/13/2019"
      },
      {
        id: 5,
        title: "Off the Black",
        content:
          "dapibus duis at velit eu est congue elementum in hac habitasse platea",
        date: "5/30/2019"
      },
      {
        id: 6,
        title: "The Police Can't Move",
        content:
          "tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed",
        date: "5/13/2020"
      },
      {
        id: 7,
        title: "Sleep Room, The",
        content:
          "proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum",
        date: "2/29/2020"
      },
      {
        id: 8,
        title: "Great White Hope, The",
        content:
          "phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id",
        date: "6/13/2019"
      },
      {
        id: 9,
        title: "Summer's Tale, A (Conte d'été)",
        content:
          "libero convallis eget eleifend luctus ultricies eu nibh quisque id justo",
        date: "3/5/2020"
      },
      {
        id: 10,
        title: "Winter Soldier",
        content:
          "in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum",
        date: "2/6/2020"
      },
      {
        id: 11,
        title: "Patriot, The",
        content:
          "dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
        date: "8/10/2019"
      },
      {
        id: 12,
        title: "Music Box, The",
        content:
          "feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id",
        date: "1/13/2020"
      },
      {
        id: 13,
        title: "Grand Masti",
        content:
          "odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia",
        date: "6/27/2019"
      },
      {
        id: 14,
        title: "No Time for Comedy",
        content:
          "dolor quis odio consequat varius integer ac leo pellentesque ultrices",
        date: "12/12/2019"
      },
      {
        id: 15,
        title: "The great match",
        content: "eu mi nulla ac enim in tempor turpis nec euismod",
        date: "6/14/2019"
      },
      {
        id: 16,
        title: "Woman Who Drinks, The (La femme qui boit)",
        content:
          "a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique",
        date: "10/14/2019"
      },
      {
        id: 17,
        title: "Possessed (Besat)",
        content:
          "quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi",
        date: "12/12/2019"
      },
      {
        id: 18,
        title: "Sea Gull, The",
        content:
          "hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut",
        date: "9/18/2019"
      },
      {
        id: 19,
        title: "Variety (Varieté)",
        content:
          "id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio",
        date: "10/26/2019"
      },
      {
        id: 20,
        title: "Meet John Doe",
        content:
          "nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices",
        date: "10/19/2019"
      }
    ];

    return (
      <div className="App">
        <Router>
          <Header blogs={blogs} />
        </Router>
      </div>
    );
  }
}

export default App;
