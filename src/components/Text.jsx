import './Text.css';

const Text = ({ text, background, alignment, type }) => {
    return (
        <div className={'TextDisplay'}>
            <div className={`TextContainer ${background} ${alignment}`} >
                <h1 className={`TextStyle ${type}`}>
                    {text}
                </h1>
            </div>
        </div>
    );
};

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }
  

export default Text;
