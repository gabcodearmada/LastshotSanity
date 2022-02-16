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
            title: 'Gallery Item Types (Caution! Only one type must be selected)',
            name: 'itemtype',
            type: 'galleryitemType'
        },
        {
            title: '1st Image (Required, If there is no 2nd image, the 1st will cover the entire width)',
            name: 'ImageNo1',
            type: 'image'
        },
        {
            title: '2nd Image',
            name: 'ImageNo2',
            type: 'image',
            hidden: ({parent}) => !parent.itemtype.T11 && !parent.itemtype.T00 && !parent.itemtype.T100 && !parent.itemtype.T001
        },
        {
            title: '3nd Image',
            name: 'ImageNo3',
            type: 'image',
            hidden: ({parent}) => !parent.itemtype.T100 && !parent.itemtype.T001
        }
    ]
}
