/**
   组件的生命周期
 **/
let Counter = React.createClass({
  //获取默认属性
  getDefaultProps(){
    console.log('1. getDefaultProps 获取默认属性');
    return {name:'计数器'};
  },
  //获取初始状态
  getInitialState(){
    console.log('2. getInitialState 获取初始状态');
    return {number:0};
  },
  componentWillMount(){
    console.log('3. componentWillMount 组件将要挂载');
    //通过jquery ajax获取number属性设置状态

  },
  handleClick(){
    this.setState({
      number:this.state.number+1
    });
  },
  render(){
    console.log('4. render 把组件实例挂载到页面中去');
    return (
      <div>
        <p>{this.props.name}:{this.state.number}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  },
  componentDidMount(){
    console.log('5. componentDidMount 组件挂载完毕');
  },
  //组件是否需要更新
  shouldComponentUpdate(newProps,newState){
    console.log('6.shouldComponentUpdate 组件是否要更新');
    if(newState.number<=5){
      return false;
    }else{
      return true;
    }
  },
  componentWillUpdate(){
    console.log('7.componentWillUpdate 组件将要更新');
  },
  componentDidUpdate(){
    console.log('8.componentDidUpdate 组件更新完成');
  }
});

render(<Counter/>,app);
