import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

function NotFoundPage() {
    return (
        <>
            <Header />

            <main className="booking-page">
                <section className="shell confirmation">
                    <span className="eyebrow">
                        Erro 404
                    </span>

                    <h1>
                        Não encontramos essa página.
                    </h1>

                    <p>
                        O endereço acessado não existe ou foi movido. Volte para o
                        site ou inicie um novo agendamento.
                    </p>

                    <div className="actions">
                        <Link
                            className="button button-primary"
                            to="/"
                        >
                            Voltar ao site
                        </Link>

                        <Link
                            className="button button-outline"
                            to="/agendar"
                        >
                            Agendar avaliação
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default NotFoundPage;
