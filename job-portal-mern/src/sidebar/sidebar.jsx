import JobPosting from "./Jobposting";
import Locations from "./Locations";
import Salaries from "./Salaries";

const Sidebar = ({handleChange, handleClick}) => {
    return (
        <>
            <h3 className="font-semibold text-gray-800">Filters</h3>
            {/* Location */}
            <Locations handleChange = {handleChange} />
            {/* salary type */}
            <Salaries handleChange = {handleChange} handleClick = {handleClick} />
            {/* Job Posting */}
            <JobPosting handleChange = {handleChange} />



        </>
    )
}

export default Sidebar;