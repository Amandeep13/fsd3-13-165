c=create
R=Retrieve 
U=update or edit
D=delete or remove

#Fs (File system) Node JS's module

it directs connect with client OS rater than browser 
 ##Major rast ofFS module
 Reading and writing files 
 -readfiles()
 -writeFile()
  -appendFile()
  -Directory management 
  -mkdir()
  -rmdir()
  -readdir()
  -Metadata/Information
  -stat()
  -lstat()
  =fsstat()
  -Watching for change
  -watch()
  -watchFile()
  -unwatchFile()
  -streaming large File
  -crateReadStream()
    -cratewriteStream()
    -File Operation
    

##CRUD OPERATION 
create/Insert,Read/Retrieve,Update,Delete
##items
each item (id,name,price,qty)
##operations
1.update quantiuty front cart
2.Add to cart
3.slow cart
4.resume from cart
5.checkout
NOTe:all items will be stored in hdd,so after termination of program we can retrive cart details

##Reqquired file
1.crud.js -it contain all the methods and entry points
2.products.json-it contains the product details in array form