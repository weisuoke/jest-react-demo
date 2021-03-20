import { render, screen } from '@testing-library/react';
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReactDOM from 'react-dom'
import App from './App';

Enzyme.configure({ adapter: new Adapter() })

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// it("renders without crashing", () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<App />, div)
//   const container = div.getElementsByClassName('App')
//   console.log(container)
//   expect(container.length).toBe(2)
// })

// enzyme 中的 shallow 方法, 单元测试
it('renders without crashing', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('[data-test="container"]')).toExist()
})

// enzyme 中的 mounted 方法，集成测试

// 测试组件的 snapshot，页面内容比较敏感，更改后需要反复校验的场景
// it('shapshot', () => {
//   const wrapper = mount(<App />)
//   expect(wrapper).toMatchSnapshot()
// })
