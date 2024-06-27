import {useLocation, useNavigate} from "react-router-dom";

const TrendingNow = ({trendingNow}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const selectHandler = (e) => {
        const query = new URLSearchParams(location.search);
        if (e.target.checked) {
            query.append("year", e.target.id);
            if (location.search) {
                navigate(location.pathname + location.search + `&year=${query.getAll("year")}`);
            } else {
                navigate(location.pathname + `?year=${query.getAll("year")}`);
            }
        } else {

        }
    }

    return (
        <details
            className="info__box__options__box__option catalog_page__filter_sort__box__options__all_options__option">
            <summary>TRENDING NOW<img src="/img/products/show/arrow_down.svg" alt="arrow down"/>
            </summary>
            <form
                className="catalog_page__filter_sort__box__options__all_options__option__list trending_now_frame"
                action="#">
                <ol>
                    {trendingNow && trendingNow.map((item, i) => (
                        <li key={i}>
                            <input type="checkbox" name="new" id={item.name}
                                   className="options_checkbox" onChange={selectHandler}/>
                            <label htmlFor={item.name}>{item.name}</label>
                        </li>
                    ))}
                </ol>
            </form>
        </details>
    );
};

export default TrendingNow;