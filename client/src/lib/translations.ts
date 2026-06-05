export type Language = 'en' | 'es' | 'ca' | 'fr';

export interface Translations {
  nav: {
    about: string;
    experience: string;
    education: string;
    skills: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    cta: string;
  };
  experience: {
    title: string;
    current: string;
    jobs: {
      role: string;
      company: string;
      period: string;
      description: string;
    }[];
  };
  education: {
    title: string;
    items: {
      degree: string;
      institution: string;
      period: string;
      location: string;
      highlights?: string[];
    }[];
  };
  skills: {
    title: string;
    languages: {
      title: string;
      native: string;
      items: {
        name: string;
        level: string;
      }[];
    };
    digital: {
      title: string;
      categories: {
        name: string;
        items: string[];
      }[];
    };
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    location: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Oscar Rivero',
      title: 'Web Developer & Language Specialist',
      description: 'Multilingual professional with expertise in web development, translation management, and applied languages. Specialized in creating digital solutions and bridging communication across cultures.',
      cta: 'Get in Touch',
    },
    experience: {
      title: 'Work Experience',
      current: 'Current',
      jobs: [
        {
          role: 'Vendor Support Associate',
          company: 'Amazon (Remote)',
          period: 'Aug 2022 - Present',
          description: 'Providing customer support to Amazon suppliers via email and phone in French and English. Managing platform issues, catalog management, orders, and invoices.',
        },
        {
          role: 'Web Developer, Store Owner & Writer',
          company: 'Freelance',
          period: 'Jan 2020 - Aug 2022',
          description: 'Implemented web layouts from Figma designs using HTML, CSS, JavaScript, jQuery, and Python. Created and managed an online fashion store with WordPress. Authored professional articles in Spanish and English on marketing and social topics.',
        },
        {
          role: 'Translation Project Manager',
          company: 'Intertext',
          period: 'Mar 2021 - May 2021',
          description: 'Handled quality assurance, vendor management, translator coordination, and document processing with ABBYY. Managed DTP tasks with Word.',
        },
        {
          role: 'Web Developer',
          company: 'Ancoradual',
          period: 'Jul 2020 - Sep 2020',
          description: 'Produced web layouts from Illustrator designs. Worked with Git for version control.',
        },
        {
          role: 'Translation Project Manager',
          company: 'Ontranslation',
          period: 'Jun 2019 - Sep 2019',
          description: 'Produced translations from English and Catalan into Spanish. Created translation memories and glossaries. Managed projects in CRM with fast-paced deadlines.',
        },
        {
          role: 'Systems Admin & Web Developer',
          company: 'Telecentro Córdoba',
          period: '2016',
          description: 'Developed and maintained virtualization systems with multiple virtual machines. Created website with WordPress, HTML, CSS, and JavaScript.',
        },
       /* {
          role: 'Testing',
          company: 'Testing',
          period: 'X-Y',
          description: 'test'
        }*/
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          degree: 'Master\'s Degree in Applied Languages',
          institution: 'Universitat de Lleida',
          period: 'Oct 2020 - Oct 2021',
          location: 'Lleida, Spain',
        },
        {
          degree: 'Bachelor\'s Degree in Applied Languages',
          institution: 'Pompeu Fabra University',
          period: 'Sep 2016 - Jul 2020',
          location: 'Barcelona, Spain',
          highlights: [
            'Professional speaking and writing',
            'Technical writing and translation',
            'Communication analysis and NLP tools',
            'Final project: Plagiarism detection with NLTK and Python',
          ],
        },
      ],
    },
    skills: {
      title: 'Skills',
      languages: {
        title: 'Languages',
        native: 'Native',
        items: [
          { name: 'Spanish', level: 'Native' },
          { name: 'Catalan', level: 'C2' },
          { name: 'English', level: 'C2' },
          { name: 'French', level: 'B2' },
        ],
      },
      digital: {
        title: 'Digital Skills',
        categories: [
          {
            name: 'Professional',
            items: ['HTML', 'CSS', 'WordPress', 'Adobe InDesign', 'Microsoft Word'],
          },
          {
            name: 'Advanced',
            items: ['Adobe Illustrator', 'Microsoft PowerPoint', 'Microsoft Excel', 'Google Workspace', 'Microsoft Office'],
          },
        ],
      },
    },
    contact: {
      title: 'Contact',
      email: 'info@oscararivero.com',
      phone: '+34 605342745',
      location: 'Sabadell, Barcelona, Spain',
    },
  },
  es: {
    nav: {
      about: 'Acerca de',
      experience: 'Experiencia',
      education: 'Educación',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Oscar Rivero',
      title: 'Desarrollador Web y Especialista en Lenguas',
      description: 'Profesional multilingüe con experiencia en desarrollo web, gestión de traducciones y lenguas aplicadas. Especializado en crear soluciones digitales y facilitar la comunicación entre culturas.',
      cta: 'Contactar',
    },
    experience: {
      title: 'Experiencia Laboral',
      current: 'Actual',
      jobs: [
        {
          role: 'Asociado de Soporte a Proveedores',
          company: 'Amazon (Remoto)',
          period: 'Ago 2022 - Presente',
          description: 'Brindando soporte a proveedores de Amazon por correo y teléfono en francés e inglés. Gestionando problemas de plataforma, catálogos, pedidos y facturas.',
        },
        {
          role: 'Desarrollador Web, Propietario de Tienda y Escritor',
          company: 'Freelance',
          period: 'Ene 2020 - Ago 2022',
          description: 'Implementación de diseños web desde Figma usando HTML, CSS, JavaScript, jQuery y Python. Creación y gestión de tienda online de moda con WordPress. Redacción de artículos profesionales en español e inglés sobre marketing y temas sociales.',
        },
        {
          role: 'Gestor de Proyectos de Traducción',
          company: 'Intertext',
          period: 'Mar 2021 - May 2021',
          description: 'Gestión de calidad, proveedores, coordinación de traductores y procesamiento de documentos con ABBYY. Tareas de DTP con Word.',
        },
        {
          role: 'Desarrollador Web',
          company: 'Ancoradual',
          period: 'Jul 2020 - Sep 2020',
          description: 'Producción de layouts web desde diseños de Illustrator. Trabajo con Git para control de versiones.',
        },
        {
          role: 'Gestor de Proyectos de Traducción',
          company: 'Ontranslation',
          period: 'Jun 2019 - Sep 2019',
          description: 'Producción de traducciones de inglés y catalán al español. Creación de memorias de traducción y glosarios. Gestión de proyectos en CRM con plazos ajustados.',
        },
        {
          role: 'Administrador de Sistemas y Desarrollador Web',
          company: 'Telecentro Córdoba',
          period: '2016',
          description: 'Desarrollo y mantenimiento de sistemas de virtualización con múltiples máquinas virtuales. Creación de sitio web con WordPress, HTML, CSS y JavaScript.',
        },
      ],
    },
    education: {
      title: 'Formación',
      items: [
        {
          degree: 'Máster en Lenguas Aplicadas',
          institution: 'Universitat de Lleida',
          period: 'Oct 2020 - Oct 2021',
          location: 'Lleida, España',
        },
        {
          degree: 'Grado en Lenguas Aplicadas',
          institution: 'Universitat Pompeu Fabra',
          period: 'Sep 2016 - Jul 2020',
          location: 'Barcelona, España',
          highlights: [
            'Expresión oral y escrita profesional',
            'Redacción técnica y traducción',
            'Análisis de comunicación y herramientas NLP',
            'Proyecto final: Detección de plagio con NLTK y Python',
          ],
        },
      ],
    },
    skills: {
      title: 'Habilidades',
      languages: {
        title: 'Idiomas',
        native: 'Nativo',
        items: [
          { name: 'Español', level: 'Nativo' },
          { name: 'Catalán', level: 'C2' },
          { name: 'Inglés', level: 'C2' },
          { name: 'Francés', level: 'B2' },
        ],
      },
      digital: {
        title: 'Habilidades Digitales',
        categories: [
          {
            name: 'Profesional',
            items: ['HTML', 'CSS', 'WordPress', 'Adobe InDesign', 'Microsoft Word'],
          },
          {
            name: 'Avanzado',
            items: ['Adobe Illustrator', 'Microsoft PowerPoint', 'Microsoft Excel', 'Google Workspace', 'Microsoft Office'],
          },
        ],
      },
    },
    contact: {
      title: 'Contacto',
      email: 'orivero95@outlook.com',
      phone: '+34 605342745',
      location: 'Sabadell, Barcelona, España',
    },
  },
  ca: {
    nav: {
      about: 'Sobre mi',
      experience: 'Experiència',
      education: 'Formació',
      skills: 'Habilitats',
      contact: 'Contacte',
    },
    hero: {
      greeting: 'Hola, sóc',
      name: 'Oscar Rivero',
      title: 'Desenvolupador Web i Especialista en Llengües',
      description: 'Professional multilingüe amb experiència en desenvolupament web, gestió de traduccions i llengües aplicades. Especialitzat en crear solucions digitals i facilitar la comunicació entre cultures.',
      cta: 'Contacta',
    },
    experience: {
      title: 'Experiència Laboral',
      current: 'Actual',
      jobs: [
        {
          role: 'Associat de Suport a Proveïdors',
          company: 'Amazon (Remot)',
          period: 'Ago 2022 - Present',
          description: 'Oferint suport a proveïdors d\'Amazon per correu i telèfon en francès i anglès. Gestionant problemes de plataforma, catàlegs, comandes i factures.',
        },
        {
          role: 'Desenvolupador Web, Propietari de Botiga i Escriptor',
          company: 'Freelance',
          period: 'Gen 2020 - Ago 2022',
          description: 'Implementació de dissenys web des de Figma utilitzant HTML, CSS, JavaScript, jQuery i Python. Creació i gestió de botiga online de moda amb WordPress. Redacció d\'articles professionals en espanyol i anglès sobre màrqueting i temes socials.',
        },
        {
          role: 'Gestor de Projectes de Traducció',
          company: 'Intertext',
          period: 'Mar 2021 - Mai 2021',
          description: 'Gestió de qualitat, proveïdors, coordinació de traductors i processament de documents amb ABBYY. Tasques de DTP amb Word.',
        },
        {
          role: 'Desenvolupador Web',
          company: 'Ancoradual',
          period: 'Jul 2020 - Set 2020',
          description: 'Producció de layouts web des de dissenys d\'Illustrator. Treball amb Git per control de versions.',
        },
        {
          role: 'Gestor de Projectes de Traducció',
          company: 'Ontranslation',
          period: 'Jun 2019 - Set 2019',
          description: 'Producció de traduccions d\'anglès i català a espanyol. Creació de memòries de traducció i glossaris. Gestió de projectes en CRM amb terminis ajustats.',
        },
        {
          role: 'Administrador de Sistemes i Desenvolupador Web',
          company: 'Telecentro Córdoba',
          period: '2016',
          description: 'Desenvolupament i manteniment de sistemes de virtualització amb múltiples màquines virtuals. Creació de lloc web amb WordPress, HTML, CSS i JavaScript.',
        },
      ],
    },
    education: {
      title: 'Formació',
      items: [
        {
          degree: 'Màster en Llengües Aplicades',
          institution: 'Universitat de Lleida',
          period: 'Oct 2020 - Oct 2021',
          location: 'Lleida, Espanya',
        },
        {
          degree: 'Grau en Llengües Aplicades',
          institution: 'Universitat Pompeu Fabra',
          period: 'Set 2016 - Jul 2020',
          location: 'Barcelona, Espanya',
          highlights: [
            'Expressió oral i escrita professional',
            'Redacció tècnica i traducció',
            'Anàlisi de comunicació i eines NLP',
            'Projecte final: Detecció de plagi amb NLTK i Python',
          ],
        },
      ],
    },
    skills: {
      title: 'Habilitats',
      languages: {
        title: 'Idiomes',
        native: 'Natiu',
        items: [
          { name: 'Espanyol', level: 'Natiu' },
          { name: 'Català', level: 'C2' },
          { name: 'Anglès', level: 'C2' },
          { name: 'Francès', level: 'B2' },
        ],
      },
      digital: {
        title: 'Habilitats Digitals',
        categories: [
          {
            name: 'Professional',
            items: ['HTML', 'CSS', 'WordPress', 'Adobe InDesign', 'Microsoft Word'],
          },
          {
            name: 'Avançat',
            items: ['Adobe Illustrator', 'Microsoft PowerPoint', 'Microsoft Excel', 'Google Workspace', 'Microsoft Office'],
          },
        ],
      },
    },
    contact: {
      title: 'Contacte',
      email: 'orivero95@outlook.com',
      phone: '+34 605342745',
      location: 'Sabadell, Barcelona, Espanya',
    },
  },
  fr: {
    nav: {
      about: 'À propos',
      experience: 'Expérience',
      education: 'Formation',
      skills: 'Compétences',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'Oscar Rivero',
      title: 'Développeur Web et Spécialiste en Langues',
      description: 'Professionnel multilingue avec une expertise en développement web, gestion de traductions et langues appliquées. Spécialisé dans la création de solutions numériques et la communication interculturelle.',
      cta: 'Me Contacter',
    },
    experience: {
      title: 'Expérience Professionnelle',
      current: 'Actuel',
      jobs: [
        {
          role: 'Associé Support Fournisseurs',
          company: 'Amazon (À distance)',
          period: 'Août 2022 - Présent',
          description: 'Support client aux fournisseurs Amazon par email et téléphone en français et anglais. Gestion des problèmes de plateforme, catalogues, commandes et factures.',
        },
        {
          role: 'Développeur Web, Propriétaire de Boutique et Rédacteur',
          company: 'Freelance',
          period: 'Jan 2020 - Août 2022',
          description: 'Implémentation de designs web depuis Figma avec HTML, CSS, JavaScript, jQuery et Python. Création et gestion d\'une boutique en ligne de mode avec WordPress. Rédaction d\'articles professionnels en espagnol et anglais sur le marketing et les questions sociales.',
        },
        {
          role: 'Chef de Projet Traduction',
          company: 'Intertext',
          period: 'Mar 2021 - Mai 2021',
          description: 'Gestion de la qualité, des fournisseurs, coordination des traducteurs et traitement de documents avec ABBYY. Tâches PAO avec Word.',
        },
        {
          role: 'Développeur Web',
          company: 'Ancoradual',
          period: 'Juil 2020 - Sep 2020',
          description: 'Production de layouts web depuis des designs Illustrator. Travail avec Git pour le contrôle de versions.',
        },
        {
          role: 'Chef de Projet Traduction',
          company: 'Ontranslation',
          period: 'Juin 2019 - Sep 2019',
          description: 'Production de traductions de l\'anglais et du catalan vers l\'espagnol. Création de mémoires de traduction et glossaires. Gestion de projets dans CRM avec délais serrés.',
        },
        {
          role: 'Administrateur Systèmes et Développeur Web',
          company: 'Telecentro Córdoba',
          period: '2016',
          description: 'Développement et maintenance de systèmes de virtualisation avec plusieurs machines virtuelles. Création de site web avec WordPress, HTML, CSS et JavaScript.',
        },
      ],
    },
    education: {
      title: 'Formation',
      items: [
        {
          degree: 'Master en Langues Appliquées',
          institution: 'Universitat de Lleida',
          period: 'Oct 2020 - Oct 2021',
          location: 'Lleida, Espagne',
        },
        {
          degree: 'Licence en Langues Appliquées',
          institution: 'Universitat Pompeu Fabra',
          period: 'Sep 2016 - Juil 2020',
          location: 'Barcelone, Espagne',
          highlights: [
            'Expression orale et écrite professionnelle',
            'Rédaction technique et traduction',
            'Analyse de la communication et outils NLP',
            'Projet final: Détection de plagiat avec NLTK et Python',
          ],
        },
      ],
    },
    skills: {
      title: 'Compétences',
      languages: {
        title: 'Langues',
        native: 'Natif',
        items: [
          { name: 'Espagnol', level: 'Natif' },
          { name: 'Catalan', level: 'C2' },
          { name: 'Anglais', level: 'C2' },
          { name: 'Français', level: 'B2' },
        ],
      },
      digital: {
        title: 'Compétences Numériques',
        categories: [
          {
            name: 'Professionnel',
            items: ['HTML', 'CSS', 'WordPress', 'Adobe InDesign', 'Microsoft Word'],
          },
          {
            name: 'Avancé',
            items: ['Adobe Illustrator', 'Microsoft PowerPoint', 'Microsoft Excel', 'Google Workspace', 'Microsoft Office'],
          },
        ],
      },
    },
    contact: {
      title: 'Contact',
      email: 'orivero95@outlook.com',
      phone: '+34 605342745',
      location: 'Sabadell, Barcelone, Espagne',
    },
  },
};
