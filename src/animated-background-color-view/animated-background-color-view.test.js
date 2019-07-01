import { AnimatedBackgroundColorView } from './animated-background-color-view.component';
import React from 'react';
import { View } from 'react-native';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('<AnimatedBackgroundColorView />', () => {
  describe('this.componentDidMount', () => {
    const component = shallow(<AnimatedBackgroundColorView />);
    const animate = jest.fn();

    component.instance().animate = animate;
    component.instance().componentDidMount();

    it('should call this.animate', () => {
      expect(animate).toHaveBeenCalled();
    });
  });

  describe('this.shouldComponentUpdate', () => {
    it('should return true when this.props.children or this.props.color have changed', () => {
      const nextProps = { children: <View />, color: 'test-1' };
      const component = shallow(
        <AnimatedBackgroundColorView color="test-2">{nextProps.children}</AnimatedBackgroundColorView>
      );

      const result = component.instance().shouldComponentUpdate(nextProps);
      expect(result).toEqual(true);
    });

    it('should return fakse when this.props.children or this.props.color have not changed', () => {
      const nextProps = { children: <View />, color: 'test-1' };
      const component = shallow(
        <AnimatedBackgroundColorView color={nextProps.color}>{nextProps.children}</AnimatedBackgroundColorView>
      );

      const result = component.instance().shouldComponentUpdate(nextProps);
      expect(result).toEqual(false);
    });
  });

  describe('this.componentDidUpdate', () => {
    const component = shallow(<AnimatedBackgroundColorView />);
    const animate = jest.fn();

    component.instance().animate = animate;
    component.instance().componentDidUpdate();

    it('should call this.animate', () => {
      expect(animate).toHaveBeenCalled();
    });
  });

  it('should render correctly', () => {
    const component = create(<AnimatedBackgroundColorView />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
