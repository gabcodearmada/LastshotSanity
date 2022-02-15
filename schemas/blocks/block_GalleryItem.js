export default {
    title: 'Gallery Item',
    name: 'galleryItem',
    type: 'document',
    fields: [
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
        {
            title: '1st Image (Required, If there is no 2nd image, the 1st will cover the entire width)',
            name: 'ImageNo1',
            type: 'image'
        },
        {
            title: '1st Image orientation (true -> portrait, false -> landscape. Valid only if there are 2 images)',
            name: 'isPortraitNo1',
            type: 'boolean'
        },
        {
            title: '2nd Image',
            name: 'ImageNo2',
            type: 'image'
        },
        {
            title: '2nd Image orientation (true -> portrait, false -> landscape. Valid only if there are 2 images)',
            name: 'isPortraitNo2',
            type: 'boolean'
        }
    ]
}
