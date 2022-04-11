export default function MessageBox(props) {
    return (
            <div 
                className="message" 
                variant={props.variant || 'info'}>
                {props.children}
            </div>
        )
    }