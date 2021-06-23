import React from 'react';
import { CoursePart } from './types';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';
import Part from './components/Part';

const App: React.FC = ()=> {
  
  const name = "Half Stack application development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
    },
    {
      name: "Full Stack Open",
      exerciseCount: 14,
      description: "Confusing description",
      university: 'Helsinki'
    }
  ]

  return (
    <div className="App">
      <Header title={name}></Header>
      <Content parts={courseParts}></Content>
      <Total parts={courseParts}></Total>
      <Part parts={courseParts}></Part>
    </div>
  );
}

export default App;