export type Language = 'en' | 'fi';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
    },
    hero: {
      title: 'Junior Software Developer (Frontend / Fullstack)',
      description:
        'Passionate about building modern web applications with clean code and intuitive user experiences. I focus on creating scalable solutions that balance functionality with maintainability.',
      location: 'Helsinki, Finland',
      email: 'Email',
      phone: 'Phone',
      github: 'GitHub',
      viewProjects: 'View Projects',
      downloadCV: 'Download CV',
    },
    about: {
      title: 'About Me',
      content:
        "I'm a junior software developer with a strong interest in both frontend and backend development. My approach to development centers around creating clean, maintainable architectures that scale well. I enjoy building reusable components that reduce code duplication and improve consistency across applications. I'm particularly interested in code optimization and performance, always looking for ways to make applications faster and more efficient. Whether it's crafting an intuitive user interface or designing a robust application structure, I find satisfaction in solving problems and delivering high-quality solutions.",
    },
    skills: {
      title: 'Skills',
      categories: {
        Frontend: 'Frontend',
        Backend: 'Backend',
        Database: 'Database',
        'Tools & Other': 'Tools & Other',
      },
    },
    languages: {
      title: 'Languages',
      english: 'English',
      finnish: 'Finnish',
      russian: 'Russian',
      fluent: 'Fluent',
      goodWorkingProficiency: 'Good working proficiency',
      native: 'Native',
      professionalTechnical: '(professional and technical)',
    },
    projects: {
      title: 'Projects',
      featuredProject: 'Featured Project',
      keyFeatures: 'Key Features:',
      techStack: 'Tech Stack:',
      developmentNotes: 'Development Notes',
      kayakingClub: {
        description:
          'A fullstack web application for a kayaking club, combining tour booking functionality and a community blog.',
        features: [
          'User authentication and role-based access control (Admin / User)',
          'Tour booking and cancellation',
          'Community blog with posts, comments, and likes',
          'Admin dashboards for managing tours and blog content',
          'JWT-based authentication and data protection',
        ],
        developmentNotes: [
          'Designed UI in Figma',
          'Built custom reusable component library',
          'Fully integrated frontend and backend',
          'Deployed to Render',
        ],
      },
      veterinaryClinic: {
        description:
          'A responsive website for a veterinary clinic, featuring a modern design and intuitive navigation.',
        features: [
          'Responsive design for all devices',
          'Modern UI with intuitive navigation',
          'Contact form for appointments',
          'Service listings with descriptions',
        ],
        developmentNotes: [
          'Designed the UI in Figma',
          'Built a custom reusable component library',
          'Implemented multilingual support',
          'Fully integrated frontend',
          'Deployed to Vercel',
        ],
      },
    },
  },
  fi: {
    nav: {
      home: 'Etusivu',
      projects: 'Projektit',
    },
    hero: {
      title: 'Nuorempi Ohjelmistokehittäjä (Frontend / Fullstack)',
      description:
        'Intohimoinen modernien verkkosovellusten rakentamiseen puhtaalla koodilla ja intuitiivisilla käyttökokemuksilla. Keskityn luomaan skaalautuvia ratkaisuja, jotka tasapainottavat toiminnallisuuden ja ylläpidettävyyden.',
      location: 'Helsinki, Suomi',
      email: 'Sähköposti',
      phone: 'Puhelin',
      github: 'GitHub',
      viewProjects: 'Näytä Projektit',
      downloadCV: 'Lataa CV',
    },
    about: {
      title: 'Tietoja Minusta',
      content:
        'Olen nuorempi ohjelmistokehittäjä, jolla on vahva kiinnostus sekä frontend- että backend-kehitykseen. Lähestymistapani kehitykseen keskittyy puhtaiden, ylläpidettävien arkkitehtuurien luomiseen, jotka skaalautuvat hyvin. Nautin uudelleenkäytettävien komponenttien rakentamisesta, jotka vähentävät koodin päällekkäisyyttä ja parantavat johdonmukaisuutta sovellusten välillä. Olen erityisen kiinnostunut koodin optimoinnista ja suorituskyvystä, etsien aina tapoja tehdä sovelluksista nopeampia ja tehokkaampia. Olipa kyse intuitiivisen käyttöliittymän luomisesta tai vankean sovelluksen rakenteen suunnittelusta, löydän tyydytystä ongelmien ratkaisemisesta ja laadukkaiden ratkaisujen toimittamisesta.',
    },
    skills: {
      title: 'Taidot',
      categories: {
        Frontend: 'Frontend',
        Backend: 'Backend',
        Database: 'Tietokanta',
        'Tools & Other': 'Työkalut ja Muut',
      },
    },
    languages: {
      title: 'Kielet',
      english: 'Englanti',
      finnish: 'Suomi',
      russian: 'Venäjä',
      fluent: 'Sujuvasti',
      goodWorkingProficiency: 'Hyvä työkykyinen',
      native: 'Äidinkieli',
      professionalTechnical: '(ammatillinen ja teknisen)',
    },
    projects: {
      title: 'Projektit',
      featuredProject: 'Esittelyprojekti',
      keyFeatures: 'Avainominaisuudet:',
      techStack: 'Teknologiapino:',
      developmentNotes: 'Kehitysmuistiinpanot',
      kayakingClub: {
        description:
          'Fullstack-verkkosovellus melontakerholle, joka yhdistää retkenvaraus-toiminnallisuuden ja yhteisöblogin.',
        features: [
          'Käyttäjätunnistus ja roolipohjainen käyttöoikeuksien hallinta (Admin / Käyttäjä)',
          'Retkien varaus ja peruutus',
          'Yhteisöblogi julkaisuilla, kommenteilla ja tykkäyksillä',
          'Ylläpitäjän hallintapaneelit retkien ja blogisisällön hallintaan',
          'JWT-pohjainen tunnistautuminen ja tietosuoja',
        ],
        developmentNotes: [
          'UI suunniteltu Figmassa',
          'Rakennettu mukautettu uudelleenkäytettävä komponenttikirjasto',
          'Kokonaan integroitu frontend ja backend',
          'Julkaistu Renderiin',
        ],
      },
      veterinaryClinic: {
        description:
          'Responsiivinen verkkosivusto eläinlääkäriklinikalle, jossa on moderni ulkoasu ja intuitiivinen navigointi.',
        features: [
          'Responsiivinen ulkoasu kaikille laitteille',
          'Moderni käyttöliittymä ja intuitiivinen navigointi',
          'Yhteydenottolomake ajanvarausta varten',
          'Palvelulistaus kuvauksineen',
        ],
        developmentNotes: [
          'Designed UI in Figma',
          'Built custom reusable component library',
          'Implementing multilingual support',
          'Fully integrated frontend',
          'Deployed to Vercel',
        ],
      },
    },
  },
} as const;

