import './cadastro.css'

function Cadastro() {
    return (
        <div id='img-fundo'>
            {/* elemento de imagem de fundo p - 0 */}



            {/* formulario de cadastro p - 1 */}

            <div id='container'>
                <img src="" alt="" />
                <h1>Criar Nova Conta</h1>
                <hr />
                <h3>Nome</h3>
                <input type="text" />
                <h3>Email</h3>
                <input type="text" />
                <h3>Senha</h3>
                <input type="text" />
                <br />
                <br />
                <button id='btn-criar-conta'>Criar Nova Conta</button>
                <br />
                <button id='btn-login'>Login</button>
            </div>
        </div>
    )
}

export default Cadastro