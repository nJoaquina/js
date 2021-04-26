function ordenAlfabetico(){
    var  words = ['perro', 'gato', 'casa', 
    'árbol', 'nube', 'día', 'noche', 
    'zanahoria', 'babuino']
words.sort((a, b) => a.localeCompare(b)); // ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
}
//para que sea inversio hacer b.localeCompare(a)