const jobs = [
    {
      id: 1,
      company: "Appwrite",
      title: "Frontend Developer",
      description:
        "Join Appwrite as a Frontend Developer and help build a powerful open-source backend solution. You will work closely with the design team to create intuitive user interfaces.",
      salary: "$120k - $150k / Year",
      type: "Remote",
      date: "2 days ago",
      location: "Nigeria",
      image: "https://www.appwrite.io/images/logo.svg",
      email: "contact@appwrite.io",
      website: "https://www.appwrite.io"
    },
    {
      id: 2,
      company: "MongoDB",
      title: "Senior Developer",
      description:
        "As a Senior Developer at MongoDB, you'll play a crucial role in enhancing our database solutions and collaborating with various teams to ensure seamless integration.",
      salary: "$220k - $350k / Month",
      type: "Full-time",
      date: "2 weeks ago",
      location: "America",
      image: "https://www.mongodb.com/community/logo/mongodb-logo.svg",
      email: "support@mongodb.com",
      website: "https://www.mongodb.com"
    },
    {
      id: 3,
      company: "Figma",
      title: "Product Designer",
      description:
        "Figma is seeking a Product Designer to create engaging user experiences. Collaborate with cross-functional teams to design innovative solutions for our design platform.",
      salary: "$420k - $550k / Year",
      type: "Part-time",
      date: "4 days ago",
      location: "USA",
      image: "https://www.figma.com/favicon.ico",
      email: "hello@figma.com",
      website: "https://www.figma.com"
    },
    {
      id: 4,
      company: "Canva",
      title: "Content Creator",
      description:
        "Join Canva as a Content Creator and help develop engaging materials for our users. You will work with our marketing team to create impactful content.",
      salary: "$120 - $150 / Month",
      type: "Full-time",
      date: "1 month ago",
      location: "Australia",
      image: "https://www.canva.com/favicon.ico",
      email: "support@canva.com",
      website: "https://www.canva.com"
    },
    {
      id: 5,
      company: "Adobe",
      title: "UI/UX Designer",
      description:
        "Adobe is looking for a talented UI/UX Designer to enhance our Creative Cloud applications. Collaborate with engineers and product managers to deliver world-class design.",
      salary: "$50k - $100k / Month",
      type: "Full-time",
      date: "25 days ago",
      location: "USA",
      image: "https://www.adobe.com/favicon.ico",
      email: "contact@adobe.com",
      website: "https://www.adobe.com"
    },
    {
      id: 6,
      company: "Spotify",
      title: "Product Designer",
      description:
        "As a Product Designer at Spotify, you'll focus on creating the best user experience for our listeners. Collaborate with product teams to design features for music discovery.",
      salary: "$320k - $550k / Month",
      type: "Part-time",
      date: "16 weeks ago",
      location: "Sweden",
      image: "https://www.spotify.com/favicon.ico",
      email: "jobs@spotify.com",
      website: "https://www.spotify.com"
    },
    {
      id: 7,
      company: "Amazon",
      title: "Backend Engineer",
      description:
        "Amazon seeks a Backend Engineer to improve our services and help develop scalable applications. You'll be working in a fast-paced environment with a talented team.",
      salary: "$100k - $150k / Year",
      type: "Full-time",
      date: "40 days ago",
      location: "USA",
      image: "https://www.amazon.com/favicon.ico",
      email: "jobs@amazon.com",
      website: "https://www.amazon.com"
    },
    {
      id: 8,
      company: "Salesforce",
      title: "Marketing Specialist",
      description:
        "Salesforce is looking for a Marketing Specialist to enhance our marketing strategies. Work with various teams to execute marketing campaigns that drive engagement.",
      salary: "$320k - $450k / Month",
      type: "Remote",
      date: "7 days ago",
      location: "USA",
      image: "https://www.salesforce.com/favicon.ico",
      email: "careers@salesforce.com",
      website: "https://www.salesforce.com"
    },
    {
      id: 9,
      company: "Twitter",
      title: "Graphic Designer",
      description:
        "Join Twitter as a Graphic Designer and create stunning visuals for our platform. Collaborate with the marketing and product teams to produce engaging content.",
      salary: "$1000 - $2100 / Month",
      type: "Full-time",
      date: "1 day ago",
      location: "USA",
      image: "https://twitter.com/favicon.ico",
      email: "jobs@twitter.com",
      website: "https://twitter.com"
    },
    {
      id: 10,
      company: "Tesla",
      title: "Software Engineer",
      description:
        "Tesla is seeking a Software Engineer to work on cutting-edge technologies that power our electric vehicles. Collaborate with cross-functional teams to bring innovative solutions to life.",
      salary: "$130k - $180k / Year",
      type: "Full-time",
      date: "3 days ago",
      location: "USA",
      image: "https://www.tesla.com/favicon.ico",
      email: "careers@tesla.com",
      website: "https://www.tesla.com"
    },
    {
      id: 11,
      company: "Netflix",
      title: "Content Writer",
      description:
        "Netflix is looking for a talented Content Writer to create engaging scripts for our shows and movies. Collaborate with producers to develop captivating narratives.",
      salary: "$70k - $120k / Year",
      type: "Full-time",
      date: "5 days ago",
      location: "USA",
      image: "https://www.netflix.com/favicon.ico",
      email: "jobs@netflix.com",
      website: "https://www.netflix.com"
    },
    {
      id: 12,
      company: "Dropbox",
      title: "Cloud Engineer",
      description:
        "As a Cloud Engineer at Dropbox, you will work on our cloud infrastructure and ensure high availability and reliability of services. Join us to build the next generation of cloud solutions.",
      salary: "$110k - $150k / Year",
      type: "Remote",
      date: "10 days ago",
      location: "USA",
      image: "https://www.dropbox.com/favicon.ico",
      email: "jobs@dropbox.com",
      website: "https://www.dropbox.com"
    },
    {
      id: 13,
      company: "Snap Inc.",
      title: "AR Engineer",
      description:
        "Snap Inc. is seeking an AR Engineer to work on augmented reality experiences for our users. Collaborate with design and product teams to deliver engaging features.",
      salary: "$120k - $160k / Year",
      type: "Full-time",
      date: "14 days ago",
      location: "USA",
      image: "https://www.snap.com/favicon.ico",
      email: "careers@snap.com",
      website: "https://www.snap.com"
    },
    {
      id: 14,
      company: "Slack",
      title: "Product Manager",
      description:
        "Slack is looking for a Product Manager to drive the development of new features and enhancements. Work closely with engineering and design teams to improve user experience.",
      salary: "$130k - $180k / Year",
      type: "Remote",
      date: "20 days ago",
      location: "USA",
      image: "https://slack.com/favicon.ico",
      email: "jobs@slack.com",
      website: "https://slack.com"
    },
    {
      id: 15,
      company: "LinkedIn",
      title: "Data Analyst",
      description:
        "LinkedIn seeks a Data Analyst to analyze data and provide insights to enhance our platform. You will work with various teams to identify trends and improve decision-making.",
      salary: "$110k - $150k / Year",
      type: "Full-time",
      date: "1 month ago",
      location: "USA",
      image: "https://www.linkedin.com/favicon.ico",
      email: "jobs@linkedin.com",
      website: "https://www.linkedin.com"
    },
    {
      id: 16,
      company: "Zoom",
      title: "Marketing Manager",
      description:
        "Zoom is looking for a Marketing Manager to develop and execute marketing strategies. Collaborate with cross-functional teams to increase brand awareness and user engagement.",
      salary: "$100k - $150k / Year",
      type: "Remote",
      date: "15 days ago",
      location: "USA",
      image: "https://zoom.us/favicon.ico",
      email: "jobs@zoom.us",
      website: "https://zoom.us"
    },
    {
      id: 17,
      company: "Shopify",
      title: "eCommerce Specialist",
      description:
        "Shopify is seeking an eCommerce Specialist to enhance our platform and improve user experience. Work with various teams to implement innovative solutions for online stores.",
      salary: "$80k - $120k / Year",
      type: "Remote",
      date: "10 days ago",
      location: "Canada",
      image: "https://www.shopify.com/favicon.ico",
      email: "jobs@shopify.com",
      website: "https://www.shopify.com"
    },
    {
      id: 18,
      company: "GitHub",
      title: "DevOps Engineer",
      description:
        "GitHub is looking for a DevOps Engineer to manage our cloud infrastructure and ensure high availability. Work closely with development teams to streamline deployment processes.",
      salary: "$130k - $160k / Year",
      type: "Full-time",
      date: "30 days ago",
      location: "USA",
      image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      email: "jobs@github.com",
      website: "https://github.com"
    },
    {
      id: 19,
      company: "Microsoft",
      title: "Cloud Architect",
      description:
        "Join Microsoft as a Cloud Architect and help design and implement cloud solutions. Collaborate with cross-functional teams to build scalable and secure applications.",
      salary: "$140k - $190k / Year",
      type: "Full-time",
      date: "20 days ago",
      location: "USA",
      image: "https://www.microsoft.com/favicon.ico",
      email: "careers@microsoft.com",
      website: "https://www.microsoft.com"
    },
    {
      id: 20,
      company: "IBM",
      title: "AI Research Scientist",
      description:
        "IBM seeks an AI Research Scientist to drive innovation in artificial intelligence. Conduct research and develop algorithms to enhance our AI capabilities.",
      salary: "$150k - $200k / Year",
      type: "Full-time",
      date: "25 days ago",
      location: "USA",
      image: "https://www.ibm.com/favicon.ico",
      email: "jobs@ibm.com",
      website: "https://www.ibm.com"
    },
    {
      id: 21,
      company: "Oracle",
      title: "Database Administrator",
      description:
        "Oracle is looking for a Database Administrator to manage our database systems and ensure optimal performance. Work closely with development teams to support application needs.",
      salary: "$90k - $130k / Year",
      type: "Full-time",
      date: "30 days ago",
      location: "USA",
      image: "https://www.oracle.com/favicon.ico",
      email: "jobs@oracle.com",
      website: "https://www.oracle.com"
    },
    {
      id: 22,
      company: "Pinterest",
      title: "Social Media Manager",
      description:
        "Pinterest is seeking a Social Media Manager to drive our social media strategy and enhance our online presence. Collaborate with marketing and content teams to engage users.",
      salary: "$80k - $120k / Year",
      type: "Remote",
      date: "35 days ago",
      location: "USA",
      image: "https://www.pinterest.com/favicon.ico",
      email: "jobs@pinterest.com",
      website: "https://www.pinterest.com"
    },
    {
      id: 23,
      company: "Square",
      title: "Product Analyst",
      description:
        "Join Square as a Product Analyst to gather insights and drive product decisions. Work with cross-functional teams to analyze data and inform strategic direction.",
      salary: "$100k - $140k / Year",
      type: "Full-time",
      date: "2 months ago",
      location: "USA",
      image: "https://squareup.com/favicon.ico",
      email: "careers@squareup.com",
      website: "https://squareup.com"
    },
    {
      id: 24,
      company: "Reddit",
      title: "Community Manager",
      description:
        "Reddit is looking for a Community Manager to foster engagement and growth in our online communities. Work with users and moderators to create a positive environment.",
      salary: "$90k - $130k / Year",
      type: "Remote",
      date: "1 month ago",
      location: "USA",
      image: "https://www.reddit.com/favicon.ico",
      email: "jobs@reddit.com",
      website: "https://www.reddit.com"
    },
    {
      id: 25,
      company: "ZoomInfo",
      title: "Sales Development Representative",
      description:
        "ZoomInfo is seeking a Sales Development Representative to drive lead generation efforts. Work with the sales team to identify and qualify new business opportunities.",
      salary: "$60k - $80k / Year",
      type: "Full-time",
      date: "1 month ago",
      location: "USA",
      image: "https://www.zoominfo.com/favicon.ico",
      email: "careers@zoominfo.com",
      website: "https://www.zoominfo.com"
    },
    {
      id: 26,
      company: "Trello",
      title: "Project Coordinator",
      description:
        "Trello is looking for a Project Coordinator to assist in managing projects and ensuring timely delivery. Collaborate with various teams to keep projects on track.",
      salary: "$70k - $90k / Year",
      type: "Remote",
      date: "1 month ago",
      location: "USA",
      image: "https://trello.com/favicon.ico",
      email: "jobs@trello.com",
      website: "https://trello.com"
    },
    {
      id: 27,
      company: "Yelp",
      title: "Business Development Representative",
      description:
        "Yelp is seeking a Business Development Representative to generate new business opportunities. Work with the sales team to identify potential clients and drive engagement.",
      salary: "$60k - $80k / Year",
      type: "Full-time",
      date: "2 months ago",
      location: "USA",
      image: "https://www.yelp.com/favicon.ico",
      email: "careers@yelp.com",
      website: "https://www.yelp.com"
    },
    {
      id: 28,
      company: "Asana",
      title: "Customer Success Manager",
      description:
        "Asana is looking for a Customer Success Manager to build strong relationships with our clients. Ensure customers achieve their goals and maximize the value of our platform.",
      salary: "$80k - $120k / Year",
      type: "Remote",
      date: "2 months ago",
      location: "USA",
      image: "https://asana.com/favicon.ico",
      email: "careers@asana.com",
      website: "https://asana.com"
    },
    {
      id: 29,
      company: "HubSpot",
      title: "Inbound Marketing Specialist",
      description:
        "HubSpot is seeking an Inbound Marketing Specialist to create and implement marketing strategies. Work with the team to attract and engage customers through valuable content.",
      salary: "$70k - $100k / Year",
      type: "Full-time",
      date: "2 months ago",
      location: "USA",
      image: "https://www.hubspot.com/favicon.ico",
      email: "jobs@hubspot.com",
      website: "https://www.hubspot.com"
    },
    {
      id: 30,
      company: "Coursera",
      title: "Content Strategist",
      description:
        "Coursera is looking for a Content Strategist to develop and implement content strategies. Collaborate with various teams to create educational content that engages learners.",
      salary: "$80k - $120k / Year",
      type: "Remote",
      date: "3 months ago",
      location: "USA",
      image: "https://www.coursera.org/favicon.ico",
      email: "careers@coursera.org",
      website: "https://www.coursera.org"
    },
    {
      id: 31,
      company: "Stripe",
      title: "Risk Analyst",
      description:
        "Stripe is seeking a Risk Analyst to monitor and analyze transaction data to mitigate fraud. Collaborate with cross-functional teams to implement effective risk management strategies.",
      salary: "$100k - $130k / Year",
      type: "Remote",
      date: "3 months ago",
      location: "USA",
      image: "https://stripe.com/favicon.ico",
      email: "jobs@stripe.com",
      website: "https://stripe.com"
    },
    {
      id: 32,
      company: "GitLab",
      title: "Software Engineer in Test",
      description:
        "GitLab is looking for a Software Engineer in Test to improve our software quality and testing processes. Work with developers to create automated tests and enhance our CI/CD pipeline.",
      salary: "$110k - $150k / Year",
      type: "Remote",
      date: "3 months ago",
      location: "USA",
      image: "https://about.gitlab.com/favicon.ico",
      email: "jobs@gitlab.com",
      website: "https://about.gitlab.com"
    },
    {
      id: 33,
      company: "Gusto",
      title: "HR Manager",
      description:
        "Gusto is seeking an HR Manager to oversee our human resources functions. Develop policies and programs that support employee engagement and organizational success.",
      salary: "$90k - $130k / Year",
      type: "Full-time",
      date: "2 months ago",
      location: "USA",
      image: "https://gusto.com/favicon.ico",
      email: "jobs@gusto.com",
      website: "https://gusto.com"
    },
    {
      id: 34,
      company: "SquareSpace",
      title: "Web Developer",
      description:
        "Join SquareSpace as a Web Developer to build and enhance our web platform. Collaborate with design and product teams to deliver user-friendly solutions.",
      salary: "$100k - $140k / Year",
      type: "Remote",
      date: "2 months ago",
      location: "USA",
      image: "https://www.squarespace.com/favicon.ico",
      email: "careers@squarespace.com",
      website: "https://www.squarespace.com"
    }
];

export { jobs }
  