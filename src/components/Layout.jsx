import Header from "./Header"
import Footer from "./Footer"
import "../styles/Layout.css"

function Layout({ children }) {
  return (
    <div className="app-layout">
      <Header />

      <main
        id="main-content"
        className="main-content"
      >
        <div className="govuk-width-container">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Layout