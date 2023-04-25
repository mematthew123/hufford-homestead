import sanityClient, { createClient } from '@sanity/client';

export default createClient({
  projectId: 'er2tzasn', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your Sanity dataset name
  useCdn: false, // We set this to false to ensure fresh data on every request
});
