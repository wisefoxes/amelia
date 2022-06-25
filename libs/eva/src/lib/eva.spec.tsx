import { render } from '@testing-library/react';

import Eva from './eva';

describe('Eva', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Eva />);
    expect(baseElement).toBeTruthy();
  });
});
