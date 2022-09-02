import { PersoneProps } from "./Person.types"

export const Person = (props: PersoneProps) => {
    return <div>{props.name.first} {props.name.last}</div>
}