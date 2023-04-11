import styles from './styles.module.scss'


interface Props{
  img:string
  title:string
  text:string
  aos?:string
  duration?:string
}

export default function CardHowillHelp({img, title, text, aos, duration}:Props) {
  return(
    <div className={styles.card} data-aos={aos} data-aos-duration={duration}>
      <div className={styles.img}>
        <img src={img} alt="imagem card" />
      </div>

      <h4>{title}</h4>

      <p>{text}</p>
    </div>
  )
}