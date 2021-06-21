export interface CoursePart {
    name: string,
    exerciseCount: number
}

export interface Course {
    name: string,
    parts: Array<CoursePart>
}

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