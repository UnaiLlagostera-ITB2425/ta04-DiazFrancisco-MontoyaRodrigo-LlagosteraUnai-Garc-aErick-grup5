const translations = {
    es: {
        title: "Bienvenido a mi portafolio",
        description: "Soy un desarrollador web con experiencia en proyectos de diversas tecnologías."
    },
    en: {
        title: "Welcome to my portfolio",
        description: "I am a web developer with experience in projects using various technologies."
    },
    fr: {
        title: "Bienvenue sur mon portfolio",
        description: "Je suis un développeur web avec de l'expérience dans des projets utilisant différentes technologies."
    }
};

// Función para cambiar el idioma
function changeLanguage(language) {
    // Cambiar el contenido de los elementos con id "title" y "description"
    document.getElementById('title').textContent = translations[language].title;
    document.getElementById('description').textContent = translations[language].description;

    // Cambiar el atributo lang en el HTML (opcional, para accesibilidad y SEO)
    document.documentElement.lang = language;
}

