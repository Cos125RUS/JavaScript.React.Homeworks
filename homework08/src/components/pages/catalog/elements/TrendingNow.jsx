
const TrendingNow = ({trendingNow}) => {

    return (
        <details
            className="info__box__options__box__option catalog_page__filter_sort__box__options__all_options__option">
            <summary>TRENDING NOW<img src="img/products/show/arrow_down.svg" alt="arrow down"/>
            </summary>
            <form
                className="catalog_page__filter_sort__box__options__all_options__option__list trending_now_frame"
                action="#">
                <ol>
                    {trendingNow.map((item, i) => (
                        <li key={i}>
                            <input type="checkbox" name="new" id={item.name}
                                   className="options_checkbox"/>
                            <label htmlFor={item.name}>{item.name}</label>
                        </li>
                    ))}
                </ol>
            </form>
        </details>
    );
};

export default TrendingNow;