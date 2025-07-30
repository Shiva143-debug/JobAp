import './index.css'
import {Link} from 'react-router-dom'
import {GiRoundStar} from 'react-icons/gi'
import {MdLocationOn} from 'react-icons/md'
import {BsFillBriefcaseFill} from 'react-icons/bs'

const JobsCard = props => {
  const {jobsListDetails} = props
  const {
    id,
    employmentType,
    jobDescription,
    companyLogoUrl,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobsListDetails

  return (
    <li className="job-item">
      <Link to={`/jobs/${id}`}>
        <div className="job-container">
          <div className="image-title" style={{display: 'flex',}}>
         
            <img src={companyLogoUrl} alt="company logo" className="image" />
         
            <div className="title-rating">
              <h2 className="title">{title}</h2>
              <div className="star-rating">
                <GiRoundStar className="star" />
                <p>{rating}</p>
              </div>
            </div>
          </div>
          
          <div className="location-employmentType-package">
            <div className="location-employmentType">
              <div className="location-item">
                <MdLocationOn className="location-img" />
                <p className="location">{location}</p>
              </div>
              <div className="employment-item">
                <BsFillBriefcaseFill className="briefCaseImg" />
                <p className="employmentType">{employmentType}</p>
              </div>
            </div>
            <p className="packagePerAnnum">{packagePerAnnum}</p>
          </div>

          <hr className="hr" />

          <h3 className="Description">Description</h3>
          <p className="jobDescription">{jobDescription}</p>
          
          {/* <div className="job-tags">
            <span className="job-tag">{employmentType}</span>
            <span className="job-tag">Remote Friendly</span>
          </div> */}
        </div>
      </Link>
    </li>
  )
}
export default JobsCard
