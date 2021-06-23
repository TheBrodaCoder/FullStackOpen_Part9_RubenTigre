import React from 'react'
import { PartProps } from '../types';

const Part: React.FC<PartProps> = (props: PartProps) => {

    const assertNever = (value: never): never => {
        throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`)
    }

    const renderedParts: Array<string> = [];
    props.parts.forEach(part => {
        switch (part.name) {
            case 'Fundamentals':
                renderedParts.push(`name: ${part.name}, description: ${part.description}, exerciseCount: ${part.exerciseCount}`);
                break;
            case 'Using props to pass data':
                renderedParts.push(`name: ${part.name}, groupProjectCount: ${part.groupProjectCount}`);
                break;
            case 'Deeper type usage':
                renderedParts.push(`name: ${part.name}, description: ${part.description}, exerciseCount: ${part.exerciseCount}, exerciseSubmissionLink: ${part.exerciseSubmissionLink}`);
                break;
            case 'Full Stack Open':
                break;
            default:
                return assertNever(part);
        }
    })

    return (
        <div>
            {renderedParts.map((parts) => {
                return <p key={Math.floor(Math.random())}>{parts}</p>
            })}
        </div>
    )
}

export default Part
