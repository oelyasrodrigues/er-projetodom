import { SplideProps, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Slide from "../../commons/Slide/Slide";
import styles from "./styles.module.scss";

export default function ModulesInfo() {
  const settings: SplideProps = {
    options: {
      type: 'loop',
      perPage: 4,
      perMove: 1,
      rewind: true,
      pagination: false,
      width: 1200,
      arrows: false,
      breakpoints: {

        1200: {
          perPage: 2,
          width: 600,
        },
        600: {
          perPage: 1,
          width: 260,
          gap: '1em',
        }
      }
    }
  }

  return (
    <section className={styles.modules}>
        <div className={styles.content}>
          <h2 data-aos="zoom-in" data-aos-duration="800">COMO O <span>PROJETO DOM</span> VAI TE AJUDAR?</h2>

          <div className={styles.slides}>
            <Slide settings={settings}>
              <SplideSlide> <div className={styles.cardImg}><img src='/modulos/m1.jpg' alt="Módulo 1" /></div> </SplideSlide>
                <SplideSlide> <div className={styles.cardImg}><img src='/modulos/m2.jpg' alt="Módulo 2" /></div> </SplideSlide>
                <SplideSlide> <div className={styles.cardImg}><img src='/modulos/m3.jpg' alt="Módulo 3" /></div> </SplideSlide>
                <SplideSlide> <div className={styles.cardImg}><img src='/modulos/m4.jpg' alt="Módulo 4" /></div> </SplideSlide>
                <SplideSlide> <div className={styles.cardImg}><img src='/modulos/m5.jpg' alt="Módulo 5" /></div> </SplideSlide>
                <SplideSlide> <div className={styles.cardImg}><img src='/modulos/mb1.jpg' alt="Módulo b1" /></div> </SplideSlide>
                <SplideSlide> <div className={styles.cardImg}><img src='/modulos/mb2.jpg' alt="Módulo b2" /></div> </SplideSlide>
            </Slide>
          </div>
      </div>
    </section>
  );
}
