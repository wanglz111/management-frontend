import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";



const View = () => {

    const dispatch = useDispatch();
    const selector = useSelector((state: {ArrStatus: {arr: number[]}}) => {
        return state.ArrStatus.arr
    });

    return (
        <div className="page3">
            <p>这是page302组件</p>
            <p>token: {selector}</p>
            <Button onClick={() => dispatch({
                type: 'addArr',
                val: selector.length + 2
            })}>addArr</Button>
            <Button onClick={() => dispatch({
                type: 'subArr',
                val: selector.length - 1
            })}>subArr</Button>
        </div>
    );
}

export default View;