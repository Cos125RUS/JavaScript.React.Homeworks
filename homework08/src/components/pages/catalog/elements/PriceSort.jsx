import {useLocation, useNavigate} from "react-router-dom";

const PriceSort = ({price}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const selectHandler = (e) => {
        if (e.target.checked) {
            let search = '';
            if (location.search) {
                search = location.search + `&price=${e.target.id}`;
            } else {
                search = `?price=${e.target.id}`;
            }
            navigate(location.pathname + `${search}`);
        } else {
            console.log("off");
        }
    }
    return (
        <details
            className="info__box__options__box__option catalog_page__filter_sort__box__options__all_options__option">
            <summary>PRICE<img src="/img/products/show/arrow_down.svg" alt="arrow down"/>
            </summary>
            <form
                className="catalog_page__filter_sort__box__options__all_options__option__list price_frame"
                action="#">
                <ol>
                    {price && price.map((price) => (
                        <li key={price.id}>
                            <input type="checkbox" name={"price" + price.id} id={"price" + price.id}
                                   className="options_checkbox" onChange={selectHandler}/>
                            <label htmlFor={"price" + price.id}>{price.designation}</label>
                        </li>
                    ))}
                </ol>
            </form>
        </details>
    );
};

export default PriceSort;