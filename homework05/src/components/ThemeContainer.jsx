import {useSelector} from "react-redux";
import "./ThemeContainer.css";

const ThemeContainer = (props, {children}) => {
    const theme = useSelector((state) => state.theme.value);

    return (
        <div {...props} className={theme}>
            {children}
        </div>
    );
}

export default ThemeContainer;