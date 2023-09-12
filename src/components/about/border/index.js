import "./style.scss";

const Border = ({ children }) => {

    return(
        <div className="border">
            <span className="top-key"></span>
            {children}
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
        </div>
    );
}

export default Border;