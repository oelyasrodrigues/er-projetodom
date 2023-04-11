import CardHowillHelp from "../../commons/cardHowHillHelp";
import styles from "./styles.module.scss";

export default function HowWillHelp() {
  return (
    <section className={styles.howWillHelp}>
      <div className="container">
        <div className={styles.content}>
          <h2 data-aos="zoom-in" data-aos-duration='900'>
            Eu sei que você não está satisfeito com sua vida e vou te ajudar a <span>vencer isso!</span>
          </h2>
          <div className={styles.cards}>
            <CardHowillHelp aos="zoom-in" duration="1400"
              title="Pare de perder tempo"
              text="Vou te ensinar a focar no que realmente importa, sem distrações!"
              img="/icons/ampulheta.png"
            />
            <CardHowillHelp aos="zoom-in" duration="1400"
              title="Mudando a mentalidade"
              text="Para alcançar bons resultados é muito importante mudar seu pensamento sobre o mundo."
              img='/icons/cérebro.png'
            />
            <CardHowillHelp aos="zoom-in" duration="1400"
              title="Mudando a mentalidade"
              text={`“Não adianta apenas ser bom, tem que parecer”. Vou te ensinar a ter um posicionamento de um REI.`}
              img='/icons/coroa.png'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
