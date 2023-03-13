class HeaaderComponent extends React.Component {
    render() {
        console.log(this.props)
        const p = React.createElement('p', {}, 'Super paragraph');
        const h2 = React.createElement('h2', {title: 'Hi'}, `Hello ${this.props}`);
        const article = React.createElement('article', {}, h2, p);
        return article;
    }
}

const component = React.createElement(HeaaderComponent, {name: "React Boy"}, 'Text');
const component2 = React.createElement(HeaaderComponent, {name: 'Java Boy'});
const parentElement = React.createElement('section', {}, component, component2);

const root = document.querySelector('#root');
ReactDOM.render(parentElement, root);