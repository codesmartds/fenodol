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

const model1 = [
    {
        question: "¿Qué tipo de medicamento es el ibuprofeno y cómo actúa en el cuerpo?",
        options: [
            { text: "Es un antibiótico que combate infecciones bacterianas.", score: 0 },
            { text: "Es un AINE que reduce la inflamación, el dolor y la fiebre al inhibir la producción de prostaglandinas.", score: 50, correct: true },
            { text: "Es un analgésico simple que solo alivia el dolor sin reducir la inflamación.", score: 0 }
        ]
    },
    {
        question: "¿Cuáles de los siguientes dolores pueden tratarse con ibuprofeno 400 mg? (Selecciona todas las opciones correctas)",
        options: [
            { text: "Dolor de cabeza", score: 50, correct: true },
            { text: "Dolor menstrual", score: 50, correct: true },
            { text: "Dolor de muelas", score: 50, correct: true },
            { text: "Dolor de oído por infección bacteriana", score: 0 }
        ]
    },
    {
        question: "¿Quiénes deben evitar el uso de ibuprofeno o consultar a un médico antes de tomarlo?",
        options: [
            { text: "Personas con antecedentes de problemas gástricos o úlceras.", score: 50, correct: true },
            { text: "Personas con hipertensión no controlada.", score: 50, correct: true },
            { text: "Adultos mayores de 65 años.", score: 50, correct: true },
            { text: "Todas las anteriores.", score: 50, correct: true }
        ]
    },
    {
        question: "¿Por qué se recomienda tomar ibuprofeno con alimentos o con leche?",
        options: [
            { text: "Para mejorar la absorción del medicamento.", score: 0 },
            { text: "Para reducir el riesgo de irritación gástrica.", score: 50, correct: true },
            { text: "Para potenciar su efecto analgésico.", score: 0 }
        ]
    },
    {
        question: "¿Cuál es la dosis máxima diaria recomendada para el ibuprofeno 400 mg sin supervisión médica?",
        options: [
            { text: "1600 mg (4 cápsulas de 400 mg)", score: 0 },
            { text: "1200 mg (3 cápsulas de 400 mg)", score: 50, correct: true },
            { text: "800 mg (2 cápsulas de 400 mg)", score: 0 }
        ]
    },
    {
        question: "¿Qué se debe hacer si olvidas tomar una dosis de ibuprofeno?",
        options: [
            { text: "Tomar una dosis doble en la siguiente toma.", score: 0 },
            { text: "Tomar la dosis olvidada tan pronto como lo recuerdes, a menos que esté cerca la próxima toma.", score: 50, correct: true },
            { text: "Ignorar la dosis olvidada y esperar a la siguiente.", score: 0 }
        ]
    },
    {
        question: "¿Es seguro consumir ibuprofeno con alcohol?",
        options: [
            { text: "Sí, no hay problema.", score: 0 },
            { text: "No, aumenta el riesgo de irritación y daño gástrico.", score: 50, correct: true },
            { text: "Solo si se consume en dosis bajas.", score: 0 }
        ]
    },
    {
        question: "¿Cuántos días se recomienda tomar ibuprofeno para la fiebre antes de consultar a un médico?",
        options: [
            { text: "No más de 1 día.", score: 0 },
            { text: "No más de 3 días.", score: 50, correct: true },
            { text: "No más de 5 días.", score: 0 }
        ]
    },
    {
        question: "¿Cuál de las siguientes afirmaciones es correcta sobre el uso de ibuprofeno en el embarazo?",
        options: [
            { text: "El ibuprofeno es seguro durante todo el embarazo.", score: 0 },
            { text: "No se recomienda en el tercer trimestre.", score: 50, correct: true },
            { text: "Solo se puede usar bajo supervisión médica en el primer trimestre.", score: 0 }
        ]
    },
    {
        question: "¿Qué consejo puedes dar a alguien que va a tomar ibuprofeno 400 mg para reducir los efectos secundarios? (Selecciona todas las que apliquen)",
        options: [
            { text: "Tomarlo con comida o leche.", score: 50, correct: true },
            { text: "No exceder la dosis máxima diaria.", score: 50, correct: true },
            { text: "Combinarlo con otros AINEs para aumentar el efecto.", score: 0 },
            { text: "Evitar el consumo de alcohol mientras lo tome.", score: 50, correct: true }
        ]
    },
    {
        question: "¿Por qué el ibuprofeno 400 mg es una buena opción para el alivio de dolores leves a moderados?",
        options: [
            { text: "Porque proporciona un alivio rápido y es menos agresivo con el estómago en comparación con dosis más altas.", score: 50, correct: true },
            { text: "Porque es un medicamento sin efectos secundarios.", score: 0 },
            { text: "Porque se puede tomar libremente sin límite de dosis.", score: 0 }
        ]
    },
    {
        question: "¿Cuáles son los beneficios de la cápsula de gel de ibuprofeno en comparación con las tabletas regulares?",
        options: [
            { text: "Absorción más rápida y menor irritación estomacal.", score: 50, correct: true },
            { text: "Mayor duración de efecto.", score: 0 },
            { text: "Menor eficacia en el alivio del dolor.", score: 0 }
        ]
    }
];

const model2 = [
    {
        question: "¿Qué tipo de medicamento es el ibuprofeno y cómo actúa en el cuerpo?",
        options: [
            { text: "Es un antibiótico que combate infecciones bacterianas.", score: 0 },
            { text: "Es un AINE que reduce la inflamación, el dolor y la fiebre.", score: 50, correct: true },
            { text: "Es un analgésico simple que solo alivia el dolor sin reducir la inflamación.", score: 0 }
        ]
    },
    {
        question: "¿Cuáles de los siguientes dolores pueden tratarse con ibuprofeno 400 mg? (Selecciona todas las opciones correctas)",
        options: [
            { text: "Dolor de cabeza", score: 50, correct: true },
            { text: "Dolor menstrual", score: 50, correct: true },
            { text: "Dolor de muelas", score: 50, correct: true },
            { text: "Dolor de oído por infección bacteriana", score: 0 }
        ]
    },
    {
        question: "¿Quiénes deben evitar el uso de ibuprofeno o consultar a un médico antes de tomarlo?",
        options: [
            { text: "Personas con antecedentes de problemas gástricos o úlceras.", score: 50, correct: true },
            { text: "Personas con hipertensión no controlada.", score: 50, correct: true },
            { text: "Adultos mayores de 65 años.", score: 50, correct: true },
            { text: "Todas las anteriores.", score: 50, correct: true }
        ]
    },
    {
        question: "¿Por qué se recomienda tomar ibuprofeno con alimentos?",
        options: [
            { text: "Para mejorar la absorción del medicamento.", score: 0 },
            { text: "Para reducir el riesgo de irritación gástrica.", score: 50, correct: true },
            { text: "Para potenciar su efecto analgésico.", score: 0 }
        ]
    },
    {
        question: "¿Cuál es la dosis máxima diaria recomendada para el ibuprofeno 400 mg sin supervisión médica?",
        options: [
            { text: "1600 mg (4 cápsulas de 400 mg)", score: 0 },
            { text: "1200 mg (3 cápsulas de 400 mg)", score: 50, correct: true },
            { text: "800 mg (2 cápsulas de 400 mg)", score: 0 }
        ]
    },
    {
        question: "¿Qué se debe hacer si olvidas tomar una dosis de ibuprofeno?",
        options: [
            { text: "Tomar una dosis doble en la siguiente toma.", score: 0 },
            { text: "Tomar la dosis olvidada tan pronto como lo recuerdes, a menos que esté cerca la próxima toma.", score: 50, correct: true },
            { text: "Ignorar la dosis olvidada y esperar a la siguiente.", score: 0 }
        ]
    },
    {
        question: "¿Es seguro consumir ibuprofeno con alcohol?",
        options: [
            { text: "Sí, no hay problema.", score: 0 },
            { text: "No, aumenta el riesgo de irritación y daño gástrico.", score: 50, correct: true },
            { text: "Solo si se consume en dosis bajas.", score: 0 }
        ]
    },
    {
        question: "¿Cuántos días se recomienda tomar ibuprofeno para la fiebre antes de consultar a un médico?",
        options: [
            { text: "No más de 1 día.", score: 0 },
            { text: "No más de 3 días.", score: 50, correct: true },
            { text: "No más de 5 días.", score: 0 }
        ]
    },
    {
        question: "¿Cuál de las siguientes afirmaciones es correcta sobre el uso de ibuprofeno en el embarazo?",
        options: [
            { text: "El ibuprofeno es seguro durante todo el embarazo.", score: 0 },
            { text: "No se recomienda en el tercer trimestre.", score: 50, correct: true },
            { text: "Solo se puede usar bajo supervisión médica en el primer trimestre.", score: 0 }
        ]
    }
];

function push(videoId) {
    const video = videos.find(v => v.id === videoId);

    if (video) {
        document.querySelector('.more h2').textContent = video.title;
        document.querySelector('.more p').textContent = video.description;

        const topicsList = document.querySelector('.topics-list');
        topicsList.innerHTML = '';
        video.topics.forEach(topic => {
            const li = document.createElement('li');
            li.textContent = topic;
            topicsList.appendChild(li);
        });

        document.querySelector('aside').style.display = 'flex';
    }
}

function closeModal() {
    document.querySelector('aside').style.display = 'none';
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
        500 Puntos
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