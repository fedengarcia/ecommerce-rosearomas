


export default function Notification ({showNotification, text}) {

    return (
        <div className="notification-container">
            <div className="notification">
                {showNotification && <p>{text}</p>}
            </div>
        </div>
    )
}


