import Footer from "../../components/Footer"
import Nav from "../../components/Nav"

const Home = () => {
  return (
    <>
      <Nav />
      <header className="main-header">
        <section className="main-header-content">
          <div className="main-header-content-first">
            <div className="main-header-content-first-slap">
              Front End
            </div>
            <h2>Challenge React</h2>
            <p>
              Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
            </p>
          </div>
          <div>
            Hola
          </div>
        </section>
      </header>
      <Footer />
    </>
  )
}

export default Home