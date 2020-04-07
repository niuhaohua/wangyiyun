//引入swiper
import Swiper from '../assets/js/swiper.min.js'
import '../assets/css/swiper.min.css';

const swiper = (dom, option) => {
   return new Swiper(dom, option);
}

export default swiper