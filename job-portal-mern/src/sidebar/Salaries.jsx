import Button from "./Button";
import Inputs from "./Inputs";
const Salaries = ({handleChange, handleClick}) => {
    return (
        <>
        <h3 className="py-1 px-1 font-semibold text-primary">Salary</h3>
        {/* Buttons - Hourly/Monthly/Yearly */}
        <div className="flex justify-center">
            <Button onClickHnadler={handleClick} value="Hourly" title="Hourly" />
            <Button onClickHnadler={handleClick} value="Monthly" title="Monthly" />
            <Button onClickHnadler={handleClick} value="Yearly" title="Yearly" />
        </div>
        <div className="mt-4">
            <Inputs handleChange ={handleChange} value="" title = "Any" name = "test" />
            <Inputs handleChange ={handleChange} value="40" title = "< 40k" name = "test" />
            <Inputs handleChange ={handleChange} value="60" title = "< 60k" name = "test" />
            <Inputs handleChange ={handleChange} value="80" title = "< 80k" name = "test" />
            <Inputs handleChange ={handleChange} value="100" title = "< 100k" name = "test" />
            <Inputs handleChange ={handleChange} value="125" title = "< 125k" name = "test" />
        </div>
        
        </>
    )
    
}

export default  Salaries;