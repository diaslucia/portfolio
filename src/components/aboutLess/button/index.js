import "./style.scss";

const Button = ({ title , onClick}) => {

    return(
        <div className="fancy" onClick={onClick}>
            <span className="top-key"></span>
            <span className="text">{title}</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
        </div>
    );
}

export default Button;