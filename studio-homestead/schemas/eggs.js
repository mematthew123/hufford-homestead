export default {
  name: 'egg',
  title: 'Eggs',
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
      name: 'quantity',
      title: 'Quantity (optional)',
      type: 'number',
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
