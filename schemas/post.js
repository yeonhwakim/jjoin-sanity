export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Host',
      name: 'host',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {
      title: 'Member',
      name: 'member',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'user'}]}],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Count',
      name: 'count',
      type: 'number',
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
    },
    {
      title: 'Likes',
      name: 'Likes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'user'}]}],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Joinpost',
      name: 'joinpost',
      type: 'reference',
      to: [{type: 'post'}],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Coments',
      name: 'coments',
      type: 'array',
      of: [
        {
          title: 'Coment',
          name: 'coment',
          type: 'document',
          fields: [
            {title: 'Author', name: 'author', type: 'reference', to: [{type: 'user'}]},
            {title: 'Coment', name: 'coment', type: 'string'},
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'coments.0.coment',
      authorName: 'host.name',
      authorUsername: 'host.username',
      media: 'photo',
    },
    prepare(selection) {
      const {title, authorName, authorUsername, media} = selection
      return {
        title,
        subtitle: `by ${authorName} (${authorUsername})`,
        media,
      }
    },
  },
}
