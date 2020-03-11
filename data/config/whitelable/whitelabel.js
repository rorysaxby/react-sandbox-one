const pagesSchema = [
  {
    id: "YourDetails",
    pageTitle: "Your details",
    components: [
      {
        type: "Accordion",
        props: {
          id: "FormAccordion",
          animate: false,
          views: [
            {
              title: "Your Details",
              open: true,
              components: aboutYouForm
            },
            {
              title: "Your Details",
              open: true,
              components: aboutYouForm
            }
          ]
        }
      }
    ]
  }
];

const aboutYouForm = [
  {
    id: "AboutYouForm",
    type: "DynamicForm",
    props: {
      formFields: [
        {
          id: "",
          type: "TitleField",
          props: {}
        },
        {
          id: "",
          type: "TextField",
          props: {}
        },
        {
          id: "",
          type: "RadioField",
          props: {}
        }
      ]
    }
  }
];
