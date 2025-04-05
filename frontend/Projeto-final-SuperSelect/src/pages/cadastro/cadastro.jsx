import FormularioCadastro from "../../components/formulario-de-cadastro/formularioCadastro"
import './cadastro.css'

function PaginaDeCadastro() {
    return (
      <div id='background' className="d-flex justify-content-center align-items-center">
        <div>
            <FormularioCadastro />
        </div>
      </div>
    )
}

export default PaginaDeCadastro