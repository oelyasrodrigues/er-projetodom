import { Splide, SplideProps, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Slide from "../../commons/Slide/Slide";
import styles from "./styles.module.scss";


export default function Depositions() {
  const settings: SplideProps = {
    options: {
      type: 'loop',
    
      perPage: 3,
      perMove: 1,
      rewind: true,
      arrows: false,
      pagination: false,
      width: 990,
      gap: 10,
      breakpoints: {
        1200: {
          width: 660,
          perPage: 2,
        },
        700: {
          perPage: 1,
          width: 320,
        },
        510: {
          width: 280
        }
      }, 
    }
  }

  return (
    <section className={styles.depositions}>
     
        <div className={styles.content}>
          <h2  data-aos="zoom-in-up">O QUE ESTÃO FALANDO DO <span>PROJETO DOM</span>?</h2>

          <div className={styles.slides} >
            <Slide
              settings={settings}
            >
              <SplideSlide> <div className={styles.cardImg}><img src='/depoimentos/d1.png' alt="Depoimento 1" /></div> </SplideSlide>
              <SplideSlide> <div className={styles.cardImg}><img src='/depoimentos/d2.png' alt="Depoimento 2" /></div> </SplideSlide>
              <SplideSlide> <div className={styles.cardImg}><img src='/depoimentos/d3.png' alt="Depoimento 3" /></div> </SplideSlide>
              <SplideSlide> <div className={styles.cardImg}><img src='/depoimentos/d4.png' alt="Depoimento 4" /></div> </SplideSlide>
              <SplideSlide> <div className={styles.cardImg}><img src='/depoimentos/d5.png' alt="Depoimento 5" /></div> </SplideSlide>
              <SplideSlide> <div className={styles.cardImg}><img src='/depoimentos/d6.png' alt="Depoimento 6" /></div> </SplideSlide>
            </Slide>

          </div>
        </div>

    </section>
  );
}


