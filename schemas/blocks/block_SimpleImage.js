export default {
    title: 'Block Simple Image',
    name: 'SimpleImage',
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
            title: 'Parallax effect',
            name: 'parallax',
            type: 'boolean'
        }
    ],
    initialValue: {
        parallax: false
    },
    preview: {
        select: {
            title: 'description'
        }
    }
}
