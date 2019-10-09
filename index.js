const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

const source = ['images/*.{jpg,png}'];

(async () => {
	const result = await imagemin(source, {
    destination: 'build/images',
    plugins: [
      imageminWebp({
        quality: 80,
        // method: 5,
      })
    ],
	});

	console.log('Images optimized');
})();