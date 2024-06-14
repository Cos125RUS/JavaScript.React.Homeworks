import {useSelector} from "react-redux";
import "./ThemeContainer.css";

const ThemeContainer = ({children}) => {
    const theme = useSelector((state) => state.theme.value);

    return (
        <div className={theme}>
            {children}
        </div>
    );
}

export default ThemeContainer;