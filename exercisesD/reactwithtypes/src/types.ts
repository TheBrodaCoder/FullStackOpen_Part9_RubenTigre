
interface CoursePartBase {
    name: string;
    exerciseCount: number;
}

interface CourseDescription extends CoursePartBase {
    description: string;
}
  
interface CoursePartOne extends CourseDescription {
    name: "Fundamentals";
}
  
interface CoursePartTwo extends CoursePartBase {
    name: "Using props to pass data";
    groupProjectCount: number;
}
  
interface CoursePartThree extends CourseDescription {
    name: "Deeper type usage";
    exerciseSubmissionLink: string;
}

interface CoursePartFour extends CourseDescription {
    name: 'Full Stack Open';
    university: 'Helsinki';
}

  
export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | CoursePartFour ;

export interface HeaderProps {
    title: string;
}

export interface ContentProps {
    parts: Array<CoursePart>;
}

export interface TotalProps {
    parts: Array<CoursePart>;
}

export interface LineProps {
    name: string,
    exerciseCount: number;
}

export interface PartProps {
    parts: Array<CoursePart>;
}