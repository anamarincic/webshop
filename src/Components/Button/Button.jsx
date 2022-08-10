import "./Button.styles.scss";

export function Button(props){
    const className = `button button--${props.variant}`;

    return (
    <button className={className} name={props.name} data-size={props.dataSize} disabled={props.disabled} onClick={props.onClick}>
        {props.children}
    </button>
    );
}