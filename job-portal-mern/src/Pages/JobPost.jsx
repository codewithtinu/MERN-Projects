import { useForm } from "react-hook-form";
import { useState } from "react";
import CreatableSelect from 'react-select/creatable'
const JobPost = () => {
  const [selectSkills, setSelectSkills] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
  //  watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectSkills;
   
    // console.log(data);

    fetch("http://localhost:2128/post-job", {
      method: "POST",
      headers : {
        'content-type': 'application/json',

      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())

    .then((jobs) => {
      if(jobs.acknowledged === true){
        alert('Job Posted Successfully');
      }
      reset()
    })
    .catch(err => console.log(err))


  };
  
  const options = [
    {value: 'HTML', label: 'HTML'},
    {value: 'CSS', label: 'CSS'},
    {value: 'Javascript', label: 'Javascript'},
    {value: 'Node Js', label: 'Node Js'},
    {value: 'React Js', label: 'React Js'},
    {value: 'MongoDB', label: 'MongoDB'},
  ]

  return (
    <div className="max-w-screen-2xl mx-auto container lg:px-24 px-4 py-10 ">
      <h1 className="text-blue-900 text-2xl font-semibold">Post A Job</h1>
      {/* form */}
      <div className="bg-[#f0f0f0] px-4 py-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          {/* row -- 1 */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block text-primary py-1.5 text-lg">
                Job Title
              </label>
              <input
                type="text"
                className="create-job-input"
                placeholder="Jr. FrontEnd Developer"
                {...register("jobTitle", { required: true })}
              />
              {errors.jobTitle && <span className="create-job-error">This field is required</span>}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block text-primary py-1.5 text-lg">
                Company Name
              </label>
              <input
                type="text"
                className="create-job-input"
                placeholder="Ex. Google"
                {...register("companyName", {required: true})}
              />
              {errors.jobTitle && <span className="create-job-error">This field is required</span>}
            </div>
          </div>
            {/* row -- 2 */}
            <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block text-primary py-1.5 text-lg">
                Min. Salary
              </label>
              <input
                type="text"
                className="create-job-input"
                placeholder="$ 20K"
                {...register("minPrice", { required: true })}
              />
              {errors.minPrice && <span className="create-job-error">This field is required</span>}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block text-primary py-1.5 text-lg">
                Max. Salary
              </label>
              <input
                type="text"
                className="create-job-input"
                placeholder="--"
                {...register("maxPrice", {required: true})}
              />
              {errors.jobTitle && <span className="create-job-error">This field is required</span>}
            </div>
          </div>
          {/* row -- 3 */}
          <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
              <label className="block text-primary py-1.5 text-lg">
                Date
              </label>
              <input
                type="date"
                className="create-job-input"
                placeholder="2024-03-06"
                {...register("postingDate", {required: true})}
              />
              {errors.jobTitle && <span className="create-job-error">This field is required</span>}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block text-primary py-1.5 text-lg">
                Job Location
              </label>
              <input
                type="text"
                className="create-job-input"
                placeholder="Ex. Pune"
                {...register("jobLocation", { required: true })}
              />
              {errors.minPrice && <span className="create-job-error">This field is required</span>}
            </div>
            
          </div>
          {/* row -- 4 */}
          <div className="create-job-flex">
              <div className="lg:w-1/2 w-full">
              <label className="block text-primary py-1.5 text-lg">Salary Type
              </label>
              <select {...register("salaryType")} className="create-job-input">
                <option value="Hourly">Hourly</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block text-primary py-1.5 text-lg">Experience Level
              </label>
              <select {...register("experienceLevel")} className="create-job-input">
                <option value="Any experience">Any experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
                <option value="Yearly">Yearly</option>
              </select>
              </div>
          </div>
          {/* row -- 5 */}
          <div className="create-job-flex">
          <div className="w-full">
              <label className="block text-primary py-1.5 text-lg">
                Skills
              </label>
              <CreatableSelect
                className="create-job-input border-none"
                {...register("skills")}
                options = {options}
                onChange={setSelectSkills}
                defaultValue={selectSkills}
                placeholder = 'Ex: HTML, CSS, Add Skill'
                isMulti
              />
              
              {errors.jobTitle && <span className="create-job-error">This field is required</span>}
            </div>
          </div>
          {/* row -- 6 */}
          <div className="create-job-flex">
          <div className="lg:w-1/2 w-full">
              <label className="block text-primary py-1.5 text-lg">
                Company Logo
              </label>
              <input
                type="url"
                className="create-job-input"
                placeholder="Ex: https://www.pexels.com/images/logo"
                {...register("companyLogo", {required: true})}
              />
              {errors.companyLogo && <span className="create-job-error">This field is required</span>}
            </div>
            <div className="lg:w-1/2 w-full">
            <label className="block text-primary py-1.5 text-lg">Salary Employment Type
              </label>
              <select {...register("employmentType")} className="create-job-input">
                <option value="Select">Choose your employment type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>
          {/* row -- 7 */}
          <div className="create-job-flex">
          <div className="w-full">
              <label className="block text-primary py-1.5 text-lg">
                Job Description
              </label>
              <textarea
                className="create-job-input"
                placeholder="Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt."
                {...register("description")}
                rows={6}
              />
              
              {errors.jobTitle && <span className="create-job-error">This field is required</span>}
            </div>
          </div>
          <div className="pt-4">
          <input type="submit" className="py-1.5 px-4 bg-blue-800 font-semibold text-white rounded-sm cursor-pointer" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobPost;
