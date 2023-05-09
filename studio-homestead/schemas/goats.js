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
      title: "Slug (just click generate)",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "breed",
      title: "Breed (optional)",
      type: "string",
    },

    {
      name: "born",
      title: "DOB (optional)",
      type: "date",
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: "price",
      title: "Price (enter as a number)",
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
