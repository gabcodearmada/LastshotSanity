// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import localeString from './objects/localeString';
import selectBlock from './objects/select_page_block';
import selectMenuItem from './objects/select_menu_item';

import Slide from './blocks/block_Slide';
import Slider from './blocks/block_Slider';
import SimpleText from './blocks/block_SimpleText';
import SimpleImage from './blocks/block_SimpleImage';
import ImageAndText from './blocks/block_ImageAndText';
import ImageWithText from './blocks/block_ImageWithText';
import FollowUs from './blocks/block_FollowUs';

import Menu from './main/menu';
import menuItem from './main/menuItem';
import page_page from './main/page_page';
import version from './main/version';
import sheader from './main/header';
import sbody from './main/body';
import sfooter from './main/footer';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    // post,
    // author,
    // category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    // blockContent,

    localeString,
    selectBlock,
    selectMenuItem,

    Menu,
    menuItem,
    page_page,
    version,
    sheader,
    sbody,
    sfooter,

    Slide,
    Slider,
    SimpleText,
    SimpleImage,
    ImageAndText,
    ImageWithText,
    FollowUs
  ])
})
