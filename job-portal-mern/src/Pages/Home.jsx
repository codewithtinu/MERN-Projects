import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Jobs from "./Jobs";
// import jobProfile from "../../public/jobs.json";
const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((resp) => resp.json())
      .then((data) => setJobs(data))
      .catch((err) => console.log(err));
  }, []);

  // console.log('job outside of the fetch: ', jobs);

  // filter job title
  let filterItems = jobs.filter(
    (jobs) => jobs.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  console.log("filterItems: ", filterItems);

  // Handle Radio Buttons ----------------------
  const handleSelect = (event) => {
    setSelectedCategory(event.target.value);
  };
  // Handle Clicks Buttons ----------------------
  const handleClicks = (event) => {
    setSelectedCategory(event.target.value);
  };
  // main functin
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    // filter input items
    if (query) {
      filteredJobs = filterItems;
    }
    // category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          salaryType,
          maxPrice,
          experienceLevel,
          employmentType,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected)
      );
    }

    return filteredJobs.map((data, i) => (
      <Cards key={i}  data={data} />
    )
      
    )

    
  };

  const result = filteredData(jobs, selectedCategory, query);

  // job search handler
  const inputHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div>
      <Banner query={query} inputHandler={inputHandler} />
      <div>
          {/* <Jobs result = {result}/> */}
          {result}
      </div>
    </div>
    </>
  );
};
export default Home;
