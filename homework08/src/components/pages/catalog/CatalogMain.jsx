import {Link} from "react-router-dom";
import SubNav from "./elements/SubNav";
import FilterSort from "./elements/FilterSort";
import CatalogProducts from "./elements/CatalogProducts";
import CatalogPagination from "./elements/CatalogPagination";

const CatalogMain = () => {

    return (
        <main className="main">
            <SubNav crumbs={[{name: "home", link: "/"}, {name: "men", link: "catalog"}, {name: "new arrivals"}]}/>
            <section className="catalog_page center">
                <FilterSort/>
                <CatalogProducts/>
                <CatalogPagination/>
            </section>
        </main>
    );
};

export default CatalogMain;