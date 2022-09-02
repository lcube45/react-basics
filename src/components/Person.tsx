type PersoneProps = {
    name: {
        first: string
        last: string
    }
}

export const Person = (props: PersoneProps) => {
    return <div>{props.name.first} {props.name.last}</div>
}