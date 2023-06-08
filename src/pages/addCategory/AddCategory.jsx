import { useContext } from "react"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import { CategoryContext } from "../../context/CategoryProvider"

const AddCategory = () => {

  const [state, dispatch] = useContext(CategoryContext)

  console.log(state, dispatch)

  return (
    <>
      <Nav />
      <main className="main-add">
        <h2>Nueva categoría</h2>
        <form>
          <input type="text" />
          <textarea></textarea>
          <input type="color"/>
          <input type="text" />
          <div className="main-add-button">
            <button>Guardar</button>
            <button>Limpiar</button>
          </div>
        </form>
        <div className="main-add__table">
          <table>
            <thead>
              <tr className="main-add__table-th">
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Editar</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
            {
              state.map((video, index) => <tr className="main-add__table-tr" key={index}>
                <td>{video.lenguaje}</td>
                <td>{video.description}</td>
                <td>Editar</td>
                <td>Eliminar</td>
              </tr>)
            }
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default AddCategory