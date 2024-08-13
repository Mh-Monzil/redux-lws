

const TotalValue = ({totalCount}) => {
    return (
        <div className=" w-[400px] mx-auto bg-[#000] rounded-xl p-6 text-white border-2 mt-12">
            <h1 className="text-center text-4xl font-semibold">Total Value: {totalCount}</h1>
        </div>
    );
};

export default TotalValue;