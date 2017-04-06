f = open('../js/events.js', 'r')
file_contents = f.read()

import re

cleanUp01 = file_contents.split('var eventsJSON = [')
cleanedUp01 = "".join(cleanUp01)

cleanUp02 = cleanedUp01.split('new Date(')
cleanedUp02 = "".join(cleanUp02)

cleanUp03 = cleanedUp02.split('" + "')
cleanedUp03 = "".join(cleanUp03)

cleanUp04 = cleanedUp03.split(' // Do not modify')
cleanedUp04 = "".join(cleanUp04)

cleanUp05 = cleanedUp04.split('"),')
cleanedUp05 = '",'.join(cleanUp05)

cleanUp06 = cleanedUp05.split('//')
cleanedUp06 = "".join(cleanUp06)

cleanUp07 = cleanedUp06.split('\n    ')
cleanedUp07 = "".join(cleanUp07)

cleanUp08 = cleanedUp07.split('\"')
cleanedUp08 = ''.join(cleanUp08)





finalJSON = '[' + cleanedUp08



import json
with open('../js/events.json', 'w') as outfile:
    json.dump(finalJSON, outfile)


