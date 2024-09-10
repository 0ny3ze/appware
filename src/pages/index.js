import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faPeopleGroup, faFile, faBook, faCode, faCircleQuestion, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Appware - Your Hub for All Things Apps</title>
        <meta name="description" content="Appware is a platform for exploring and discovering new apps." />
      </Head>

      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <Image src="/appwarelogo.png" alt="Appware Logo" width={24} height={24} />
          </div>
          <ul className="nav-links">
            <li><a href="#">Discover</a></li>
            <li><a href="#">Browse</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Key-Feature Search</a></li>
            <li><a href="#">About</a></li>
          </ul>
          <div className="auth-buttons">
            <button>Sign in</button>
            <button>Submit an App</button>
          </div>
        </nav>
        <div className="searchbar">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input type="text" placeholder="Search Appware" />
        </div>
      </header>

      <main className="main-content">
        <div className="content-wrapper">
          <section className="about-and-sidebar">
            <section className="about-section">
              <h2>About Appware</h2>
              <p>Welcome to Appware, your hub for all things apps! At Appware, we're passionate about bringing users and developers together to create an unparalleled app experience. With our platform, you can explore a vast array of apps, share your thoughts and experiences, and connect with fellow enthusiasts. Whether you're a developer looking to showcase your latest creation or a user eager to discover new favorites, Appware has something for everyone.</p>
              
              <h3 className="mission-statement">Our Mission Statement</h3>
              <p className="mission-description">Our goal is to empower users to discover and engage with apps while providing developers a platform to showcase their creations. Join us today and be part of a thriving community dedicated to enhancing the app ecosystem!</p>

              <p className="contact-info"><strong>We'd love to hear from you! Whether you have feedback, questions, or just want to say hello,</strong></p> <p><strong>don't hesitate to reach out.</strong></p>
              <p className="contact-email">Email: <a href="mailto:contact@appware.com"><strong>contact@appware.com</strong></a></p>

              <p className="social-media">
                Social Media: Connect with us on 
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link"> <strong>Twitter</strong></a>, 
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link"><strong>Facebook,</strong></a> and 
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link"> <strong>Instagram</strong></a>
              <p></p></p>
              <p></p>
              <p> </p>
              
              <div className="bottom-right-info">
                <Image src="/app2ware.png" alt="App2ware" width={100} height={100} />
                <p className="bottom-right-text">Be Aware with APPWARE</p>
              </div>
            </section>

            <aside className="sidebar">
              <button className="sidebar-button">
                <FontAwesomeIcon icon={faCrown} className="icon" />
                Levels and Ranking
              </button>
              <button className="sidebar-button">
                <FontAwesomeIcon icon={faPeopleGroup} className="icon" />
                Meet the Appware Team
              </button>
              <button className="sidebar-button">
                <FontAwesomeIcon icon={faFile} className="icon" />
                Appware Terms of Service
              </button>
              <button className="sidebar-button">
                <FontAwesomeIcon icon={faFile} className="icon" />
                Appware Privacy Policy
              </button>
              <button className="sidebar-button">
                <FontAwesomeIcon icon={faBook} className="icon" />
                Community Guidelines
              </button>
              <button className="sidebar-button">
                <FontAwesomeIcon icon={faCode} className="icon" />
                Developer Resources
              </button>
              <button className="sidebar-button">
                <FontAwesomeIcon icon={faCircleQuestion} className="icon" />
                FAQs
              </button>
            </aside>
          </section>
          
          <section className="announcements-section">
            <h2>Announcements</h2>
            <div className="announcement">
              <h3>Join Us for Appware's First-Ever Developer AMA</h3>
              <p><strong style={{ color: '#4B0082' }}>Calling all developers!</strong> We’re hosting our inaugural Ask Me Anything (AMA) session with top app creators. Ask your burning questions, gain insights into the app development process, and connect with fellow developers.</p>
              <p><strong style={{ color: '#4B0082' }}>Date:</strong> March 20th, 2024 | <strong style={{ color: '#4B0082' }}>Time:</strong> 10:00 AM GAT</p>
            </div>
            <div className="announcement">
              <h3>Appware Scavenger Hunt: Win Big Prizes!</h3>
              <p><strong style={{ color: '#4B0082' }}>Get ready</strong> to embark on an exciting scavenger hunt around the Appware platform. Find hidden tokens and collect them for a chance to win amazing prizes. It’s time to put your app knowledge to the test!</p>
              <p><strong style={{ color: '#4B0082' }}>Date:</strong> April 19th, 2024 | <strong style={{ color: '#4B0082' }}>Time:</strong> 12:00 AM CAT</p>
            </div>
            <div className="announcement">
              <h3>Important Policy Update: Community Guidelines</h3>
              <p><strong style={{ color: '#4B0082' }}>Attention all Appware users!</strong> We've updated our community guidelines to ensure a positive and inclusive environment for everyone. We’ve updated our Community Guidelines to ensure a positive and respectful environment for all users. Please review the updated guidelines to stay informed about our community standards.</p>
            </div>
            <button className="announcement-button">See All Announcement</button>
          </section>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Appware. All rights reserved.</p>
      </footer>
    </div>
  );
}
