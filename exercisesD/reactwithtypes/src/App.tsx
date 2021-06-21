import React from 'react';
import { Course } from './types';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

const App: React.FC = ()=> {
  const course: Course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals",
        exerciseCount: 10
      },
      {
        name: "Using props to pass data",
        exerciseCount: 7
      },
      {
        name: "Deeper type usage",
        exerciseCount: 14
      }
    ]
  }

  return (
    <div className="App">
      <Header title={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  );
}

export default App;