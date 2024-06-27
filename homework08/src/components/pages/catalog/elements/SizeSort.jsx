import {useLocation, useNavigate} from "react-router-dom";

const SizeSort = ({size}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const selectHandler = (e) => {
        if (e.target.checked) {
            let search = '';
            if (location.search) {
                search = location.search + `&size=${e.target.id}`;
            } else {
                search = `?size=${e.target.id}`;
            }
            navigate(location.pathname + `${search}`);
        } else {
            console.log("off");
        }
    }
    return (
        <details
            className="info__box__options__box__option catalog_page__filter_sort__box__options__all_options__option">
            <summary>SIZE<img src="/img/products/show/arrow_down.svg" alt="arrow down"/></summary>
            <form
                className="catalog_page__filter_sort__box__options__all_options__option__list size_frame"
                action="#">
                <ol>
                    {size && size.map((size, index) => (
                        <li key={index}>
                            <input type="checkbox" name={size.designation} id={size.designation}
                                   className="options_checkbox" onChange={selectHandler}/>
                            <label htmlFor={size.designation}>{size.designation.toUpperCase()}</label>
                        </li>
                    ))}
                </ol>
            </form>
        </details>
    );
};

export default SizeSort;