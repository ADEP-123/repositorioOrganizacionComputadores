const etapasCicloProcesador = /*html*/`
<h1>ETAPAS DEL CICLO DE INSTRUCCIÓN EN EL PROCESADOR</h1>
<img src="imgs/procesador.gif" class="imgPrens2">
<p class="description">El ciclo de instrucción es el proceso que realiza el procesador para ejecutar instrucciones en un programa. Este ciclo incluye varias etapas clave que permiten al procesador coordinar la ejecución de operaciones y realizar cálculos de manera eficiente.</p>
<br>
<br>
<h2 class="subtittle">1. Búsqueda de Instrucción (Fetch)</h2>
<p class="description">Durante la fase de búsqueda, el procesador localiza la siguiente instrucción en la memoria principal (RAM) utilizando el contador de programa (<i>Program Counter</i> o PC). La instrucción es trasladada al registro de instrucciones para ser decodificada en las etapas posteriores.</p>
<h3 class="subtittle">Detalles</h3>
<ul class="listdesc">
    <li><b>Contador de Programa (PC):</b> Mantiene la dirección de la siguiente instrucción a ejecutar.</li>
    <li><b>Memoria RAM:</b> Donde se almacenan las instrucciones que deben ser ejecutadas por el procesador.</li>
</ul>
<br>
<h2 class="subtittle">2. Decodificación de Instrucción (Decode)</h2>
<p class="description">Una vez que la instrucción ha sido cargada, el procesador debe interpretarla. Esta fase traduce la instrucción en señales que determinan las operaciones a realizar y los registros involucrados.</p>
<h3 class="subtittle">Detalles</h3>
<ul class="listdesc">
    <li><b>Unidad de Decodificación:</b> Interpreta la instrucción y genera las señales de control necesarias para la operación.</li>
    <li><b>Registros:</b> La decodificación define qué registros se usarán para almacenar los datos o resultados intermedios.</li>
</ul>
<br>
<h2 class="subtittle">3. Ejecución (Execute)</h2>
<p class="description">En esta fase, el procesador lleva a cabo la operación especificada por la instrucción. Dependiendo del tipo de instrucción, se pueden realizar cálculos aritméticos, lógicos o transferencias de datos entre registros.</p>
<h3 class="subtittle">Detalles</h3>
<ul class="listdesc">
    <li><b>Unidad Aritmético-Lógica (ALU):</b> Realiza las operaciones aritméticas y lógicas.</li>
    <li><b>Operaciones Típicas:</b> Suma, resta, AND, OR, XOR, desplazamientos de bits, entre otras.</li>
    <li><b>Transferencia de datos:</b> En algunos casos, se trasladan datos entre la memoria y los registros del procesador.</li>
</ul>
<br>
<h2 class="subtittle">4. Acceso a Memoria (Memory Access)</h2>
<p class="description">Si la instrucción involucra leer o escribir en la memoria, esta fase accede a la memoria principal para obtener los datos requeridos o almacenar los resultados de la ejecución.</p>
<h3 class="subtittle">Detalles</h3>
<ul class="listdesc">
    <li><b>Lectura/Escritura:</b> Se leen datos desde la memoria o se escriben resultados, dependiendo de la instrucción.</li>
    <li><b>Acceso a Caché:</b> Algunos sistemas utilizan la memoria caché para acelerar el acceso a datos frecuentemente usados.</li>
</ul>
<br>
<h2 class="subtittle">5. Escritura de Resultados (Writeback)</h2>
<p class="description">En la fase final del ciclo de instrucción, los resultados de la operación se escriben de vuelta en los registros o la memoria principal, según lo que dictaba la instrucción. Este paso garantiza que los resultados estén disponibles para las siguientes instrucciones.</p>
<h3 class="subtittle">Detalles</h3>
<ul class="listdesc">
    <li><b>Actualización de Registros:</b> Los resultados de las operaciones son almacenados en los registros designados.</li>
    <li><b>Siguiente Instrucción:</b> El contador de programa se actualiza para apuntar a la próxima instrucción, iniciando así un nuevo ciclo.</li>
</ul>
<br>
<h2 class="subtittle">Coordinación entre las Fases</h2>
<ul class="listdesc">
    <li><b>Pipelining:</b> Los procesadores modernos pueden superponer múltiples etapas del ciclo de instrucción para mejorar la eficiencia. Esto significa que, mientras una instrucción está en la fase de ejecución, otra puede estar en la fase de decodificación o búsqueda.</li>
    <li><b>Control del Sistema:</b> Las señales de control generadas en la fase de decodificación aseguran que las operaciones ocurran en el orden correcto y que los recursos estén correctamente asignados.</li>
    <li><b>Interrupciones:</b> Si el procesador recibe una interrupción (como la llegada de un dato crítico), puede suspender temporalmente el ciclo para atender esa necesidad antes de reanudar la ejecución normal.</li>
</ul>
`;

export default etapasCicloProcesador;
