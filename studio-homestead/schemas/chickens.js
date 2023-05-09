export default {
  name: 'chicken',
  title: 'Chickens',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
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
      name: 'age',
      title: 'Age (optional)',
      type: 'number',
    },
    {
      name: 'breed',
      title: 'Breed (optional)',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price (enter as a number)',
      type: 'number',
    },
  ],
};
