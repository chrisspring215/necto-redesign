/* BASE HEAD - FOR TESTING ONLY
 This can be removed or you can add another IFELSE for hostname === necto.com
*/

var baseTag = document.getElementById('baseTag')
if (window.location.hostname === 'www.necto.com') {
    baseTag.setAttribute('href', 'https://www.necto.com')
}

else {
	baseTag.setAttribute('href', 'file:///Users/cacollins/Documents/necto-redesign/')
    // baseTag.setAttribute('href', 'file:///Users/Spring2/Documents/necto-redesign/') // Switch when working at home or work
}
