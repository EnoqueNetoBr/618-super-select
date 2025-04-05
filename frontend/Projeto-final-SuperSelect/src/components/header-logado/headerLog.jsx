import './headerLog.css'

function HeaderLog() {
    
    return(
        <>
        <div className="header-top">
                <img src="/shopping-cart.png" alt="" className=""/>
                <h1>SuperSelect</h1>
                <input type="text" name="" id="search" placeholder='Pesquise aqui por produtos e/ou marcas...'/>
                <div className="usuario">
                    <img src="/notif.png" alt="" id='notif'/>
                    <img src="/usericon.png" alt="" id='userphoto'/>
                    <h3>Usuário</h3>
                </div>
        </div>
        <div className="header-low">
            <div className="categorias">
            <p>Hortifruti 🍇</p> 
            <p>Lanchonete 🍔</p>
            <p>Padaria 🍞</p>
            <p>Confeitaria 🎂</p>
            <p>Frios e Laticínios 🧀</p>
            <p>Higiene 🧼</p>
            <p>Automotivo 🚗</p>
            <p>Eletro🔌</p>
            </div>
        </div>
        </>
        
    )
}

export default HeaderLog