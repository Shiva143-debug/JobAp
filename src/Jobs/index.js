// import {Component} from 'react'
// // import {Redirect} from 'react-router-dom'
// import * as Loader from 'react-loader-spinner'
// import Cookies from 'js-cookie'
// import {BsSearch} from 'react-icons/bs'
// import JobsCard from '../JobsCard'
// import FilterGroup from '../FiltersGroup'
// import Header from '../Header'
// import ProfileCard from '../ProfileCard'
// import { useNavigate } from 'react-router-dom';

// import './index.css'

// const employmentTypesList = [
//   {
//     label: 'Full Time',
//     employmentTypeId: 'FULLTIME',
//   },
//   {
//     label: 'Part Time',
//     employmentTypeId: 'PARTTIME',
//   },
//   {
//     label: 'Freelance',
//     employmentTypeId: 'FREELANCE',
//   },
//   {
//     label: 'Internship',
//     employmentTypeId: 'INTERNSHIP',
//   },
// ]

// const salaryRangesList = [
//   {
//     salaryRangeId: '1000000',
//     label: '10 LPA and above',
//   },
//   {
//     salaryRangeId: '2000000',
//     label: '20 LPA and above',
//   },
//   {
//     salaryRangeId: '3000000',
//     label: '30 LPA and above',
//   },
//   {
//     salaryRangeId: '4000000',
//     label: '40 LPA and above',
//   },
// ]

// const apiStatusConstants = {
//   initial: 'INITIAL',
//   success: 'SUCCESS',
//   failure: 'FAILURE',
//   inProgress: 'IN_PROGRESS',
// }

// class Jobs extends Component {
//   state = {
//     jobsList: [],
//     apiStatus: apiStatusConstants.initial,
//     minimumSalary: 0,
//     employeeType: [],
//     searchInput: '',
//   }

//   componentDidMount() {
//     this.getJobs()
//   }

//   getJobs = async () => {
//     // const {history} = props
//     this.setState({
//       apiStatus: apiStatusConstants.inProgress,
//     })

//     const navigate = useNavigate();
//     const jwtToken = Cookies.get('jwt_token')
//     if (jwtToken === undefined) {
//       navigate('/', { replace: true });
//     }

//     const {employeeType, minimumSalary, searchInput} = this.state

//     const apiUrl = `https://apis.ccbp.in/jobs?employment_type=${employeeType.join()}&minimum_package=${minimumSalary}&search=${searchInput}`
//     const options = {
//       headers: {
//         Authorization: `Bearer ${jwtToken}`,
//       },
//       method: 'GET',
//     }
//     const response = await fetch(apiUrl, options)
//     if (response.ok) {
//       const fetchedData = await response.json()
//       const updatedData = fetchedData.jobs.map(each => ({
//         CompanyLogoUrl: each.company_logo_url,
//         employmentType: each.employment_type,
//         jobDescription: each.job_description,
//         id: each.id,
//         location: each.location,
//         rating: each.rating,
//         packagePerAnnum: each.package_per_annum,
//         title: each.title,
//       }))
//       this.setState({
//         jobsList: updatedData,
//         apiStatus: apiStatusConstants.success,
//       })
//     } else {
//       this.setState({
//         apiStatus: apiStatusConstants.failure,
//       })
//     }
//   }

//   onChangeSearchInput = event => {
//     this.setState({searchInput: event.target.value})
//   }

//   //   onEnterSearchInput = event => {
//   //     if (event.key === 'Enter') {
//   //       getJobs()
//   //     }
//   //   }
//   onClickIcon = () => {
//     this.getJobs()
//   }

//   changeSalary = salary => {
//     this.setState({minimumSalary: salary}, this.getJobs)
//   }

//   changeEmployeeList = type => {
//     this.setState(
//       prev => ({employeeType: [...prev.employeeType, type]}),
//       this.getJobs,
//     )
//   }

//   renderFailureView = () => (
//     <div className="products-error-view-container">
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
//         alt="failure view"
//         className="failure-view"
//       />
//       <h1 className="jobs-failure-heading-text">Oops! Something Went Wrong</h1>
//       <p className="jobs-failure-description">
//         We cannot seem to find the page you are looking for
//       </p>
//       <button type="button" className="retry-button" onClick={this.getJobData}>
//         Retry
//       </button>
//     </div>
//   )

//   renderLoadingView = () => (
//     <div className="loader-container" data-testid="loader">
//       <Loader.ThreeDots type="ThreeDots" color="#ffffff" height={50} width={50} />
//     </div>
//   )

//   renderJobsListView = () => {
//     const {jobsList} = this.state
//     console.log(jobsList)
//     const shouldShowJobsList = jobsList.length > 0

//     return shouldShowJobsList ? (
//       <div className="all-Jobs-container">
//         <ul className="jobs-list">
//           {jobsList.map(each => (
//             <JobsCard jobsListDetails={each} key={each.id} />
//           ))}
//         </ul>
//       </div>
//     ) : (
//       <div className="no-products-view">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
//           className="no-jobs-img"
//           alt="no jobs"
//         />
//         <h1 className="no-jobs-heading">No Jobs Found</h1>
//         <p className="no-jobs-description">
//           We could not find any jobs. Try other filter.
//         </p>
//       </div>
//     )
//   }

//   renderAllJobs = () => {
//     const {apiStatus} = this.state

//     switch (apiStatus) {
//       case apiStatusConstants.success:
//         return this.renderJobsListView()
//       case apiStatusConstants.failure:
//         return this.renderFailureView()
//       case apiStatusConstants.inProgress:
//         return this.renderLoadingView()
//       default:
//         return null
//     }
//   }

//   render() {
//     const {searchInput} = this.state

//     return (
//       <div>
//         <Header />
//         <div className="jobCards-container">
//           <div className="profile-filters">
//             <ProfileCard />
//             <FilterGroup
//               employmentTypesList={employmentTypesList}
//               salaryRangesList={salaryRangesList}
//               changeSalary={this.changeSalary}
//               changeEmployeeList={this.changeEmployeeList}
//             />
//           </div>
//           <div>
//             <div className="search-input-container">
//               <input
//                 value={searchInput}
//                 type="search"
//                 className="search-input"
//                 placeholder="Search"
//                 onChange={this.onChangeSearchInput}
//                 onKeyDown={this.onEnterSearchInput}
//               />
//               <BsSearch
//                 className="search-icon"
//                 onClick={this.onClickIcon}
//                 data-testid="searchButton"
//               />
//             </div>
//             {this.renderAllJobs()}
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
// export default Jobs


import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import * as Loader from 'react-loader-spinner';
import { BsSearch } from 'react-icons/bs';
import JobsCard from '../JobsCard';
import FilterGroup from '../FiltersGroup';
import Header from '../Header';
import ProfileCard from '../ProfileCard';
import './index.css';

const employmentTypesList = [
  { label: 'Full Time', employmentTypeId: 'FULLTIME' },
  { label: 'Part Time', employmentTypeId: 'PARTTIME' },
  { label: 'Freelance', employmentTypeId: 'FREELANCE' },
  { label: 'Internship', employmentTypeId: 'INTERNSHIP' },
];

const salaryRangesList = [
  { salaryRangeId: '1000000', label: '10 LPA and above' },
  { salaryRangeId: '2000000', label: '20 LPA and above' },
  { salaryRangeId: '3000000', label: '30 LPA and above' },
  { salaryRangeId: '4000000', label: '40 LPA and above' },
];

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
};

const Jobs = () => {
  const [jobsList, setJobsList] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [minimumSalary, setMinimumSalary] = useState(0);
  const [employeeType, setEmployeeType] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    setApiStatus(apiStatusConstants.inProgress);

    const jwtToken = Cookies.get('jwt_token');
    if (!jwtToken) {
      navigate('/', { replace: true });
      return;
    }

    const apiUrl = `https://apis.ccbp.in/jobs?employment_type=${employeeType.join()}&minimum_package=${minimumSalary}&search=${searchInput}`;
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    };
    const response = await fetch(apiUrl, options);
    if (response.ok) {
      const fetchedData = await response.json();
      const updatedData = fetchedData.jobs.map((each) => ({
        companyLogoUrl: each.company_logo_url,
        employmentType: each.employment_type,
        jobDescription: each.job_description,
        id: each.id,
        location: each.location,
        rating: each.rating,
        packagePerAnnum: each.package_per_annum,
        title: each.title,
      }));
      setJobsList(updatedData);
      setApiStatus(apiStatusConstants.success);
    } else {
      setApiStatus(apiStatusConstants.failure);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const onClickIcon = () => {
    getJobs();
  };

  const changeSalary = (salary) => {
    setMinimumSalary(salary);
    getJobs();
  };

  const changeEmployeeList = (type) => {
    setEmployeeType((prev) => [...prev, type]);
    getJobs();
  };

  const renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="failure-view"
      />
      <h1 className="jobs-failure-heading-text">Oops! Something Went Wrong</h1>
      <p className="jobs-failure-description">
        Refresh the page when you can't see the page.
      </p>
      <button type="button" className="retry-button" onClick={getJobs}>
        Retry
      </button>
    </div>
  );

  const renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader.ThreeDots type="ThreeDots" color="#ffffff" height={50} width={50} />
    </div>
  );

  const renderJobsListView = () => {
    const shouldShowJobsList = jobsList.length > 0;

    return shouldShowJobsList ? (
      <div className="all-Jobs-container">
        <ul className="jobs-list">
          {jobsList.map((each) => (
            <JobsCard jobsListDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    ) : (
      <div className="no-products-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
          className="no-jobs-img"
          alt="no jobs"
        />
        <h1 className="no-jobs-heading">No Jobs Found</h1>
        <p className="no-jobs-description">
          We could not find any jobs. Try other filter.
        </p>
      </div>
    );
  };

  const renderAllJobs = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderJobsListView();
      case apiStatusConstants.failure:
        return renderFailureView();
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <div className="jobCards-container">
        <div className="profile-filters">
          <ProfileCard />
          <FilterGroup
            employmentTypesList={employmentTypesList}
            salaryRangesList={salaryRangesList}
            changeSalary={changeSalary}
            changeEmployeeList={changeEmployeeList}
          />
        </div>
        <div>
          <div className="search-input-container">
            <input
              value={searchInput}
              type="search"
              className="search-input"
              placeholder="Search"
              onChange={onChangeSearchInput}
              onKeyDown={(e) => {
                if (e.key === 'Enter') getJobs();
              }}
            />
            <BsSearch
              className="search-icon"
              onClick={onClickIcon}
              data-testid="searchButton"
            />
          </div>
          {renderAllJobs()}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
