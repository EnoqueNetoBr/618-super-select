import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'

export default function TransparentBox() {


    return (
    
        <div className='imagem'>
            <div className="flex items-center justify-center h-screen">
                <div className="bg-gray-500 bg-opacity-50 rounded-lg p-6 w-1/2 text-center">
                    <div className="flex items-center justify-center h-screen bg-cover bg-center">
                        <div className="bg-gray-500 bg-opacity-50 rounded-lg p-8 w-full max-w-md">
                            <div className='formulario'>
                                <h1 className="text-blue text-3xl font-bold text-center mb-2">LOGIN</h1>
                                <hr className="border-gray-300 mb-6" />

                                <div className="mb-4">
                                    <h3 className="text-blue text-left mb-1">Nome</h3>

                                    <input
                                        type="text"
                                        placeholder="Digite seu nome"
                                        className="w-full p-2 rounded bg-gray-200 border-none focus:outline-none"
                                    />
                                </div>


                                <div className="mb-6">
                                    <h3 className="text-blue text-left mb-1">Senha</h3>
                                    <input
                                        type="password"
                                        placeholder="Digite sua senha"
                                        className="w-full p-2 rounded bg-gray-200 border-none focus:outline-none"
                                    />
                                </div>
                                <br></br>
                                <button className="w-full bg-[#007BFF] text-white py-2 rounded mb-4 hover:bg-blue-600 transition">
                                    ENTRAR
                                </button>

                                <h5 className="text-blue text-sm text-center mb-2">ESQUECI MINHA SENHA</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    <footer class="rodape"> Todos os direitos reservados  </footer>
}
