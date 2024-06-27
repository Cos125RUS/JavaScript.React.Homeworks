
const PriceSort = ({price}) => {

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
                            <input type="checkbox" name={"price1" + price.id} id={"price1" + price.id} className="options_checkbox"/>
                            <label htmlFor={"price1" + price.id}>{price.designation}</label>
                        </li>
                    ))}
                </ol>
            </form>
        </details>
    );
};

export default PriceSort;