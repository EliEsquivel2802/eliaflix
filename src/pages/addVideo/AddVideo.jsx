import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import { Link } from "react-router-dom"

const AddVideo = () => {
  return (
    <>
      <Nav />
      <main className="main">
        <h2>Nuevo video</h2>
        <form>
          <input placeholder="Titulo" type="text" />
          <input placeholder="Link del video" type="text" />
          <input placeholder="Link de la imagen del video" type="text" />
          <input placeholder="Escoja una categoria" type="text" />
          <textarea placeholder="Descripción"></textarea>
          <input placeholder="Código de seguridad" type="text" />
          <div className="main-button">
            <div className="main-button-first">
              <button>Guardar</button>
              <button>Limpiar</button>
            </div>
            <div className="main-button-second">
              <Link to="/add-category">Nueva categoría</Link>
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </>
  )
}

export default AddVideo