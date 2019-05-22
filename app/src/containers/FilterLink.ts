import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

interface LinkProps {
  active: boolean,
  children?: string,
  onClickFunc: Function
}

// 指定如何把当前 Redux store state 映射到展示组件的 props 中
const mapStateToProps = (state:any, ownProps:any) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}
// 分发 action, 接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法
const mapDispatchToProps = (dispatch:any, ownProps:any) => {
  return {
    onClickFunc: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link as React.SFC<LinkProps>)
