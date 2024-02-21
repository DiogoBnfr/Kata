function canMakeHTTPRequest() {
	return typeof globalThis.XMLHttpRequest === 'function';
}

console.log(canMakeHTTPRequest);
