import React from "react";
import "./PopularCompanies.css";

const companies = [
  {
    name: "Bharti Airtel Limited",
    logo: "/logos/bharti_airtel.png",
    reviews: "2,841 reviews",
    rating: 4.2
  },
  {
    name: "Citi",
    logo: "https://1000logos.net/wp-content/uploads/2021/05/Citi-logo.png",
    reviews: "20,284 reviews",
    rating: 4.1
  },
  {
    name: "[24]7.ai",
    logo: "/logos/twentyfourseven.png",
    reviews: "162 reviews",
    rating: 3.5
  },
  {
    name: "Tata Motors",
    logo: "/logos/tatamotors.png",
    reviews: "1,878 reviews",
    rating: 4.3
  },
  {
    name: "sis security",
    logo: "/logos/sis.png",
    reviews: "37 reviews",
    rating: 3.4
  },
  {
    name: "Jio",
    logo: "/logos/jio.png",
    reviews: "1,696 reviews",
    rating: 4.4
  },
  {
    name: "Indigo Airlines",
    logo: "/logos/indigo.png",
    reviews: "498 reviews",
    rating: 4.0
  },
  {
    name: "American Express",
    logo: "/logos/americanexp.png",
    reviews: "9,531 reviews",
    rating: 4.5
  },
  {
    name: "McDonald's",
    logo: "/logos/mcd.png",
    reviews: "2,53,924 reviews",
    rating: 3.7
  }
];

const PopularCompanies = () => {
  return (
    <div className="container">
      <h2>Popular companies</h2>
      <div className="company-grid">
        {companies.map((company, index) => (
          <div className="company-card" key={index}>
            <img src={company.logo} alt={company.name} className="company-logo" />
            <h4>{company.name}</h4>
            <p className="rating">{"★".repeat(Math.round(company.rating))}{"☆".repeat(5 - Math.round(company.rating))}</p>
            <p className="reviews">{company.reviews}</p>
            <div className="links">
              <a href="#">Salaries</a>
              <a href="#">Questions</a>
              <a href="#">Open jobs</a>
            </div>
          </div>
        ))}
      </div>
       <div className="rate-employer">
        <div className="rate-text">
          <h3>Rate your recent employer</h3>
          <p>Share your experience to help others</p>
        </div>
        <button className="rate-btn">Rate now</button>
      </div>
    
   
      <footer className="footer">
        <div className="footer-links">
          <a href="#">Career Advice</a>
          <a href="#">Browse Jobs</a>
          <a href="#">Browse Companies</a>
          <a href="#">Salaries</a>
          <a href="#">Help Center</a>
        </div>
        <div className="footer-bottom">
          <span>© 2025 InternX. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};


export default PopularCompanies;
