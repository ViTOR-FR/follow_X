

const Snackbar = ({ type, open, children, onClose }) => {
    return(
        <>
        <div className={`snackbar ${open && "visible"} ${type}`}>
            <span>{children}</span>
            <button className="close" onClick={onClose}>
                &times;
            </button>
        </div>
        </>
    );
}

export default Snackbar;