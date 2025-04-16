import './formularioCadastro.css'

function FormularioCadastro() {
    return (
       <div id="container" >
            <div id='conteudo'>
                <h1>Criar Nova Conta</h1>
                <hr />
                <h5>Nome</h5>
                <input className='input' type="text" placeholder="Digite Seu Nome" />
                <h5>Email</h5>
                <input className='input' type="email" placeholder="Digite Seu Email" />
                <h5>Senha</h5>
                <input className='input' type="password" placeholder="Digite Sua Senha" />
                <br />
                <br />
                <button>Cadastrar</button> 
                <br />
                <button>Fazer Login</button>
            </div>
       </div> 
    )
}


export default FormularioCadastro