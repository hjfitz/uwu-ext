const tags = [
	'p',
	'a',
	'span',
	'h1',
	'h2',
	'h3',
	'h4',
]


const faces = ["(・`ω´・)", "w", "owo", "UwU", ">w<", "^w^"]
const emojiRe = /\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]/g
const randFace = () => {
	const rand = ~~(Math.random() * faces.length)
	const face = ` ${faces[rand]} `
	return face
}
const uwuify = (text) => {
	text = text.replace(/(?:r|l)/g, "w")
	text = text.replace(/(?:R|L)/g, "W")
	text = text.replace(/n([aeiou])/g, 'ny$1')
	text = text.replace(/N([aeiou])/g, 'Ny$1')
	text = text.replace(/N([AEIOU])/g, 'Ny$1')
	text = text.replace(/ove/g, "uv")
	text = text.replace(/\!+/g, randFace())
	text = text.replace(emojiRe, randFace())
	return text
}

const log = (word) => console.log(`[uwu] ${word}`)

log('loaded')
log(tags)

const main = () => {
	tags
		.map(tag => [...document.querySelectorAll(tag)])
		.flat()
		.filter(tag => tag.textContent)
		.forEach(tag => {
			log(tag)
			tag.textContent = uwuify(tag.textContent)
		})
}

setTimeout(main, 5e2)
setTimeout(main, 2e3)
