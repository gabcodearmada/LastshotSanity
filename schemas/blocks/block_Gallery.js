export default {
    title: 'Block Gallery',
    name: 'Gallery',
    type: 'document',
    fields: [
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
        {
            title: 'Select Gallery Items',
            name: 'items',
            type: 'array',
            of: [
                {
                    title: 'Gallery Item',
                    type: 'reference',
                    to: [
                        {type: 'galleryItem'}
                    ]
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'description'
        }
    }
}
