export function Message(props) {
    const {children, text} = props
    return <div className="message">{children}
        <div>
            {text}
        </div>
    </div>
}
