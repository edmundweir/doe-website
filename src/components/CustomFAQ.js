import React, { Component } from 'react';
import Faq from 'react-faq-component';
import './CustomFAQ.css'

const data = {
  title: "",
  rows: [
    {
      title: "What platforms will DOE be available on?",
      content: "At our first release, DOE will be available on Android and iOS."
    },
    {
      title: "What type of game is DOE?",
      content: "DOE is a multiplayer environmental game where progress is made through real climate action. The gameplay is a management-style base builder and survival game."
    },
    {
      title: "When can I play DOE?",
      content: "DOE is in closed testing, with public testing scheduled for late 2021 and a full release Q1 2022."
    },
    {
      title: "How can I keep up to date with DOE?",
      content: "Enter your email below for development updates and for priority access to our testing program."
    }]
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Faq
            data={data}
            styles={{
                bgColor: "#db5445",
                titleTextColor: "#fdf180",
                titleTextSize: '6vh',
                rowTitleColor: "#fdf180",
                rowTitleTextSize: '3vh',
                rowTitleFontWeight: 'bold',
                rowContentColor: "#fdf180",
                rowContentTextSize: '2.5vh',
                rowContentPaddingTop: '10px',
                rowContentPaddingBottom: '10px',
                rowContentPaddingLeft: '50px',
                rowContentPaddingRight: '150px',
                arrowColor: "#fdf180",
                }} />
      </div>
    )
  }
}
