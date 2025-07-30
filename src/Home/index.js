import { Link } from 'react-router-dom'
import { FaSearch, FaUsers, FaBriefcase, FaChartLine } from 'react-icons/fa'
import Header from '../Header'
import './index.css'

const Home = () => {
  const stats = [
    { icon: <FaUsers />, number: '10M+', label: 'Active Users' },
    { icon: <FaBriefcase />, number: '50K+', label: 'Job Listings' },
    { icon: <FaChartLine />, number: '95%', label: 'Success Rate' }
  ]

  return (
    <>
      <Header />
      <main className="home-container">
        <div className="home-content">
          <div className="hero-section">
            <h1 className="home-heading">
              Find The Job That 
              <span className="highlight-text"> Fits Your Life</span>
            </h1>
            
            <p className="home-description">
              Millions of people are searching for jobs, salary information, and company
              reviews. Find the job that fits your abilities and potential.
            </p>

            <div className="cta-section">
              <Link to="/jobs" className="find-jobs-link">
                <button type="button" className="find-jobs-button">
                  <FaSearch className="button-icon" />
                  Find Jobs
                </button>
              </Link>
              
              <div className="secondary-cta">
                <p className="secondary-text">Join thousands of professionals</p>
              </div>
            </div>

            <div className="stats-section">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-content">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-cards">
              <div className="job-card card-1">
                <div className="card-header">
                  <div className="company-logo"></div>
                  <div className="job-info">
                    <h4>Frontend Developer</h4>
                    <p>Tech Corp</p>
                  </div>
                </div>
                <div className="card-tags">
                  <span className="tag">Remote</span>
                  <span className="tag">Full-time</span>
                </div>
              </div>

              <div className="job-card card-2">
                <div className="card-header">
                  <div className="company-logo"></div>
                  <div className="job-info">
                    <h4>UI/UX Designer</h4>
                    <p>Design Studio</p>
                  </div>
                </div>
                <div className="card-tags">
                  <span className="tag">Hybrid</span>
                  <span className="tag">Contract</span>
                </div>
              </div>

              <div className="job-card card-3">
                <div className="card-header">
                  <div className="company-logo"></div>
                  <div className="job-info">
                    <h4>Data Scientist</h4>
                    <p>Analytics Inc</p>
                  </div>
                </div>
                <div className="card-tags">
                  <span className="tag">On-site</span>
                  <span className="tag">Full-time</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="background-elements">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
      </main>
    </>
  )
}

export default Home
