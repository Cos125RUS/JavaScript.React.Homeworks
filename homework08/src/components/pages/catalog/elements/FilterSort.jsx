import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import filterLoader from "../../../../reducers/loaders/filterLoader";
import FilterDropdown from "./FilterDropdown";
import TrendingNow from "./TrendingNow";
import SizeSort from "./SizeSort";
import PriceSort from "./PriceSort";

const FilterSort = () => {
    const filterData = useSelector(state => state.filter);
    const loadingStatus = useSelector(state => state.loadingStatus.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterLoader());
    }, []);

    return (
        <div className="catalog_page__filter_sort">
            <div className="catalog_page__filter_sort__box">
                <FilterDropdown filterData={filterData.dropdown} loadingStatus={loadingStatus}/>
                <div className="catalog_page__filter_sort__box__options">
                    <div className="info__box__options__box catalog_page__filter_sort__box__options__all_options">
                        <TrendingNow trendingNow={filterData.trendingNow} loadingStatus={loadingStatus}/>
                        <SizeSort size={filterData.size} loadingStatus={loadingStatus}/>
                        <PriceSort price={filterData.price} loadingStatus={loadingStatus}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSort;