f = open('../../js/main.js', 'r')
file_contents = f.read()
import re
# removes front part of object
a = file_contents.partition('var events = [')[2]

# removes back part of object
b = a.partition(']')[0]

#removes all spacing
c = re.sub('[\s+]', '', b)


e = re.split('"special-events/""(.*?)","eventSocial":"', c)

h = len(e)

def makePage(url) :
	w = open('../../special-events/'+url,'w')

	message = """<html>
	<head></head>
	<body><p>Hello World!</p></body>
	</html>"""

	w.write(message)

liszt = (i for i in range(1,h) if i%2!=0)
for i in liszt:
    makePage(e[i])


f.close()
