import './Card.css';
const Card = (props) => {
    //card css는 default로 설정되며, props에서 넘어온 className을 붙여 아래 컴포넌트의 css도 적용되도록 한다.
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;

}

export default Card;