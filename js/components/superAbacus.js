const sperAbacus = /*html*/`
<h1>ESTRUCTURA Y FUNCIONAMIENTO DE LA MAQUINA SUPER ABACUS</h1>
<img src="imgs/superAbacus.png" class="imgPrens"> 
<p class="description">Se basa en los principios de simplicidad y eficiencia que caracterizan a la arquitectura Abacus, pero introduce algunas mejoras y capacidades adicionales para hacerla más versátil y permitir experimentos con características avanzadas de procesamiento.</h2>
<ul class="listdesc">
    <li>Es una maquina en dos direcciones</li>
    <li>Posee un conjunto de registros generales, utilizables para ritmetica o direccionamiento (como registros indice)</li>
    <li>El ciclo de memoria equivale a cuatro impulsos del reloj</li>
    <li>No tiene RPI, se le asigna esa funcion al registro 0</li>
    <li>Las opreciones pueden ser entre registros, entre registro y dato inmediato, o entre registro y dato en memoria</li>
</ul>
`;
export default sperAbacus