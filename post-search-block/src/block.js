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
  save: function( props ) {
    return (
      <div className={ props.className }>
        <div className="post">
          <a href={ props.attributes.link }><h2 dangerouslySetInnerHTML={ { __html: props.attributes.title } }></h2></a>
          <p dangerouslySetInnerHTML={ { __html: props.attributes.content } }></p>
        </div>
      </div>
  )}
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

  class mySelectPosts extends Component {
  // ...
  
  render() {
    let options = [ { value: 0, label: __( 'Select a Post' ) } ];
    let output  = __( 'Loading Posts' );
    this.props.className += ' loading';
    if( this.state.posts.length > 0 ) {
      // ...
    } else {
      output = __( 'No posts found. Please create some first.' );
    }
    // Checking if we have anything in the object
    if( this.state.post.hasOwnProperty('title') ) {
      output = <div className="post">
        <a href={ this.state.post.link }><h2 dangerouslySetInnerHTML={ { __html: this.state.post.title.rendered } }></h2></a>
        <p dangerouslySetInnerHTML={ { __html: this.state.post.excerpt.rendered } }></p>
        </div>;
      this.props.className += ' has-post';
    } else {
      this.props.className += ' no-post';
    }
    return [
      !! this.props.isSelected && ( <InspectorControls key='inspector'>
        <SelectControl onChange={this.onChangeSelectPost} value={ this.props.attributes.selectedPost } label={ __( 'Select a Post' ) } options={ options } />
      </InspectorControls>
      ), 
      <div className={this.props.className}>{output}</div>
      ]
    }
  

    // This will call the loading posts method
    constructor() {
        super( ...arguments );
        this.state = this.constructor.getInitialState( this.props.attributes.selectedPost );
        // Bind so we can use 'this' inside the method.
        this.getOptions = this.getOptions.bind(this);
        // Load posts.
        this.getOptions();
        this.onChangeSelectPost = this.onChangeSelectPost.bind(this);
      }

      getOptions() {
        return ( new wp.api.collections.Posts() ).fetch().then( ( posts ) => {
          if( posts && 0 !== this.state.selectedPost ) {
            // If we have a selected Post, find that post and add it.
            const post = posts.find( ( item ) => { return item.id == this.state.selectedPost } );
            // This is the same as { post: post, posts: posts }
            this.setState( { post, posts } );
          } else {
            this.setState({ posts });
          }
        });
      } 
  }
