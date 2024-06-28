import Offer from "./Offer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {offerLoader} from "../../../../reducers/loaders/offerLoader";

const OfferBox = () => {
    const offers = useSelector(state => state.offers);
    const loadingStatus = useSelector(state => state.loadingStatus.offers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(offerLoader());
    }, []);

    return (
        <section className="offer">
            <div className="offer__content center">
                {loadingStatus ? <h5>loading...</h5> : offers.map((offer, index) => (
                    <Offer key={index} data={offer}/>
                ))}
            </div>
        </section>
    );
};

export default OfferBox;