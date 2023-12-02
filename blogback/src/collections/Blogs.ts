import { CollectionConfig } from 'payload/types'
import payload from 'payload'
import Content from '../blocks/Content';

const Blogs: CollectionConfig = {
  slug: 'Blogs',
  access : {
    read : () => true,
    update : () => true,
    delete : () => true,
    create : () => true
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'postText',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          minLength: 20,
          maxLength: 100,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          minLength: 40,
          maxLength: 160,
        },
      ],
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'PostMedia',
          fields: [
            {
              name: 'postImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        {
          label: 'Post Layout',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                Content
              ],
            },
          ]
        }
      ]
    },
  ],

  hooks: {
    afterOperation: [
      async (args) => {
        if (args.operation == "create") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Blogs",
              action: "Create",
              timestamp: new Date(),
            },
          });
        } else if (args.operation == "update") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Blogs",
              action: "Update",
              timestamp: new Date(),
            }
          });
        } else if (args.operation == "delete") {
          payload.create({
            collection: "logs",
            data: {
              collect: "Blogs",
              action: "Delete",
              timestamp: new Date(),
            }
          });
        }
      },
    ],
  },
}

export default Blogs
