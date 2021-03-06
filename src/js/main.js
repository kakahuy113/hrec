import {
	getSVGs,
	Loading
} from "./utilities/util";
import Tab from './libraries/Tab';
import CommonController from './libraries/CommonController';

// active scrollBar window
const scrollBar = () => {
	const isChange = window.innerWidth > 1024;
	if (isChange == true) {
		$(window).scroll(function() {
			const heigh = window.scrollY;
			if (heigh > 137) {
				$("header").addClass('sroll');
			} else {
				$("header").removeClass("sroll");
			}
		});
	} else {
		console.log("Saii");
	}

}

const navMobile = () => {
	const btn = $(".navMobile");
	const nav = $(".navBar");
	if (btn) {
		$(btn).click(function(e) {
			e.preventDefault();
			$("#overlay").toggleClass("d-b");
			$("body").toggleClass("ov-h");
			$(btn).toggleClass('active');
			$(nav).toggleClass("active");
		});
	}
	const overlay = $("#overlay");
	$(overlay).click(function(e) {
		e.preventDefault();
		$("#overlay").removeClass("d-b");
		$("body").removeClass("ov-h");
		$(btn).removeClass('active');
		$(nav).removeClass("active");
	});
	const contentsMobile = document.querySelectorAll('[data_content--mobile]');
	const contentsPc = document.querySelectorAll('[data_content--pc]');
	const isChange = window.innerWidth < 1025;
	if (isChange == true) {
		contentsMobile.forEach((item) => {
			const valueContent = item.getAttribute('data_content--mobile');
			item.innerHTML = valueContent;
		})
	} else {
		contentsPc.forEach((item) => {
			const valueContent = item.getAttribute('data_content--pc');
			item.innerHTML = valueContent;
		})
	}
}

const changeHeightFooter = () => {
		const isChange = window.innerWidth < 769;
		const height = $(".footer__inner").height();
		if (isChange == true) {
			$(".footer__wrapper").css('height', height + 110);
			$(window).resize(function() {
				$(".footer__wrapper").css('height', height + 110);
			});
		}
	}
	// swiper home page video
const swiperForBanner = () => {
	var swiper = new Swiper(".hot-news--banner .swiper-container", {
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		simulateTouch: false,
	});
};

//Swiper Hot Event
const swiperHotEvent = () => {
	var swiper = new Swiper(".home__stuff .swiper-container", {
		slidesPerView: 3,
		slidesPerGroup: 1,
		breakpoints: {
			300: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
		},
		navigation: {
			nextEl: ".home__stuff .swiper-button-next",
			prevEl: ".home__stuff .swiper-button-prev",
		},
	});
};

//Swiper New Member
const swiperNewMember = () => {
	var swiper = new Swiper(".home__new-member .swiper-container", {
		slidesPerView: 3,
		slidesPerGroup: 1,
		breakpoints: {
			300: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
				centeredSlides: true,
				centeredSlidesBounds: true,
			},
		},
		on: {
			init: function() {
				setTimeout(() => {
					const temp = $(".home__new-member .swiper-slide-active img");
					const width = temp.width();
					$(".home__new-member--info__wrapper").css(
						"width",
						`${width + 35}`
					);
				}, 1000);
			},
		},
		navigation: {
			nextEl: ".fake-swiper-button .swiper-button-next",
			prevEl: ".fake-swiper-button .swiper-button-prev",
		},
	});
	swiper.on("slideChange", function() {
		const data = $(".home__new-member .swiper-slide-active");
		const width = data.width();
		$(".home__new-member--info__wrapper").width(width);
		const temp = data.find(".model--desc");
		$(".home__new-member--info .home__new-member--info__wrapper").html(
			temp.html()
		);
	});
};

//swiper happy birthday
const swiperHappyBirthday = () => {
	var swiper = new Swiper(".home__happy-birthday .swiper-container", {
		slidesPerView: 3,
		slidesPerGroup: 1,
		breakpoints: {
			300: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 25,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 45,
			},
		},
		autoplay: {
			delay: 2000,
		},
		simulateTouch: false,
		navigation: {
			nextEl: ".home__happy-birthday .swiper-button-next",
			prevEl: ".home__happy-birthday .swiper-button-prev",
		},
	});
};

//swiper member homepage
const swiperMemberHome = () => {
	var swiper = new Swiper(".home__member--swiper .swiper-container", {
		slidesPerView: 5,
		slidesPerGroup: 1,
		loop: true,
		breakpoints: {
			300: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 5,
			},
		},
		autoplay: {
			delay: 2000,
		},
		simulateTouch: false,
		navigation: {
			nextEl: ".home__member--swiper .swiper-button-next",
			prevEl: ".home__member--swiper .swiper-button-prev",
		},
	});
};

const swiperNews = () => {
	const swiper = new Swiper(".block__HREC.right .swiper-container", {
		slidesPerView: 1,
		slidesPerColumn: 4,
		slidesPerColumnFill: 'row',
		spaceBetween: 10,
		speed: 800,
		navigation: {
			nextEl: ".block__HREC.right .swiper-button-next",
			prevEl: ".block__HREC.right .swiper-button-prev",
		},
	});
	const swipery = new Swiper(".block__HREC.left .swiper-container", {
		slidesPerView: 1,
		slidesPerColumn: 4,
		spaceBetween: 10,
		slidesPerColumnFill: 'row',
		speed: 800,
		navigation: {
			nextEl: ".block__HREC.left .swiper-button-next",
			prevEl: ".block__HREC.left .swiper-button-prev",
		},
	});
};

// MAIN BANNER WEBSITE
const initMainBanner = () => {
	const namePage = document.querySelector("#js-page-verify");
	const mainBanner = document.querySelector(".MainSlider__Banners");
	if (
		(namePage.className == "index-page") |
		(namePage.className == "introduce-page")
	) {
		mainBanner.classList.add("isIndex");
	}
	return new Swiper(".MainSlider__Banners .swiper-container", {
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		speed: 1000,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".MainSlider__Banners .swiper-pagination",
			type: "bullets",
			clickable: true,
		},
	});
};

const swipeIntroducePurpose = () => {
	var swiper = new Swiper(".introduce__purpose__wrapper .swiper-container", {
		slidesPerView: 3,
		slidesPerGroup: 1,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		breakpoints: {
			300: {
				slidesPerView: 1,
				spaceBetween: 45,
				loop: true,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 45,
				loop: true,
			   
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 45,
				autoplay: false
			},
		},
	});
};

const sniperEvent = () => {
	const swiper = new Swiper('.eventBottom__HREC .swiper-container', {
		slidesPerView: 2,
		slidesPerColumn: 4,
		speed: 800,
		breakpoints: {
			300: {
				slidesPerView: 1,
			},
			1024: {
				slidesPerView: 2,
			},
		},
		navigation: {
			nextEl: '.eventBottom__HREC .swiper-button-next',
			prevEl: '.eventBottom__HREC .swiper-button-prev',
		},
	});
}

const swiperNewAdc = () => {
	const swiperL = new Swiper(".nSlider__col.left .swiper-container", {
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		simulateTouch: false,
	});
};

const swiperNewAdcR = () => {
	const swiperR = new Swiper(".nSlider__col.right .swiper-container", {
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		simulateTouch: false,
	});
	const swiperT = new Swiper(".eventTop__slider .swiper-container", {
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		simulateTouch: false,
	});
	const swiperB = new Swiper(".eventBot__slider .swiper-container", {
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		simulateTouch: false,
	});
	const swiperD = new Swiper(".detail__Adc .swiper-container", {
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		simulateTouch: false,
	});
};

const showInputSearch = () => {
	const btn = document.querySelector(".navSearch__btn");
	const navSearch__input = document.querySelector(".navSearch__input");
	if (btn) {
		btn.addEventListener("click", (e) => {
			btn.classList.toggle("active");
			navSearch__input.classList.toggle("show");
		});
	}
};

export const swiperExecutiveCommittee = () => {
	var swiper = new Swiper(".tab-bch .swiper-container", {
		spaceBetween: 20,
		breakpoints: {
			300: {
				slidesPerView: 1,
			},
			500: {
				slidesPerView: 2,
				slidesPerGroup: 1,
			},
			700: {
				slidesPerView: 3,
				slidesPerGroup: 1,
			},
			1025: {
				slidesPerView: 2,
				slidesPerColumn: 2,
			},
		},
		on: {
			init: function() {
				document
					.querySelector(".tab-bch .swiper-container .swiper-slide")
					.click();
				getSVGs();
			},
		},
		navigation: {
			nextEl: ".tab-bch .swiper-button-next",
			prevEl: ".tab-bch .swiper-button-prev",
		},
	});
	var swiper = new Swiper(".tab-bkt .swiper-container", {
		spaceBetween: 20,
		breakpoints: {
			300: {
				slidesPerView: 1,
			},
			500: {
				slidesPerView: 2,
				slidesPerGroup: 1,
			},
			700: {
				slidesPerView: 3,
				slidesPerGroup: 1,
			},
			1025: {
				slidesPerView: 2,
				slidesPerColumn: 2,
				slidesPerColumnFill: "row",
			},
		},
		on: {
			init: function() {
				document
					.querySelector(".tab-bkt .swiper-container .swiper-slide")
					.click();
			},
		},
		navigation: {
			nextEl: ".tab-bkt .swiper-button-next",
			prevEl: ".tab-bkt .swiper-button-prev",
		},
	});
};

//render info in intro page
const renderInfo = () => {
	const tabbch = document
		.querySelectorAll(
			".tab-bch .swiper-slide"
		)
	tabbch.forEach((item) => {
		item.addEventListener("click", (e) => {
			e.preventDefault();
			const content = item.querySelector(".item__wrapper");
			tabbch.forEach(item => {
				item.classList.remove('active')
			})
			item.classList.add("active")
			$(".tab-bch .executive-committee-active").html(content.innerHTML);
			// const tempheight = $(".executive-committee-active").height();
			// $('html, body').animate({
			// 	scrollTop: $(".executive-committee-active").offset().top - 200
			// }, 2000);
		});
	});
	const tabbkt = document
		.querySelectorAll(
			".tab-bkt .swiper-slide"
		)
	tabbkt.forEach((item) => {
		item.addEventListener("click", (e) => {
			e.preventDefault();
			const temp = item.querySelector("a");
			tabbkt.forEach(item => {
				item.classList.remove("active")
			})
			item.classList.add("active")
			$(".tab-bkt .executive-committee-active").html(temp.innerHTML);
		});

	});
};

const copyDataByAttr = () => {
	const items__paste = document.querySelectorAll('[data-paste]');
	const items__copy = document.querySelectorAll('[data-copy]');

	items__paste.forEach((itemPaste) => {
		items__copy.forEach((itemCopy) => {
			var data = itemCopy.getAttribute('data-copy');
			if (data != null && data == itemPaste.getAttribute('data-paste')) {
				itemPaste.textContent = itemCopy.textContent;
			}
		});
	});
};
// ACTIVE LANGGUAGE
const activeLanguage = () => {
	const htmlLang = document.querySelector('html').getAttribute('lang');
	const items__language = document.querySelectorAll(
		'.header__languages .languages__item'
	);
	items__language.forEach((item) => {
		if (item.getAttribute('data-language') == htmlLang) {
			item.classList.add('active');
		}
	});
};
//fake swiper partner
const fakeSwiperPartner = () => {
	if (document.querySelector(".index-page")) {
		// CODE YOUR JS HERE
		const  imgfromBE =$("#list-img").val()
		const listarray = imgfromBE.split(",")
		var array = listarray
		var images = Array.from(
			document.querySelectorAll(".partner--logo .img.simulateclass")
		);
		var arrayLength = 4;
		var imageslength = 0;
		// THAY ĐỔI HÌNH ẢNH THEO THỜI GIAN
		const autoChange = () => {
			const imageChange = array[arrayLength++ % array.length];
			const itemChange = images[imageslength++ % images.length];
			itemChange.setAttribute("src", `${imageChange}`);
		};
		// KHỞI TẠO LIST HÌNH
		const init = setInterval(autoChange, 1000);
		images.forEach((item, index) => {
			item.setAttribute("src", `${array[index]}`);
			item.addEventListener("mouseenter", (e) => {
				item.classList.remove("simulateclass")
				images = Array.from(
					document.querySelectorAll(".partner--logo .img.simulateclass")
				);
				const background = item.getAttribute("src");
				const indextocut = array.indexOf(`${background}`);
				array.splice(indextocut, 1);
			});
			item.addEventListener("mouseleave", (e) => {
				item.classList.add("simulateclass");
				images = Array.from(
					document.querySelectorAll(".partner--logo .img.simulateclass")
				);
				
				const  imgfromBE =$("#list-img").val()
				const listarray = imgfromBE.split(",")
				array = listarray;
				arrayLength = 4;
				imageslength = 0;
				images.forEach((item, index) => {
					item.setAttribute("src", `${array[index]}`);
				});
			});
		});
	}
};

//get breadcrumb title
const getBreadcrumbTitle = () => {
	let title = $('#breadcrumb-wrapper ul li').eq(1).text();
	$('#breadcrumb-wrapper ul li').last().addClass('active');
	$('.pagesBanner__title h1').text(title);
};
const showLoginHome = () => {
	$(".login__text").click(function(e) {
		e.preventDefault();
		e.preventDefault();
		$.fancybox.open({
			src: '#form__login'
		});
	});
}

const ajaxFormLogin = () => {
	$('.btn.btn-login button').on('click', function(e) {
		e.preventDefault();
		const _thisBtn = $(this);
		const url = _thisBtn.attr('data-url');
		const formData = new FormData();
		$('.input__login input').each(function() {
			const name = $(this).attr('name');
			const value = $(this).val();
			formData.append(name, value);
		});
		if ($('.headerLogin__body form').valid() === true) {
			$.ajax({
				url: url,
				type: 'post',
				data: formData,
				processData: false,
				contentType: false,
				beforeSend: function() {
					_thisBtn.attr('disabled', 'disabled');
				},
				success: function(res) {
					alert(`${res.Message}`);
					window.location.reload();
					_thisBtn.removeAttr('disabled');
				},
			});
		}
	});
}

document.addEventListener("DOMContentLoaded", () => {
	getSVGs();
	Loading();
	scrollBar();
	navMobile();
	changeHeightFooter();
	// CommonController
	CommonController();
	//Swiper for banner
	swiperForBanner();
	//swiper for hotvent homepage
	swiperHotEvent();
	// Swiper for new member
	swiperNewMember();
	//Swiper happy birthday
	swiperHappyBirthday();
	//Swiper home member
	swiperMemberHome();
	//Main banner
	initMainBanner();
	//swiper introduce struct
	swipeIntroducePurpose();
	swiperNews();
	sniperEvent();
	swiperNewAdc();
	swiperNewAdcR();
	showInputSearch();
	//render info in swiperExecutiveCommittee
	renderInfo();
	//
	copyDataByAttr();
	// ACTIVE LANGGUAGE
	activeLanguage();
	//fake home parner swiper
	fakeSwiperPartner();
	ajaxFormLogin();
	// showLoginHome
	showLoginHome();
	//get title breadcum
	getBreadcrumbTitle();
	//tab
	const ExecutiveCommittee = new Tab(".executive-committee .tab-container");
});