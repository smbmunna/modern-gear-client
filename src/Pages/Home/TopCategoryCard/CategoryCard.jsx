
const CategoryCard = ({category}) => {
    const {name, image}= category; 
    return (
        <div className="bg-base-100 card w-36 shadow-xl py-4 mb-4">
            <figure className="">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl w-20 h-20 mb-2" />
            </figure>
            <div className="text-center">
                <h2 className="font-semibold">{name}</h2>
            </div>
        </div>
    );
};

export default CategoryCard;