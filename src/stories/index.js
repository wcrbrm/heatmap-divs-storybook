import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import HeatMapDivs from './../HeatMapDivs';

const hosts = [
  { host: "ny-devl3", load: "0.0%", color: "#e2ec4f" },
  { host: "ny-devl2", load: "0.0%", color: "#e0e0e0" },
  { host: "ny-devl4", load: "0.0%", color: "#e2fcff" },
  { host: "ny-devl1", load: "0.0%", color: "#a2ec4f" },
  { host: "ny-devl5", load: "0.0%", color: "#e20c4f" },
  { host: "ny-devl6", load: "0.0%", color: "#a2ec00" },
  { host: "ny-devl7", load: "0.0%", color: "#e21cff" }
];

storiesOf('Heatmap Div', module)
  .add('simple', () => (
    <div style={{ margin: '0px auto', width: 320, border: '2px #888 solid' }}>
      <HeatMapDivs hosts={hosts} size={320} />
    </div>
  ))
;