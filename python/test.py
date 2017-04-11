import json, re

# Opens the Events JS file
file = open('../js/events.js', 'r')
file_contents = file.read()

# Removes the var from the object
cleanUp01 = file_contents.split('var eventsJSON = ')
cleanedUp01 = '{ "events" : '.join(cleanUp01)

# Cleans up the data
cleanUp02 = cleanedUp01.split('new Date(')
cleanedUp02 = "".join(cleanUp02)

# Conctas firle paths
cleanUp03 = cleanedUp02.split('" + "')
cleanedUp03 = "".join(cleanUp03)

# Removes JS comments
cleanUp04 = cleanedUp03.split(' // Do not modify')
cleanedUp04 = "".join(cleanUp04)

# More date clean up, this should be higher up
cleanUp05 = cleanedUp04.split('"),')
cleanedUp05 = '",'.join(cleanUp05)

# Removes more random comments
cleanUp06 = cleanedUp05.split('//')
cleanedUp06 = "".join(cleanUp06)

# Removes white space
removeSpace = re.sub("\s\s+$"," ", cleanedUp06)

# Removes escaping chars
removeSpace2 = re.sub('\\"','"', removeSpace)

# Opens and over writes the EventsJSON file
target = open('../js/events.json','w')
target.write(removeSpace2 + "}")

file.close
'''
xxx = open('../js/events.json')
yyy = json.load(xxx)
'''