import React from 'react'
import ReactDOM from 'react-dom'
import music1 from '../../../images/music1.jpg';
import music2 from '../../../images/music2.jpg';
import music3 from '../../../images/music3.jpg';
import Banner from '../Banner';
import {render, screen} from '@testing-library/react'
const fadeImages = [
    music1,music2,music3,music2
    ];
it("it renders without crashing",()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Banner></Banner>,div)
})


describe('Banner images', () => {
  test(`Banner image must have src =${fadeImages[0]}  and alt = "banner image"`, () => {
    render(<Banner/>);
    const banner = screen.getByTestId('image0');
    expect(banner).toHaveAttribute('src', fadeImages[0]);
    expect(banner).toHaveAttribute('alt', 'banner image');
  });
  test(`Banner image must have src =${fadeImages[1]}  and alt = "banner image"`, () => {
    render(<Banner/>);
    const banner = screen.getByTestId('image');
    expect(banner).toHaveAttribute('src', fadeImages[1]);
    expect(banner).toHaveAttribute('alt', 'banner image');
  });
  test(`Banner image must have src =${fadeImages[2]}  and alt = "banner image"`, () => {
    render(<Banner/>);
    const banner = screen.getByTestId('image2');
    expect(banner).toHaveAttribute('src', fadeImages[2]);
    expect(banner).toHaveAttribute('alt', 'banner image');
  });
});