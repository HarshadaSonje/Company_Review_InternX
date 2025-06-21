import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import IndustryList from './IndustryList';
import PopularCompanies from './PopularCompanies';

function CompanyReviewPage() {
  return (
    <div className="app-container">
      <Header />
      <SearchBar />
      <IndustryList />
      <PopularCompanies />
    </div>
  );
}

export default CompanyReviewPage;
