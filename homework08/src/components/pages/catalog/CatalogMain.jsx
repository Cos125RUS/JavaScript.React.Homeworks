import {useParams} from "react-router-dom";
import SubNav from "./elements/SubNav";
import FilterSort from "./elements/FilterSort";
import CatalogProducts from "./elements/CatalogProducts";
import CatalogPagination from "./elements/CatalogPagination";

const CatalogMain = () => {
    const {pageNumber} = useParams();
    const currentPage = pageNumber ? parseInt(pageNumber, 10) : 1;
    // Заглушка для количества страниц
    const totalPage = 20;

    return (
        <main className="main">
            <SubNav crumbs={[{name: "home", link: "/"}, {name: "men", link: "catalog"}, {name: "new arrivals"}]}/>
            <section className="catalog_page center">
                <FilterSort/>
                <CatalogProducts/>
                <CatalogPagination currentPage={currentPage} totalPages={totalPage}/>
            </section>
        </main>
    );
};

export default CatalogMain;