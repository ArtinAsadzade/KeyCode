let $ = document
let locationKey = $.querySelector('#location')
let title = $.querySelector('title')
let eventKey = $.getElementById('key')
let eventLocation = $.getElementById('location')
let eventWhich = $.getElementById('which')
let eventAlt = $.getElementById('code')
let keyCode = $.getElementById('keyCode')

document.body.addEventListener('keydown', function (event) {
    // event.preventDefault()
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'

    eventKey.innerHTML = event.key;
    eventLocation.innerHTML = event.location;
    eventWhich.innerHTML = event.which;
    eventAlt.innerHTML = event.code;
    keyCode.innerHTML = event.which;
})
