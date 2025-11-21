const instance = new Typewriter('#js-typewriter', {
	strings: ['Creative Lead', 'Senior Brand Designer'],
	autoStart: false,
	loop: true,
});

// Delay typewriter start until after "Ana Althoff" appears
// Page animations activate at 1200ms, "Ana Althoff" has tr-delay-01 (0.1s = 100ms)
// So we wait ~1300ms total, then add a small buffer
setTimeout(function() {
	instance.typeOutAllStrings().start();
}, 1350);