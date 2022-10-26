import Swiper, {Pagination, Parallax} from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const swiper = new Swiper(
	'.js-main-baner-swiper',
	{
        speed: 600,
        parallax: true,
		modules: [Pagination, Parallax],
        pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
				return `
					<span class="swiper-page ${currentClass}"></span>
					<span class="swiper-page ${totalClass}"></span>
				`
			}
        },
	}
)

export function bannerSlider() {
	return swiper
}