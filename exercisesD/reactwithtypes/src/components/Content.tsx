import React from 'react';
import { ContentProps } from '../types';
import Line from './Line';

const Content: React.FC<ContentProps> = (props: ContentProps) => {

    const renderedLines = props.parts.map((part) => {
       return <Line key={part.name} name={part.name} exerciseCount={part.exerciseCount}></Line>
    })

    return (
        <div>
            {renderedLines}
        </div>
    )
};

export default Content;