import React from 'react';
import { storiesOf } from '@storybook/react';
import providerDecorator from '../../../../.storybook/providerDecorator';
import Thumbnail from './index';
import img from '../../../assets/img/welcome.svg';

storiesOf('Common Components/Thumbnail', module)
  .addDecorator(providerDecorator)
  .add('minimum props', () => {
    const story = (
      <Thumbnail
        image={img}
      />
    );
    return story;
  })
  .add('img + label', () => {
    const story = (
      <Thumbnail
        image={img}
        label="Trop sympa !"
      />
    );
    return story;
  })
  .add('img + element', () => {
    const story = (
      <Thumbnail
        image={img}
      >
        <div className="w-100 bg-red">
          <p className="black">Je suis un props element</p>
        </div>
      </Thumbnail>
    );
    return story;
  });
