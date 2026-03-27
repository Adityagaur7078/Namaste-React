import { CDN_URL } from "../utils/constants"

const RestaurantCard = ({ resData }) => {
    const { name, avgRating, cuisines, sla, areaName, cloudinaryImageId } = resData?.info;

    return (
        <main>
            <div className="card">
                <img
                    src={
                        CDN_URL +
                        cloudinaryImageId
                    }
                    alt={name}
                    className="card-img"
                />

                <div className="card-content">
                    <h2 className="title">{name}</h2>

                    <div className="rating-row">
                        <span className="rating">★ {avgRating}</span>
                        <span className="time">• {sla.slaString}</span>
                    </div>

                    <p className="category">
                        {cuisines.join(", ")}
                    </p>

                    <p className="location">{areaName}</p>
                </div>
            </div>
        </main>
    );
};

export default RestaurantCard;