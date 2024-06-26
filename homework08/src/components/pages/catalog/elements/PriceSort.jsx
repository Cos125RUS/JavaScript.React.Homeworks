
const PriceSort = () => {

    return (
        <details
            className="info__box__options__box__option catalog_page__filter_sort__box__options__all_options__option">
            <summary>PRICE<img src="img/products/show/arrow_down.svg" alt="arrow down"/>
            </summary>
            <form
                className="catalog_page__filter_sort__box__options__all_options__option__list price_frame"
                action="#">
                <ol>
                    <li><input type="checkbox" name="price1" id="price1"
                               className="options_checkbox"/><label htmlFor="price1">Дорого</label></li>
                    <li><input type="checkbox" name="price2" id="price2"
                               className="options_checkbox"/><label htmlFor="price2">Очень
                        дорого</label></li>
                    <li><input type="checkbox" name="price3" id="price3"
                               className="options_checkbox"/><label htmlFor="price3">Ещё дороже</label>
                    </li>
                </ol>
            </form>
        </details>
    );
};

export default PriceSort;