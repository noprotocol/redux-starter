import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import SliderMonitor from 'redux-slider-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
  <DockMonitor toggleVisibilityKey='H'
               changeMonitorKey='C'
               changePositionKey='Q'>
    <LogMonitor />
    <SliderMonitor />
  </DockMonitor>
);

