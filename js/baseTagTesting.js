/* BASE HEAD - FOR TESTING ONLY
 This can be removed or you can add another IFELSE for hostname === necto.com
*/
alert(window.location.hostname)
var baseTag = document.getElementById('baseTag')
if (window.location.hostname === 'www.necto.com') {
    baseTag.setAttribute('href', 'https://chrisspring215.github.io')
}
else if (window.location.hostname === 'www.necto.com') {
    baseTag.setAttribute('href', 'https://chrisspring215.github.io/necto-redesign/')
}
else if (window.location.hostname === 'www.necto.com') {
    baseTag.setAttribute('href', 'file:///Users/Spring2/Documents/necto-redesign/')
}
else {
	baseTag.setAttribute('href', 'file:///Users/cacollins/Documents/necto-redesign/')
}
