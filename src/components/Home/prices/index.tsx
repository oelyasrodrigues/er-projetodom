import styles from "./styles.module.scss";

export default function Prices() {

  return (
    <div className={styles.prices}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.price}>
            <h2 data-aos="fade-right" data-aos-duration='1000'>QUANTO VOU INVESTIR?</h2>

            <div className={styles.bonus}>
              <p data-aos="fade-right" data-aos-duration='1000'>
                <img src={"/icons/Check.svg"} alt="icone de um 'check'" />
                Acesso completo a todo meu método exclusivo
              </p>
              <p data-aos="fade-right" data-aos-duration='1400'>
                <img src={"/icons/Check.svg"} alt="icone de um 'check'" />
                Acesso a comunidade no telegram
              </p>
              <p data-aos="fade-right" data-aos-duration='1800'>
                <img src={"/icons/Check.svg"} alt="icone de um 'check'" />
                Ganhe uma mentoria cara a cara comigo
              </p>
              <p data-aos="fade-right" data-aos-duration='2200'>
                <img src={"/icons/Check.svg"} alt="icone de um 'check'" />
                Lives todo domingo durante um período de 6 meses
              </p>
            </div>
            <div className={styles.value} data-aos="zoom-in" data-aos-duration='2000'>
              <p className={styles.old}>De <span>R$ 1997,00</span></p>
              <p>Por apenas</p>
              <p className={styles.current}>
                12x de <span>R$ 98,00</span>
              </p>
              <p>ou 1x de R$ 997,00</p>
            </div>
            <a href="#" className="btn">QUERO ENTRAR PARA A FAMÍLIA</a>
          </div>
          <div className={styles.guarantee} data-aos="zoom-in">
            <img src="/icons/selo.png" alt="selo 7 dias de garantia" />
            <p>
              Se em 7 dias você achar que o <span>PROJETO DOM</span> não é para você, é só solicitar seu dinheiro de volta que a devolução será realizada de maneira simples e rápida, não precisa de justificativa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
