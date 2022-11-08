export function add (a,b) {
    return a+b
}

export function Header (title, color='red', size='45px') {
    return ' <header style="font-size: '+size+'; background-color: '+color+';"> '+ title+'</header>'
}


export function Button (title, color='red', size='45px') {
    return ' <button style="font-size: '+size+'; background-color: '+color+';"> '+ title+'</button>'
}