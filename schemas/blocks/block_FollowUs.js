export default {
    title: 'Block Follow Us',
    name: 'FollowUs',
    type: 'document',
    fields: [
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        },
        {
            title: 'Text',
            name: 'text',
            type: 'localeString'
        },
        {
            title: 'Background Color',
            name: 'backgroundcolor',
            type: 'string'
        },
        {
            title: 'Color',
            name: 'color',
            type: 'string'
        },
        {
            title: 'Socila url',
            name: 'url',
            type: 'string'
        }
    ],
    preview: {
        select: {
            title: 'description'
        }
    }
}
