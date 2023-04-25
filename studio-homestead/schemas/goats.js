export default {
  name: "goat",
  title: "Goats",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "breed",
      title: "Breed",
      type: "string",
    },

    {
      name: "born",
      title: "DOB",
      type: "date",
    },

    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

  ],
};
