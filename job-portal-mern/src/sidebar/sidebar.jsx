import Locations from "./Locations";

const Sidebar = ({handleChange, handleClick}) => {
    return (
        <>
            <h3 className="font-semibold text-gray-800">Filters</h3>
            {/* Location */}
            <Locations handleChange = {handleChange} />
            {/* employment type */}

            {/* salary type */}

        </>
    )
}

export default Sidebar;