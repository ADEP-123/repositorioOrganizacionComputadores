const memorias = /*html*/`
<h1>MEORIA PRINCIPAL Y MEMORIA SECUNDARIA</h1>
<img src="imgs/memoria.gif" class="imgPrens2">
<p class="description">Términos clave que describen dos tipos de almacenamiento utilizados en la gestión de datos dentro de un sistema informático.</h2>
<br>
<br>
<h2 class="subtittle">Memoria Principal (RAM)</h2>
<img src="imgs/ram.png" class="imgPrens">
<p class="description">La memoria principal, también llamada memoria RAM (<i>Random Access Memory</i>), es el tipo de almacenamiento temporal que un sistema utiliza para guardar datos y programas que están siendo usados activamente por el procesador. Se caracteriza por ser volátil, lo que significa que los datos almacenados en ella se pierden cuando se apaga el sistema.</p>
<br>
<h3 class="subtittle">Caracteristicas</h3>
<ul class="listdesc">
    <li><b>Volatil:</b> Pierde su contenido al apagar el sistema</li>
    <li><b>Acceso rápido:</b> La velocidad de acceso es mucho mayor que la de la memoria secundaria, lo que permite al procesador obtener los datos rápidamente. esto se debe a su cercania y tipo de conexion con la cpu</li>
    <li><b>Limitada en capacidad:</b> En comparación con la memoria secundaria, la RAM es más cara y generalmente tiene menos capacidad.</li>
    <li><b>Ciclo de vida corto de los datos:</b> Los datos solo se almacenan mientras se están utilizando activamente en procesos del sistema.</li>
</ul>
<br>
<h3 class="subtittle">Gestion de los datos</h3>
<ul class="listdesc">
    <li><b>Carga de programas:</b> Cuando ejecutas un programa, los datos y las instrucciones del programa se cargan desde la memoria secundaria (disco duro) a la memoria principal para que el procesador pueda acceder a ellos rápidamente.</li>
    <li><b>Administración por el Sistema Operativo (SO):</b> El SO gestiona la asignación y liberación de la RAM según las necesidades de los programas en ejecución.</li>
    <li><b>Caché:</b> Los sistemas más avanzados incluyen cachés en la memoria RAM, que son pequeñas áreas donde se guardan temporalmente datos que el procesador va a necesitar muy pronto</li>
</ul>
<br>
<br>
<h2 class="subtittle">Memoria Secundaria</h2>
<img src="imgs/memoriaSecundaria.jpg" class="imgPrens">
<p class="description">La memoria secundaria se refiere a los dispositivos de almacenamiento que guardan datos de forma permanente, incluso cuando el sistema está apagado. Ejemplos comunes incluyen los discos duros (HDD), las unidades de estado sólido (SSD), y otros dispositivos de almacenamiento externo, como memorias USB y discos ópticos.</p>
<h3 class="subtittle">Caracteristicas</h3>
<ul class="listdesc">
    <li><b>No Volatil:</b>Los datos no se pierden cuando se apaga el sistema.</li>
    <li><b>Mayor Capacidad:</b>La memoria secundaria tiene una capacidad mucho mayor que la memoria principal, lo que permite almacenar grandes cantidades de datos a largo plazo.</li>
    <li><b>Acceso más lento:</b>La velocidad de acceso es significativamente más lenta que la RAM, ya que el procesador no accede directamente a la memoria secundaria</li>
</ul>
<br>
<br>
<h2 class="subtittle">Diferencias clave entre memoria principal y secundaria</h2>
<br>
<div id="divTable">
    <table border="1" cellpadding="10" id="tablaMemorias">
    <thead>
    <tr>
        <th>Característica</th>
        <th>Memoria Principal (RAM)</th>
        <th>Memoria Secundaria (Almacenamiento)</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Volatilidad</td>
        <td>Volátil, se borra al apagar</td>
        <td>No volátil, retiene datos apagado</td>
    </tr>
    <tr>
        <td>Velocidad</td>
        <td>Muy rápida</td>
        <td>Más lenta</td>
    </tr>
    <tr>
        <td>Capacidad</td>
        <td>Limitada</td>
        <td>Mucho mayor</td>
    </tr>
    <tr>
        <td>Costo por unidad</td>
        <td>Más cara</td>
        <td>Más económica</td>
    </tr>
    <tr>
        <td>Propósito</td>
        <td>Uso temporal y ejecución rápida</td>
        <td>Almacenamiento permanente</td>
    </tr>
    <tr>
        <td>Acceso</td>
        <td>Acceso directo por la CPU</td>
        <td>Acceso indirecto (vía RAM y CPU)</td>
    </tr>
    </tbody>
    </table>
</div>
<br>
<h2 class="subtittle">Influencia de las memorias en el rendimiento del sistema</h2>
<ul class="listdesc">
    <li><b>Equilibrio entre RAM y almacenamiento:</b>Un sistema necesita una cantidad suficiente de ambas memorias para funcionar de manera óptima. Si la RAM es insuficiente, el sistema recurrirá a la memoria secundaria (memoria virtual), lo que ralentiza significativamente el rendimiento</li>
    <li><b>Velocidad del almacenamiento secundario:</b>Un disco SSD puede mejorar enormemente el rendimiento del sistema en comparación con un disco HDD, especialmente en el tiempo de carga de programas y archivos grandes.</li>
    <li><b>Acceso rápido a los datos:</b>Cuanto más rápido pueda el procesador acceder a los datos que necesita (a través de la RAM), más rápido será el rendimiento general del sistema. Es por esto que tener suficiente memoria principal es crucial para aplicaciones que demandan muchos recursos, como videojuegos, edición de video, o simulaciones complejas.</li>
    <li><b>Carga de programas:</b>La RAM actúa como un puente entre la memoria secundaria y el procesador. Si la RAM es rápida y suficiente, los programas se cargan y ejecutan más eficientemente, mejorando la experiencia del usuario.</li>
</ul>
`;
export default memorias