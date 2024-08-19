const noticias = [
    { titulo: "Economía global crece un 3%", fecha: "2024-08-16", resumen: "La economía mundial experimenta un crecimiento inesperado del 3% en el segundo trimestre.", image:"https://picsum.photos/200/300" },
    { titulo: "Aumento de las tasas de interés por parte de la Reserva Federal", fecha: "2024-08-15", resumen: "La Reserva Federal decide aumentar las tasas de interés en un 0.5% para controlar la inflación.", image:"https://picsum.photos/200/300" },
    { titulo: "Fusión entre dos gigantes bancarios", fecha: "2024-08-14", resumen: "Dos de los mayores bancos en Europa anuncian su fusión, creando el banco más grande de la región.", image:"https://picsum.photos/200/300" },
    { titulo: "El dólar alcanza un nuevo máximo frente al euro", fecha: "2024-08-13", resumen: "El dólar estadounidense sigue fortaleciéndose y alcanza un nuevo máximo histórico frente al euro.", image:"https://picsum.photos/200/300" },
    { titulo: "Caída del mercado de valores por temores de recesión", fecha: "2024-08-12", resumen: "Los principales índices bursátiles caen ante el temor de una posible recesión global.", image:"https://picsum.photos/200/300" },
    { titulo: "Bitcoin supera los $50,000 nuevamente", fecha: "2024-08-11", resumen: "El precio de Bitcoin vuelve a superar los $50,000 tras un renovado interés en las criptomonedas.", image:"https://picsum.photos/200/300" },
    { titulo: "Informe trimestral de ganancias de Apple sorprende al mercado", fecha: "2024-08-10", resumen: "Apple reporta ganancias mayores de lo esperado en su informe trimestral, impulsando sus acciones.", image:"https://picsum.photos/200/300" },
    { titulo: "Desaceleración en el mercado inmobiliario", fecha: "2024-08-09", resumen: "El mercado inmobiliario muestra signos de desaceleración debido al aumento de las tasas de interés.", image:"https://picsum.photos/200/300" },
    { titulo: "El oro alcanza su nivel más alto en 5 años", fecha: "2024-08-08", resumen: "El precio del oro sube a su nivel más alto en cinco años debido a la incertidumbre económica.", image:"https://picsum.photos/200/300" },
    { titulo: "Análisis de la deuda pública mundial", fecha: "2024-08-07", resumen: "Un nuevo informe revela que la deuda pública mundial ha alcanzado un nivel récord.", image:"https://picsum.photos/200/300" },
    { titulo: "Baja en el precio del petróleo afecta a los mercados emergentes", fecha: "2024-08-06", resumen: "La caída en los precios del petróleo impacta negativamente las economías de los mercados emergentes.", image:"https://picsum.photos/200/300" },
    { titulo: "El yen se debilita frente al dólar", fecha: "2024-08-05", resumen: "El yen japonés se debilita significativamente frente al dólar en las últimas semanas.", image:"https://picsum.photos/200/300" },
    { titulo: "China reporta crecimiento económico más bajo en décadas", fecha: "2024-08-04", resumen: "El crecimiento económico de China se desacelera, alcanzando su nivel más bajo en décadas.", image:"https://picsum.photos/200/300" },
    { titulo: "Mercado de bonos en alza tras anuncios de estímulos", fecha: "2024-08-03", resumen: "El mercado de bonos sube después de que varios gobiernos anuncian nuevos paquetes de estímulo.", image:"https://picsum.photos/200/300" },
    { titulo: "Aumento del déficit comercial de Estados Unidos", fecha: "2024-08-02", resumen: "El déficit comercial de Estados Unidos aumenta debido a la disminución de las exportaciones.", image:"https://picsum.photos/200/300" },
    { titulo: "La inflación en Europa alcanza el 5%", fecha: "2024-08-01", resumen: "La inflación en Europa sigue en aumento, alcanzando el 5% por primera vez en 10 años.", image:"https://picsum.photos/200/300" },
    { titulo: "Los mercados financieros se estabilizan tras semanas de volatilidad", fecha: "2024-07-31", resumen: "Los mercados financieros muestran signos de estabilización después de semanas de alta volatilidad.", image:"https://picsum.photos/200/300" },
    { titulo: "El Banco Central Europeo anuncia nuevos estímulos", fecha: "2024-07-30", resumen: "El BCE introduce nuevas medidas de estímulo para apoyar la economía de la eurozona.", image:"https://picsum.photos/200/300" },
    { titulo: "El rublo ruso se desploma frente al dólar", fecha: "2024-07-29", resumen: "El rublo ruso cae a mínimos históricos frente al dólar debido a sanciones internacionales.", image:"https://picsum.photos/200/300" },
    { titulo: "Aumentan las inversiones en energías renovables", fecha: "2024-07-28", resumen: "Las inversiones globales en energías renovables alcanzan un nuevo récord, impulsadas por políticas verdes.", image:"https://picsum.photos/200/300" }
];

const container = document.getElementById("contenedorNews")
const containerDolar = document.getElementById("contenedorCotizaciones")

noticias.forEach((noticia) => {
    const noticiaDiv = document.createElement("div")
    const titulo = document.createElement("h2")
    const content = document.createElement("p")
    const image = document.createElement("img")
    const fecha = document.createElement("p")

    noticiaDiv.classList.add("card")
    fecha.classList.add("date")
    
    image.src = noticia.image
    titulo.textContent = noticia.titulo
    content.textContent = noticia.resumen
    fecha.textContent = noticia.fecha

    noticiaDiv.appendChild(titulo)
    noticiaDiv.appendChild(content)
    noticiaDiv.appendChild(image)
    noticiaDiv.appendChild(fecha)

    container.appendChild(noticiaDiv)
})

fetch("https://dolarapi.com/v1/dolares")
    .then(response => response.json())
    .then(data => {
        const dolarTypes = data;
        const dolarDiv = document.createElement("div");
        dolarDiv.innerHTML = `
            <hr>
            <h3>Dolar Oficial</h3>
            <h4>Compra: $${JSON.stringify(dolarTypes[0].compra)}</h4>
            <h4>Venta: $${JSON.stringify(dolarTypes[0].venta)}</h4>
            <hr>
            <h3>Dolar Blue</h3>
            <h4>Compra: $${JSON.stringify(dolarTypes[1].compra)}</h4>
            <h4>Venta: $${JSON.stringify(dolarTypes[1].venta)}</h4>
            <hr>
            <h3>Dolar Cripto</h3>
            <h4>Compra: $${JSON.stringify(dolarTypes[5].compra)}</h4>
            <h4>Venta: $${JSON.stringify(dolarTypes[5].venta)}</h4>
            <hr>
        `;
        containerDolar.appendChild(dolarDiv);
    })
    .catch(error => console.error('Error fetching data:', error));