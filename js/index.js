var TextArea = React.createClass ({
  getInitialState: function() {
    return({
      text: '---\nHeading\n=======\nSub-heading\n-----------\n### Another deeper heading\n\nParagraphs are separated by a blank line.\nLeave 2 spaces at the end of a line to do a  line break\n\nText attributes *italic*, **bold**, `monospace`, ~~strikethrough~~ .\n\nShopping list:\n* apples\n* oranges\n* pears\n\nNumbered list:\n1. apples\n2. oranges\n3. pears\n\nThe rain---not the reign---in Spain.'
    });
  },
      
  handleChange: function(event) {    
    this.setState({
      text: event.target.value
    });
  },
  
  render: function() {
    return (
      <div>
        <textarea onChange={this.handleChange}>
          {this.state.text}
        </textarea>
        <div id='previewer' dangerouslySetInnerHTML={{__html: marked(this.state.text)}} />
      </div>
    );
  }
});

ReactDOM.render(
  <TextArea />,
  document.getElementById('container')
);
