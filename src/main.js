const videos = [
    {
        model: "1",
        id: "video-1",
        title: "¿Qué es el Ibuprofeno y cómo funciona?",
        description: "Aprende qué es el ibuprofeno, un medicamento antiinflamatorio no esteroideo (AINE), y cómo ayuda a aliviar el dolor, reducir la inflamación y controlar la fiebre. Conoce su mecanismo de acción y su uso generalizado.",
        topics: [
            "Medicamento antiinflamatorio no esteroideo (AINE)",
            "Reducción del dolor, inflamación y fiebre",
            "Mecanismo de acción del ibuprofeno"
        ]
    },
    {
        model: "1",
        id: "video-2",
        title: "Historia y desarrollo del Ibuprofeno",
        description: "Descubre el origen del ibuprofeno. Desde su desarrollo en los años 60 hasta su aprobación y uso mundial como uno de los AINEs más populares. Conoce cómo ha evolucionado este medicamento a lo largo de las décadas.",
        topics: [
            "Origen del ibuprofeno",
            "Desarrollo en los años 60",
            "Aprobación y uso mundial"
        ]
    },
    {
        model: "1",
        id: "video-3",
        title: "¿Qué dosis de ibuprofeno es segura?",
        description: "Conoce las dosis recomendadas de ibuprofeno y por qué las dosis altas pueden aumentar el riesgo cardiovascular. También, descubre por qué el ibuprofeno 600 mg solo debe tomarse bajo prescripción médica.",
        topics: [
            "Dosis recomendadas de ibuprofeno",
            "Riesgos de dosis altas",
            "Ibuprofeno 600 mg bajo prescripción médica"
        ]
    },
    {
        model: "1",
        id: "video-4",
        title: "Efectos secundarios y seguridad del Ibuprofeno",
        description: "Aprende sobre los posibles efectos secundarios del ibuprofeno, como el malestar gástrico, y cómo reducir el riesgo de úlceras gástricas. También, descubre las ventajas del ibuprofeno frente a otros AINEs en términos de seguridad.",
        topics: [
            "Efectos secundarios comunes del ibuprofeno",
            "Riesgo de malestar gástrico",
            "Ventajas frente a otros AINEs"
        ]
    },
    {
        model: "2",
        id: "video-5",
        title: "¿Cómo Fenodol Max alivia el dolor?",
        description: "Conoce cómo el ibuprofeno 400 mg (Fenodol Max) es eficaz para aliviar diferentes tipos de dolor, como dolores de cabeza, musculares, articulares y dolor menstrual, sin los riesgos de dosis más altas.",
        topics: [
            "Eficacia del ibuprofeno 400 mg",
            "Alivio del dolor de cabeza, muscular, articular y menstrual",
            "Comparación con dosis más altas"
        ]
    },
    {
        model: "2",
        id: "video-6",
        title: "¿Qué dosis de ibuprofeno es la más efectiva?",
        description: "Explora los resultados de los estudios recientes que muestran que la dosis de 400 mg de ibuprofeno es tan eficaz como dosis más altas, pero con un menor riesgo de efectos secundarios.",
        topics: [
            "Eficacia de la dosis de 400 mg",
            "Estudios sobre dosis de ibuprofeno",
            "Menor riesgo con dosis de 400 mg"
        ]
    },
    {
        model: "2",
        id: "video-7",
        title: "Contraindicaciones del Ibuprofeno 400 mg",
        description: "Aprende qué pacientes deben evitar tomar dosis altas de ibuprofeno. Conoce los riesgos para personas con problemas cardiovasculares graves y cómo Fenodol Max puede ser una opción más segura para aliviar el dolor.",
        topics: [
            "Contraindicaciones para pacientes con problemas cardiovasculares",
            "Riesgos de dosis altas de ibuprofeno",
            "Fenodol Max como opción más segura"
        ]
    },
    {
        model: "2",
        id: "video-8",
        title: "Usos más comunes de Fenodol Max",
        description: "Descubre los cinco usos más importantes de Fenodol Max (ibuprofeno 400 mg): dolor de cabeza, dolor menstrual, dolor dental, dolores musculares y articulares, y fiebre. Aprende cuándo es mejor utilizarlo para un alivio efectivo.",
        topics: [
            "Usos comunes de Fenodol Max",
            "Dolor de cabeza, menstrual, dental y muscular",
            "Reducción de fiebre"
        ]
    },
    {
        model: "3",
        id: "video-9",
        title: "¿Quién puede tomar Ibuprofeno de forma segura?",
        description: "Conoce quiénes pueden consumir ibuprofeno de manera segura, como adultos y adolescentes mayores de 12 años. Además, aprende cuándo es necesario consultar al médico antes de su uso.",
        topics: [
            "Quién puede tomar ibuprofeno",
            "Consultas médicas antes de su uso",
            "Consumo seguro para adultos y adolescentes"
        ]
    },
    {
        model: "3",
        id: "video-10",
        title: "Dosis recomendada de Fenodol Max (Ibuprofeno 400 mg)",
        description: "Descubre la dosificación recomendada de Fenodol Max, cómo y cuándo tomarlo, y las precauciones a tener en cuenta para evitar un uso excesivo o incorrecto del medicamento.",
        topics: [
            "Dosificación recomendada de Fenodol Max",
            "Cómo tomar el medicamento de manera segura",
            "Precauciones y recomendaciones"
        ]
    },
    {
        model: "3",
        id: "video-11",
        title: "Consejos para prevenir y aliviar dolores comunes",
        description: "Conoce algunos consejos prácticos para prevenir dolores comunes como el dolor de cabeza, dolor menstrual y dolor muscular. Aprende también hábitos saludables que pueden mejorar tu bienestar general.",
        topics: [
            "Prevención de dolores comunes",
            "Consejos para el dolor de cabeza, menstrual y muscular",
            "Hábitos saludables"
        ]
    },
    {
        model: "3",
        id: "video-12",
        title: "¿Qué hacer si tienes antecedentes médicos?",
        description: "Aprende qué precauciones tomar si tienes antecedentes de problemas gástricos, renales, hepáticos o cardiovasculares. Descubre por qué es importante consultar al médico antes de tomar ibuprofeno en estos casos.",
        topics: [
            "Precauciones en caso de antecedentes médicos",
            "Problemas gástricos, renales, hepáticos y cardiovasculares",
            "Importancia de consultar al médico"
        ]
    },
    {
        model: "4",
        id: "video-13",
        title: "¿Qué hacer si olvidas una dosis de Ibuprofeno?",
        description: "Si olvidas una dosis de ibuprofeno, aprende qué hacer para seguir tu tratamiento de manera segura. También descubre cuándo es recomendable omitir la dosis olvidada y continuar con el horario habitual.",
        topics: [
            "Qué hacer si olvidas una dosis",
            "Omitir dosis olvidada",
            "Tratamiento de manera segura"
        ]
    },
    {
        model: "4",
        id: "video-14",
        title: "¿Se puede tomar Ibuprofeno con el estómago vacío?",
        description: "Aprende por qué no es recomendable tomar ibuprofeno con el estómago vacío. Descubre cómo proteger tu estómago y evitar molestias gástricas al tomar este medicamento.",
        topics: [
            "Tomar ibuprofeno con el estómago vacío",
            "Riesgos de irritación gástrica",
            "Cómo proteger tu estómago"
        ]
    },
    {
        model: "4",
        id: "video-15",
        title: "¿Es seguro tomar Ibuprofeno con alcohol?",
        description: "Conoce los riesgos de mezclar ibuprofeno con alcohol y por qué es importante evitar esta combinación para prevenir daños gastrointestinales o hepáticos.",
        topics: [
            "Mezclar ibuprofeno con alcohol",
            "Riesgos de daño gastrointestinal y hepático",
            "Importancia de evitar esta combinación"
        ]
    },
    {
        model: "4",
        id: "video-16",
        title: "¿Qué hacer si se tiene hipertensión y se necesita tomar Ibuprofeno?",
        description: "Si tienes hipertensión, es crucial que consultes con un médico antes de tomar ibuprofeno. Conoce los riesgos de los AINEs en personas con presión arterial alta y las alternativas más seguras para el control del dolor.",
        topics: [
            "Riesgos de AINEs en personas con hipertensión",
            "Consultar al médico antes de tomar ibuprofeno",
            "Alternativas seguras para el control del dolor"
        ]
    }
];

const quiz1 = [
    {
        question: "¿Qué es el ibuprofeno y cómo actúa?",
        options: [
            { text: "Antibiótico contra infecciones.", score: 0 },
            { text: "AINE que reduce dolor, inflamación y fiebre.", score: 20, correct: true },
            { text: "Cura la gripe instantáneamente.", score: 0 }
        ]
    },
    {
        question: "¿Qué dolores trata el ibuprofeno 400 mg?",
        options: [
            { text: "Dolor menstrual", score: 0 },
            { text: "Dolor de cabeza", score: 20, correct: true },
            { text: "Elimina cualquier tipo de alergia.", score: 0 }
        ]
    },
    {
        question: "¿Quiénes deben evitar el ibuprofeno?",
        options: [
            { text: "Con problemas gástricos.", score: 20, correct: true },
            { text: "Personas que comen frutas.", score: 0 },
            { text: "Quienes tienen cabello rizado.", score: 0 }
        ]
    },
    {
        question: "¿Por qué el ibuprofeno es de venta libre?",
        options: [
            { text: "Porque no tiene efectos secundarios.", score: 0 },
            { text: "Porque está aprobado en dosis bajas.", score: 20, correct: true },
            { text: "Porque se usa como suplemento alimenticio.", score: 0 }
        ]
    },
    {
        question: "¿Cuánto tiempo entre dosis de ibuprofeno?",
        options: [
            { text: "Al menos 2 horas.", score: 0 },
            { text: "Al menos 6 horas.", score: 20, correct: true },
            { text: "Cada media hora.", score: 0 }
        ]
    }
];

const quiz2 = [
    {
        question: "¿Por qué tomar ibuprofeno con alimentos?",
        options: [
            { text: "Para mejorar la absorción.", score: 0 },
            { text: "Para reducir irritación gástrica.", score: 20, correct: true },
            { text: "Para convertirlo en un probiótico.", score: 0 }
        ]
    },
    {
        question: "¿Dosis máxima diaria de ibuprofeno 400 mg?",
        options: [
            { text: "1600 mg (4 cápsulas)", score: 0 },
            { text: "1200 mg (3 cápsulas)", score: 20, correct: true },
            { text: "Todo el frasco.", score: 0 }
        ]
    },
    {
        question: "¿Qué hacer si olvidas una dosis?",
        options: [
            { text: "Tomar una dosis doble.", score: 0 },
            { text: "Tomar la dosis olvidada pronto.", score: 20, correct: true },
            { text: "Nunca volver a tomarlo.", score: 0 }
        ]
    },
    {
        question: "¿Cuánto esperar tras una comida pesada?",
        options: [
            { text: "Inmediatamente después.", score: 0 },
            { text: "Al menos 30 minutos.", score: 20, correct: true },
            { text: "3 días completos.", score: 0 }
        ]
    },
    {
        question: "¿Es seguro tomar ibuprofeno en ayuno?",
        options: [
            { text: "Sí, no hay problema.", score: 0 },
            { text: "No, causa irritación estomacal.", score: 20, correct: true },
            { text: "Sí, lo convierte en un jugo détox.", score: 0 }
        ]
    }
];

const quiz3 = [
    {
        question: "¿Es seguro tomar ibuprofeno con alcohol?",
        options: [
            { text: "Sí, no hay problema.", score: 0 },
            { text: "No, aumenta el riesgo de daño gástrico.", score: 20, correct: true },
            { text: "Lo convierte en un cóctel medicinal.", score: 0 }
        ]
    },
    {
        question: "¿Cuántos días tomar ibuprofeno para fiebre?",
        options: [
            { text: "No más de 1 día.", score: 0 },
            { text: "No más de 3 días.", score: 20, correct: true },
            { text: "Hasta que baje la fiebre sin límite.", score: 0 }
        ]
    },
    {
        question: "¿Por qué evitar ibuprofeno en el tercer trimestre?",
        options: [
            { text: "Causa problemas en el desarrollo.", score: 20, correct: true },
            { text: "Porque el bebé puede volverse alérgico a las pastillas.", score: 0 },
            { text: "No tiene efectos negativos.", score: 0 }
        ]
    },
    {
        question: "¿Ibuprofeno en lactancia: seguro o no?",
        options: [
            { text: "Sí, es completamente seguro.", score: 0 },
            { text: "Sí, en dosis bajas.", score: 20, correct: true },
            { text: "Lo convierte en un analgésico para el bebé.", score: 0 }
        ]
    },
    {
        question: "¿Efecto de ibuprofeno en embarazo de alto riesgo?",
        options: [
            { text: "No tiene efectos adversos.", score: 0 },
            { text: "Aumenta el riesgo de complicaciones.", score: 20, correct: true },
            { text: "Cura cualquier malestar del embarazo.", score: 0 }
        ]
    }
];

const quiz4 = [
    {
        question: "¿Cómo reducir efectos secundarios del ibuprofeno?",
        options: [
            { text: "Tomarlo con comida o leche.", score: 0 },
            { text: "No exceder la dosis diaria.", score: 20, correct: true },
            { text: "Combinarlo con refrescos energéticos.", score: 0 }
        ]
    },
    {
        question: "¿Por qué ibuprofeno 400 mg es una buena opción?",
        options: [
            { text: "Alivio rápido y menos agresivo.", score: 20, correct: true },
            { text: "Porque no tiene efectos secundarios.", score: 0 },
            { text: "Porque no tiene límite de dosis.", score: 0 }
        ]
    },
    {
        question: "¿Beneficio de cápsulas de gel vs tabletas?",
        options: [
            { text: "Absorción rápida y menos irritación.", score: 20, correct: true },
            { text: "Mayor duración del efecto.", score: 0 },
            { text: "Las tabletas son mejores.", score: 0 }
        ]
    },
    {
        question: "¿Qué reduce la eficacia del ibuprofeno?",
        options: [
            { text: "Obesidad y metabolismo lento.", score: 20, correct: true },
            { text: "Comer helado después.", score: 0 },
            { text: "Cantar canciones mientras lo tomas.", score: 0 }
        ]
    },
    {
        question: "¿Qué tipo de dolor requiere dosis altas de ibuprofeno?",
        options: [
            { text: "Dolor muscular o inflamación importante.", score: 20, correct: true },
            { text: "Dolor de cabeza leve.", score: 0 },
            { text: "Cualquier dolor menor.", score: 0 }
        ]
    }
];

function push(videoId) {
    const video = videos.find(v => v.id === videoId);

    if (video) {
        document.querySelector('.more h2').textContent = video.title;
        document.querySelector('.more p').textContent = video.description;

        const topicsList = document.querySelector('.topics');
        topicsList.innerHTML = '';
        video.topics.forEach(topic => {
            const li = document.createElement('li');
            li.textContent = topic;
            topicsList.appendChild(li);
        });

        document.querySelector('aside').style.display = 'flex';
        document.querySelector('aside .player').style.display = 'flex';
    }
}

function closeModal() {
    document.querySelector('aside').style.display = 'none';
    document.querySelector('aside .player').style.display = 'none';
}

document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.addEventListener('click', () => {
        const videoId = thumb.id;
        push(videoId);
    });
});

document.querySelector('.close').addEventListener('click', closeModal);

function profile() {
    var e = document.querySelector("aside");
    e.classList.toggle("edit");
}

function alert() {
    var e = document.querySelector("aside");
    e.classList.toggle("alert");
}

var nav = document.createElement('nav');

nav.innerHTML = `
    <a href="home" class="logo">
        <img src="src/fenodol-logo.png" alt="Fenodol">
    </a>
    <a href="premios" class="link">
        <i class="fa-regular fa-hashtag"></i>
        ABC123-XYZ789
    </a>
    <a onclick="alert()" class="link">
        <i class="fa-regular fa-coins"></i>
        500 / Q50.00
    </a>
    <a href="index" class="link">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
        Cerrar Sesión
    </a>
    <a onclick="profile()" class="avatar"></a>
`;

var footer = document.createElement('footer');

footer.innerHTML = `
    <span>© 2024 Fenodol</span>
    <a href="#">Términos y Condiciones</a>
    <a href="#">Políticas de Privacidad</a>
    <a href="#">Registrar facturas</a>
`;

document.body.appendChild(nav);
document.body.appendChild(footer);

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}