const abacus = /*html*/`
<h1>ESTRUCTURA Y FUNCIONAMIENTO DE LA MAQUINA ABACUS</h1>
<img src="imgs/abacusModeloElemental.png" class="imgPrens"> 
<p class="description">Diseño de procesadores que destaca por su simplicidad y eficiencia en la realización de operaciones básicas de cómputo.</p>
<h2>Caracteristicas Principales</h2>
<ul class="listdesc">
    <li>Es una maquina en una sola direccion</li>
    <li>El acumulador es un registro particular que alberga el promer operando y el resultado de las operaciones. todas las operaciones se realizan "contra" el acumulador. El acunulador realiza las operaciones aritmeticas, logicas y de comparacion</li>
    <li>El ciclo de memoria equivale a dos impulsos del reloj</li>
    <li>Su simplicidad y eficiencia hacen que esta arquitectura sea útil en dispositivos embebidos o de baja potencia, donde el costo y la eficiencia energética son prioridades.</li>
    <li><b>UAL:</b>Unidad encargada de realizar las operaciones elementales de tipo aritmetico (sumas y restas) y logicas (comparaciones, NOT, XOR, etc)</li>
    <li><b>Bus de datos:</b>Sistema digital que transporta datos entre las distintas pastes (no almacena, solo transmite)</li>
</ul>
`;
export default abacus