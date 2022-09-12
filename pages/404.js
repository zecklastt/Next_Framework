import Link from '../src/components/Link';

export default function Page404() {
    return (
        <div>
            <h1> Não deu certo, volte novamente clicando aqui </h1>
            <Link href="/">
                Voltar para a Home
            </Link>
        </div>
    );
}