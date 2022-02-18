export default {
    title: 'Block Contact Us',
    name: 'ContactUs',
    type: 'document',
    fields: [
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
        {
            title: 'Text (declaration of consent)',
            name: 'text',
            type: 'localeString'
        },
        {
            title: 'Background Color',
            name: 'backgroundcolor',
            type: 'string'
        },
        {
            title: 'Text Color',
            name: 'color',
            type: 'string'
        }
    ],
    preview: {
        select: {
            title: 'description'
        }
    }
}
