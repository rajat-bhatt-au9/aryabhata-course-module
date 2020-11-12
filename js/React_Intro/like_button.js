'use strict';

const e = React.createElement;
const Fragment = React.Fragment;
const Component = React.Component;

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
        <Fragment>
            <button onClick={() => this.setState({ liked: true })}>
                Like JSX
            </button>
            {
              e(
                'button',
                { onClick: () => this.setState({ liked: true }) },
                'Like'
              )
            }
        </Fragment>
    )
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);