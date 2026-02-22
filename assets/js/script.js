"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]",
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]",
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "tous") {
      filterItems[i].classList.add("active");
    } else if (
      selectedValue === filterItems[i].dataset.category.toLowerCase()
    ) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Project data
const projectsData = {
  1: {
    title: "Prédiction de la résiliation des abonnements clients",
    category: "Machine Learning",
    description:
      "Mise en place d'un modèle de machine learning pour identifier les clients à risque de résiliation et proposer des actions préventives afin de réduire le churn.",
    technologies: "Python, Scikit-Learn, Pandas, NumPy",
    duration: "Septembre 2022 - Décembre 2022",
    tasks: [
      "Construction et entraînement de modèles de classification (Logistic Regression, Random Forest) avec validation croisée",
      "Analyse exploratoire des données clients et ingénierie des features pertinentes (RFM, comportementales)",
      "Développement de recommandations personnalisées et offres ciblées basées sur les probabilités prédites",
      "Évaluation des performances avec métriques adaptées (ROC-AUC, Precision-Recall, F1-Score)",
      "Mise en place d'une pipeline d'entraînement et de scoring automatisée",
      "Rapport d'analyse avec recommandations stratégiques pour réduire le taux de résiliation",
    ],
    results:
      "Modèle avec 85% d'accuracy et AUC de 0.92 | Identification de 40% des clients à risque",
  },
  2: {
    title: "Détection de fraude par carte bancaire avec PySpark",
    category: "Machine Learning",
    description:
      "Développement d'un système scalable de détection de fraude basé sur Apache Spark (MLlib), permettant d'identifier les transactions frauduleuses à partir de données fortement déséquilibrées.",
    technologies: "PySpark, MLlib, Hadoop, Python",
    duration: "Novembre 2023 - Décembre 2023",
    tasks: [
      "Traitement et préparation de millions de données de transactions avec PySpark et Spark SQL",
      "Gestion du déséquilibre des classes (fraude ~0.1% vs non-fraude ~99.9%) via oversampling et undersampling",
      "Entraînement et comparaison de modèles Random Forest et Gradient Boosted Trees via Spark MLlib",
      "Optimization des paramètres hyperparamètres pour améliorer la détection des fraudes",
      "Évaluation avec métriques adaptées aux données déséquilibrées (Precision, Recall, F1, ROC-AUC)",
      "Déploiement du modèle en pipeline Spark pour traitement en temps réel des transactions",
    ],
    results:
      "Recall de 92% pour détecter les fraudes | Réduction des faux positifs à 3%",
  },
  3: {
    title: "Système de recommandation NLP basé sur les connaissances du PMBOK",
    category: "NLP & Traitement du Langage Naturel",
    description:
      "Développement d'un système intelligent capable de fournir des recommandations pertinentes pour le suivi des questions liées à la maintenance de projets IT à partir de documents techniques non structurés.",
    technologies: "Django, SpaCy, NLTK, OWL2, OWLReady2, Python",
    duration: "Septembre 2023 - Novembre 2023",
    tasks: [
      "Extraction et structuration de connaissances à partir du texte non structuré PMBOK grâce au NLP",
      "Modélisation sémantique avec OWL2 et OWLReady2 pour représenter les concepts et relations métiers",
      "Développement d'une application web interactive avec Django pour interagir avec le moteur de recommandation",
      "Traitement avancé du langage naturel et analyse de texte avec SpaCy et NLTK",
      "Utilisation de Graph Neural Networks (GNN) pour améliorer la pertinence des recommandations",
      "Intégration de fonctionnalités de recherche par mots-clés et filtrage intelligent",
    ],
    results:
      "97% de pertinence des recommandations | Base de connaissances structurée de 500+ concepts",
  },
  4: {
    title: "Résumé automatique de textes avec Python",
    category: "NLP & Traitement du Langage Naturel",
    description:
      "Développement d'une application de résumé automatique de textes utilisant Python pour condenser des documents tout en conservant les informations essentielles, facilitant l'analyse et la compréhension rapide de contenus textuels.",
    technologies: "Python, NLTK, SpaCy, Transformers, Hugging Face",
    duration: "Juillet 2024 - Août 2024",
    tasks: [
      "Prétraitement et nettoyage des données textuelles (tokenization, normalisation, suppression du bruit)",
      "Implémentation de techniques de NLP avec Python (NLTK, SpaCy) pour l'analyse syntaxique et sémantique",
      "Développement d'algorithmes de résumé extractif (TF-IDF, TextRank) et génératif (Seq2Seq)",
      "Évaluation de la qualité des résumés avec des métriques (ROUGE, BLEU)",
      "Optimisation de la compression du texte (réduction de 80% de la taille)",
      "Création d'une interface utilisateur pour tester et valider les résumés générés",
    ],
    results:
      "Compression efficace de 75-85% | ROUGE-1 score de 0.68 | Interface opérationnelle",
  },
  5: {
    title: "RAG MBA ChatBot",
    category: "IA Générative & RAG",
    description:
      "Développement d'un chatbot intelligent basé sur la Retrieval-Augmented Generation (RAG), conçu pour répondre à des questions complexes à partir de documents PDF spécifiques au domaine MBA.",
    technologies: "LangChain, OpenAI GPT, Pinecone, Python, Flask",
    duration: "Août 2024 - Septembre 2024",
    tasks: [
      "Traitement et analyse de documents PDF pour l'extraction et structuration du contenu pertinent",
      "Mise en place d'une architecture RAG complète combinant recherche sémantique et génération de langage",
      "Création d'embeddings vectoriels de haute qualité pour les contenus MBA",
      "Configuration et optimisation de la base de données vectorielle Pinecone",
      "Intégration du modèle GPT-4 pour générer des réponses contextualisées et précises",
      "Développement d'une interface conversationnelle avec gestion de l'historique des discussions",
    ],
    results:
      "Accuracy de 89% | Temps de réponse < 2 secondes | 500+ interactions utilisateur testées avec succès",
  },
  6: {
    title: "Application RAG avec traitement de documents PDF",
    category: "IA Générative & RAG",
    description:
      "Développement d'une application de Retrieval-Augmented Generation (RAG) permettant d'analyser des documents PDF et de fournir des fonctionnalités intelligentes de questions-réponses.",
    technologies: "LangChain, Llama3, ChromaDB, Python, FastAPI",
    duration: "Octobre 2025 - Décembre 2025",
    tasks: [
      "Extraction et prétraitement sophistiqué du contenu des documents PDF (images, tableaux, texte)",
      "Mise en place d'un pipeline RAG complet avec LangChain pour la recherche et la génération intelligente",
      "Stockage et recherche sémantique efficace des embeddings avec ChromaDB",
      "Intégration du modèle Llama3 pour générer des réponses contextuelles et pertinentes",
      "Développement d'une API FastAPI pour faciliter l'intégration à d'autres systèmes",
      "Mise en place de mécanismes de caching et optimization des performances pour le traitement batch",
    ],
    results:
      "Support de documents multi-formats | Latence optimisée à < 1.5s | Capacité d'analyse jusqu'à 1000+ pages",
  },
};

// Project modal variables
const projectModalContainer = document.querySelector(
  "[data-project-modal-container]",
);
const projectModalCloseBtn = document.querySelector(
  "[data-project-modal-close-btn]",
);
const projectOverlay = document.querySelector("[data-project-overlay]");
const projectModalTitle = document.querySelector("[data-project-modal-title]");
const projectModalCategory = document.querySelector(
  "[data-project-modal-category]",
);
const projectModalDuration = document.querySelector(
  "[data-project-modal-duration]",
);
const projectModalTechnologies = document.querySelector(
  "[data-project-modal-technologies]",
);
const projectModalDescription = document.querySelector(
  "[data-project-modal-description]",
);
const projectModalTasksList = document.querySelector(
  "[data-project-modal-tasks-list]",
);
const projectModalResults = document.querySelector(
  "[data-project-modal-results]",
);
const projectCardTriggers = document.querySelectorAll(".project-card-trigger");

// Project modal toggle function
const projectModalFunc = function () {
  projectModalContainer.classList.toggle("active");
  projectOverlay.classList.toggle("active");
};

// Add click event to all project cards
for (let i = 0; i < projectCardTriggers.length; i++) {
  projectCardTriggers[i].addEventListener("click", function (e) {
    e.preventDefault();
    const projectId = this.closest("[data-project-id]").dataset.projectId;
    const project = projectsData[projectId];

    if (project) {
      projectModalTitle.innerHTML = project.title;
      projectModalCategory.innerHTML = project.category;
      projectModalDuration.innerHTML = project.duration;
      projectModalTechnologies.innerHTML = project.technologies;
      projectModalDescription.innerHTML = `<p>${project.description}</p>`;

      projectModalTasksList.innerHTML = "";
      project.tasks.forEach((task) => {
        const li = document.createElement("li");
        li.innerHTML = task;
        projectModalTasksList.appendChild(li);
      });

      projectModalResults.innerHTML = `<div class="project-modal-results-content"><h4 class="h4 project-modal-results-title">Résultats & Impact:</h4><p>${project.results}</p></div>`;

      projectModalFunc();
    }
  });
}

// Add click event to modal close button
projectModalCloseBtn.addEventListener("click", projectModalFunc);
projectOverlay.addEventListener("click", projectModalFunc);
