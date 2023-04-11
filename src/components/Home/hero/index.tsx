import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div  data-aos="fade-right" data-aos-duration="600" className={styles.content}>
            <h1 >APRENDA A COMO SE TORNAR UM VERDADEIRO <span>CHEFE DE FAMÍLIA</span></h1>
            <p>
              Descubra os segredos das ruas, aprenda a vencer seus limites e
              conquiste a vida que você sempre sonhou. Se você busca a melhor
              versão de si mesmo e é capaz de enfrentar qualquer desafio, esse
              curso é para você.
            </p>
            <a className="btn" href="#">
              QUERO ENTRAR PARA A FAMÍLIA
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
