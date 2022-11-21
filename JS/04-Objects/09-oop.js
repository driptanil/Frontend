class Animator {
	constructor(selector) {
		this.selector = document.querySelector(selector);
	}
	fadeOut(time) {
		this.selector.style.transition = `all ${time}s ease`;
		this.selector.style.opacity = 0;
	}
}
