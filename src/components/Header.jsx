// import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <>
      <header data-module="ga4-event-tracker ga4-link-tracker" data-ga4-expandable="" className="gem-c-layout-super-navigation-header" data-ga4-event-tracker-module-started="true" data-ga4-link-tracker-module-started="true">
        <div className="gem-c-layout-super-navigation-header__nav-wrapper">
          <div className="gem-c-layout-super-navigation-header__container govuk-width-container">
            <nav aria-labelledby="super-navigation-menu-heading" className="gem-c-layout-super-navigation-header__content js-module-initialised" data-module="super-navigation-mega-menu" data-super-navigation-mega-menu-module-started="true" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
              
              {/* 1. GOV.UK LOGO */}
              <div className="gem-c-layout-super-navigation-header__header-logo" style={{ marginRight: "auto" }}>
                <a className="govuk-header__link govuk-header__link--homepage" data-ga4-link="{&quot;event_name&quot;:&quot;navigation&quot;,&quot;type&quot;:&quot;header menu bar&quot;,&quot;external&quot;:&quot;false&quot;,&quot;text&quot;:&quot;GOV.UK&quot;,&quot;section&quot;:&quot;Logo&quot;,&quot;index_link&quot;:1,&quot;index_section&quot;:0,&quot;index_section_count&quot;:2,&quot;index_total&quot;:1}" id="logo" aria-label="Go to the GOV.UK homepage" href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" viewBox="0 0 324 60" height="30" width="162" fill="currentColor" className="govuk-header__logotype" aria-label="GOV.UK">
                    <title>GOV.UK</title>
                    <g>
                      <circle cx="20" cy="17.6" r="3.7"></circle>
                      <circle cx="10.2" cy="23.5" r="3.7"></circle>
                      <circle cx="3.7" cy="33.2" r="3.7"></circle>
                      <circle cx="31.7" cy="30.6" r="3.7"></circle>
                      <circle cx="43.3" cy="17.6" r="3.7"></circle>
                      <circle cx="53.2" cy="23.5" r="3.7"></circle>
                      <circle cx="59.7" cy="33.2" r="3.7"></circle>
                      <circle cx="31.7" cy="30.6" r="3.7"></circle>
                      <path d="M33.1,9.8c.2-.1.3-.3.5-.5l4.6,2.4v-6.8l-4.6,1.5c-.1-.2-.3-.3-.5-.5l1.9-5.9h-6.7l1.9,5.9c-.2.1-.3.3-.5.5l-4.6-1.5v6.8l4.6-2.4c.1.2.3.3.5.5l-2.6,8c-.9,2.8,1.2,5.7,4.1,5.7h0c3,0,5.1-2.9,4.1-5.7l-2.6-8ZM37,37.9s-3.4,3.8-4.1,6.1c2.2,0,4.2-.5,6.4-2.8l-.7,8.5c-2-2.8-4.4-4.1-5.7-3.8.1,3.1.5,6.7,5.8,7.2,3.7.3,6.7-1.5,7-3.8.4-2.6-2-4.3-3.7-1.6-1.4-4.5,2.4-6.1,4.9-3.2-1.9-4.5-1.8-7.7,2.4-10.9,3,4,2.6,7.3-1.2,11.1,2.4-1.3,6.2,0,4,4.6-1.2-2.8-3.7-2.2-4.2.2-.3,1.7.7,3.7,3,4.2,1.9.3,4.7-.9,7-5.9-1.3,0-2.4.7-3.9,1.7l2.4-8c.6,2.3,1.4,3.7,2.2,4.5.6-1.6.5-2.8,0-5.3l5,1.8c-2.6,3.6-5.2,8.7-7.3,17.5-7.4-1.1-15.7-1.7-24.5-1.7h0c-8.8,0-17.1.6-24.5,1.7-2.1-8.9-4.7-13.9-7.3-17.5l5-1.8c-.5,2.5-.6,3.7,0,5.3.8-.8,1.6-2.3,2.2-4.5l2.4,8c-1.5-1-2.6-1.7-3.9-1.7,2.3,5,5.2,6.2,7,5.9,2.3-.4,3.3-2.4,3-4.2-.5-2.4-3-3.1-4.2-.2-2.2-4.6,1.6-6,4-4.6-3.7-3.7-4.2-7.1-1.2-11.1,4.2,3.2,4.3,6.4,2.4,10.9,2.5-2.8,6.3-1.3,4.9,3.2-1.8-2.7-4.1-1-3.7,1.6.3,2.3,3.3,4.1,7,3.8,5.4-.5,5.7-4.2,5.8-7.2-1.3-.2-3.7,1-5.7,3.8l-.7-8.5c2.2,2.3,4.2,2.7,6.4,2.8-.7-2.3-4.1-6.1-4.1-6.1h10.6,0Z"></path>
                    </g>
                    <circle className="govuk-logo-dot" cx="226" cy="36" r="7.3"></circle>
                    <path d="M93.94 41.25c.4 1.81 1.2 3.21 2.21 4.62 1 1.4 2.21 2.41 3.61 3.21s3.21 1.2 5.22 1.2 3.61-.4 4.82-1c1.4-.6 2.41-1.4 3.21-2.41.8-1 1.4-2.01 1.61-3.01s.4-2.01.4-3.01v.14h-10.86v-7.02h20.07v24.08h-8.03v-5.56c-.6.8-1.38 1.61-2.19 2.41-.8.8-1.81 1.2-2.81 1.81-1 .4-2.21.8-3.41 1.2s-2.41.4-3.81.4a18.56 18.56 0 0 1-14.65-6.63c-1.6-2.01-3.01-4.41-3.81-7.02s-1.4-5.62-1.4-8.83.4-6.02 1.4-8.83a20.45 20.45 0 0 1 19.46-13.65c3.21 0 4.01.2 5.82.8 1.81.4 3.61 1.2 5.02 2.01 1.61.8 2.81 2.01 4.01 3.21s2.21 2.61 2.81 4.21l-7.63 4.41c-.4-1-1-1.81-1.61-2.61-.6-.8-1.4-1.4-2.21-2.01-.8-.6-1.81-1-2.81-1.4-1-.4-2.21-.4-3.61-.4-2.01 0-3.81.4-5.22 1.2-1.4.8-2.61 1.81-3.61 3.21s-1.61 2.81-2.21 4.62c-.4 1.81-.6 3.71-.6 5.42s.8 5.22.8 5.22Zm57.8-27.9c3.21 0 6.22.6 8.63 1.81 2.41 1.2 4.82 2.81 6.62 4.82S170.2 24.39 171 27s1.4 5.62 1.4 8.83-.4 6.02-1.4 8.83-2.41 5.02-4.01 7.02-4.01 3.61-6.62 4.82-5.42 1.81-8.63 1.81-6.22-.6-8.63-1.81-4.82-2.81-6.42-4.82-3.21-4.41-4.01-7.02-1.4-5.62-1.4-8.83.4-6.02 1.4-8.83 2.41-5.02 4.01-7.02 4.01-3.61 6.42-4.82 5.42-1.81 8.63-1.81Zm0 36.73c1.81 0 3.61-.4 5.02-1s2.61-1.81 3.61-3.01 1.81-2.81 2.21-4.41c.4-1.81.8-3.61.8-5.62 0-2.21-.2-4.21-.8-6.02s-1.2-3.21-2.21-4.62c-1-1.2-2.21-2.21-3.61-3.01s-3.21-1-5.02-1-3.61.4-5.02 1c-1.4.8-2.61 1.81-3.61 3.01s-1.81 2.81-2.21 4.62c-.4 1.81-.8 3.61-.8 5.62 0 2.41.2 4.21.8 6.02.4 1.81 1.2 3.21 2.21 4.41s2.21 2.21 3.61 3.01c1.4.8 3.21 1 5.02 1Zm36.32 7.96-12.24-44.15h9.83l8.43 32.77h.4l8.23-32.77h9.83L200.3 58.04h-12.24Zm74.14-7.96c2.18 0 3.51-.6 3.51-.6 1.2-.6 2.01-1 2.81-1.81s1.4-1.81 1.81-2.81a13 13 0 0 0 .8-4.01V13.9h8.63v28.15c0 2.41-.4 4.62-1.4 6.62-.8 2.01-2.21 3.61-3.61 5.02s-3.41 2.41-5.62 3.21-4.62 1.2-7.02 1.2-5.02-.4-7.02-1.2c-2.21-.8-4.01-1.81-5.62-3.21s-2.81-3.01-3.61-5.02-1.4-4.21-1.4-6.62V13.9h8.63v26.95c0 1.61.2 3.01.8 4.01.4 1.2 1.2 2.21 2.01 2.81.8.8 1.81 1.4 2.81 1.81 0 0 1.34.6 3.51.6Zm34.22-36.18v18.92l15.65-18.92h10.82l-15.03 17.32 16.03 26.83h-10.21l-11.44-20.21-5.62 6.22v13.99h-8.83V13.9"></path>
                  </svg>
                </a>
              </div>
              <h2 id="super-navigation-menu-heading" className="govuk-visually-hidden">
                Navigation menu
              </h2>

              {/* 2. MENU AND SEARCH BUTTONS (Grouped to the right) */}
              <div style={{ display: "flex", alignItems: "center" }}>
                
                {/* MENU BUTTON */}
                <div className="gem-c-layout-super-navigation-header__navigation-item">
                  <button aria-controls="super-navigation-menu" aria-expanded="false" aria-label="Show navigation menu" className="gem-c-layout-super-navigation-header__navigation-top-toggle-button" data-text-for-hide="Hide navigation menu" data-text-for-show="Show navigation menu" data-toggle-desktop-group="top" data-toggle-mobile-group="top" id="super-navigation-menu-toggle" type="button">
                    {/* ADDED DOWNWARD CHEVRON */}
                    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "8px" }}>
                      <path d="M1.96875 1.40625L8.5 7.9375L15.0312 1.40625" stroke="currentColor" strokeWidth="3"></path>
                    </svg>
                    <span className="gem-c-layout-super-navigation-header__navigation-top-toggle-button-inner">Menu</span>
                  </button>
                </div>
                
                {/* VERTICAL DIVIDER */}
                <div style={{ width: "1px", height: "20px", backgroundColor: "rgba(255, 255, 255, 0.4)", margin: "0 10px" }}></div>
                
                {/* SEARCH BUTTON */}
                <div className="gem-c-layout-super-navigation-header__search-item">
                  <button id="super-search-menu-toggle" className="gem-c-layout-super-navigation-header__search-toggle-button" aria-controls="super-search-menu" aria-expanded="false" aria-label="Show search menu" data-text-for-hide="Hide search menu" data-text-for-show="Show search menu" data-toggle-mobile-group="top" data-toggle-desktop-group="top" type="button">
                    <span className="govuk-visually-hidden">Search GOV.UK</span>
                    <svg className="gem-c-layout-super-navigation-header__search-toggle-button-link-icon" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* FIXED: fill="transparent" makes the inside clear instead of white */}
                      <circle cx="12.0161" cy="11.0161" r="8.51613" fill="transparent" stroke="currentColor" strokeWidth="3"></circle>
                      <line x1="17.8668" y1="17.3587" x2="26.4475" y2="25.9393" stroke="currentColor" strokeWidth="3"></line>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* 3. DROPDOWNS (Placed correctly below the buttons) */}
              
              {/* Menu Dropdown Container */}
              <div id="super-navigation-menu" hidden className="gem-c-layout-super-navigation-header__navigation-dropdown-menu" style={{ width: "100%", order: 99 }}>
                <div className="govuk-grid-row gem-c-layout-super-navigation-header__navigation-items">
                  <div className="govuk-grid-column-two-thirds-from-desktop gem-c-layout-super-navigation-header__column--services-and-information">
                    <h3 className="govuk-heading-m gem-c-layout-super-navigation-header__column-header">
                      Services and information
                    </h3>
                    <ul className="gem-c-layout-super-navigation-header__navigation-second-items gem-c-layout-super-navigation-header__navigation-second-items--services-and-information">
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" href="/browse/benefits">Benefits</a>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" href="/browse/births-deaths-marriages">Births, death, marriages and care</a>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" href="/browse/business">Business and self-employed</a>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" href="/browse/childcare-parenting">Childcare and parenting</a>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" href="/browse/citizenship">Citizenship and living in the UK</a>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" href="/browse/justice">Crime, justice and the law</a>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" href="/browse/disabilities">Disabled people</a>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" href="/browse/driving">Driving and transport</a>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" href="/browse/education">Education and learning</a>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" href="/browse/employing-people">Employing people</a>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" href="/browse/environment-countryside">Environment and countryside</a>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" href="/browse/housing-local-services">Housing and local services</a>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" href="/browse/tax">Money and tax</a>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" href="/browse/abroad">Passports, travel and living abroad</a>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" href="/browse/visas-immigration">Visas and immigration</a>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link" href="/browse/working">Working, jobs and pensions</a>
                      </li>
                    </ul>
                  </div>

                  <div className="govuk-grid-column-one-third-from-desktop gem-c-layout-super-navigation-header__column--government-activity">
                    <h3 className="govuk-heading-m gem-c-layout-super-navigation-header__column-header">
                      Government activity
                    </h3>
                    <ul className="gem-c-layout-super-navigation-header__navigation-second-items gem-c-layout-super-navigation-header__navigation-second-items--government-activity">
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link gem-c-layout-super-navigation-header__navigation-second-item-link--with-description" href="/government/organisations">Departments</a>
                        <p className="gem-c-layout-super-navigation-header__navigation-second-item-description">Departments, agencies and public bodies</p>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link gem-c-layout-super-navigation-header__navigation-second-item-link--with-description" href="/search/news-and-communications">News</a>
                        <p className="gem-c-layout-super-navigation-header__navigation-second-item-description">News stories, speeches, letters and notices</p>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link gem-c-layout-super-navigation-header__navigation-second-item-link--with-description" href="/search/guidance-and-regulation">Guidance and regulation</a>
                        <p className="gem-c-layout-super-navigation-header__navigation-second-item-description">Detailed guidance, regulations and rules</p>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link gem-c-layout-super-navigation-header__navigation-second-item-link--with-description" href="/search/research-and-statistics">Research and statistics</a>
                        <p className="gem-c-layout-super-navigation-header__navigation-second-item-description">Reports, analysis and official statistics</p>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link gem-c-layout-super-navigation-header__navigation-second-item-link--with-description" href="/search/policy-papers-and-consultations">Policy papers and consultations</a>
                        <p className="gem-c-layout-super-navigation-header__navigation-second-item-description">Consultations and strategy</p>
                      </li>
                      <li className="gem-c-layout-super-navigation-header__dropdown-list-item">
                        <a className="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link gem-c-layout-super-navigation-header__navigation-second-item-link--with-description" href="/search/transparency-and-freedom-of-information-releases">Transparency</a>
                        <p className="gem-c-layout-super-navigation-header__navigation-second-item-description">Data, Freedom of Information releases and corporate reports</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Search Dropdown Container */}
              <div id="super-search-menu" hidden className="gem-c-layout-super-navigation-header__navigation-dropdown-menu" style={{ width: "100%", order: 100 }}>
                <div className="gem-c-layout-super-navigation-header__search-container gem-c-layout-super-navigation-header__search-items">
                  <h3 className="govuk-visually-hidden">
                    Search
                  </h3>
                  <div className="govuk-grid-row">
                    <div className="govuk-grid-column-full">
                      <form className="gem-c-layout-super-navigation-header__search-form" id="search" data-module="ga4-search-tracker" action="/search/all" method="get" role="search" aria-label="Site-wide">
                        <div className="gem-c-search-with-autocomplete gem-c-search-with-autocomplete--large govuk-!-margin-bottom-0" data-module="gem-search-with-autocomplete">
                          <div data-module="gem-toggle-input-class-on-focus" className="gem-c-search govuk-!-display-none-print gem-c-search--large gem-c-search--on-white gem-c-search--separate-label govuk-!-margin-bottom-0">
                            <label htmlFor="search-main-98257b54" className="govuk-label govuk-label--m gem-c-layout-super-navigation-header__search-label--large-navbar">Search GOV.UK</label>
                            <div className="gem-c-search__item-wrapper">
                              <div className="js-search-input-wrapper">
                                <div className="gem-c-search-with-autocomplete__wrapper">
                                  <div className="gem-c-search-with-autocomplete__status" style={{border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "1px", marginBottom: "-1px", marginRight: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "1px"}}>
                                    <div id="search-main-98257b54__status--A" role="status" aria-atomic="true" aria-live="polite"></div>
                                    <div id="search-main-98257b54__status--B" role="status" aria-atomic="true" aria-live="polite"></div>
                                  </div>
                                  
                                  <input aria-describedby="search-main-98257b54__assistiveHint" aria-expanded="false" aria-controls="search-main-98257b54__listbox" aria-autocomplete="list" autoComplete="off" className="gem-c-search-with-autocomplete__input gem-c-search-with-autocomplete__input--default gem-c-search__item gem-c-search__input js-class-toggle" id="search-main-98257b54" name="keywords" placeholder="" type="search" role="combobox" />
                                  
                                  <ul aria-labelledby="search-main-98257b54" id="search-main-98257b54__listbox" role="listbox" className="gem-c-search-with-autocomplete__menu gem-c-search-with-autocomplete__menu--inline gem-c-search-with-autocomplete__menu--hidden"></ul>
                                  <span id="search-main-98257b54__assistiveHint" style={{display: "none"}}>When search suggestions are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.</span>
                                </div>
                              </div>
                              <div className="gem-c-search__item gem-c-search__submit-wrapper">
                                <button className="gem-c-search__submit" type="submit" enterKeyHint="search">
                                  Search
                                  <svg className="gem-c-search__icon" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                    <circle cx="12.0161" cy="11.0161" r="8.51613" stroke="currentColor" strokeWidth="3"></circle>
                                    <line x1="17.8668" y1="17.3587" x2="26.4475" y2="25.9393" stroke="currentColor" strokeWidth="3"></line>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      
      <div className="govuk-welcome-panel">
        <div className="govuk-width-container">
          <p className="page-note">
            We welcome your{" "}
            <a href="/" className="govuk-link">
              feedback
            </a>{" "}
            to help us improve this service.
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;