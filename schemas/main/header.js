export default {
    title: 'Sanity Header',
    name: 'sheader',
    type: 'document',
    fields: [
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
        {
            title: 'Background Color',
            name: 'backgroundcolor',
            type: 'string'
        }
    ],
    preview: {
        select: {
            title: 'description'
        }
    }
}
