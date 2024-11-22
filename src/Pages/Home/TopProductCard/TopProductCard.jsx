
const TopProductCard = ({ topProduct }) => {
    const { name, image, title, description, price, rating } = topProduct;

    return (
        <div className="flex gap-3 items-center">
            <div><img src={image} alt="product" className="w-28 rounded rounded-xl" /></div>
            <div>
                <h1 className="font-bold ">{name}</h1>
                <h2 className="text-sm font-semibold">BDT <span className="font-bold text-lg">{price}</span></h2>
            </div>
        </div>
    );
};

export default TopProductCard;