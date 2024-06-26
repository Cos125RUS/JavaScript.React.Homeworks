import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import filterLoader from "../../../../reducers/loaders/filterLoader";
import FilterDropdown from "./FilterDropdown";
import TrendingNow from "./TrendingNow";
import trendingNowLoader from "../../../../reducers/loaders/trendingNowLoader";
import SizeSort from "./SizeSort";
import PriceSort from "./PriceSort";

const FilterSort = () => {
    const filterData = useSelector(state => state.filter);
    const trendingNow = useSelector(state => state.trendingNow);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterLoader());
        dispatch(trendingNowLoader());
    }, []);

    return (
        <div className="catalog_page__filter_sort">
            <div className="catalog_page__filter_sort__box">
                <FilterDropdown filterData={filterData}/>
                <div className="catalog_page__filter_sort__box__options">
                    <div className="info__box__options__box catalog_page__filter_sort__box__options__all_options">
                        <TrendingNow trendingNow={trendingNow}/>
                        <SizeSort/>
                        <PriceSort/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSort;