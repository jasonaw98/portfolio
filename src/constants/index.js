import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    solidity,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Blockchain Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "solidity",
      icon: solidity,
    },
  ];
  
  const experiences = [
    {
      title: "Dapp Developer / PM",
      company_name: "Blacksmith Innovation",
      icon: "src/assets/company/bb-profile.jpg",
      iconBg: "#1c3946",
      date: "Feb 2023 - Present",
      points: [
        "Planed and launch ByteBank, a platform for connecting cryptocurrency users and traditional banking solutions",
        "Lead project coordination, planning, and implementation.",
        "Develop Multisig Wallets and Smart Contracts on Ethereum and Solana.",
        "Further learned and developed ZkSync smart contracts.",
        "Gather requirements from stakeholders and customers for product backlog management",
      ],
    },
    {
      title: "Full stack Blockchain Developer",
      company_name: "Freelance",
      icon: "https://thegivingblock.com/wp-content/uploads/2021/07/Ethereum-ETH-Logo.png",
      iconBg: "#E6DEDD",
      date: "Feb 2021 - Present",
      points: [
        "Build and deploy Full-stack Dapps on Ethereum, Solana, and Substrate.",
        "Proficient in development tools and libraries such as Hardhat, Truffle, Metaplex, Next js and React.",
        "Knowledge of DeFi, Ethers.js, Web3js, and more.",
        "Server Side Rendering, Server side data fetching",
      ],
    },
    {
      title: "Project Manager",
      company_name: "MYEG NFT Pangolin",
      icon: "https://nftpangolin.com/wp-content/uploads/2022/04/illus-peeping-pangolin-404.png",
      iconBg: "#040723",
      date: "July 2022 - Jan 2023",
      points: [
        "Conduct project coordination, planning, and implementation of software development life cycle",
        "Gathering requirements from stakeholders and customers.",
        "Utilization of knowledge, skills and tools to communicate and execute daily task to meet budget and deadlines to always be ahead of schedule.",
      ],
    },
    {
      title: "Software QA Engineer",
      company_name: "Grass Valley",
      icon: "src/assets/company/grass-valley.png",
      iconBg: "#32b7ad",
      date: "Feb 2021 - July 2022",
      points: [
        "Prepare deployments with Kubernetes, Docker, Jenkins and implementing CI/CD",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Conduct Automation test scenarios with Gatling, Scala and Selenium framework.",
        "Participating in code reviews and providing constructive feedback to fellow Engineers.",
        "Perform impact analysis on new features, defect fixes and planning regression test suites.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Software International",
      icon: "https://media.licdn.com/dms/image/C560BAQEU-M2nlcenQw/company-logo_200_200/0/1624326486238?e=2147483647&v=beta&t=V6fdFMPSCdGPYxbutLPLlT56_4AaCaJNtUKusxgb-FE",
      iconBg: "#fff",
      date: "July 2020 - Feb 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Spring and Java for back-end MySQL workbench for database.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Drinking Game",
      description:
        "PWA-based drinking game where players can add to their home screen as a standalone App on their phone and they can contribute to the dares and challenges via filling up a Google Form",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Google Forms",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: "src/assets/projects/drinking.png",
      source_code_link: "https://github.com/jasonaw98/DrinkingGame",
      live_link: "https://sippin-skippin.vercel.app/",
    },
    {
      name: "LoanGraphia",
      description:
        "An online Loan analysis tool that provides information on loan repayments, rebate settlements, total amount paid and potential savings for borrowers.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Chartjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: "src/assets/projects/loangraphia.png",
      source_code_link: "https://github.com/jasonaw98/LoanGraphia",
      live_link: "https://loangraphia.vercel.app/",
    },
    {
      name: "Portfolio V1",
      description:
        "My first portfolio that got me hired!",
      tags: [
        {
          name: "Gatsby",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Vanilla JS",
          color: "pink-text-gradient",
        },
      ],
      image: "src/assets/projects/portfoliov1.png",
      source_code_link: "https://github.com/jasonaw98/Reactsimplefolio",
      live_link: "https://jasonaw.netlify.app/",
    },
    {
      name: "InspireNote",
      description:
        "A place where people can find and submit anything useful such as quotes of the day, recipes, AI Prompts, and more.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Google Auth",
          color: "pink-text-gradient",
        },
      ],
      image: "src/assets/projects/inspirenote.png",
      source_code_link: "https://github.com/jasonaw98/InspireNote",
      live_link: "https://inspirenote.vercel.app/",
    },
    {
      name: "Python Web Automation",
      description:
        "This project is build on Python and Selenium to automate filling out forms and surveys. Click to check out!",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Selenium",
          color: "green-text-gradient",
        },
        {
          name: "Chromium",
          color: "pink-text-gradient",
        },
      ],
      image: "src/assets/projects/webautomation.png",
      source_code_link: "https://github.com/jasonaw98/WebAutomation",
      live_link: "https://github.com/jasonaw98/WebAutomation",
    },
    {
      name: "Solana NFT Portfolio Explorer",
      description:
        "Users can view and explore anyone's NFTs by entering their Solana Address via this Web App.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "HelloMoon",
          color: "green-text-gradient",
        },
        {
          name: "NFT",
          color: "pink-text-gradient",
        },
      ],
      image: "src/assets/projects/solanaportfolio.png",
      source_code_link: "https://github.com/jasonaw98/Solana-nft-portfolio",
      live_link: "https://solanaportfolio.vercel.app/",
    },
    {
      name: "IPFS File Uploader",
      description:
        "Users can upload their files to IPFS and making the file to exists forever until the internet faces extinction",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "IPFS",
          color: "green-text-gradient",
        },
        {
          name: "NFT",
          color: "pink-text-gradient",
        },
      ],
      image: "src/assets/projects/ipfsuploader.png",
      source_code_link: "https://github.com/jasonaw98/IPFS-FIle-uploader",
      live_link: "https://ipfs-f-ile-uploader.vercel.app/",
    },
    {
      name: "Multi-Sig Vault",
      description:
        "Users can create a safe vault where they can add multiple Owners and set a Threshold required to perform any transactions. Transaction will only be executed once total confirmations have reached.",
      tags: [
        {
          name: "Vue",
          color: "blue-text-gradient",
        },
        {
          name: "Hardhat",
          color: "green-text-gradient",
        },
        {
          name: "Solidity",
          color: "pink-text-gradient",
        },
      ],
      image: "src/assets/projects/Multisig.png",
      source_code_link: "https://github.com/jasonaw98/MultiSig-ContractFactory",
      live_link: "https://github.com/jasonaw98/MultiSig-ContractFactory",
    },
    {
      name: "Solana GIF Dapp",
      description:
        "A DAPP build on Solana Blockchain where users able to view and submit their favorite Electric Cars GIF or Images link. Build on Devnet and Sol Devnet is required.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Anchor",
          color: "green-text-gradient",
        },
        {
          name: "Solana",
          color: "pink-text-gradient",
        },
      ],
      image: "src/assets/projects/SolDapp.png",
      source_code_link: "https://github.com/jasonaw98/SolanaDapp",
      live_link: "https://solana-dapp-lake.vercel.app/",
    },
    {
      name: "Solana NFT App with Metaplex",
      description:
        "Users can use this Web App to mint their Marvel Avenger Themed NFT! Some Devnet Sol is required to mint successfully.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Metaplex",
          color: "green-text-gradient",
        },
        {
          name: "Solana",
          color: "pink-text-gradient",
        },
      ],
      image: "src/assets/projects/solanaNFT.png",
      source_code_link: "https://github.com/jasonaw98/Solana-NFT",
      live_link: "https://solana-nft-two-theta.vercel.app/",
    },
    {
      name: "DeFi Liquidity Pool",
      description:
        "A DeFi Liquidity Pool Dapp where users would able to add tokens into liquidity pools and get LP Tokens in return.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Hardhat",
          color: "green-text-gradient",
        },
        {
          name: "Solidity",
          color: "pink-text-gradient",
        },
      ],
      image: "src/assets/projects/defi.png",
      source_code_link: "https://github.com/jasonaw98/DeFi-ExchangeApp",
      live_link: "https://de-fi-exchange-app.vercel.app/",
    },
    {
      name: "Polygon Name Service",
      description:
        "A web app that let users purchase their very own marvel domain name and it comes with an unique NFT. Feel free to mint one!",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Hardhat",
          color: "green-text-gradient",
        },
        {
          name: "Polygon",
          color: "pink-text-gradient",
        },
      ],
      image: "src/assets/projects/polygonNameService.png",
      source_code_link: "https://github.com/jasonaw98/Domain-name-service-Polygon",
      live_link: "https://domain-starter-project.jasonaw98.repl.co/",
    },
    {
      name: "DAO",
      description:
        "This is a fully functional DAO with voting and treasury capabilities. Users can sign up and mint an NFT to become a member and receive Governence Token to vote. Click to check out!",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Thirdweb",
          color: "green-text-gradient",
        },
        {
          name: "Solidity",
          color: "pink-text-gradient",
        },
      ],
      image: "src/assets/projects/firstdao.png",
      source_code_link: "https://github.com/jasonaw98/MyFirstDAO",
      live_link: "https://buildspace-dao-starter-v2.jasonaw98.repl.co/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };