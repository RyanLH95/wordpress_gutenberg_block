// components for importing required elements for block
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType, InspectorControls } = wp.blocks; // Import registerBlockType() from wp.blocks
const { SelectControl } = wp.components;
const { Component } = wp.element;

class mySelectPosts extends Component {
	render() {
		return ( 'Load Post Placeholder' )
	}
}
 
registerBlockType( 'cgb/block-guten-load-post', {
	// ...
  
	// The "edit" property must be a valid function.
	edit: mySelectPosts,

	// ...
} );

registerBlockType( 'cgb/post-search-block' ), {
	// Block name.
	title: __( 'Load a Post' ), // Block title.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
        __( 'my-block — CGB Block' ),
        __( 'CGB Example' ),
        __( 'create-guten-block' ),
      ],

    attributes: {
        content: {
          type: 'array',
          source: 'children',
          selector: 'p',
        },
        title: {
          type: 'string',
          selector: 'h2'
        },
        link: {
          type: 'string',
          selector: 'a'
        },
        // This will be used an ID of the post
        selectedPost: {
          type: 'number',
          default: 0,
        },
      },
  // ...
}

// function for dropdown for selecting recent posts
class mySelectPosts extends Component {
    static getInitialState( selectedPost ) {
      return {
        posts: [],
        selectedPost: selectedPost,
        post: {}, 
      };
    }
    // This will construct our component
    // 'this.props.attributes' will help us access the reuired attributes
    constructor() {
      super( ...arguments );
      // Maybe we have a previously selected post. Try to load it.
      this.state = this.constructor.getInitialState( this.props.attributes.selectedPost );
    }
  
    render() {
      let options = [ { value: 0, label: __( 'Select a Post' ) } ];
      return [
        !! this.props.isSelected && ( <InspectorControls key='inspector'>
          <SelectControl 
          // Selected value.
          value={ this.props.attributes.selectedPost } 
          label={ __( 'Select a Post' ) } 
          options={ options } />
        </InspectorControls>
        ), 
       'Load Post Placeholder'
       ]
    }
  }
