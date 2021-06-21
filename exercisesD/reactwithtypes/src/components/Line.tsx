import React from 'react';
import { LineProps } from '../types';

const Line: React.FC<LineProps> = (props: LineProps) => {

    return (
        <p>
           {props.name}: {props.exerciseCount} 
        </p>
    )
}

export default Line