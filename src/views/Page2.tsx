import { useSelector, useDispatch } from "react-redux";

const View = () => {
    const { token } = useSelector((state: RootState) => {
        return {
            token: state.num
        }
    });

    const dispatch = useDispatch();

    return (
        <div className="page2">
            <p>这是page2组件</p>
            <p>token: {token}</p>
            <button onClick={() => dispatch({ type: 'add', val: 100})}>点击增加</button>
            <button onClick={() => dispatch({ type: 'add'})}>点击增加</button>
        </div>
    );
}

export default View;