const defaultData = {
  sections: [
    {
      id: 100,
      title: "Person",
      firstName: "Me",
      lastName: "Myself and I",
      jobTitle: "Project Manager",
    },
    {
      id: 200,
      title: "Contact",
      items: [
        { id: 201, field: "📧", value: "myown@example.com" },
        { id: 202, field: "📞", value: "+3069858120255" },
        { id: 203, field: "📍", value: "123 Pond Str., Lake Town " },
        { id: 204, field: "🌐", value: "iamyourguy.com" },
      ],
    },
    {
      id: 300,
      title: "Education",
      items: [
        {
          id: 301,
          title: "Bed Warmer",
          school: "GeekTown University",
          from: "September 10 2002",
          until: " September 10 2030",
          desc: "Lorem big time lndksjdkbdf jbsdb kjb lsjd ljd kj ljsd lj ljshd ljsd l",
        },
      ],
    },
    {
      id: 400,
      title: "About Me",
      items: [
        {
          id: 401,
          field: "",
          value:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempore pariatur accusamus adipisci facere? Perspiciatis delectus quas tempora officiis dolorem, dolore eum aut doloribus! Modi facilis et veritatis culpa architecto!",
        },
      ],
    },
    {
      id: 500,
      title: "Work experience",
      items: [
        { id: 501, field: "Company name:", value: "GlobalInc" },
        {
          id: 502,
          field: "Position title:",
          value: "Software Developer",
        },
        {
          id: 503,
          field: "Main responsibilities:",
          value: "Create the best ever software",
        },
        { id: 504, field: "From:", value: "November 20 2020" },
        { id: 505, field: "Until:", value: "Today" },
      ],
    },
    {
      id: 600,
      title: "Skills",
      items: [
        { id: 601, field: "", value: "Strategic Planning" },
        { id: 602, field: "", value: "Problem Solving" },
        { id: 603, field: "", value: "HTML/CSS/JS" },
        { id: 604, field: "", value: "Rails" },
        { id: 606, field: "", value: "React" },
      ],
    },
    {
      id: 700,
      title: "Languages",
      items: [
        { id: 701, field: "", value: "Urdu (fluent)" },
        { id: 702, field: "", value: "Mongolian (native)" },
      ],
    },
  ],
};

export default defaultData;
