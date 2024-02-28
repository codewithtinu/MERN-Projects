import { useEffect, useState } from "react";
import Banner from "../components/Banner";
// import jobProfile from "../../public/jobs.json";
 const Home = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  
  useEffect(() => {
    fetch("jobs.json")
    .then(resp => resp.json())
    .then(data => setJobs(data))
    .catch(err => console.log(err))
  },[]);

  // console.log('job outside of the fetch: ', jobs);

  // filter job title
  let filterItems = jobs.filter(jobs => jobs.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  console.log('filterItems: ', filterItems);

 
  // Handle Radio Buttons ----------------------
  const handleSelect = (event) => {
    setSelectedCategory(event.target.value);
  }
  // Handle Clicks Buttons ----------------------
  const handleClicks = (event) => {
    setSelectedCategory(event.target.value);
  }
    // job search handler
    const inputHandler = (e) => {
        setQuery(e.target.value);
    }
    // console.log('jobs : ', jobs);
   

    
  return (
    <div>
        <Banner query = {query} inputHandler = {inputHandler}/>
    </div>
  )
}
export default Home;