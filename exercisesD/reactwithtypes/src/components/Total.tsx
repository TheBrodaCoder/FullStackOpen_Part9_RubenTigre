import React from 'react'
import { TotalProps } from '../types';

const Total: React.FC<TotalProps> = (props: TotalProps) => {

    const totalExercises = props.parts.reduce((carry, part) => carry + part.exerciseCount, 0);

    return (
        <p>
            Number of exercises: {totalExercises}.
        </p>
    )
}

export default Total
