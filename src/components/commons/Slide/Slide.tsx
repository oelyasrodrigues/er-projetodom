import { Splide, SplideProps} from "@splidejs/react-splide";
import { ReactNode } from "react";



interface SliderProps {
  settings: SplideProps;
  children: ReactNode;
}

export default function Slide({ settings, children }: SliderProps) {
  return <Splide {...settings}>{children}</Splide>;
}
