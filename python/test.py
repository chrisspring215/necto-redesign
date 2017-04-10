import json
import re
file = open('../js/events.js', 'r')
file_contents = file.read()

cleanUp01 = file_contents.split('var eventsJSON = ')
cleanedUp01 = '{ "events" : '.join(cleanUp01)

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

removeSpace = re.sub("\s\s+$"," ", cleanedUp06)

removeSpace2 = re.sub('\\"','"', removeSpace)



target = open('../js/events.json','w')

target.write(removeSpace2 + "}")

file.close
'''
xxx = open('../js/events.json')
yyy = json.load(xxx)
'''