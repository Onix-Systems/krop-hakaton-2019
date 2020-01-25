import React from 'react';
import { Dimmer, Loader as SemanticUILoader } from 'semantic-ui-react';

const Loader = () => (
  <Dimmer active inverted>
    <SemanticUILoader>Завантаження даних...</SemanticUILoader>
  </Dimmer>
);

export default Loader;
