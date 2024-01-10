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
}
