import './cadastro.css'
function Cadastro() {
    return (
        <>
        <div id='container'>
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
        </>
    )
}

export default Cadastro