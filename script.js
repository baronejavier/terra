const construcciones = [
    {
        nombre: "Cabaña de Tronco de Eucalipto",
        descripcion: `Cabaña de tronco. Pilote de cemento, tirantes 2x6, piso flotante de machimbre.
        Construcción desde la base.
Frente inglés o cabañero de 1 pulgada. 
Primera calidad.
Baño con ladrillo revocado y cerámica. Todos los artefactos.
Cocina, Sala comedor.
Cielorraso a la vista.
Techo de chapa y aislantes térmicos.
Puertas de madera.
Ventanas 1*1 madera/aluminio. 
Instalación de luz completa. 
Instalación de agua fría y caliente.

`,
        precioPorMetroCuadrado: 520,
        imagenes: [
            "img/tronco1.jpg",
            "img/tronco2.jpg",
            "img/tronco3.jpg"
        ]
    },
    {
        nombre: "Cabaña de Eucalipto",
        descripcion: `Base: Pilotes de hormigon de cemento, hierros , ripio y arena.
 Cabañero Machimbre de Pino o Eucalipto.
Frente inglés o cabañero de 1 pulgada. 
Primera calidad.
Estructura de la casa de tirantes de 2x3/2x4/2x5.
Baño: piso de madera con alfombra de vinilo y pared de PVC hasta altura de 2.40m.
Cocina, Sala comedor.
Cielorraso a la vista.
Techo de chapa y aislantes térmicos.
Puertas de madera.
Ventanas 1x1 madera/aluminio. 
Instalación de luz completa. 
Instalación de agua fría y caliente.

`,
        precioPorMetroCuadrado: 520,
        imagenes: [
            "img/cabaña eucalipto1.jpg"
        ]
    },

    {
        nombre: "Cabaña de Quebracho Blanco",
        descripcion: `

        
Quebracho blanco base de hormigón o durmientes de quebracho. Estructura de pared de 20cm de ancho, 10cm de espesor y 2.70-2.40m de largo. 
Techo a la vista recubierto de machimbre aislante y chapa de cinc. Baño con ladrillos y reboque, cerámica, inodoro con mochila de descarga, bided. 
Mesada con pileta lavatorio, canillas frio calor, ducha con perillas frio calor. Ventana a elección del cliente de madera o aluminio.

`,
        precioPorMetroCuadrado: 520,
        imagenes: [
            "img/quebracho1.jpg"
        ]
    },
];

const listaConstruccion = document.getElementById("lista-construccion");

function mostrarConstrucciones() {
    listaConstruccion.innerHTML = "";
    construcciones.forEach((construccion, index) => {
        const construccionDiv = document.createElement("div");
        construccionDiv.classList.add("construccion");

        // Crear un contenedor para las imágenes
        const imagenesDiv = document.createElement("div");
        imagenesDiv.classList.add("imagenes");
        construccion.imagenes.forEach(imgSrc => {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = construccion.nombre;
            img.style.width = "100%"; // Ajusta el estilo según sea necesario
            imagenesDiv.appendChild(img);
        });

        construccionDiv.innerHTML = `
            <h3>${construccion.nombre}</h3>
            <p>${construccion.descripcion}</p>
            <p>Precio por m²: U$D ${construccion.precioPorMetroCuadrado}</p>
            <button id="btnWhatsappConstruccion-${index}" class="btn-whatsapp">Solicitar presupuesto</button>
        `;

        // Agregar el contenedor de imágenes a la construcción
        construccionDiv.appendChild(imagenesDiv);

        // Agregar la construcción al contenedor principal
        listaConstruccion.appendChild(construccionDiv);

        // Añadir evento al botón de WhatsApp
        const btnWhatsapp = document.getElementById(`btnWhatsappConstruccion-${index}`);
        btnWhatsapp.addEventListener('click', () => {
            const mensaje = `Hola, quisiera presupuesto de ${construccion.nombre}`;
            const telefono = '3751591679'; // Número de teléfono de destino
            const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
            window.open(url);
        });
    });
}

// Mostrar todas las construcciones al cargar la página
mostrarConstrucciones();
