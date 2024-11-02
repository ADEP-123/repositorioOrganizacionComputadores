const vonNeumann = /*html*/`
<h1>ARQUITECTURA DE VON NEUMANN</h1>
<img src="imgs/vonNewmann.png" class="imgPrens"> 
<p class="description">La arquitectura de Von Neumann se basa en el concepto de que el programa y los datos se almacenan en la misma memoria.Esto permite que las instrucciones se traten como datos y viceversa.</h2>
<ul class="listdesc">
    <li>La <b>CPU</b> esta formada por 3 componentes:
        <ul>
            <li><b>Unidad de control:</b> Gestiona la secuencia de operaciones, enviando señales para que los datos se muevan entre los componentes</li>
            <li><b>Unidad aritmetica logica (UAL)</b> Realiza operaciones aritmeticas y logicas sobre los datos</li>
            <li><b>Registros</b> Son pequeñas areas de almacenamiento dentro de la CPU que permiten el acceso rapido a los datos necesarios para las operaciones inmediatas</li>
        </ul>
    </li>
    <li>En la arquitectura de Von Neumann, los datos y las instrucciones se almacenan en la misma memoria, lo que simplifica el diseño del hardware pero introduce el llamado <u>"cuello de botella de Von Neumann"</u>, ya que la CPU solo puede acceder a una instrucción o dato a la vez.</li>
    <li>La arquitectura de Von Neumann es el modelo utilizado por la mayoría de las computadoras modernas, lo que la convierte en la base fundamental de la informática</li>
</ul>
`;
export default vonNeumann