import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    // console.log("category rendered", data);
    return (
        <div>
          {/* Header */}

            <div className="w-6/12 mx-auto my-2 bg-gray-50 shadow-lg p-4 rounded-lg">
               <div className="flex justify-between">
                    <span className="font-bold text-lg ">
                        {data?.title} ({data.itemCards.length})
                    </span>
                    <span>⏷</span>
                </div>
                <ItemList items={data?.itemCards} /> 
            </div>
        </div>
    )
}
export default RestaurantCategory;  