import style from "./style.scss";

const Border = ({ children }) => {

    return(
        <a className="border">
            <span className="top-key"></span>
            {children}
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
        </a>
    );
}

export default Border;