import os
path =  os.getcwd()
filenames = os.listdir(path)
c = 1
for filename in filenames:
   os.rename(filename, filename.replace(filename, "image_%d.jpg")%(c,))
   c += 1
   