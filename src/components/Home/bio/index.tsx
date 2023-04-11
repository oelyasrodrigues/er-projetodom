import styles from "./styles.module.scss";

export default function Bio() {
  return (
    <div className={styles.bio}>
      <div className="container">
        <div className={styles.content}>
          <span data-aos="fade-right">Quem será seu mentor?</span>
          <h2
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Dominic Toretto,
          </h2>

          <p data-aos="fade-up" data-aos-duration='1000'>
            Um ícone das pistas de corrida e um dos pilotos mais habilidosos e
            destemidos que existem. Dom se destacou como um piloto dominando
            pistas e colecionando vitórias em competições pelo mundo todo. Mas
            sua habilidade como piloto é apenas uma das muitas qualidades que o
            tornam um líder inspirador.
          </p>
          <p data-aos="fade-up" data-aos-duration='1400'>
            Com seu carisma, sua sabedoria e sua coragem, Dom se tornou uma
            referência para muitos que buscam desenvolver suas habilidades e
            alcançar o sucesso em suas vidas. E agora, com este curso exclusivo,
            você terá a oportunidade de aprender com ele e seguir seus passos
            rumo a uma vida mais realizada e feliz.
          </p>
        </div>
      </div>
    </div>
  );
}
