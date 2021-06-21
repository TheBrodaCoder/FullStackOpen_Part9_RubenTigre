import React from "react";
import { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

    return (
        <h1>
            {props.title}
        </h1>
    )
}

export default Header;