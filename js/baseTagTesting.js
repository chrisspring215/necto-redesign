/* BASE HEAD - FOR TESTING ONLY
 This can be removed or you can add another IFELSE for hostname === necto.com
*/
var baseTag = document.getElementById('baseTag')
if (window.location.hostname === 'chrisspring215.github.io') {
    baseTag.setAttribute('href', 'https://chrisspring215.github.io/necto-redesign/')
}
else {
	// baseTag.setAttribute('href', 'file:///Users/cacollins/Documents/necto-redesign/')
    baseTag.setAttribute('href', 'file:///Users/Spring2/Documents/necto-redesign/') // Switch when working at home or work
}
