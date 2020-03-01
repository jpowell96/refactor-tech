class MyCustomElement extends HTMLElement {
	constructor() {
		super();

		//Create a shadow root
		const shadowRoot = this.attachShadow({mode : 'open'});

		//Create the HTML Content
		const wrapper = document.createElement('div');
		wrapper.innerHTML = '<p>This is my custom element!</p>';

		shadowRoot.appendChild(wrapper);

	}
}

customElements.define('my-custom-element', MyCustomElement);




