#! /usr/bin/env python
import os
import re
import shutil
from os.path import splitext

SOURCE = os.getcwd() + "/"
TARGET = os.getcwd() + "/_site/"

if not os.path.exists(TARGET):
    os.makedirs(TARGET)

regex = re.compile(r'<!--#include virtual="([^"]*)" -->')
file_contents = lambda filename: open(filename).read()
match_ssi = lambda match: ssi(file_contents('%s%s' % (SOURCE, match.group(1))))
ssi = lambda txt: regex.sub(match_ssi, txt)


def get_extension(filename):
    """
    >>> get_extension("index.shtml")
    'shtml'
    >>> get_extension("noextension")
    ''
    """
    return splitext(filename)[1].lower()[1:]


def change_extension(filename, new_extension):
    """
    >>> change_extension("index.shtml", "html")
    'index.html'
    >>> change_extension("something.jpg", "png")
    'something.png'
    >>> change_extension("noextension", "txt")
    'noextension.txt'
    """
    return "%s.%s" % (splitext(filename)[0].lower()[:], new_extension)


def process_file(filename):
    print("Processing %s" % filename)
    content = file_contents(filename)
    return ssi(content).replace('.shtml', '.html')

print("Compiling site.")
print("Source: %s" % SOURCE)
print("Target: %s" % TARGET)

for root, dirs, files in os.walk(SOURCE):

    if '.git' in root:
        continue

    for filename in files:
        name = os.path.join(root, filename)

        relative_path = name.replace(SOURCE, "")
        new_filename = os.path.join(TARGET, relative_path)
        new_path = os.path.dirname(new_filename)

        if not os.path.exists(new_path):
            os.makedirs(new_path)

        print("Writing %s" % new_filename)
        extension = get_extension(name)
        if extension in ["shtml", ]:
            # we need to do some processing on this extension type
            new_content = process_file(name)
            new_filename = change_extension(new_filename, "html")
            f = open(new_filename, 'w')
            f.write(new_content)
            f.close()
        else:
            # otherwise we just do a straight copy
            try:
                shutil.copy(name, new_filename)
            except:
                import ipdb; ipdb.set_trace()
