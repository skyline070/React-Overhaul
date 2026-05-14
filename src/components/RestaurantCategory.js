import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    // console.log("category rendered", data);
    const [toggleupArrow, setToggleupArrow] = useState(false);

    const handleClick = () => {
        setShowIndex();
        setToggleupArrow(!toggleupArrow);
    };

    return (
        <div>
            <div className="w-6/12 mx-auto my-3 bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">

                {/* Header */}
                <div
                    className="flex justify-between items-center cursor-pointer p-5 hover:bg-gray-50 transition-all duration-200"
                    onClick={handleClick}
                >
                    <span className="font-bold text-lg text-gray-800">
                        {data?.title} ({data?.itemCards?.length})
                    </span>

                    <span className="text-xl text-gray-600">
                        {showItems ? "▲" : "▼"}
                    </span>
                </div>

                {/* Body */}
                {showItems && (
                    <div className="px-5 pb-5">
                        <ItemList items={data?.itemCards} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default RestaurantCategory;