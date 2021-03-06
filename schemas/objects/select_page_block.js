export default {
    name: 'selectBlock',
    type: 'object',
    fields: [
        {
            title: 'Blocks To Select',
            name: 'BlocksToSelect',
            type: 'reference',
            to: [
                {type: 'Slider'},
                {type: 'SimpleText'},
                {type: 'SimpleImage'},
                {type: 'ImageAndText'},
                {type: 'ImageWithText'},
                {type: 'Gallery'},
                {type: 'FollowUs'},
                {type: 'ContactUs'},
                {type: 'GoogleMap'}
            ]
        }
    ],
    preview: {
        select: {
            title: 'BlocksToSelect.description'
        }
    }
}