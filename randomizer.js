var foodArray = 
[ 'Ayam bakar', 'Ayam bumbu rujak', 'Ayam goreng', 'Ayam Kalasan', 'Ayam Taliwang', 
'Bakwan Malang', 'Bakso', 'Bebek goreng', 'Betutu', 'Bubur ayam', 'Bubur Manado (Tinutuan)', 
'Cakalang', 'Cap cai', 'Daun ubi tumbuk', 'Empal gentong', 'Empal gepuk', 'Gado-gado', 'Gudeg', 
'Gulai', 'Iga penyet', 'Ikan asin', 'Ikan bakar', 'Ikan goreng', 'Indomie', 'Karedok', 'Ketoprak', 
'Ketupat sayur', 'Krechek', 'Krengsengan', 'Kwetiau ayam', 'Kwetiau goreng', 'Laksa Banjar', 
'Laksa Bogor', 'Laksa Jakarta', 'Lawar', 'Lontong Cap Go Meh', 'Lontong sayur', 'Mie aceh', 
'Mie ayam', 'Mie celor', 'Mie goreng', 'Mie kangkung', 'Mie kocok', 'Mie koclok', 'Mie rebus', 
'Mie yamin', 'Nasi campur (Nasi Rames)', 'Nasi goreng', 'Nasi kuning', 'Nasi liwet', 'Nasi Padang', 
'Nasi pecel', 'Nasi tim', 'Nasi uduk', 'Nasi ulam', 'Oncom', 'Opor Ayam', 'Pallubasa', 'Paniki', 
'Papeda', 'Pecel Lele', 'Pempek', 'Pepes', 'Perkedel Jagung', 'Plecing kangkung', 'Rawon', 'Rendang', 
'Rica-rica', 'Roti Chanai', 'Saksang', 'Sambal goreng teri', 'Sate Ayam', 'Sate Kambing', 'Sate lilit', 
'Sayur asem', 'Sayur lodeh', 'Sayur Nganten', 'Seblak', 'Steak', 'Sushi', 'Selat solo', 'Semur', 'Sop buntut', 'Sop', 
'Soto Ayam', 'Soto Daging', 'Sroto', 'Coto', 'Tekwan', 'Tauge goreng', 'Telur pindang', 'Tempe', 
'Tempoyak ikan patin', 'Tinutuan or Bubur Manado', 'Tongseng', 'Tumis Kangkung', 'Tumpang', 'Tumpeng', 'Woku'];

function generateRandomFood(){
	var foodString = foodArray[Math.floor(Math.random() * foodArray.length)];
	document.getElementById("resultRandom").innerHTML = foodString;
}