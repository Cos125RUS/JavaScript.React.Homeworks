import {Link} from "react-router-dom";

const CatalogPagination = () => {

    return (
        <nav className="catalog_page__nav">
            <div className="catalog_page__nav__box">
                <button className="catalog_page__nav__box__arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14"
                         fill="none">
                        <path d="M8.995 2L3.995 7L8.995 12L7.995 14L0.994995 7L7.995 0L8.995 2Z" fill="black"/>
                    </svg>
                </button>
                <div className="catalog_page__nav__box__pages">
                    <Link className="catalog_page__nav__box__pages__page page_gap active_page">1</Link>
                    <Link className="catalog_page__nav__box__pages__page page_gap">2</Link>
                    <Link className="catalog_page__nav__box__pages__page page_gap">3</Link>
                    <Link className="catalog_page__nav__box__pages__page page_gap">4</Link>
                    <Link className="catalog_page__nav__box__pages__page page_gap">5</Link>
                    <Link className="catalog_page__nav__box__pages__page">6</Link>
                    <p className="catalog_page__nav__box__pages__page">.....</p>
                    <Link className="catalog_page__nav__box__pages__page">20</Link>
                </div>
                <button className="catalog_page__nav__box__arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14"
                         fill="none">
                        <path d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z"
                              fill="black"/>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default CatalogPagination;