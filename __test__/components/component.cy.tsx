import React from 'react';

import TestComponent from '@/src/components/test';

describe('TestComponent', () => {
  it('should render', () => {
    cy.mount(<TestComponent />);

    cy.contains('Test component');
  });
});
