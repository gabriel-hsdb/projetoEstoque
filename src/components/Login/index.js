import styles from './Login.module.css';

function Login () {
    return (
        <login className={styles.login}>
            <form>
                <h1>Tela de Login</h1>
                <div>
                    <input type="email" placeholder="E-mail" />
                </div>
                <div>
                    <input type="senha" placeholder="Senha" />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </login>
    )
}

export default Login;