import json
import re
f = open('../js/events.js', 'r')
file_contents = f.read()



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


finalJSON = '[' + cleanedUp06

finalJSON = file_contents


with open('../js/events.json', 'w') as outfile:
    json.dump(finalJSON, outfile)


