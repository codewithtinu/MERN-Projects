import Inputs from "./Inputs";

const JobPosting = ({ handleChange }) => {
    const now = new  Date();
    // console.log('now: ', now);
    // date categories with conversion
    let today = new Date(now - 24 * 60 * 60 * 1000);
    let sevenDays = new Date(now - 7 * 24 * 60 * 60 * 1000);
    let thirtyDays = new Date(now - 30 * 24 * 60 * 60 * 1000);
    // converting Date object into string;
    today = today.toISOString().slice(0, 10);
    sevenDays = sevenDays.toISOString().slice(0, 10);
    thirtyDays = thirtyDays.toISOString().slice(0, 10);
    // console.log('today: ', today);
    // console.log('sevenDays: ', sevenDays);
    // console.log('thirtyDays: ', thirtyDays);

  return (
    <>
      <h4 className="font-semibold text-primary py-1">Job Posting</h4>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test"
          onChange={handleChange}
          value=""
        />
        <span className="checkmark"></span> All time
      </label>
      <Inputs handleChange ={handleChange} value={today} title = "Today" name = "test" />
      <Inputs handleChange ={handleChange} value={sevenDays} title = "Last 7 days" name = "test" />
      <Inputs handleChange ={handleChange} value={thirtyDays} title = "Last 30 days" name = "test" />
    </>
  );
};

export default JobPosting;
