
const SizeSort = () => {

    return (
        <details
            className="info__box__options__box__option catalog_page__filter_sort__box__options__all_options__option">
            <summary>SIZE<img src="img/products/show/arrow_down.svg" alt="arrow down"/></summary>
            <form
                className="catalog_page__filter_sort__box__options__all_options__option__list size_frame"
                action="#">
                <ol>
                    <li><input type="checkbox" name="XS" id="xs" className="options_checkbox"/><label
                        htmlFor="xs">XS</label></li>
                    <li><input type="checkbox" name="S" id="s" className="options_checkbox"/><label
                        htmlFor="s">S</label></li>
                    <li><input type="checkbox" name="M" id="m" className="options_checkbox"/><label
                        htmlFor="m">M</label></li>
                    <li><input type="checkbox" name="L" id="l" className="options_checkbox"/><label
                        htmlFor="l">L</label></li>
                    <li><input type="checkbox" name="XL" id="xl" className="options_checkbox"/><label
                        htmlFor="xl">XL</label></li>
                </ol>
            </form>
        </details>
    );
};

export default SizeSort;